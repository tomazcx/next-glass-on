import { useState, FormEvent } from "react"
import { ToastContainer, toast } from "react-toastify"
import { Input } from "../../../../components/Admin/Form/Input"
import { TitleForm } from "../../../../components/Admin/Form/TitleForm"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from "@apollo/client"
import { REGISTER_MATERIAL } from "../../../../graphql/mutations/create/registerMaterial"
import { MATERIALS_QUERY } from "../../../../graphql/queries/categories/getMaterials"

const RegisterMaterials = () => {
    const [text, setText] = useState("")
    const [registerFormat] = useMutation(REGISTER_MATERIAL, {
        onCompleted: () => {
            toast("Material cadastrado com sucesso!")
        },
        refetchQueries: [{query: MATERIALS_QUERY}]
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        registerFormat({
            variables: {
                material: text
            }
        })
    }

    const handleChange = (e: any) => {
        setText(e.target.value)
    }

    return (
        <LayoutDashboard>
            <main className="flex flex-col col-span-4 gap-6 w-full md:p-8 px-4 py-2">
                <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
                <h1 className='text-lg'>Registrar Material</h1>
                <hr />

                <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-12 gap-8' >
                    <div className='col-span-5'>
                        <TitleForm text='Material' />
                    </div>
                    <div className='col-span-7'>
                        <Input onChange={handleChange} text='Nome' type='text' id='name' />
                    </div>
                    <hr className='col-span-12' />

                    <button type='submit' className="rounded-md bg-gray-800 text-white hover:bg-black transition-colors col-span-12 md:col-span-3 md:col-start-9 py-2">Cadastrar</button>
                </form>
            </main>
        </LayoutDashboard>
    )
}

export default RegisterMaterials