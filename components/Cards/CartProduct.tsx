import Image from 'next/image'
import Link from 'next/link'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import glass from '../../assets/products/glass1.jpg'
import { CartContext } from '../../providers/cartContext'

export const CartProduct = () => {

    const {value, setValue} = useContext(CartContext)

    return(
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <Image src={glass} alt="Product image" width={50} height={50} />
                    <div className="flex flex-col">
                        <span>Clubmaster Optics</span>
                        <span>R$ 200 X {value} <span className="font-bold">R$ {value*200}</span></span>
                    </div>
                </div>

                <Trash size={24} color="#000" className='cursor-pointer' onClick={() => setValue(0)} />
            </div>
            <Link href={'/cart'} passHref><a  className="text-center text-white bg-black rounded-md py-2 hover:bg-gray-700 transition-colors">Finalizar compra</a></Link>
        </div>
    )
}