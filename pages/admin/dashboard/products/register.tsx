import { useMutation, useQuery } from "@apollo/client"
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify"
import { Input } from "../../../../components/Admin/Form/Input"
import { Select } from "../../../../components/Admin/Form/Select"
import { TitleForm } from "../../../../components/Admin/Form/TitleForm"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"
import { CREATE_PRODUCT } from "../../../../graphql/mutations/create/registerProduct"
import { COLORS_QUERY } from "../../../../graphql/queries/categories/getColors"
import { FORMATS_QUERY } from "../../../../graphql/queries/categories/getFormats"
import { MATERIALS_QUERY } from "../../../../graphql/queries/categories/getMaterials"
import 'react-toastify/dist/ReactToastify.css';
import { PRODUCTS_QUERY } from "../../../../graphql/queries/products/getProducts"
import axios from "axios"


const RegisterProducts = () => {
    const { register, handleSubmit } = useForm()

    const materials = useQuery(MATERIALS_QUERY)
    const formats = useQuery(FORMATS_QUERY)
    const colors = useQuery(COLORS_QUERY)

    const [registerProduct] = useMutation(CREATE_PRODUCT, {
        onCompleted: () => {
            toast("Produto cadastrado com sucesso!")
        },
        refetchQueries: [{ query: PRODUCTS_QUERY }]
    })

    const handleRegister = async(data: any) => {
        const form = new FormData()

        form.append("fileUpload", data.img[0])

        const response = await axios.post(`${process.env.NEXT_PUBLIC_URI_UPLOAD}`, form, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        })

        const idImg = response.data.id

        registerProduct({
            variables: {
                name: data.name,
                price: Number(data.price),
                description: data.desc,
                sunLens: data.type,
                parcels: Number(data.parcels),
                format: data.format,
                color: data.color,
                material: data.material,
                idImg: idImg
            }
        })
    }

    return (
        <LayoutDashboard>
            <section className="flex flex-col col-span-4 gap-6 w-full md:p-8 px-4 py-2">
                <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
                <h1 className="text-lg md:text-xl">Registrar produto</h1>
                <hr />
                <form onSubmit={handleSubmit((data) => handleRegister(data))} className="grid grid-cols-12 gap-8" encType="multipart/form-data">
                    <div className='col-span-12 md:col-span-5'>
                        <TitleForm text='Informa????es do produto' />
                    </div>
                    <div className='col-span-12 md:col-span-7 grid grid-cols-12 gap-6'>
                        <Input register={register} text='T??tulo' id='name' type='text' />
                        <Input register={register} text='Pre??o' id='price' type='number' />
                        <Input register={register} text='Parcelas' id='parcels' type='number' />

                    </div>
                    <hr className='col-span-12' />

                    <div className='col-span-12 md:col-span-5'>
                        <TitleForm text='Op????es de arma????o' />
                    </div>
                    <div className='col-span-12 md:col-span-7 grid grid-cols-12 gap-6'>
                        <Select register={register} text='Cor da arma????o' id='color' options={colors?.data?.colors} />
                        <Select register={register} text='Formato da arma????o' id='format' options={formats?.data?.formats} />
                        <Select register={register} text='Material da arma????o' id='material' options={materials?.data?.materials} />
                    </div>

                    <hr className='col-span-12' />

                    <div className='col-span-12 md:col-span-5'>
                        <TitleForm text='Informa????es de exibi????o' />
                    </div>
                    <div className='col-span-12 md:col-span-7 grid grid-cols-12 gap-6'>
                        <div className="flex-col flex gap-3 col-span-12">
                            <label htmlFor="img">Imagem:</label>
                            <input required {...register('img')} type="file" name="img" id="img" className="rounded w-10/12 max-w-[500px]" />
                        </div>
                        <div className="flex gap-3 items-center col-span-12 md:col-span-6">
                            <label htmlFor="type">Possui lentes solares?:</label>
                            <input {...register('type')} type="checkbox" name="type" />
                        </div>

                    </div>


                    <hr className='col-span-12' />

                    <div className='col-span-12 md:col-span-5'>
                        <TitleForm text='Descri????o' />
                    </div>
                    <div className='col-span-12 md:col-span-7 grid grid-cols-12'>
                        <div className="flex flex-col gap-3 col-span-12 pr-1">
                            <label htmlFor="desc">Detalhes:</label>
                            <textarea {...register('desc')} name="desc" id="desc" cols={40} rows={10} className="bg-gray-200 rounded w-full p-2"></textarea>
                        </div>
                    </div>

                    <hr className='col-span-12' />
                    <button type="submit" className="rounded-md bg-gray-800 text-white hover:bg-black transition-colors col-span-12 md:col-span-3 md:col-start-9 py-2">Cadastrar</button>
                </form>
            </section>
        </LayoutDashboard >

    )
}

export default RegisterProducts