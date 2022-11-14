import { ClipboardText } from "phosphor-react";
import { Input } from "../Form/Input"
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { REGISTER_SELL } from "../../graphql/mutations/create/registerSell";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { FormEvent } from "react";
import { GET_SELLS } from "../../graphql/queries/sells/getSells";
import { CART_QUERY } from "../../graphql/queries/cart/getProductsCart";
import { CART_MODAL_QUERY } from "../../graphql/queries/cart/getCartModal";

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

interface FormInterface{
    setForm (value:boolean):void;
    handleSidebar(value: boolean): void;
    cart: ProductData[]
}

export const FormPayment = (props:FormInterface) => {

    const router = useRouter()
    const cookies = parseCookies()
    const {register} = useForm()
    const [registerSell] = useMutation(REGISTER_SELL, {
        onCompleted:() => router.push("/finalized"),
        refetchQueries: [{query:GET_SELLS, variables: {id:cookies['client-auth']}}, { query: CART_MODAL_QUERY, variables: { id: cookies['client-auth'] } }, { query: CART_QUERY, variables: { id: cookies['client-auth'] } }]
    })
    
    const handleFinishSell = (e: FormEvent) => {
        e.preventDefault()

        let products = ''
        let value = 0

        props.cart.forEach((cartProduct : ProductData) => {
            products += `${cartProduct.product.name} ${cartProduct.quantity}x - `
            value += cartProduct.quantity * cartProduct.product.price
        })

        registerSell({
            variables: {
                id: cookies['client-auth'],
                products: products,
                value: value
            }
        })
    }

    return (
        <form action="" className="flex flex-col gap-7">
            <div className="flex justify-between items-center w-full">
                <strong className="uppercase font-normal text-xl">dados de pagamento</strong>
                <ClipboardText size={32} color="#000" className="md:hidden" onClick={() => props.handleSidebar(true)} />
            </div>
            <Input register={register} id='cardNum' text="Número do cartão*" type="text" />
            <div className="grid grid-cols-2 gap-4">
                <Input register={register} id='name' text="Titular*" type="text" />
                <Input register={register} id='cvc' text="CVC*" type="text" />
            </div>
            <Input register={register} id='cpf' text="CPF do titular*" type="text" />
            <Input register={register} id='expires' text="Vencimento*" type="month" />
            <div className="flex flex-col gap-2">
                <label htmlFor="parcels">Quantidade de parcelas*</label>
                <select name="parcels" id="parcels" className="border-black border p-2 rounded-md">
                    <option value="0">R$ {1*200},00 à vista</option>
                    <option value="1">2x de R$ {(1*200)/2},00 sem juros</option>
                </select>
            </div>

            <button onClick={(e : FormEvent) => handleFinishSell(e)} className="rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-white text-center py-2 w-48">Concluir pagamento</button>
            <span onClick={() => props.setForm(true)} className="text-gray-500 underline cursor-pointer">Retornar para os dados de entrega.</span>

        </form>
    )
}