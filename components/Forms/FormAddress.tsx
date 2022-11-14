import { useQuery } from "@apollo/client";
import classNames from "classnames";
import { parseCookies } from "nookies";
import { CaretRight, ClipboardText } from "phosphor-react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CLIENT_QUERY } from "../../graphql/queries/client/getInfo";
import { TitleForm } from "../Admin/Form/TitleForm";
import { Input } from "../Form/Input"

interface FormInterface {
    handleSidebar(value: boolean): void;
    setForm(value: boolean): void;
}


export const FormAdress = (props: FormInterface) => {

    const cookies = parseCookies()
    const { register, handleSubmit } = useForm()
    const [newForm, setForm] = useState(false)
    const [registeredData, setData] = useState(true)
    const { data } = useQuery(CLIENT_QUERY, {
        variables: {
            id: cookies['client-auth']
        }
    })


    return (
        <section className="flex flex-col gap-4">
            <div className="flex items-center gap-4 cursor-pointer md:hidden" onClick={() => props.handleSidebar(true)} >
                <ClipboardText size={32} color="#000"  />
                <span className="text-lg">Dados da compra</span>
            </div>

            <div className="flex flex-col">
                <span onClick={() => {
                    setData(prevState => !prevState)
                    setForm(prevState => !prevState)

                }} className="border-b justify-between md:text-lg border-gray-600 pb-2 flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
                    <span>
                        Usar dados de endereço já cadastrados
                    </span>
                    <CaretRight size={24} color="#0a0a0a" className={classNames("transition-transform", {
                        "rotate-90": registeredData
                    })} />
                </span>

                {registeredData ?
                    <div className="flex flex-col w-11/12 gap-6">
                        <div className="flex flex-col gap-2 mt-4">
                            <TitleForm text='Informações pessoais' />
                            <span>Nome: {data?.client.name}</span>
                            <span>Email: {data?.client.email}</span>
                            <span>CPF: {data?.client.cpf?? "Não definido"}</span>
                            <span>Data de nascimento: {data?.client.birthDate}</span>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <TitleForm text='Informações de entrega' />
                            <span>CEP: {data?.client.cep?? "Não definido"}</span>
                            <span>Rua: {data?.client.street?? "Não definido"}</span>
                            <span>Bairro: {data?.client.district?? "Não definido"}</span>
                            <span>Número: {data?.client.houseNum?? "Não definido"}</span>
                            <span>Complemento: {data?.client.complement?? "Não definido"}</span>
                            <span>Edifício, bloco apartamento: {data?.client.building?? "Não definido"}</span>
                            <span>Cidade: {data?.client.city?? "Não definido"}</span>
                            <span>Estado: {data?.client.state?? "Não definido"}</span>
                        </div>
                        <div className="flex flex-col gap-7">
                            <button onClick={() => props.setForm(false)} className="text-center text-white bg-gray-800 rounded-md py-2 hover:bg-gray-700 transition-colors">Prosseguir para o pagamento</button>
                            <span className="text-gray-500">Ao prosseguir, confirmo e li e compreendi a <span className="underline cursor-pointer">Política de Privacidade</span>. </span>
                        </div>
                    </div>
                    : <></>
                }

            </div>

            <div className="flex flex-col">

                <span onClick={() => {
                    setData(prevState => !prevState)
                    setForm(prevState => !prevState)

                }} className="border-b md:text-lg justify-between border-gray-600 pb-2 flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
                    <span>
                        Registrar novos dados
                    </span>
                    <CaretRight size={24} color="#0a0a0a" className={classNames("transition-transform", {
                        "rotate-90": newForm
                    })} />
                </span>
                {newForm ? <form action="" className="flex flex-col gap-7 mt-6">

                    <div className="grid items-end  grid-cols-2 gap-4">
                        <Input register={register} id='name' text="Nome*" type="text" />
                        <Input register={register} id='surname' text="Sobrenome*" type="text" />
                    </div>
                    <Input register={register} id='email' text="Email*" type="email" />
                    <Input register={register} id='birthDate' text="Data de nascimento*" type="date" />
                    <Input register={register} id='cpf' text="CPF ou CNPJ*" type="text" />
                    <div className="flex flex-col">
                        <Input register={register} id='cep' text="CEP*" type="text" />
                        <span className="text-gray-500">Esqueceu o cep? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target={'_blank'} rel='nofollow, external, noopener, noreferrer' className="hover:text-gray-600 transition-colors border-gray-600 border-b">Calcule-o</a> </span>
                    </div>
                    <Input register={register} id='district' text="Bairro*" type="text" />
                    <div className="grid items-end grid-cols-2 gap-4">
                        <Input register={register} id='street' text="Rua*" type="text"  />
                        <Input register={register} id='number' text="Número*" type="text" />
                    </div>
                    <Input register={register} id='complement' text="Complemento - Opcional" type="text" />
                    <Input register={register} id='building' text="Edifício, Bloco, Apartamento - Opcional" type="text" />
                    <Input register={register} id='city' text="Cidade*" type="text" />
                    <Input register={register} id='state' text="Estado*" type="text" />

                    <button onClick={() => props.setForm(false)} className="text-center text-white bg-gray-800 rounded-md py-2 hover:bg-gray-700 transition-colors">Prosseguir para o pagamento</button>
                    <span className="text-gray-500">Ao prosseguir, confirmo e li e compreendi a <span className="underline cursor-pointer">Política de Privacidade</span>. </span>

                </form> :
                    <></>
                }
            </div>
        </section>
    )
}