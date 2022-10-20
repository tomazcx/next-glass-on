import { useContext, useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import classNames from "classnames"
import { CartContext } from "../providers/cartContext"
import { FormAdress } from "../components/Forms/FormAddress"
import { FormPayment } from "../components/Forms/FormPayment"
import { ProductPayment } from "../components/Cards/ProductPayment"
import { Layout } from "../components/Sections/Layout"
import Modal from 'react-modal'
import { SidebarPayment } from "../components/Sidebars/SidebarPayment"

const Payment = () => {

  const { value } = useContext(CartContext)
  const [sidebar, setSidebar] = useState(false)
  const [cepText, setCEP] = useState('')
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [form, setForm] = useState(true)

  const getAddress = async () => {
    try {
      const result = await axios.get(`https://viacep.com.br/ws/${cepText}/json/`)
      const data = result.data
      setData(data)
    } catch (e) {
      setError(true)
    }
  }

  const handleSidebar = () => {
    setSidebar(true)
  }

  return (
    <Layout>
      <Modal
        isOpen={sidebar}
        ariaHideApp={false}
        className="bg-white shadow-2xl absolute right-0 z-50 flex px-8 py-12 flex-col gap-6 w-8/12 min-h-screen animate-show-sidebar-right"
      >
        <SidebarPayment handleSidebar={setSidebar} />
      </Modal>
      <main className="flex flex-col items-center justify-between flex-1 w-full gap-12 mb-12">
        <div className="bg-gray-100 py-1.5 text-sm flex items-center justify-center w-full gap-6">
          <span className={classNames('', { 'border-b border-black': form })}>1. ENTREGA</span>
          <span className={classNames('', { 'border-b border-black': !form })}>2. PAGAMENTO</span>
        </div>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 md:px-4 gap-12 w-10/12 max-w-[900px] ">
          {form ?
            <FormAdress fetchData={getAddress} setForm={setForm} setCEP={setCEP} error={error} data={data} handleSidebar={handleSidebar} /> :
            <FormPayment setForm={setForm} handleSidebar={handleSidebar} />
          }
          <div className="p-6 md:flex flex-col gap-6 hidden max-w-[400px]">
            <span className="text-xl">Dados da compra</span>
            <ProductPayment />
            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-between">
                <span className="font-bold">Subtotal</span>
                <span>R$ {value * 200}.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold">Valor do frete</span>
                <span>GRATUITO</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold">TOTAL</span>
                <span>R$ {value * 200}.00</span>
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