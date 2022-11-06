import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import Image, { StaticImageData } from "next/image";

interface ProductInterface {
    image: string | StaticImageData;
}


export const CartPageProduct = (props: ProductInterface) => {

    const handleMinusQuantity = () => {
        let num = 1

        if (num > 0) {
            num -= 1
        }
        return num as number
    }

    const handlePlusQuantity = () => {
        let num = 1
        return num += 1 as number
    }

    return (
        <div className="grid grid-cols-1 items-start md:grid-cols-3 gap-4 p-8 border w-full text-xs xl:text-sm">
            <Image src={props.image} alt="Product image" className='mx-auto md:mx-0' />
            <div className="flex flex-col gap-4">
                <strong className="text-lg">Clubmaster Optics</strong>
                <span>RB3548NL 001 54-21</span>
                <ul>
                    <li>Armação: metal</li>
                    <li>Lentes: normais</li>
                    <li>Tamanho: Padrão</li>
                </ul>
            </div>
            <div className="border flex justify-between items-center px-4 py-2 rounded">
                <Minus className="cursor-pointer" color='#000' size={20}  />
                <span>{1}</span>
                <Plus className="cursor-pointer" color='#000' size={20}  />
            </div>
        </div>
    )
}