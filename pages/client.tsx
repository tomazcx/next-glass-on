import { useMutation, useQuery } from "@apollo/client"
import { destroyCookie, parseCookies } from "nookies"
import { ListDashes, UserCircle } from "phosphor-react"
import { useEffect, useState } from "react"
import { AsideItem } from "../components/ClientPage/AsideItem"
import { Layout } from "../components/Sections/Layout"
import { NotFound } from "../components/Sections/NotFound"
import { CLIENT_QUERY } from "../graphql/queries/client/getInfo"
import { TitleForm } from "../components/Admin/Form/TitleForm"
import { InputClient } from "../components/ClientPage/InputClient"
import { useForm } from "react-hook-form"
import Modal from 'react-modal'
import { useRouter } from "next/router"
import { SidebarClient } from "../components/Sidebars/SidebarClient"
import { UPDATE_CLIENT } from "../graphql/mutations/update/updateClient"
import { toast } from "react-toastify"



const Client = () => {

    const router = useRouter()
    const cookies = parseCookies()
    const { register, handleSubmit } = useForm()
    const [modal, setModal] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [updateClient] = useMutation(UPDATE_CLIENT, {
        onCompleted: () => toast("Dados atualizados com sucesso!"),
        refetchQueries: [{query: CLIENT_QUERY, variables: {id:cookies['client-auth']}}]
    })


    const [cookiesUnset, setCookies] = useState(false)

    const handleLogOff = () => {
        destroyCookie(null, "client-auth")
        setModal(false)
        router.push("/")
    }

    const SubmitEdit = (data: any) => {
        updateClient({
            variables: {
                
            }
        })
    }

    const { data } = useQuery(CLIENT_QUERY, {
        variables: {
            id: cookies['client-auth']
        }
    })

    useEffect(() => {
        console.log(cookies['client-auth'])
        if (cookies['client-auth'] === undefined) setCookies(true)
    }, [])

    if (cookiesUnset)
        return (
            <NotFound />
        )

    return (
        <Layout>
            <main className='block lg:grid lg:grid-cols-12 min-h-screen mt-[5.5rem]'>
                <Modal
                    isOpen={sidebar}
                    ariaHideApp={false}
                className="bg-white shadow-2xl mt-16 fixed left-0 z-100 flex px-8 py-12 flex-col z-50 gap-12 w-8/12 h-screen animate-show-sidebar"
                    
                >
                    <SidebarClient setModal={setModal} handleSidebar={setSidebar} />
                </Modal>
                <Modal
                    isOpen={modal}
                    ariaHideApp={false}
                    className="bg-gray-100 border-none w-10/12 max-w-[400px] absolute top-[250px] lg:top-[150px] lg:top-[250px] left-1/2 transform p-4 -translate-x-1/2 flex flex-col gap-4"
                >
                    <span className="text-xl">Deseja mesmo deslogar de sua conta?</span>
                    <hr />
                    <div className="flex gap-4">
                        <button onClick={() => setModal(false)} className="uppercase px-2 text-center bg-blue-300 hover:bg-blue-400 transition-colors rounded">Cancelar</button>
                        <button onClick={() => handleLogOff()} className="uppercase px-4 hover:bg-red-400 transition-colors bg-red-300 rounded">Deslogar</button>
                    </div>
                </Modal>
                <aside className='hidden lg:flex col-span-3 h-full lg:flex-col bg-gray-200 items-center gap-4'>
                    <div className="flex flex-col items-center">

                        <UserCircle size={128} color='#242424' />
                        <span className='text-2xl'>{data?.client?.name}</span>
                    </div>
                    <ul className='flex flex-col items-start w-full'>
                        <AsideItem text='Dados do perfil' />
                        <AsideItem text='Dados das compras' />
                        <AsideItem text='Configurações da conta' />
                        <AsideItem onClick={setModal} text='Deslogar' />
                    </ul>
                </aside>
                <section className='col-span-9 p-4 lg:p-16'>
                    <div className="flex items-center gap-4 mb-8 lg:hidden">
                        <ListDashes size={32} color="#242424" onClick={() => setSidebar(true)} className='cursor-pointer'/>
                        <span>Perfil do cliente</span>
                    </div>
                    <form onSubmit={handleSubmit(data => SubmitEdit(data))} className="flex flex-col gap-12">
                        <div className='flex flex-col gap-6'>
                            <TitleForm text='Informações pessoais' />
                            <InputClient label="Nome" id="name" type="text" register={register} data={data?.client.name} />
                            <InputClient label="Email" id="email" type="text" register={register} data={data?.client.email} />
                            <InputClient label="Date" id="birthDate" type="date" register={register} data={data?.client.birthDate} />
                            <InputClient label="CPF" id="cpf" type="text" register={register} data={data?.client.cpf ?? ""} />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <TitleForm text='Informações de endereco' />
                            <InputClient label="CEP" id="cep" type="text" register={register} data={data?.client.cep ?? ""} />
                            <InputClient label="Rua" id="street" type="text" register={register} data={data?.client.street ?? ""} />
                            <InputClient label="Bairro" id="district" type="text" register={register} data={data?.client.district ?? ""} />
                            <InputClient label="Número da casa" id="number" type="text" register={register} data={data?.client.houseNum ?? ""} />
                            <InputClient label="Complemento" id="complement" type="text" register={register} data={data?.client.complement ?? ""} />
                            <InputClient label="Edifício, Bloco, Apartamento" id="building" type="text" register={register} data={data?.client.building ?? ""} />
                            <InputClient label="Cidade" id="city" type="text" register={register} data={data?.client.city ?? ""} />
                            <InputClient label="Estado" id="state" type="text" register={register} data={data?.client.state ?? ""} />
                        </div>
                        <button className='rounded text-white bg-gray-800 hover:bg-gray-700 transition-colors py-2 text-center px-4 w-full lg:max-w-[200px]'>Editar</button>
                    </form>
                </section>
            </main>
        </Layout>
    )
}


export default Client