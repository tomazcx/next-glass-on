import { MagnifyingGlass } from "phosphor-react"

interface InputInterface{
    onChange?(e:any):void
}

export const InputSearch = ({onChange} : InputInterface) => {
    return (
        <div className="flex w-full md:w-auto">
            <input onChange={(e) => onChange?.(e.target.value)} type="text" className="bg-gray-200 rounded-l-lg px-2 outline-none w-full" placeholder="Pesquisar" />
            <div className="flex items-center justify-center bg-gray-200 py-1.5 px-2 rounded-r-lg cursor-pointer">
                <MagnifyingGlass size={20} color="#000" />
            </div>
        </div>
    )
}