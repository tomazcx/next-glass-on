import { useQuery } from "@apollo/client"
import { parseCookies } from "nookies"
import { ListDashes } from "phosphor-react"
import { GET_SELLS } from "../../graphql/queries/sells/getSells"
import { ItemSell } from "./ItemSell"

interface SellInterface {
    createdAt: string;
    products: string;
    value: number;
}

interface SellsInterface{
    setSidebar(value:boolean):void
}

export const Sells = ({setSidebar} : SellsInterface) => {

    const cookies = parseCookies()
    const { data } = useQuery(GET_SELLS, {
        variables: {
            id: cookies['client-auth']
        }
    })


    return (
        <section className='col-span-9 p-4 lg:p-16 flex flex-col gap-8'>
            <div className="flex items-center gap-4 mb-8 lg:hidden">
                <ListDashes size={32} color="#242424" onClick={() => setSidebar(true)} className='cursor-pointer' />
                <span>Perfil do cliente</span>
            </div>
            <h1 className="text-lg text-center md:text-start">Registro de compras</h1>
            <div className="flex items-center justify-between px-4 md:px-0 md:grid grid-cols-12">
                <span className="text-center hidden md:block col-span-3">Data</span>
                <span className="text-center col-span-3">Produtos</span>
                <span className="text-center col-span-3">Valor</span>
                <span className="text-center hidden md:block col-span-3">Status</span>
            </div>
            <div className="flex flex-col gap-2">
                {data?.sells.map((sell: SellInterface) => 
                   <ItemSell key={sell.createdAt} sell={sell} />
                )}

            </div>
        </section>
    )
}