import { X } from "phosphor-react"
import Link from 'next/link'
import { AsideItem } from "../ClientPage/AsideItem"


export const SidebarClient = ({handleSidebar, setModal} : {handleSidebar(value:boolean):void; setModal(value:boolean):void} ) => {
    return (
        <>
            <X size={32} color="#000000" onClick={() => handleSidebar(false)} className='cursor-pointer' />
            <ul className='flex flex-col gap-6 font-bold'>
                        <AsideItem text='Dados do perfil' />
                        <AsideItem text='Dados das compras' />
                        <AsideItem text='Configurações da conta' />
                        <AsideItem onClick={setModal} text='Deslogar' />
            </ul>
        </>
    )
}