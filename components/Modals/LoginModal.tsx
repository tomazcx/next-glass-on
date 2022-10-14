import Link from "next/link"

export const LoginModal = () => {
    return (
        <div className="absolute shadow-2xl top-24 gap-4 z-40 right-1/2 w-11/12 md:w-[300px] md:translate-x-0 transform translate-x-1/2 md:right-[5%] rounded-xl bg-white p-4 flex flex-col text-black">
            <span className="text-center">Fazer Login</span>
            <div className="flex flex-col gap-2">
                <input type="email" placeholder="email@gmail.com" className="w-full px-4 py-2 border rounded-lg" />
                <input type="password" placeholder="Senha de acesso" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <button className="text-white bg-black rounded-md py-2 hover:bg-gray-700 transition-colors">Logar</button>
            <div className='flex flex-col gap-2'>
                <Link href={'/register'} passHref><a className="text-center">Registrar-se</a></Link>
            </div>
        </div>
    )
}