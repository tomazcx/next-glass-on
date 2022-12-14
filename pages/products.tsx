import { Layout } from "../components/Sections/Layout"
import { ListBullets, MagnifyingGlass } from "phosphor-react"
import { CardProduct } from "../components/Cards/CardProduct"
import { useEffect, useState } from "react"
import { SidebarProducts } from "../components/Sidebars/SidebarProducts"
import Modal from 'react-modal'
import { SidebarProductsMobile } from "../components/Sidebars/SidebarProductsMobile"
import { GetServerSideProps } from "next"
import {apollo_client} from '../clients/apolloClient'
import { MATERIALS_QUERY } from "../graphql/queries/categories/getMaterials"
import { ALL_PRODUCTS_QUERY } from "../graphql/queries/products/getProductsList"
import { FORMATS_QUERY } from "../graphql/queries/categories/getFormats"
import { COLORS_QUERY } from "../graphql/queries/categories/getColors"
import { useRouter } from "next/router"

interface ProductInteface{
  image: {
    url: string;
  };
  name:string;
  id:string;
  price:number;
  sunLens:boolean;
  material: {
    name: string;
  };
  format: {
    name: string;
  };
  glassColor: {
    name: string;
  };
}

interface CategoryInterface{
  name: string;
  id:string;
}

interface PageInterface{
  products: ProductInteface[]
  materials: CategoryInterface[],
  colors: any,
  formats: CategoryInterface[]
}

interface SelectedCategoriesInterface{
  material:string;
  format:string;
  color:string;
}

const Products = ({products, materials, formats, colors} : PageInterface) => {

  const router = useRouter()

  const [sidebar, setSidebar] = useState(false)
  const [text, setText] = useState(router.query.search as string?? '')
  const [selectedOption, setSelected] = useState(router.query.type as string?? 'all')
  const [categories, setCategories] = useState<SelectedCategoriesInterface>({
    material: "",
    format: "",
    color: ""
  })

  const filteredByCategory = (categories.material !== "" || categories.format !== "" || categories.color !== "") ? 
    products.filter((product: ProductInteface) => {
      if(product.material.name === categories.material){
        if(product.glassColor.name === categories.color || categories.color === ""){
          if(product.format.name === categories.color || categories.format === ""){
            return product
          }
        }
      }

      if(product.format.name === categories.format){
        if(product.material.name === categories.material || categories.material === ""){
          if(product.glassColor.name === categories.color || categories.color === ""){
            return product
          }
        }
      }
      if(product.glassColor.name === categories.color){
        if(product.material.name === categories.material || categories.material === ""){
          if(product.format.name === categories.format || categories.format === ""){
            return product
          }
        }
      }
    
    }) : products

  const filteredByType = selectedOption !== 'all' ? filteredByCategory.filter((product:ProductInteface) => {
    if(selectedOption == 'sun' && product.sunLens){
      return product
    }
    if(selectedOption == 'glass' && !product.sunLens){
      return product
    }

  }) : filteredByCategory

  const filteredByText = text.length > 0 ? filteredByType.filter((product: ProductInteface) => product.name.toLowerCase().includes(text.toLowerCase())) : filteredByType

  const handleCategories = (category: string, value:string) => {
    if(category === 'cor')
      return setCategories({...categories, color: value})
    if(category === 'material')
      return setCategories({...categories, material: value})
    if(category === 'formato')
      return setCategories({...categories, format: value})
  }

  return (
    <Layout>
      <Modal
        isOpen={sidebar}
        ariaHideApp={false}
        className="bg-white max-h-[100vh] top-[60px] overflow-y-auto shadow-2xl absolute left-0 z-50 flex px-8 py-12 flex-col gap-4 w-8/12 h-screen animate-show-sidebar"
      >
        <SidebarProductsMobile selectedCategories={categories} setCategories={handleCategories} colors={colors}  formats={formats} materials={materials} handleSidebar={setSidebar} />
      </Modal>
      <main className="md:grid md:grid-cols-5 flex flex-col items-center h-full w-full md:gap-8 mt-20">
        <SidebarProducts selectedCategories={categories} setCategories={handleCategories} colors={colors} formats={formats} materials={materials} />
        <div className="col-span-4 h-full">
          <div className="flex flex-col sm:flex-row items-center md:justify-end gap-8 px-6 mt-12">
            <div className="flex items-center justify-start w-full sm:w-auto gap-4 md:hidden">
              <ListBullets size={32} color="#000" onClick={() => setSidebar(prevState => !prevState)} />
              <span className="block sm:hidden">Mais filtros</span>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <label htmlFor="models" className="hidden sm:block whitespace-nowrap	">Classificar por modelo:</label>
              <select onChange={(e) =>  setSelected(e.target.value)} defaultValue={selectedOption} name="models" id="models" className="rounded-md py-1.5 px-4  w-full bg-gray-100">
                <option value={'all'}>Todos</option>
                <option value={'glass'}>??culos de grau</option>
                <option value={'sun'}>??culos de sol</option>
              </select>
            </div>
            <div className="flex bg-gray-100 items-center pl-4 rounded-md">
              <MagnifyingGlass size={20} color="#000" />
              <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Pesquisar por nome" className="bg-transparent py-1.5 px-4 outline-none" />

            </div>
            

          </div>

          <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-8 lg:grid-cols-4 mx-12 sm:mx-16 md:mr-8 md:ml-0  my-8">
            {
            filteredByText.length > 0 ?
            filteredByText.map((product : ProductInteface) => <CardProduct key={product.id} product={product} />) :
            <span className='text-lg lg:text-2xl col-span-4'>Nenhum produto encontrado.</span>
            }

          </div>

        </div>

      </main>
    </Layout>
  )
}

export const getServerSideProps : GetServerSideProps  = async() => {

  const materials = await apollo_client.query({
    query: MATERIALS_QUERY
  })

  const colors = await apollo_client.query({
    query: COLORS_QUERY
  })

  const formats = await apollo_client.query({
    query: FORMATS_QUERY
  })

  const products = await apollo_client.query({
    query: ALL_PRODUCTS_QUERY
  })

  return {
    props: {
      products : products.data.products,
      colors: colors.data.colors,
      formats: formats.data.formats,
      materials: materials.data.materials,
    }
  }
}

export default Products