import Link from "next/link"
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { HandWaving, } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { apollo_client } from "../../clients/apolloClient";
import { AUTH_QUERY } from "../../graphql/queries/client/getAuth";
import { CLIENT_MODAL_QUERY } from "../../graphql/queries/client/getInfoModal";

interface ClientInterface {
    name?: string;
    email?: string;
    birthDate?: string;
}

export const LoginModal = () => {

    const cookies = parseCookies()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(false)
    const [client, setClient] = useState<ClientInterface>({})

    useEffect(() => {
        if (cookies['client-auth'] !== undefined) {
            getInfo()
        }
    }, [])

    const getInfo = async () => {
        const response = await apollo_client.query({
            query: CLIENT_MODAL_QUERY,
            variables: {
                id: cookies['client-auth']
            }
        })

        console.log(response)
        setClient(response.data.client)
    }


    const autorizeLogin = (id: string) => {
        setCookie(undefined, 'client-auth', id, {
            maxAge: 60 * 60 * 8 //8 hours
        })
        Router.push("/")
    }


    const handleLogin = async (data: any) => {
        try {
            const auth = await apollo_client.query({
                query: AUTH_QUERY,
                variables: {
                    email: data.email
                }
            })
            console.log(auth)

            if (auth.data.client.password === data.password) return autorizeLogin(auth.data.client.id)

            throw new Error()
        } catch (e) {
            setError(true)
        }
    }

    if (cookies['client-auth'] !== undefined) {
        return (
            <>
            <div className="absolute shadow-2xl top-24 gap-4 z-40 right-1/2 w-11/12 md:w-[300px] md:translate-x-0 transform translate-x-1/2 md:right-[5%] rounded-xl bg-white p-4 flex flex-col items-center text-black">
                <div className="flex gap-2 items-center">
                    <HandWaving size={24} color="#080808" />
                    <span className="text-lg">Olá, {client.name}</span>
                </div>
                <Link href={'/client'} passHref><a className="bg-gray-800 rounded-lg px-4 py-1.5 w-full text-center text-white hover:bg-gray-700 transition-colors">Acesse seu perfil</a></Link>
            </div>
            </>
        )
    }


    return (
        <form onSubmit={handleSubmit((data) => handleLogin(data))} className="absolute shadow-2xl top-24 gap-4 z-40 right-1/2 w-11/12 md:w-[300px] md:translate-x-0 transform translate-x-1/2 md:right-[5%] rounded-xl bg-white p-4 flex flex-col text-black">
            <span className="text-center">Fazer Login</span>
            {error ?
                <span className='text-white text-center text-sm bg-red-300 py-1 rounded'>Credenciais inválidas</span>
                : <></>
            }
            <div className="flex flex-col gap-2">
                <input {...register('email')} type="email" placeholder="email@gmail.com" className="w-full px-4 py-2 border rounded-lg" />
                <input {...register('password')} type="password" placeholder="Senha de acesso" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <button type="submit" className="text-white bg-black rounded-md py-2 hover:bg-gray-700 transition-colors">Logar</button>
            <div className='flex flex-col gap-2'>
                <Link href={'/register'} passHref><a className="text-center">Registrar-se</a></Link>
            </div>
        </form>
    )


}
