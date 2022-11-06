import Image from 'next/image'
import { useContext } from 'react'
import glass from '../../assets/products/glass1.jpg'

export const ProductPayment = () =>{

    return(
        <div className='grid grid-cols-2 md:flex gap-4 border-b border-black pb-4'>
            <Image src={glass} alt="Product image" width={150} height={150} className="mx-auto md:mx-0" />
            <div className='flex flex-col text-sm md:text-base'>
                <strong className='text-sm md:text-lg font-normal'>Clubmaster Optics</strong>
                <span>asasdasd</span>
                <span className="font-bold">R$ {1*200}.00</span>
            </div>
        </div>
    )
}