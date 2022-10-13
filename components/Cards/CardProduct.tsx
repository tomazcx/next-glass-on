import Link from 'next/link'
import Image, { StaticImageData } from "next/image"

interface CardInterface {
    img: string | StaticImageData
}

export const CardProduct = (props: CardInterface) => {
    return (
        <Link href={'/product'} passHref>
            <a className="flex items-center flex-col mx-auto w-[220px]">
                <Image src={props.img}  alt="Product image" />
                <div className="bg-gray-100 flex flex-col gap-4 w-full  p-4">
                    <span>Clubmaster Optics</span>
                    <span>R$ 200</span>
                    <span className="hover:text-gray-600 cursor-pointer transition-colors">Comprar</span>
                </div>
            </a>

        </Link>
    )
}