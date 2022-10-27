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
                <Link passHref href={'/products'}><a className='uppercase' onClick={() => handleSidebar(false)}>Todos</a></Link>
                <Link passHref href={'/products'}><a className='uppercase' onClick={() => handleSidebar(false)}>de Grau</a></Link>
                <Link passHref href={'/products'}><a className='uppercase' onClick={() => handleSidebar(false)}>de Sol</a></Link>
            </nav>
        </>
    )
}