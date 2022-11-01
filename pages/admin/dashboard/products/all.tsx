import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { InputSearch } from "../../../../components/Admin/Form/InputSearch"
import { ItemProduct } from "../../../../components/Admin/Items/Product"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"
import { PRODUCTS_QUERY } from "../../../../graphql/queries/products/getProducts"
import { DELETE_PRODUCT } from "../../../../graphql/mutations/delete/deleteProduct"
import Modal from 'react-modal'
import { ModalProduct } from "../../../../components/Admin/Modals/ModalProduct"

interface ProductInterface{
    id:string;
    name:string;
    sunLens:boolean;
    format: {
        name:string;
    };
    material: {
        name:string;
    };
    glassColor: {
        name:string
    }
}

export const AllProducts = () => {

    const [text, setText] = useState("")
    const [id, setId] = useState("")
    const [modal, setModal] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)

    const {data}= useQuery(PRODUCTS_QUERY)
    const [deleteMutation] = useMutation(DELETE_PRODUCT, {
        onCompleted: () => {setModalDelete(false); setModal(false)},
        refetchQueries: [{query: PRODUCTS_QUERY}]
    })

    const filteredArray = text.length > 0 ? data.products.filter((product : ProductInterface) => product.name.toLowerCase().includes(text.toLowerCase())) : []

    return (
        <LayoutDashboard>
             
            <Modal
                isOpen={modal}
                ariaHideApp={false}
                contentLabel="Product Modal"
                className='bg-none'
            >
                <ModalProduct id={id} modalFun={setModal} deleteFun={setModalDelete} />
            </Modal>
            <Modal
                isOpen={modalDelete}
                ariaHideApp={false}
                className="bg-gray-100 border-none w-10/12 max-w-[400px] absolute top-[150px] lg:top-[250px] left-1/2 transform p-4 -translate-x-1/2 flex flex-col gap-4"
                contentLabel="Delete Modal"

            >
                <span className="text-xl">Deseja mesmo deletar o produto?</span>
                <hr />
                <span>Essa ação não pode ser desfeita.</span>
                <div className="flex gap-4">
                    <button onClick={() => setModalDelete(false)} className="uppercase px-2 text-center bg-blue-300 hover:bg-blue-400 transition-colors rounded">cancelar</button>
                    <button onClick={() =>  deleteMutation({ variables: { id: id } })} className="uppercase px-4 hover:bg-red-400 transition-colors bg-red-300 rounded">Deletar</button>
                </div>
            </Modal>
            <main className="p-8 flex flex-col gap-6 col-span-4 w-full">
                <div className='flex flex-col  gap-4  justify-between md:items-center md:gap-0 md:flex-row'>
                    <h1 className='text-lg md:text-xl'>Produtos cadastrados</h1>
                    <InputSearch onChange={setText} />
                    
                </div>
                <hr></hr>

                <div className='flex gap-4 text-sm md:text-normal justify-between px-4 md:px-0 md:grid grid-cols-12'>
                    <span className='md:col-span-2 text-center'>Título</span>
                    <span className='md:col-span-2 text-center'>Tipo</span>
                    <span className='col-span-2 text-center hidden md:block'>Cor</span>
                    <span className='col-span-2 text-center hidden md:block'>Material</span>
                    <span className='col-span-2 text-center hidden md:block'>Formato</span>
                </div>
                <div className='flex flex-col gap-2'>
                    {text.length > 0 ?
                    filteredArray.map((product : ProductInterface) => <ItemProduct key={product.id} item={product} productModal={setModal} setId={setId} />) : 
                    data?.products.map((product : ProductInterface) => <ItemProduct key={product.id} item={product} productModal={setModal} setId={setId} />)
                    }
                </div>
            </main>
        </LayoutDashboard>
    )
}

export default AllProducts