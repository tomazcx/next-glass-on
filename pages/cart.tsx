import { ShoppingCartSimple } from "phosphor-react"
import glass from '../assets/products/glass1.jpg'
import Link from "next/link"
import classNames from "classnames"
import { CartPageProduct } from "../components/Cards/CartPageProduct"
import { Layout } from "../components/Sections/Layout"
import { parseCookies } from "nookies"
import { NotFound } from "../components/Sections/NotFound"
import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { CART_QUERY } from "../graphql/queries/cart/getProductsCart"
import { InputClient } from "../components/ClientPage/InputClient"
import axios from "axios"

interface ProductInterface {
    quantity: number;
    id: string;
    product: {
        name: string;
        id: string;
        price: number;
        image: {
            url: string;
        }
        material: {
            name: string;
        }
        glassColor: {
            name: string;
        }
        format: {
            name: string;
        }
    }
}

const Cart = () => {

    const cookies = parseCookies()
    const [cookiesUnset, setCookies] = useState(false)
    const [cep, setCEP] = useState("")
    const [addressInfo, setAddress] = useState({
        active: false,
        address: ""
    })
    const { data } = useQuery(CART_QUERY, {
        variables: {
            id: cookies['client-auth']
        }
    })

    useEffect(() => {
        if (cookies['client-auth'] === undefined) setCookies(true)
    }, [])

    if (cookiesUnset) return <NotFound />

    const calculateDelivery = async () => {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        return setAddress({
            active: true,
            address: `${result.data.localidade}/${result.data.uf}`
        })
    }

    let totalPrice = 0
    return (
        <Layout>

            <main className="flex flex-col my-12 w-full mt-28">
                <div className="flex flex-col h-full w-11/12 gap-8 max-w-[1200px] mx-auto ">
                    <div className="flex items-center gap-2 ">
                        <Link href={'/'} passHref><a className="border-r border-black pr-2 hover:text-gray-500 transition-colors">Voltar</a></Link>
                        <span>Carrinho</span>
                        <ShoppingCartSimple size={32} color="#000" className='cursor-pointer' />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="col-span-2 flex flex-col items-center gap-4">
                            {data?.cartProducts.length > 0 ? data?.cartProducts.map((cartProduct: ProductInterface) => {
                                totalPrice += cartProduct.product.price * cartProduct.quantity
                                return <CartPageProduct key={cartProduct.product.id} cartProduct={cartProduct} />
                            }
                            ) : <span className="text-lg">Seu carrinho está vazio.</span>}
                        </div>

                        <div className="w-full  flex flex-col gap-8 pl-6 ">
                            <div className="flex w-full flex-col gap-6 pl-6">
                                <strong className="font-normal text-xl uppercase mb-8">Resumo do pedido</strong>
                                <div className="flex justify-between items-center w-full border-b border-gray-700 pb-2">
                                    <span>Subtotal</span>
                                    <span>R$ {totalPrice},00</span>
                                </div>
                                <div className="flex justify-between items-center w-full border-b border-gray-700 pb-2">
                                    <span>Valor do Frete </span>
                                    <span className="uppercase">gratuito</span>
                                </div>
                                <div className="flex font-bold justify-between items-center w-full border-b border-gray-700 pb-2">
                                    <span className="uppercase" >total</span>
                                    <span>R$ {totalPrice},00</span>
                                </div>
                                <Link
                                    href={'/payment'}
                                    passHref
                                ><a className={classNames("w-full rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-white text-center px-4 py-2", {
                                    "pointer-events-none bg-gray-400": data?.cartProducts.length <= 0
                                })}>Finalizar Agora</a></Link>
                            </div>
                            <div className="pl-6 flex flex-col gap-2">
                                <span>Calcular valor de entrega</span>
                                <div className="flex items-center gap-4 flex-col md:flex-row">
                                    <input onChange={e => setCEP(e.target.value)} type="text" className='bg-gray-200 py-1 w-full px-2 rounded' />
                                    <button onClick={() => calculateDelivery()} className="bg-gray-800 text-sm hover:bg-gray-700 transition-colors rounded text-white w-full py-1.5">Calcular</button>
                                </div>
                                {addressInfo.active ?
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-2 ">
                                            <input type="radio" name="pac" id="pac" />
                                            <label htmlFor="pac">PAC para {addressInfo.address} - Frete de R$0,00</label>
                                        </div>
                                        <div className="flex gap-2 ">
                                            <input type="radio" name="pac" id="pac" />
                                            <label htmlFor="pac">SEDEX para {addressInfo.address}  - Frete de R$0,00</label>
                                        </div>
                                    </div> : <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </Layout>
    )
}

export default Cart