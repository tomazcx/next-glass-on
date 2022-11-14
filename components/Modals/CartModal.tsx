import { useQuery } from "@apollo/client"
import { parseCookies } from "nookies"
import { X } from "phosphor-react"
import { useState } from "react"
import { CART_MODAL_QUERY } from "../../graphql/queries/cart/getCartModal"
import { RenderCartProducts } from "./RenderCartProducts"

interface ModalInterface {
    closeFun(value: boolean): void
}

interface ProductInterface{
    quantity: number;
    id:string;
    product: {
        name:string;
        price:number;
        image: {
            url:string;
        }
    }
}

export const CartModal = ({ closeFun }: ModalInterface) => {

    const cookies = parseCookies()

    const {data} = useQuery(CART_MODAL_QUERY, {
        variables: {
            id: cookies['client-auth']?? ""
        }
    })

    return (
        <div className="absolute shadow-2xl top-24 gap-4 z-40 right-1/2 w-11/12 md:w-[350px] md:translate-x-0 transform translate-x-1/2 md:right-[5%] rounded-xl bg-white p-4 flex flex-col text-black">
            <div className="flex justify-between items-center">
                <span>Carrinho</span>
                <X size={24} color="#000000" className="cursor-pointer" onClick={() => closeFun(false)} />
            </div>
            <hr />
            {cookies['client-auth'] !== undefined ? <RenderCartProducts data={data?.cartProducts} />  : <span className="text-center text-gray-500">Você precisa estar logado para adicionar produtos ao carrinho.</span> }
        </div>
    )
}