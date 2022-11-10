import Link from 'next/link'
import Image from "next/image";
import notFound from '../../assets/products/notfound.svg'
import { Layout } from './Layout';

export const NotFound = () => {
    return (
        <Layout>
            <main className="w-11/12 max-w-[1200px] mx-auto my-32 flex flex-col gap-8 md:flex-row items-center">
                <Image src={notFound} width={600} height={400}></Image>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h1 className="uppercase font-bold text-xl md:text-2xl text-center md:text-start">Página não encontrada</h1>
                    <p className="text-lg text-center md:text-start">A página você está tentando acessar não existe ou está fora do ar.</p>
                    <Link href={'/'} passHref><a className="underline">Retornar para a página principal</a></Link>
                </div>
            </main>
        </Layout>
    )
}