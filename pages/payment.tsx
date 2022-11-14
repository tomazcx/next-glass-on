import { useEffect, useState } from "react"
import Link from "next/link"
import classNames from "classnames"
import { FormAdress } from "../components/Forms/FormAddress"
import { FormPayment } from "../components/Forms/FormPayment"
import { ProductPayment } from "../components/Cards/ProductPayment"
import { Layout } from "../components/Sections/Layout"
import Modal from 'react-modal'
import { SidebarPayment } from "../components/Sidebars/SidebarPayment"
import { parseCookies } from "nookies"
import { NotFound } from "../components/Sections/NotFound"
import { useQuery } from "@apollo/client"
import { QUERY_CART_PAYMENT } from "../graphql/queries/cart/getCartPayment"
import { useRouter } from "next/router"

interface ProductData {
  id:string
  quantity: number
  product: {
    name: string;
    price: number;
    image: {
      url: string;
    }
  }
}

const Payment = () => {

  const router = useRouter()
  const cookies = parseCookies()
  const [sidebar, setSidebar] = useState(false)
  const [form, setForm] = useState(true)
  const [cookiesUnset, setCookies] = useState(false)

  const { data } = useQuery(QUERY_CART_PAYMENT, {
    variables: {
      id: cookies['client-auth']
    }
  })

  if(data?.cartProducts.length === 0) router.push("/")


  const handleSidebar = () => {
    setSidebar(true)
  }

  useEffect(() => {
    console.log(cookies['client-auth'])
    if (cookies['client-auth'] === undefined) setCookies(true)
  }, [])

  if (cookiesUnset) return <NotFound />

  let total = 0

  return (
    <Layout>
      <Modal
        isOpen={sidebar}
        ariaHideApp={false}
        className="bg-white shadow-2xl top-[4rem] absolute right-0 z-50 flex px-8 py-12 flex-col gap-6 w-8/12 min-h-screen animate-show-sidebar-right"
      >
        <SidebarPayment data={data?.cartProducts} handleSidebar={setSidebar} />
      </Modal>
      <main className="flex flex-col items-center justify-between flex-1 w-full gap-12 mb-12 mt-[5.5rem]">
        <div className="bg-gray-100 py-1.5 text-sm flex items-center justify-center w-full gap-6">
          <span className={classNames('', { 'border-b border-black': form })}>1. ENTREGA</span>
          <span className={classNames('', { 'border-b border-black': !form })}>2. PAGAMENTO</span>
        </div>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 md:px-4 gap-12 w-10/12 max-w-[900px] ">
          {form ?
            <FormAdress setForm={setForm} handleSidebar={handleSidebar} /> :
            <FormPayment cart={data?.cartProducts} setForm={setForm} handleSidebar={handleSidebar} />
          }
          <div className="p-6 md:flex flex-col gap-6 hidden max-w-[400px]">
            <span className="text-xl">Dados da compra</span>
            {
              data?.cartProducts.map((cartProduct: ProductData) => {
                total += cartProduct.product.price * cartProduct.quantity
                 return < ProductPayment key={cartProduct.id} data = { cartProduct } />
            })
            }
            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-between">
                <span className="font-bold">Subtotal</span>
                <span>R$ {total}.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold">Valor do frete</span>
                <span>GRATUITO</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold">TOTAL</span>
                <span>R$ {total}.00</span>
              </li>
            </ul>
            <Link href={'/cart'} passHref ><a className="rounded-md bg-gray-800 hover:bg-gray-700 transition-colors py-2 text-center text-white">Voltar para o carrinho</a></Link>
          </div>
        </div>

      </main>
    </Layout>

  )
}
export default Payment