import { X } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../providers/cartContext"
import { CartProduct } from "../Cards/CartProduct"

interface ModalInterface {
    closeFun(value: boolean): void
}

export const CartModal = ({ closeFun }: ModalInterface) => {

    const {value} = useContext(CartContext)

    return (
        <div className="absolute shadow-2xl top-24 gap-4 z-40 right-1/2 w-11/12 md:w-[350px] md:translate-x-0 transform translate-x-1/2 md:right-[5%] rounded-xl bg-white p-4 flex flex-col text-black">
            <div className="flex justify-between items-center">
                <span>Carrinho</span>
                <X size={24} color="#000000" className="cursor-pointer" onClick={() => closeFun(false)} />
            </div>
            <hr />
            {value > 0 ? <CartProduct /> : <span className="text-center text-gray-500">Seu carrinho está vazio.</span>}
        </div>
    )
}