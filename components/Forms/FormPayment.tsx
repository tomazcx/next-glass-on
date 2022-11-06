import { ClipboardText } from "phosphor-react";
import { Input } from "../Form/Input"
import { useForm } from "react-hook-form";

interface FormInterface{
    setForm (value:boolean):void;
    handleSidebar(value: boolean): void;
}

export const FormPayment = (props:FormInterface) => {

    const {register, handleSubmit} = useForm()

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

            <button className="rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-white text-center py-2 w-48">Concluir pagamento</button>
            <span onClick={() => props.setForm(true)} className="text-gray-500 underline cursor-pointer">Retornar para os dados de entrega.</span>

        </form>
    )
}