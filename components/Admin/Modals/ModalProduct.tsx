import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import { X } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { UPDATE_PRODUCT } from "../../../graphql/mutations/update/updateProduct";
import { UPDATE_PRODUCT_IMAGE } from "../../../graphql/mutations/update/updateProductWithImage";
import { COLORS_QUERY } from "../../../graphql/queries/categories/getColors";
import { FORMATS_QUERY } from "../../../graphql/queries/categories/getFormats";
import { MATERIALS_QUERY } from "../../../graphql/queries/categories/getMaterials";
import { PRODUCT_QUERY } from "../../../graphql/queries/products/getProduct";
import { PRODUCTS_QUERY } from "../../../graphql/queries/products/getProducts";
import { CheckboxEdit } from "../Form/Edit form/CheckboxEdit";
import { ImageEdit } from "../Form/Edit form/ImageEdit";
import { InputEdit } from "../Form/Edit form/InputEdit";
import { SelectEdit } from "../Form/Edit form/SelectEdit";
import { TextareaEdit } from "../Form/Edit form/TextareaEdit";

interface ModalInterface{
    id:string;
    modalFun (value:boolean):void
    deleteFun(value:boolean):void
}

export const ModalProduct = ({id, modalFun, deleteFun} : ModalInterface) => {

    const {register, handleSubmit} = useForm()
    const [editMode, setMode] = useState(false)

    const {data} = useQuery(PRODUCT_QUERY, {
        variables: {
            id: id
        }
    })

    const colors = useQuery(COLORS_QUERY)
    const formats = useQuery(FORMATS_QUERY)
    const materials = useQuery(MATERIALS_QUERY)

    const [updateProductWithIamge] = useMutation(UPDATE_PRODUCT_IMAGE, {
        onCompleted: () => modalFun(false),
        refetchQueries: [{query: PRODUCTS_QUERY}]
    })

    const [updateProduct] = useMutation(UPDATE_PRODUCT, {
        onCompleted: () => modalFun(false),
        refetchQueries: [{query: PRODUCTS_QUERY}]
    })

    const image = data?.product.image

    const handleUpdate = async(data : any, oldImageId : string) => {

        let response:any = {}

        if(data.img[0] !== undefined){
            const form = new FormData()

            form.append("fileUpload", data.img[0])
    
            response = await axios.post(`${process.env.NEXT_PUBLIC_URI_UPLOAD}`, form, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
                }
            })

            console.log(response.data.id)

            updateProductWithIamge({
                variables: {
                    id: id,
                    name: data.name,
                    price: Number(data.price),
                    parcels: Number(data.parcels),
                    description: data.description,
                    format: data.format,
                    color: data.color,
                    material: data.material,
                    sunLens: data.sunLens,
                    idImg: response.data.id,
                    idImageToDelete: oldImageId
                }
            })
        }else{
            updateProduct({
                variables: {
                    id: id,
                    name: data.name,
                    price: Number(data.price),
                    parcels: Number(data.parcels),
                    description: data.description,
                    format: data.format,
                    color: data.color,
                    material: data.material,
                    sunLens: data.sunLens
                }
            })
        }
        

        
    }

    return (
        <form onSubmit={handleSubmit((data) => handleUpdate(data, image.id))} className="bg-gray-100 text-sm flex flex-col w-11/12 rounded max-w-[800px] md:p-6 py-4 px-4 md:grid md:grid-cols-12 gap-6 absolute top-[10px] md:top-[50px]  transform -translate-x-1/2 left-1/2">
            <div className="flex items-center justify-between col-span-12">
                <div className='flex gap-2 items-center'>
                    <span className='md:text-lg'>Detalhes do produto</span>
                    <span className='md:text-lg'>{editMode ? "- Modo de edição" : ''}</span>
                </div>
                <X size={24} className='cursor-pointer' onClick={() => modalFun(false)} />
            </div>
            <div className="col-span-12 md:col-span-6 gap-6 flex flex-col">
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Informações básicas</span>
                    <hr className='border-gray-400' />
                    <InputEdit register={register} editMode={editMode} label='Título:' value={data?.product.name} id="name" />
                    <InputEdit register={register} editMode={editMode} label='Valor:' value={data?.product.price} id="price" />
                    <InputEdit register={register} editMode={editMode} label='Parcelas:' value={data?.product.parcels} id="parcels" />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Informações da armação</span>
                    <hr className='border-gray-400' />
                    <SelectEdit register={register} id="color" title="Cor" editMode={editMode} initialValue={data?.product.glassColor} array={colors?.data?.colors} />
                    <SelectEdit register={register} id="material" title="Material" editMode={editMode} initialValue={data?.product.material} array={materials?.data?.materials} />
                    <SelectEdit register={register} id="format" title="Formato" editMode={editMode} initialValue={ data?.product.format} array={formats?.data?.formats} />

                </div>
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Informações de exibição</span>
                    <hr className='border-gray-400' />
                    <CheckboxEdit register={register} label="Possui lentes solares:" value={data?.product.sunLens} id="sunLens" editMode={editMode} />
                    <div className='flex flex-col gap-2'>
                        <span className="font-semibold">Descrição:</span>
                        <TextareaEdit register={register} editMode={editMode} id="description" value={data?.product.description} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold">Imagem:</span>
                        <ImageEdit url={data?.product.image?.url} editMode={editMode} register={register} />
                    </div>
                </div>
            </div>


            {editMode ?
                <div className="justify-between flex flex-col md:flex-row items-center gap-4 col-span-12">
                    <button onClick={(e: FormEvent) => { e.preventDefault(); setMode(false) }} className='w-full bg-red-400 rounded-lg hover:bg-red-500 transition-colors cursor-pointer px-8 py-1' >Cancelar</button>
                    <button type="submit" className='w-full bg-green-400 rounded-lg hover:bg-green-500 transition-colors cursor-pointer px-8 py-1' >Editar</button>
                </div>
                :
                <div className="justify-between flex flex-col md:flex-row items-center gap-4 col-span-12">
                    <button onClick={(e: FormEvent) => { e.preventDefault(); setMode(true) }} className='w-full bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer px-8 py-1' >Editar</button>
                    <button onClick={(e: FormEvent) => { e.preventDefault(); deleteFun(true) }} className='w-full bg-red-400 rounded-lg hover:bg-red-500 transition-colors cursor-pointer px-8 py-1' >Excluir</button>
                </div>
            }

        </form>
    )
}