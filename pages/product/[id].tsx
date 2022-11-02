import Image from "next/image";
import { ArrowRight, Eyeglasses, Minus, Plus, Truck } from "phosphor-react"
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Layout } from "../../components/Sections/Layout";
import { CartContext } from "../../providers/cartContext";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "../../components/ProductPage/Container";
import React from "react";
import { apollo_client } from '../../clients/apolloClient'
import { GetServerSideProps } from "next";
import notFound from '../../assets/products/notfound.svg'
import Link from 'next/link'
import { PRODUCT_QUERY } from "../../graphql/queries/products/getProduct"

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

    if (data === null)
        return (
            <Layout>
                <main className="w-11/12 max-w-[1200px] mx-auto my-32 flex flex-col gap-8 md:flex-row items-center">
                    <Image src={notFound} width={600} height={400}></Image>
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <h1 className="uppercase font-bold text-xl md:text-2xl text-center md:text-start">Produto não encontrado</h1>
                        <p className="text-lg text-center md:text-start">A página do produto que você está tentando acessar não existe ou está fora do ar.</p>
                        <Link href={'/'} passHref><a className="underline">Retornar para a página principal</a></Link>
                    </div>
                </main>
            </Layout>
        )

    const { value, setValue } = useContext(CartContext)
    const [container, setContainer] = useState(false)
    const [containerToRender, setRender] = useState(false)
    const [sizeGlasses, setGlases] = useState('Padrão')
    const [quantityProduct, setProduct] = useState(0)
    const notify = () => toast('Produto adicionado.');

    console.log(data)

    const handleMinusQuantity = () => {
        let num = quantityProduct
        if (num !== 0) {
            num -= 1;
        }
        return num
    }

    const addToCart = (num: number) => {
        notify();
        return num += quantityProduct as number
    }



    return (
        <Layout>
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
                                    onClick={() => setValue(addToCart(value))}
                                    className="text-white text-sm bg-black rounded-lg hover:bg-gray-900 transition-colors p-4">Adicionar ao carrinho</button>
                            </div>
                            <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
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

    context.res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate')

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