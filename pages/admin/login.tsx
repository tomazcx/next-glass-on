import {useState} from 'react'

const Login = () => {
    const [error, setError] = useState(false)

    // const verifyLogin = (data : any) => {
    //     if(data.user !== "tomazcx" || data.password !== "1234") return setError(true)

    //     const token = uuid()
    //     setCookies('react-auth', token, {
    //         maxAge: 60 * 60 * 8 //8 hours
    //     })

    //     navigate("/dashboard")
    // }

    return (
        <>
            <main className="flex-col items-center justify-center min-h-screen bg-gray-500 hidden lg:flex">
                <form action="" method="post" className="border bg-white max-w-[400px] w-10/12 px-8 rounded-md flex flex-col items-center py-8 gap-6 ">
                    <h1 className="text-lg">Acessar área administrativa</h1>
                    {error ? <span className='text-red-700 text-start w-full bg-red-200 p-2 rounded-lg'>Credenciais Incorretas</span> : <></>}

                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="user">Usuário:</label>
                        <input type="text" name="user" id="user" className="w-full border p-1 border-gray-400 rounded" />
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" className="w-full border p-1 border-gray-400 rounded" name="password" id="password" />
                    </div>

                    <button type="submit" className="text-white transition-colors bg-black rounded-md hover:bg-gray-700 py-2 text-center w-full">Entrar</button>
                </form>
            </main>
            <h1 className='text-center text-lg mt-8 block lg:hidden'>Acesso exclusivo para desktop. </h1>
        </>
    )
}

export default Login