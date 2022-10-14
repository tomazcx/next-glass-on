import { User, List, ShoppingCartSimple, X } from 'phosphor-react'
import { useState } from 'react'
import { Sidebar } from '../Sidebars/Sidebar'
import { LoginModal } from '../Modals/LoginModal'
import Link from 'next/link'
import { CartModal } from '../Modals/CartModal'
import Modal from 'react-modal'

export const Header = () => {

    const [sidebar, setSidebar] = useState(false)
    const [loginModal, setLogin] = useState(false)
    const [cartModal, setCart] = useState(false)

    return (
        <>
            <Modal
                isOpen={sidebar}
                ariaHideApp={false}
                className="bg-white shadow-2xl fixed left-0 z-100 flex px-8 py-12 flex-col z-50 gap-12 w-8/12 h-screen animate-show-sidebar"
            >
                <Sidebar handleSidebar={setSidebar} />
            </Modal>
            <header className="flex flex-col bg-gray-800 w-full text-white relative">

                <div className={"w-full flex items-center justify-center py-1 bg-gray-500"}>
                    <span className="uppercase font-bold text-center text-xs md:text-md">
                        frete grátis para todo o brasil
                    </span>
                </div>
                <div className="px-4 md:px-28 py-4 flex justify-between items-center gap-8 ">
                    <nav className="flex items-center gap-4">
                        <List size={32} color="#e8e8e8" className='mr-4 cursor-pointer md:hidden' onClick={() => setSidebar(true)} />
                        <Link href={'/'} passHref>
                            <a className="font-bold hover:text-gray-400 transition-colors uppercase text-2xl tracking-wider mr-12">GlassOn</a>
                        </Link>
                        <div className="hidden items-center md:flex gap-6 text-[14px]">
                            <Link href={'/products'} passHref >
                                <a className="hover:text-gray-400 transition-colors" >
                                    Produtos
                                </a>
                            </Link>
                            <Link href={'/questions'} passHref >
                                <a className="hover:text-gray-400 transition-colors" >
                                    Perguntas Frequentes
                                </a>
                            </Link>
                            <Link href={'/register'} passHref >
                                <a className="hover:text-gray-400 transition-colors" >
                                    Registrar-se
                                </a>
                            </Link>
                        </div>
                    </nav>


                    <div className="flex items-center gap-4 ">
                        <ShoppingCartSimple size={32} color="#e8e8e8" className='cursor-pointer'
                            onClick={() => {
                                setLogin(false)
                                setCart(prevState => !prevState)
                            }} />
                        {cartModal ? <CartModal closeFun={setCart} /> : <></>}


                        <User size={32} color="#e8e8e8" className='cursor-pointer'
                            onClick={() => {
                                setCart(false)
                                setLogin(prevState => !prevState)
                            }} />
                        {loginModal ? <LoginModal /> : <></>}
                    </div>

                </div>
            </header>
        </>

    )
}
