import { ClipboardText } from "phosphor-react"
import { Input } from "../Form/Input"

interface FormInterface {
    handleSidebar(value: boolean): void;
    setCEP(text: string): void;
    fetchData(): any;
    data?: any;
    error: boolean;
    setForm (value:boolean):void;
}


export const FormAdress = (props: FormInterface) => {
    return (
        <form action="" className="flex flex-col gap-7">
            <div className="flex justify-between items-center w-full">
                <strong className="uppercase font-normal text-xl">dados de entrega</strong>
                <ClipboardText size={32} color="#000" className="md:hidden" onClick={() => props.handleSidebar(true)} />
            </div>

            <div className="grid items-end  grid-cols-2 gap-4">
                <Input text="Nome*" type="text" />
                <Input text="Sobrenome*" type="text" />
            </div>
            <Input text="Email*" type="email" />
            <Input text="Data de nascimento*" type="date" />
            <div className="grid items-end  grid-cols-2 gap-4">
                <Input text="CPF ou CNPJ*" type="text" />
                <Input text="Telefone*" type="text" />
            </div>
            <div className="flex flex-col">
                <Input text="CEP*" type="text" funChange={props.setCEP} funFetch={props.fetchData} />
                <span className="text-gray-500">Esqueceu o cep? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target={'_blank'} className="hover:text-gray-600 transition-colors border-gray-600 border-b">Calcule-o</a> </span>
                {props.error ? <span className="text-red-400 mt-2">Insira um CEP válido </span> : <></>}
            </div>
            <Input text="Bairro*" type="text" value={props.data?.bairro ?? ''} />
            <div className="grid items-end grid-cols-2 gap-4">
                <Input text="Rua*" type="text" value={props.data?.logradouro ?? ''} />
                <Input text="Número*" type="text" />
            </div>
            <Input text="Complemento - Opcional" type="text" />
            <Input text="Edifício, Bloco, Apartamento - Opcional" type="text" />
            <Input text="Cidade*" type="text" value={props.data?.localidade ?? ''} />
            <Input text="Estado*" type="text" value={props.data?.uf ?? ''} />

            <button onClick={() => props.setForm(false)} className="text-center text-white bg-gray-800 rounded-md py-2 hover:bg-gray-700 transition-colors">Prosseguir para o pagamento</button>
            <span className="text-gray-500">Ao prosseguir, confirmo e li e compreendi a <span className="underline cursor-pointer">Política de Privacidade</span>. </span>

        </form>
    )
}