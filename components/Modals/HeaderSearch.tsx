import { MagnifyingGlass, X } from "phosphor-react"

interface ModalInterface{
    close (value:boolean):void;
}

export const HeaderSearch = ({close} : ModalInterface) => {
    return (
        <div className='bg-white px-4 md:px-28 py-4 flex items-center justify-between'>
            <div className="flex gap-4 items-center">
                <MagnifyingGlass size={24} color="#000" className='cursor-pointer' />
                <input placeholder='Pesquisar' type="text" className="text-black bg-transparent border-none outline-none" />
            </div>
            <X size={24} color="#0d0d0d" onClick={() => close(false)} className='cursor-pointer' />
        </div>
    )
}