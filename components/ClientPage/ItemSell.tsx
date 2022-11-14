interface SellInterface {
    sell: {
        createdAt: string;
        products: string;
        value: number;
    }
}

export const ItemSell = ({ sell }: SellInterface) => {
    return (
        <div className="bg-gray-300 flex justify-between px-4 md:px-0 md:grid grid-cols-12 rounded-lg py-2 text-sm">
            <span className="text-center hidden md:block col-span-3">{sell.createdAt.slice(0, -22)}</span>
            <span className="text-center  col-span-3">{sell.products.slice(0, -3)}</span>
            <span className="text-center  col-span-3">R${sell.value},00</span>
            <span className="text-center hidden md:block col-span-3">Avaliando Pagamento</span>
        </div>
    )
}