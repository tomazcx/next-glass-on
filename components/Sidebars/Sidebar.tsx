import { X } from 'phosphor-react'
import Link from 'next/link'

interface SidebarInterface {
    handleSidebar(value: boolean): void;
}

export const Sidebar = ({ handleSidebar }: SidebarInterface) => {
    return (
        <>
            <X size={32} color="#000000" onClick={() => handleSidebar(false)} />
            <nav className='flex flex-col gap-6 font-bold'>
                <Link passHref href={'/products'}><a href="" onClick={() => handleSidebar(false)}>Produtos</a></Link>
                <Link passHref href={'/questions'}><a href="" onClick={() => handleSidebar(false)}>Perguntas Frequentes</a></Link>
                <Link passHref href={'/register'}><a href="" onClick={() => handleSidebar(false)}>Registrar-se</a></Link>
            </nav>
        </>
    )
}