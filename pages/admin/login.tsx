import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { setCookie } from 'nookies'
import Router, { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Login = () => {
    const [error, setError] = useState(false)
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const verifyLogin = (data: any) => {
        if (data.user !== process.env.NEXT_PUBLIC_ADMIN_LOGIN || data.password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) return setError(true)

        const token = uuid()
        setCookie(undefined, 'nextauth-token', token, {
            maxAge: 60*60*8 //8 hours
        })

        return router.push('/admin/dashboard')
    }

    return (
        <main className="flex-col items-center justify-center min-h-screen bg-gray-500 flex">
            <form onSubmit={handleSubmit(data => verifyLogin(data))} action="" method="post" className="border bg-white max-w-[400px] w-10/12 px-8 rounded-md flex flex-col items-center py-8 gap-6 ">
                <h1 className="text-lg">Acessar área administrativa</h1>
                {error ? <span className='text-red-700 text-start w-full bg-red-200 p-2 rounded-lg'>Credenciais Incorretas</span> : <></>}

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="user">Usuário:</label>
                    <input {...register('user')} type="text" name="user" id="user" className="w-full border p-1 border-gray-400 rounded" />
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="password">Senha:</label>
                    <input {...register('password')} type="password" className="w-full border p-1 border-gray-400 rounded" name="password" id="password" />
                </div>

                <button type="submit" className="text-white transition-colors bg-black rounded-md hover:bg-gray-700 py-2 text-center w-full">Entrar</button>
            </form>
        </main>
    )
}

export default Login