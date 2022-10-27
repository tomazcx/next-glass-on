import { ToastContainer } from "react-toastify"
import { Input } from "../../../../components/Admin/Form/Input"
import { Select } from "../../../../components/Admin/Form/Select"
import { TitleForm } from "../../../../components/Admin/Form/TitleForm"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"

const RegisterProducts = () => {
    return (
        <LayoutDashboard>
            <section className="flex flex-col col-span-4 gap-6 w-full p-8">
                <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
                <h1 className="text-xl">Registrar produto</h1>
                <hr />
                <form className="grid grid-cols-12 gap-8" encType="multipart/form-data">
                    <div className='col-span-5'>
                        <TitleForm text='Informações do produto' />
                    </div>
                    <div className='col-span-7 grid grid-cols-12 gap-6'>
                        <Input  text='Título' id='name' type='text' />
                        <Input  text='Preço' id='price' type='number' />
                        <Input  text='Parcelas' id='parcels' type='number' />

                    </div>
                    <hr className='col-span-12' />

                    <div className='col-span-5'>
                        <TitleForm text='Opções de armação' />
                    </div>
                    <div className='col-span-7 grid grid-cols-12 gap-6'>
                        <Select text='Cor da armação' id='color' />
                        <Select text='Formato da armação' id='format' />
                        <Select text='Material da armação' id='material' />
                    </div>

                    <hr className='col-span-12' />

                    <div className='col-span-5'>
                        <TitleForm text='Informações de exibição' />
                    </div>
                    <div className='col-span-7 grid grid-cols-12 gap-6'>
                        <div className="flex-col flex gap-3 col-span-12">
                            <label htmlFor="img">Imagem:</label>
                            <input type="file" name="img" id="img" className="rounded w-10/12 max-w-[500px]" />
                        </div>
                        <div className="flex gap-3 items-center col-span-6">
                            <label htmlFor="type">Possui lentes solares?:</label>
                            <input type="checkbox" name="type" />
                        </div>
                        <div className="flex gap-3 items-center col-span-6">
                            <label htmlFor="show">Mostrar na página principal:</label>
                            <input type="checkbox" name="show" />
                        </div>
                    </div>

                    <hr className='col-span-12' />

                    <div className='col-span-5'>
                        <TitleForm text='Descrição' />
                    </div>
                    <div className='col-span-7 grid grid-cols-12'>
                        <div className="flex flex-col gap-3 col-span-12">
                            <label htmlFor="desc">Detalhes:</label>
                            <textarea name="desc" id="desc" cols={40} rows={10} className="bg-gray-200 rounded w-10/12 max-w-[500px] p-2"></textarea>
                        </div>
                    </div>

                    <hr className='col-span-12' />
                    <button type="submit" className="rounded-md bg-gray-800 text-white hover:bg-black transition-colors col-span-3 col-start-9 py-2">Cadastrar</button>
                </form>
            </section>
        </LayoutDashboard>

    )
}

export default RegisterProducts