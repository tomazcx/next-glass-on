import { UserCircle } from "phosphor-react"
import Link from "next/link"

export const Header = () => {

    return (
        <header className="py-4 text-white bg-gray-900 grid grid-cols-12 items-center">
            <Link href={"/dashboard"} passHref><a className="uppercase col-span-2 text-center font-bold text-2xl tracking-widest hover:text-gray-200">glass on</a></Link>
            <div className='flex items-center gap-4 col-span-2 col-start-11'>
                <span className='text-white whitespace-nowrap'>Bem vindo, tomazcx!</span>
                <UserCircle size={42} color="#ffffff" className="cursor-pointer" />
            </div>
        </header>
    )
}