import classNames from "classnames";
import { CaretLeft } from "phosphor-react";

interface ItemInterface {
    text: string;
    onClick?(value: boolean): void;
    setDisplay?(value: boolean): void;
    isLogOff: boolean;
    showSells?: boolean;
}

export const AsideItem = ({ text, onClick, isLogOff, setDisplay, showSells }: ItemInterface) => {

    const handleDisplay = () => {
        if (text === 'Registro de compras') return setDisplay?.(true)

        setDisplay?.(false)
    }

    if (isLogOff)
        return <li onClick={() => onClick?.(true)} className='hover:hover:bg-gray-300 cursor-pointer border-b border-gray-400 py-3 px-4 w-full'>{text}</li>

    return (
        <li onClick={() => handleDisplay()} className='hover:hover:bg-gray-300 flex justify-between cursor-pointer border-b border-gray-400 py-3 px-4 w-full'>
            <span>{text}</span>
            {(showSells && text==='Registro de compras') || (!showSells && text!=='Registro de compras') ? <CaretLeft size={24} color="#2b2b2b" /> : <></>}
        </li>
    )
}