import Link from "next/link"
import { Layout } from "../components/Sections/Layout"

const Finalized = () => {
    return(
        <Layout>
            <main className="mt-32 mb-16 flex flex-col gap-4">
                <h1 className="text-center text-xl md:text-3xl">Compra finalizada!</h1>
                <h2 className="text-center text-lg md:text-2xl">Obrigado por comprar com Glass On!</h2>
                <Link href="/" passHref><a className="text-center text-lg hover:text-gray-800 transition-colors underline">Continuar comprando</a></Link>
            </main>
        </Layout>
    )
}

export default Finalized