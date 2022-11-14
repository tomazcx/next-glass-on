import { X } from 'phosphor-react'
import Link from 'next/link';
import { ProductPayment } from '../Cards/ProductPayment';

interface ProductData {
    quantity: number
    id:string;
    product: {
      name: string;
      price: number;
      image: {
        url: string;
      }
    }
  }
interface SidebarInterface {
    handleSidebar(value: boolean): void;
    data: ProductData[]
}

export const SidebarPayment = ({handleSidebar, data}: SidebarInterface) => {


    return (
        <>
            <X className='cursor-pointer' size={32} color="#000000" onClick={() => handleSidebar(false)} />
            <span >DADOS DA COMPRA</span>

             {
              data?.map((cartProduct: ProductData) => < ProductPayment key={cartProduct.id} data={ cartProduct} />)
            }
            <Link href={'/cart'} passHref><a className="rounded-md bg-gray-800 hover:bg-gray-700 transition-colors py-2 text-center text-white">Voltar para o carrinho</a></Link>
        </>
    )
}