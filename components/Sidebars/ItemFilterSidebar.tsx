import { CaretRight } from "phosphor-react"

export const ItemFilterSidebar = ({name} : {name:string}) => {
    return(
        <li className='flex items-center gap-4 px-8 py-3 hover:bg-gray-200 transition-colors cursor-pointer'>
            <CaretRight size={18} />
            <span>{name}</span>
        </li>
    )   
}