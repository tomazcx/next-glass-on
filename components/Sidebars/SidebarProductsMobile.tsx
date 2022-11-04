import { X } from 'phosphor-react'

import { CategorySidebar } from "./CategorySidebar";

interface CategoriesInterface {
    name: string;
    id: string;
}

interface SelectedCategories{
    material:string;
    color:string;
    format:string;
}

interface SidebarInterface {
    colors: CategoriesInterface[];
    formats: CategoriesInterface[];
    handleSidebar(value: boolean): void;
    materials: CategoriesInterface[];
    setCategories(category: string, value: string):void
    selectedCategories: SelectedCategories;

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
                    <CategorySidebar selectedCategories={props.selectedCategories} key={'01'} setCategories={props.setCategories} categoryName={'cor'} array={props.colors} />
                <CategorySidebar selectedCategories={props.selectedCategories} key={'02'} setCategories={props.setCategories} categoryName={'formato'} array={props.formats} />
                <CategorySidebar selectedCategories={props.selectedCategories} key={'03'} setCategories={props.setCategories} categoryName={'material'} array={props.materials} />

                </ul>

            </aside>
        </>
    )
}