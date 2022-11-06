import { User, List, ShoppingCartSimple, MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { Sidebar } from '../Sidebars/Sidebar'
import { LoginModal } from '../Modals/LoginModal'
import Link from 'next/link'
import { CartModal } from '../Modals/CartModal'
import Modal from 'react-modal'
import { HeaderSearch } from '../Modals/HeaderSearch'

export const Header = () => {

    const [sidebar, setSidebar] = useState(false)
    const [loginModal, setLogin] = useState(false)
    const [cartModal, setCart] = useState(false)
    const [search, setSearch] = useState(false)
    const [textHeader, setText] = useState(0)
    return (
        <>
            <Modal
                isOpen={sidebar}
                ariaHideApp={false}
                className="bg-white shadow-2xl fixed left-0 z-100 flex px-8 py-12 flex-col z-50 gap-12 w-8/12 h-screen animate-show-sidebar"
            >
                <Sidebar handleSidebar={setSidebar} />
            </Modal>
            <header className="flex flex-col bg-gray-800 w-full z-10 text-white fixed">

                <div className={`w-full flex items-center justify-center py-1 ${textHeader === 0 ? 'bg-gray-500' : 'bg-white'}`}>
                    <span className={`uppercase ${textHeader === 0 ? 'text-white' : 'text-black'} font-bold text-center text-xs md:text-md`}>
                        frete grátis para todo o brasil!
                    </span>
                </div>
                <div className="px-4 md:px-28 py-4 flex justify-between items-center md:gap-8 ">
                    <nav className="flex items-center gap-4">
                        <List size={32} color="#e8e8e8" className='mr-4 cursor-pointer md:hidden' 
                        onClick={() => {
                            setSidebar(!sidebar)
                            setLogin(false)
                            setCart(false)
                            setSearch(false)
                        }} />
                        <Link href={'/'} passHref>
                            <a className="font-bold hover:text-gray-400 transition-colors uppercase text-2xl tracking-wider mr-12">GlassOn</a>
                        </Link>
                        <div className="hidden md:flex gap-4">
                            <Link href={'/products'}><a className='uppercase hover:text-gray-400 transition-colors'>Todos</a></Link>
                            <Link href={{pathname:'/products', query:{type: 'glass'}}}><a className='uppercase hover:text-gray-400 transition-colors'>De grau</a></Link>
                            <Link href={{pathname:'/products', query:{type: 'sun'}}}><a className='uppercase hover:text-gray-400 transition-colors'>De sol</a></Link>
                        </div>
                    </nav>

                    <div className="hidden md:flex items-center gap-4 ">
                        <ShoppingCartSimple size={32} color="#e8e8e8" className='cursor-pointer'
                            onClick={() => {
                                setLogin(false)
                                setSearch(false)
                                setCart(prevState => !prevState)
                            }} />
                        {cartModal ? <CartModal closeFun={setCart} /> : <></>}

                        <MagnifyingGlass size={30} color="#e8e8e8"  onClick={() => {
                                setCart(false)
                                setLogin(false)
                                setSearch(prevState => !prevState)
                            }} className='cursor-pointer' />


                        <User size={32} color="#e8e8e8" className='cursor-pointer'
                            onClick={() => {
                                setCart(false)
                                setSearch(false)
                                setLogin(prevState => !prevState)
                            }} />
                        {loginModal ? <LoginModal /> : <></>}
                    </div>

                    <div className="flex md:hidden items-center gap-4 ">
                        <ShoppingCartSimple size={24} color="#e8e8e8" className='cursor-pointer'
                            onClick={() => {
                                setLogin(false)
                                setSearch(false)
                                setCart(prevState => !prevState)
                                setSidebar(false)
                            }} />
                        {cartModal ? <CartModal closeFun={setCart} /> : <></>}

                        <MagnifyingGlass size={22} color="#e8e8e8"  onClick={() => {
                                setCart(false)
                                setLogin(false)
                                setSearch(prevState => !prevState)
                                setSidebar(false)
                            }} className='cursor-pointer' />


                        <User size={24} color="#e8e8e8" className='cursor-pointer'
                            onClick={() => {
                                setCart(false)
                                setSearch(false)
                                setLogin(prevState => !prevState)
                                setSidebar(false)

                            }} />
                        {loginModal ? <LoginModal /> : <></>}
                    </div>
                </div>
                {search ? <HeaderSearch close={setSearch}/> : <></>}
                
            </header>
        </>

    )
}
