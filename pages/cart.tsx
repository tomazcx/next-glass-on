import { ShoppingCartSimple } from "phosphor-react"
import glass from '../assets/products/glass1.jpg'
import { useContext } from "react"
import Link from "next/link"
import classNames from "classnames"
import { CartContext } from "../providers/cartContext"
import { CartPageProduct } from "../components/Cards/CartPageProduct"
import { Layout } from "../components/Sections/Layout"

const Cart = () => {

    const { value } = useContext(CartContext)

    return (
        <Layout>
            
            <main className="flex flex-col my-12 w-full ">
                <div className="flex flex-col h-full w-11/12 gap-8 max-w-[1200px] mx-auto ">
                    <div className="flex items-center gap-2 ">
                        <Link href={'/'} passHref><a className="border-r border-black pr-2 hover:text-gray-500 transition-colors">Voltar</a></Link>
                        <span>Carrinho</span>
                        <ShoppingCartSimple size={32} color="#000" className='cursor-pointer' />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="col-span-2 flex flex-col items-center gap-4">
                            <CartPageProduct image={glass} />
                            <CartPageProduct image={glass} />

                        </div>

                        <div className="w-full  flex flex-col gap-6 pl-6 ">
                            <strong className="font-normal text-xl uppercase mb-8">Resumo do pedido</strong>
                            <div className="flex justify-between items-center w-full border-b border-gray-700 pb-2">
                                <span>Subtotal</span>
                                <span>R$ {value * 200},00</span>
                            </div>
                            <div className="flex justify-between items-center w-full border-b border-gray-700 pb-2">
                                <span>Valor do Frete </span>
                                <span className="uppercase">gratuito</span>
                            </div>
                            <div className="flex font-bold justify-between items-center w-full border-b border-gray-700 pb-2">
                                <span className="uppercase" >total</span>
                                <span>R$ {value * 200},00</span>
                            </div>
                            <Link
                                href={'/payment'}
                                passHref
                            ><a className={classNames("w-full rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-white text-center px-4 py-2", {
                                "pointer-events-none bg-gray-400": value <= 0
                            })}>Finalizar Agora</a></Link>

                        </div>
                    </div>
                </div>


            </main>
        </Layout>
    )
}

export default Cart