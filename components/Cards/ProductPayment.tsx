
interface ProductData {
    data: {
        id:string
        quantity: number
        product: {
            name: string;
            price: number;
            image: {
                url: string;
            }
        }
    }
}

export const ProductPayment = ({ data }: ProductData) => {

    return (
        <div className='grid grid-cols-2 md:flex gap-4 border-b border-black pb-4'>

            <div className="bg-gray-300 h-[8rem] flex flex-col justify-center items-center">
                <img src={data.product.image.url} alt="Product image" width={150} height={150} />
            </div>
            <div className='flex flex-col text-sm md:text-base gap-2'>
                <strong className='text-sm md:text-lg font-normal'>{data.product.name}</strong>
                <span>Quantidade: {data.quantity}</span>
                <span className="font-bold">R$ {data.quantity * data.product.price}.00</span>
            </div>
        </div>
    )
}