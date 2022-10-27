import { useState } from "react"
import { ToastContainer } from "react-toastify"
import { Input } from "../../../../components/Admin/Form/Input"
import { TitleForm } from "../../../../components/Admin/Form/TitleForm"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"
import 'react-toastify/dist/ReactToastify.css';

const RegisterFormats = () => {
    const [text, setText] = useState("")

    const handleChange = (e: any) => {
        setText(e.target.value)
    }

    return (
        <LayoutDashboard>
            <main className="flex flex-col col-span-4 gap-6 w-full p-8">
                <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
                <h1 className='text-lg'>Registrar Formato</h1>
                <hr />

                <form className='grid grid-cols-12 gap-8' >
                    <div className='col-span-5'>
                        <TitleForm text='Formato' />
                    </div>
                    <div className='col-span-7'>
                        <Input onChange={handleChange} text='Nome' type='text' id='name' />
                    </div>
                    <hr className='col-span-12' />

                    <button type='submit' className="rounded-md bg-gray-800 text-white hover:bg-black transition-colors col-span-3 col-start-9 py-2">Cadastrar</button>
                </form>
            </main>
        </LayoutDashboard>
    )
}

export default RegisterFormats