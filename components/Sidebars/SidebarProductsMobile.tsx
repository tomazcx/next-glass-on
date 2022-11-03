import { X } from 'phosphor-react'

import { CategorySidebar } from "./CategorySidebar";

interface CategoriesInterface {
    name: string;
    id: string;
}

interface SidebarInterface {
    colors: CategoriesInterface[];
    formats: CategoriesInterface[];
    handleSidebar(value: boolean): void;
    materials: CategoriesInterface[];
}

export const SidebarProductsMobile = (props: SidebarInterface) => {

    return (
        <>
            <aside className='text-xl'>
                <ul>
                    <li className='text-lg py-4 flex items-center pl-3 justify-between '>
                        <span>Filtrar por:</span>
                        <X size={18} color="#000000" onClick={() => props.handleSidebar(false)} />
                    </li>
                    <CategorySidebar key={'01'} category={'cor'} array={props.colors} />
                    <CategorySidebar key={'02'}  category={'formato'} array={props.formats} />
                    <CategorySidebar key={'03'}  category={'material'} array={props.materials} />

                </ul>

            </aside>
        </>
    )
}