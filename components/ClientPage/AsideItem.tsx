export const AsideItem = ({text, onClick} : {text:string; onClick?(value:boolean):void}) => {
    return(
        <li onClick={() => onClick?.(true)} className='hover:hover:bg-gray-300 cursor-pointer border-b border-gray-400 py-3 px-4 w-full'>{text}</li>
    )
}