import { Layout } from "../components/Sections/Layout"
import { ListBullets, MagnifyingGlass } from "phosphor-react"
import { CardProduct } from "../components/Cards/CardProduct"
import { useState } from "react"
import { SidebarProducts } from "../components/Sidebars/SidebarProducts"
import Modal from 'react-modal'
import { SidebarProductsMobile } from "../components/Sidebars/SidebarProductsMobile"
import { GetServerSideProps } from "next"
import {apollo_client} from '../clients/apolloClient'
import { ALL_PRODUCTS_QUERY } from "../graphql/queries/products/getProductsList"

interface ProductInteface{
  image: {
    url: string;
  };
  name:string;
  id:string;
  price:number;
}

interface PageInterface{
  products: ProductInteface[]
}

const Products = ({products} : PageInterface) => {

  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = (value: boolean) => {
    setSidebar(value)
  }

  return (
    <Layout>
      <Modal
        isOpen={sidebar}
        ariaHideApp={false}
        className="bg-white shadow-2xl absolute left-0 z-50 flex px-8 py-12 flex-col gap-4 w-8/12 h-screen animate-show-sidebar"
      >
        <SidebarProductsMobile handleSidebar={setSidebar} />
      </Modal>
      <main className="md:grid md:grid-cols-5 flex flex-col items-center h-full w-full md:gap-8 mt-20">
        <SidebarProducts />
        <div className="col-span-4 h-full">
          <div className="flex flex-col sm:flex-row items-center md:justify-end gap-8 px-6 mt-12">
            <div className="flex items-center justify-start w-full sm:w-auto gap-4 md:hidden">
              <ListBullets size={32} color="#000" onClick={() => handleSidebar(true)} />
              <span className="block sm:hidden">Mais filtros</span>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <label htmlFor="models" className="hidden sm:block whitespace-nowrap	">Classificar por modelo:</label>
              <select name="models" id="models" className="rounded-md py-1.5 px-4  w-full bg-gray-100">
                <option value={0}>Todos</option>
                <option value={1}>Óculos de grau</option>
                <option value={2}>Óculos de sol</option>
              </select>
            </div>
            <div className="flex bg-gray-100 items-center pl-4 rounded-md">
              <MagnifyingGlass size={20} color="#000" />
              <input type="text" placeholder="Pesquisar por nome" className="bg-transparent py-1.5 px-4 outline-none" />

            </div>
            

          </div>

          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-8 lg:grid-cols-4 sm:mx-8 md:mr-8 md:ml-0  my-8">
            {products.map((product : ProductInteface) => <CardProduct key={product.id} product={product} />)}

          </div>

        </div>

      </main>
    </Layout>
  )
}

export const getServerSideProps : GetServerSideProps  = async() => {

  const products = await apollo_client.query({
    query: ALL_PRODUCTS_QUERY
  })

  return {
    props: {
      products : products.data.products
    }
  }
}

export default Products