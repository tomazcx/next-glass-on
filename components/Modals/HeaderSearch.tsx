import { useRouter } from "next/router";
import { MagnifyingGlass, X } from "phosphor-react"
import { FormEvent, useState } from "react";

interface ModalInterface{
    close (value:boolean):void;
}

export const HeaderSearch = ({close} : ModalInterface) => {

    const [text, setText] = useState("")
    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        router.push({pathname: "/products", query: {search: text}})
    }

    return (
        <div className='bg-white shadow-2xl px-4 md:px-28 py-4 flex items-center justify-between'>
            <form onSubmit={(e) => handleSubmit(e)} className="flex gap-4 items-center">
                <MagnifyingGlass size={24} color="#000" className='cursor-pointer' />
                <input onChange={(e) => setText(e.target.value)} placeholder='Pesquisar' type="text" className="text-black bg-transparent border-none outline-none" />
            </form>
            <X size={24} color="#0d0d0d" onClick={() => close(false)} className='cursor-pointer' />
        </div>
    )
}