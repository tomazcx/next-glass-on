import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CarouselInterface {
    template: string | StaticImageData;
    text: string;
    textButton: string;
}

export const CarouselImg = (props: CarouselInterface) => {
    return (
        <div className="relative z-0">
            <div className="w-full h-[600px] relative">
                <Image src={props.template} alt="Template image" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4'>
                <strong className='font-normal text-white text-2xl text-center'>{props.text}</strong>
                <Link href={'/products'} passHref><a className='bg-transparent px-8 py-2 border rounded-md text-white hover:bg-black hover:border-black transition-colors'>{props.textButton}</a></Link>
            </div>

        </div>
    )
}