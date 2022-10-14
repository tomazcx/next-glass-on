import Image from "next/image";
import { ArrowRight, Eyeglasses, Minus, Plus, Truck } from "phosphor-react"
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import glass from '../assets/products/glass1.jpg'
import { Layout } from "../components/Sections/Layout";
import { CartContext } from "../providers/cartContext";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "../components/ProductPage/Container";


const Product = () => {

  const { value, setValue } = useContext(CartContext)
  const [container, setContainer] = useState(false)
  const [containerToRender, setRender] = useState(false)
  const [sizeGlasses, setGlases] = useState('Padrão')
  const [quantityProduct, setProduct] = useState(0)
  const notify = () => toast('Produto adicionado.');

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
      <main className="flex flex-col my-12 w-11/12 max-w-[1200px] mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 border-b border-gray-400">
          <div className="flex items-center flex-col">
            <Image src={glass} alt="Product image" className="rounded-2xl" />

          </div>
          <div className="flex flex-col justify-between gap-12">
            {container ? <Container type={containerToRender} fun={setContainer} setSize={setGlases} /> :
              <div className="flex flex-col gap-8">
                <h1 className="font-bold text-2xl">Clubmaster Optics</h1>
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
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas dolore veniam doloribus harum voluptates. Porro minus corporis cumque numquam tenetur fugit expedita odio culpa quae cupiditate. Quos, ratione cupiditate.</p>
          </div>
          <div className="pb-8 border-b border-gray-400 w-full flex flex-col items-center">
            <strong className="uppercase text-center w-full">Código do modelo RB3548NL 001 54-21</strong>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 pb-8 items-center border-b border-gray-400">
            <span className="font-bold text-center">Informações da armação</span>
            <div className="flex items-center gap-4 mx-auto">
              <Eyeglasses size={30} color="#000" className="hidden md:block" />
              <div className="flex flex-col ">
                <span className="font-bold uppercase">formato da lente</span>
                <span className="text-center md:text-start">Redondo</span>
              </div>
            </div>
            <div className="flex items-center gap-4  mx-auto">
              <Eyeglasses size={30} color="#000" className="hidden md:block" />
              <div className="flex flex-col ">
                <span className="font-bold uppercase">cor da armação</span>
                <span className="text-center md:text-start">Polido ouro</span>
              </div>
            </div>
            <div className="flex items-center gap-4  mx-auto">
              <Eyeglasses size={30} color="#000" className="hidden md:block" />
              <div className="flex flex-col ">
                <span className="font-bold uppercase ">material</span>
                <span className="text-center md:text-start">Metal</span>
              </div>
            </div>
          </div>

        </section>

      </main>
    </Layout>
  )
}

export default Product