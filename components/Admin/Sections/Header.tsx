import { List, UserCircle } from "phosphor-react"
import Link from "next/link"
import { useState } from "react"
import Modal from 'react-modal'
import { SidebarDashboard } from "../Modals/SidebarDashboard"


export const Header = () => {

    const [sidebar, setSidebar] = useState(false)

    return (
        <header className="py-4 text-white bg-gray-900 flex justify-between px-8 lg:px-0 lg:pr-8 lg:grid lg:grid-cols-12 items-center">
            <Modal
                isOpen={sidebar}
                ariaHideApp={false}
                className="bg-white shadow-2xl fixed left-0 z-100 flex px-3 py-12 flex-col z-50 gap-12 w-8/12 min-h-screen animate-show-sidebar"
            >
                <SidebarDashboard handleSidebar={setSidebar} />
            </Modal>
                <List size={24} color="#ffffff" onClick={() => setSidebar(true)} className="block lg:hidden" />
                <Link href={"dashboard"} passHref><a className="uppercase col-span-2 text-center font-bold text-xl md:text-2xl tracking-widest hover:text-gray-200">glass on</a></Link>
            
            <div className='flex items-center gap-4 justify-end col-span-10'>
                <span className='text-white whitespace-nowrap hidden md:block'>Bem vindo, tomazcx!</span>
                <UserCircle size={32} color="#ffffff" className="cursor-pointer" />
            </div>
        </header>
    )
}