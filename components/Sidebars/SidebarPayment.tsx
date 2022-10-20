import { X } from 'phosphor-react'
import Link from 'next/link';
import { ProductPayment } from '../Cards/ProductPayment';

interface SidebarInterface {
    handleSidebar(value: boolean): void;
}

export const SidebarPayment = (props: SidebarInterface) => {


    return (
        <>
            <X size={32} color="#000000" onClick={() => props.handleSidebar(false)} />
            <span >DADOS DA COMPRA</span>
            <ProductPayment />
            <Link href={'/cart'} passHref onClick={() => props.handleSidebar(false)}><a className="rounded-md bg-gray-800 hover:bg-gray-700 transition-colors py-2 text-center text-white">Voltar para o carrinho</a></Link>
        </>
    )
}