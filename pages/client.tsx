import { useQuery } from "@apollo/client"
import { destroyCookie, parseCookies } from "nookies"
import { UserCircle } from "phosphor-react"
import { useEffect, useState } from "react"
import { AsideItem } from "../components/ClientPage/AsideItem"
import { Layout } from "../components/Sections/Layout"
import { NotFound } from "../components/Sections/NotFound"
import { CLIENT_QUERY } from "../graphql/queries/client/getInfo"
import Modal from 'react-modal'
import { useRouter } from "next/router"
import { SidebarClient } from "../components/Sidebars/SidebarClient"
import { FormEdit } from "../components/ClientPage/FormEdit"
import { Sells } from "../components/ClientPage/Sells"

const Client = () => {

    const cookies = parseCookies()
    const { data } = useQuery(CLIENT_QUERY, {
        variables: {
            id: cookies['client-auth']
        }
    })

    const router = useRouter()
    const [modal, setModal] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [showSells, setDisplay] = useState(false)

    const [cookiesUnset, setCookies] = useState(false)

    const handleLogOff = () => {
        destroyCookie(null, "client-auth")
        setModal(false)
        router.push("/")
    }

    useEffect(() => {
        console.log(cookies['client-auth'])
        if (cookies['client-auth'] === undefined) setCookies(true)
    }, [])

    if (cookiesUnset) return <NotFound />

    return (
        <Layout>
            <main className='block lg:grid lg:grid-cols-12 min-h-screen mt-[5.5rem]'>
                <Modal
                    isOpen={sidebar}
                    ariaHideApp={false}
                    className="bg-white shadow-2xl mt-16 fixed left-0 z-100 flex py-12 flex-col z-50 gap-8 w-8/12 h-screen animate-show-sidebar"

                >
                    <SidebarClient showSells={showSells} setDisplay={setDisplay} name={data?.client.name} setModal={setModal} handleSidebar={setSidebar} />
                </Modal>
                <Modal
                    isOpen={modal}
                    ariaHideApp={false}
                    className="bg-gray-100 border-none w-10/12 max-w-[400px] absolute top-[250px] lg:top-[150px]  left-1/2 transform p-4 -translate-x-1/2 flex flex-col gap-4"
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
                        <span className='text-2xl'>{data?.client.name}</span>
                    </div>
                    <ul className='flex flex-col items-start w-full'>
                        <AsideItem showSells={showSells} isLogOff={false} setDisplay={setDisplay}  text='Dados do perfil' />
                        <AsideItem showSells={showSells} isLogOff={false} setDisplay={setDisplay} text='Registro de compras' />
                        <AsideItem isLogOff={true} onClick={setModal} text='Deslogar' />
                    </ul>
                </aside>
                {showSells ?
                    <Sells setSidebar={setSidebar} /> :
                    <FormEdit client={data?.client} setSidebar={setSidebar} />

                }

            </main>
        </Layout>
    )
}


export default Client