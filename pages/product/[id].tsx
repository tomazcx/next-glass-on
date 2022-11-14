import Image from "next/image";
import { ArrowRight, Eyeglasses, Minus, Plus, Truck } from "phosphor-react"
import { useState } from "react";
import { Layout } from "../../components/Sections/Layout";
import { Container } from "../../components/ProductPage/Container";
import React from "react";
import { apollo_client } from '../../clients/apolloClient'
import { GetServerSideProps } from "next";
import { PRODUCT_QUERY } from "../../graphql/queries/products/getProduct"
import { parseCookies } from "nookies";
import classNames from "classnames";
import { NotFound } from "../../components/Sections/NotFound";
import { useMutation } from "@apollo/client";
import { CREATE_CART_PRODUCT } from "../../graphql/mutations/create/registerCartProduct";
import { useRouter } from "next/router";
import { CART_QUERY } from "../../graphql/queries/cart/getProductsCart";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CART_MODAL_QUERY } from "../../graphql/queries/cart/getCartModal";


interface ProductData {
    data: {
        id: string;
        name: string;
        price: number;
        parcels: number;
        sunLens: boolean;
        material: {
            name: string
        };
        format: {
            name: string;
        };
        glassColor: {
            name: string;
        };
        description: string;
        image: {
            url: string;
        };
    }

}

const Product = ({ data }: ProductData) => {

    const router = useRouter()
    const cookies = parseCookies()

    const [container, setContainer] = useState(false)
    const [containerToRender, setRender] = useState(false)
    const [sizeGlasses, setGlases] = useState('Padrão')
    const [quantityProduct, setProduct] = useState(0)
    const [createCartProduct] = useMutation(CREATE_CART_PRODUCT, {
        onCompleted: () => toast("Produto adicionado ao carrinho!"),
        refetchQueries: [{ query: CART_MODAL_QUERY, variables: { id: cookies['client-auth'] } }, { query: CART_QUERY, variables: { id: cookies['client-auth'] } }]
    })

    const handleMinusQuantity = () => {
        let num = quantityProduct
        if (quantityProduct !== 0) {
            num -= 1;
        }
        return num
    }

    const handleAddProduct = () => {
        createCartProduct({
            variables: {
                quantity: quantityProduct,
                idClient: cookies['client-auth'],
                idProduct: data.id
            }
        })

    }

    if (data === null) return <NotFound />

    return (
        <Layout>
            <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
            <main className="flex flex-col my-12 w-11/12 max-w-[1200px] mx-auto mt-28">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 border-b border-gray-400">
                    <div className="flex items-center flex-col justify-center bg-gray-300 lg:min-h-[30rem]">
                        <Image src={data.image.url} alt="Product image" className="rounded-2xl" width={500} height={300} />

                    </div>
                    <div className="flex flex-col justify-between gap-12">
                        {container ? <Container type={containerToRender} fun={setContainer} setSize={setGlases} /> :
                            <div className="flex flex-col gap-8">
                                <h1 className="font-bold text-2xl uppercase">{data.name}</h1>
                                <div onClick={() => { setContainer(true); setRender(true) }} className="border-b cursor-pointer border-black flex items-center pb-2 justify-between">
                                    <span>Tamanho - {sizeGlasses}</span>
                                    <ArrowRight size={24} color="#000" />

                                </div>
                                <div onClick={() => { setContainer(true); setRender(false) }} className="border-b cursor-pointer border-black flex items-center pb-2 justify-between">
                                    <span>Envios e devoluções   </span>
                                    <ArrowRight size={24} color="#000" />

                                </div>
                            </div>
                        }

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                                <span className="text-3xl font-semibold">R${data.price}.00</span>
                                <span className="text-lg">Em até {data.parcels}x de R${(data.price / data.parcels).toFixed(2)}</span>
                                <span>Ou R${(data.price * 0.97).toFixed(2)} no boleto bancário</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Truck size={24} color="#292929" />
                                <span>Frete grátis para todo Brasil</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-200 flex items-center rounded-lg justify-between p-4">
                                    <Minus size={20} color="#000" className="cursor-pointer" onClick={(() => setProduct(handleMinusQuantity))} />
                                    <span className="text-sm">{quantityProduct}</span>
                                    <Plus size={20} color="#000" className="cursor-pointer" onClick={() => setProduct(prevState => prevState += 1)} />
                                </div>
                                <button
                                    onClick={() => {
                                        if (cookies['client-auth'] !== undefined) handleAddProduct()
                                    }}
                                    className={classNames("text-white text-sm rounded-lg p-4", {
                                        'bg-gray-700 cursor-not-allowed': cookies['client-auth'] === undefined || quantityProduct === 0,
                                        'bg-black hover:bg-gray-900 transition-colors': cookies['client-auth'] !== undefined && quantityProduct > 0
                                    })}>
                                    {cookies['client-auth'] !== undefined ? 'Adicionar ao carrinho' : 'Você precisa estar logado para comprar'}
                                </button>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="flex-col flex gap-8">
                    <div className="flex flex-col w-full pb-8 border-b gap-8 border-gray-400">
                        <h1 className="text-2xl text-center mt-8">Detalhes do Produto</h1>
                        <p className="text-center">{data.description}</p>
                    </div>
                    <div className="pb-8 border-b border-gray-400 w-full flex flex-col items-center">
                        <strong className="uppercase text-center w-full">Código do modelo GO<span className="uppercase">{data.id}</span></strong>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 pb-8 items-center border-b border-gray-400">
                        <span className="font-bold text-center">Informações da armação</span>
                        <div className="flex items-center gap-4 mx-auto">
                            <Eyeglasses size={30} color="#000" className="hidden md:block" />
                            <div className="flex flex-col ">
                                <span className="font-bold uppercase">formato da lente</span>
                                <span className="text-center md:text-start">{data.format.name}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4  mx-auto">
                            <Eyeglasses size={30} color="#000" className="hidden md:block" />
                            <div className="flex flex-col ">
                                <span className="font-bold uppercase">cor da armação</span>
                                <span className="text-center md:text-start">{data.glassColor.name}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4  mx-auto">
                            <Eyeglasses size={30} color="#000" className="hidden md:block" />
                            <div className="flex flex-col ">
                                <span className="font-bold uppercase ">material</span>
                                <span className="text-center md:text-start">{data.material.name}</span>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const productData = await apollo_client.query({
        query: PRODUCT_QUERY,
        variables: {
            id: context.query.id
        }
    })

    return {
        props: {
            data: productData.data.product
        }
    }
}

export default Product