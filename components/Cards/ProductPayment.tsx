import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../../providers/cartContext'
import glass from '../../assets/products/glass1.jpg'

export const ProductPayment = () =>{

    const {value} = useContext(CartContext)

    return(
        <div className='grid grid-cols-2 md:flex gap-4 border-b border-black pb-4'>
            <Image src={glass} alt="Product image" width={150} height={150} className="mx-auto md:mx-0" />
            <div className='flex flex-col text-sm md:text-base'>
                <strong className='text-sm md:text-lg font-normal'>Clubmaster Optics</strong>
                <span>{value}</span>
                <span className="font-bold">R$ {value*200}.00</span>
            </div>
        </div>
    )
}