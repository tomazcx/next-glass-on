import { UserCircle, X } from "phosphor-react"
import Link from 'next/link'
import { AsideItem } from "../ClientPage/AsideItem"

interface SidebarInterface{
    handleSidebar(value: boolean): void;
    setModal(value: boolean): void;
    name: string;
    showSells: boolean;
    setDisplay(value:boolean):void
}

export const SidebarClient = ({ handleSidebar, setModal, name, showSells, setDisplay }: SidebarInterface) => {
    return (
        <>
            <X size={32} color="#000000" onClick={() => handleSidebar(false)} className='cursor-pointer ml-4' />
            <div className="flex flex-col items-center">
                <UserCircle size={84} color='#242424' />
                <span className='text-lg'>{name}</span>
            </div>
            <ul className='flex flex-col gap-6 font-bold'>
                <AsideItem showSells={showSells} setDisplay={setDisplay} isLogOff={false} text='Dados do perfil' />
                <AsideItem showSells={showSells} setDisplay={setDisplay} isLogOff={false} text='Registro de compras' />
                <AsideItem isLogOff={true} onClick={setModal} text='Deslogar' />
            </ul>
        </>
    )
}