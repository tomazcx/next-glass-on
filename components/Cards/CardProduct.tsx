import Link from 'next/link'
import Image, { StaticImageData } from "next/image"

interface CardInterface {
    product: {
        image: {
            url: string
        };
        name:string;
        price:number;
        id:string;
    }
}

export const CardProduct = ({product}: CardInterface) => {
    return (
        <Link href={'/product'} passHref>
            <a className="flex items-center flex-col mx-auto w-full max-h-[20rem]">
                <div className="bg-gray-300 w-full h-[14rem] flex flex-col justify-center">
                    <Image src={product.image.url}  alt="Product image" width={240} height={150} />
                </div>
                <div className="bg-gray-100 flex flex-col gap-4 w-full  p-4">
                    <span className='uppercase'>{product.name}</span>
                    <span>R$ {product.price}</span>
                    <span className="hover:text-gray-600 cursor-pointer transition-colors">Comprar</span>
                </div>
            </a>
        </Link>
    )
}