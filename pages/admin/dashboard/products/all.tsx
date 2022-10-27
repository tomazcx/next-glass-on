import { useState } from "react"
import { InputSearch } from "../../../../components/Admin/Form/InputSearch"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"

export const AllProducts = () => {

    const [text, setText] = useState("")

    return (
        <LayoutDashboard>
            <main className="p-8 flex flex-col gap-6 col-span-4 w-full">

                <div className='flex justify-between items-center'>
                    <h1 className='text-xl'>Produtos cadastrados</h1>
                    <div className='flex gap-4 items-center '>
                        <InputSearch onChange={setText} />
                    </div>
                </div>
                <hr></hr>

                <div className='grid grid-cols-12'>
                    <span className='col-span-2 text-center'>Título</span>
                    <span className='col-span-2 text-center'>Tipo</span>
                    <span className='col-span-2 text-center'>Cor</span>
                    <span className='col-span-2 text-center'>Material</span>
                    <span className='col-span-2 text-center'>Formato</span>
                </div>
                <div className='flex flex-col gap-2'>


                </div>
            </main>
        </LayoutDashboard>
    )
}

export default AllProducts