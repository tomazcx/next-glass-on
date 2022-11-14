import { useMutation } from "@apollo/client"
import { parseCookies } from "nookies"
import { ListDashes } from "phosphor-react"
import { useForm } from "react-hook-form"
import { UPDATE_CLIENT } from "../../graphql/mutations/update/updateClient"
import { CLIENT_QUERY } from "../../graphql/queries/client/getInfo"
import { TitleForm } from "../Admin/Form/TitleForm"
import { InputClient } from "./InputClient"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

interface DataInterface{
    setSidebar (value:boolean):void;
    client: {
        id:string;
        name:string;
        cpf:string;
        houseNum:string;
        district:string;
        complement:string;
        email:string;
        street:string;
        building:string;
        cep:string;
        city:string;
        state:string;
        birthDate:string;
    }
}


export const FormEdit = ({client, setSidebar} : DataInterface) => {
    const cookies = parseCookies()
    const { register, handleSubmit } = useForm()
    const [updateClient] = useMutation(UPDATE_CLIENT, {
        onCompleted: () => toast("Dados atualizados com sucesso!"),
        refetchQueries: [{ query: CLIENT_QUERY, variables: { id: cookies['client-auth'] } }]
    })

    const SubmitEdit = (data: any, client: any) => {
        updateClient({
            variables: {
                id: cookies['client-auth'],
                birthDate: client.birthDate !== "" ? client.birthDate : data.birthDate,
                cep: data.cep === "" ? client.cep : data.cep,
                city: data.city === "" ? client.city : data.city,
                complement: data.complement === "" ? client.complement : data.complement,
                cpf: data.cpf === "" ? client.cpf : data.cpf,
                district: data.district === "" ? client.district : data.district,
                houseNum: data.number === "" ? client.houseNum : data.number,
                email: data.email === "" ? client.email : data.email,
                name: data.name === "" ? client.name : data.name,
                street: data.street === "" ? client.street : data.street,
                building: data.building === "" ? client.building : data.building
            }
        })
    }

    return (
        <section className='col-span-9 p-4 lg:p-16'>
            <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
            <div className="flex items-center gap-4 mb-8 lg:hidden">
                <ListDashes size={32} color="#242424" onClick={() => setSidebar(true)} className='cursor-pointer' />
                <span>Perfil do cliente</span>
            </div>
            <form onSubmit={handleSubmit(data => SubmitEdit(data, client))} className="flex flex-col gap-12">
                <div className='flex flex-col gap-6'>
                    <TitleForm text='Informações pessoais' />
                    <InputClient label="Nome" id="name" type="text" register={register} data={client?.name} />
                    <InputClient label="Email" id="email" type="text" register={register} data={client?.email} />
                    <InputClient label="Data de nascimento" id="birthDate" type="date" register={register} data={client?.birthDate} />
                    <InputClient label="CPF" id="cpf" type="text" register={register} data={client?.cpf ?? ""} />
                </div>
                <div className='flex flex-col gap-6'>
                    <TitleForm text='Informações de endereco' />
                    <InputClient label="CEP" id="cep" type="text" register={register} data={client?.cep?? ""} />
                    <InputClient label="Rua" id="street" type="text" register={register} data={client?.street?? ""} />
                    <InputClient label="Bairro" id="district" type="text" register={register} data={client?.district?? ""} />
                    <InputClient label="Número" id="number" type="text" register={register} data={client?.houseNum?? ""} />
                    <InputClient label="Complemento" id="complement" type="text" register={register} data={client?.complement?? ""} />
                    <InputClient label="Edifício, Bloco, Apartamento" id="building" type="text" register={register} data={client?.building ?? ""} />
                    <InputClient label="Cidade" id="city" type="text" register={register} data={client?.city?? ""} />
                    <InputClient label="Estado" id="state" type="text" register={register} data={client?.state?? ""} />
                </div>
                <button className='rounded text-white bg-gray-800 hover:bg-gray-700 transition-colors py-2 text-center px-4 w-full lg:max-w-[200px]'>Editar</button>
            </form>
        </section>
    )
}