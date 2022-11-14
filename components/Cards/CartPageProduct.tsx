import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { DELETE_CART_PRODUCT } from "../../graphql/mutations/delete/deleteCartProduct";
import { CART_MODAL_QUERY } from "../../graphql/queries/cart/getCartModal";
import { useMutation } from "@apollo/client";
import { parseCookies } from "nookies";
import { CART_QUERY } from "../../graphql/queries/cart/getProductsCart";

interface ProductInterface{
    cartProduct: {
        quantity:number,
        id:string;
        product: {
            id:string;
            name:string;
            price: number;
            image: {
                url: string;
            }
            material: {
                name:string;
            }
            glassColor: {
                name:string;
            }
            format: {
                name:string;
            }
        }
    }
}


export const CartPageProduct = ({cartProduct}: ProductInterface) => {

    const cookies = parseCookies()
    const [deleteProduct] = useMutation(DELETE_CART_PRODUCT, {
        refetchQueries: [{query: CART_MODAL_QUERY, variables:{id: cookies['client-auth']}}, {query: CART_QUERY, variables: {id:cookies['client-auth']}}]
    })

    const handleDeleteProduct = () => {
        deleteProduct({
            variables: {
                id: cartProduct.id
            }
        })
    }

    return (
        <div className="grid grid-cols-1 items-start md:grid-cols-3 gap-4 p-8 border w-full text-xs xl:text-sm">
             <div className="bg-gray-300 h-[14rem] flex flex-col justify-center items-center">
                    <img src={cartProduct.product.image.url} alt="Product image" width={240} height={150} />
            </div>
            <div className="flex flex-col gap-3">
                <strong className="text-lg">{cartProduct.product.name}</strong>
                <span className="uppercase text-xl">R${cartProduct.product.price},00</span>
                <span className="">Quantidade: {cartProduct.quantity}</span>
                <ul className="flex-col flex gap-2">
                    <li>Formato da armação: {cartProduct.product.format.name}</li>
                    <li>Cor da lentes: {cartProduct.product.glassColor.name}</li>
                    <li>Material da armação:  {cartProduct.product.material.name}</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <span onClick={() => handleDeleteProduct()} className="text-red-400 flex items-center gap-2  cursor-pointer transition-colors hover:text-red-600"><Trash size={24} color="#f70202" /> Remover</span>
                <Link href={`/product/${cartProduct.product.id}`} passHref><a className="underline hover:text-gray-700 transition-colors " >Visitar página da loja</a></Link>

            </div>
        </div>
    )
}