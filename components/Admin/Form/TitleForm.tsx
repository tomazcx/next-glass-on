import { CaretRight } from "phosphor-react";

interface TitleInterface{
    text: string;
}

export const TitleForm = ({text} : TitleInterface) => {
    return (
        <div className='flex gap-2 items-center'>
            <CaretRight size={18} color="#404040" />
            <h1 className='font-semibold'>{text}</h1>
        </div>
    )
}