import Link from "next/link";
import { CartProduct } from "../Cards/CartProduct";

interface CartProductInterface {
    quantity: number;
    id:string;
    product: {
        id: string;
        name: string;
        price: number;
        image: {
            url: string;
        }
    }

}

interface CartInterface {
    data?: CartProductInterface[]
}

export const RenderCartProducts = ({ data }: CartInterface) => {
    return (
        <>
            {data?.map(((cartProduct : CartProductInterface) => <CartProduct key={cartProduct.id} cartProduct={cartProduct} /> ))}
            {data?.length! > 0 ? <Link href={'/cart'} passHref><a className="text-center text-white bg-black rounded-md py-2 hover:bg-gray-700 transition-colors">Finalizar compra</a></Link> : <span className="text-center text-gray-500">Seu carrinho está vazio.</span>}
            
        </>
    )
}