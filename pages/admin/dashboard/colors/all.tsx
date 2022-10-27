import { useState } from "react"
import { InputSearch } from "../../../../components/Admin/Form/InputSearch"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"

const AllColors = () => {

    const [text, setText] = useState('')

    return (
        <LayoutDashboard>
            <section className='flex flex-col p-8 gap-6 col-span-4 w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl'>Cores de armação cadastrados</h1>

                    <InputSearch onChange={setText} />
                </div>
                <hr />
                <div className='grid grid-cols-12'>
                    <span className="col-span-2 text-center">Id</span>
                    <span className="col-span-2 text-center">Nome</span>
                </div>
                <div className="flex flex-col gap-2">

                </div>
            </section>
        </LayoutDashboard>
    )
}

export default AllColors