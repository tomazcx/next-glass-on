import { CaretRight } from "phosphor-react";
import { useState } from "react"
import { ItemFilterSidebar } from "./ItemFilterSidebar";

interface SelectedCategories {
    material: string;
    color: string;
    format: string;
}

interface CategoryInterface {
    name: string;
    id: string;
}

interface CategoriesInterface {
    categoryName: string;
    setCategories(category: string, value: string): void;
    array: CategoryInterface[];
    selectedCategories: SelectedCategories;
}



export const CategorySidebar = ({ categoryName, array, setCategories, selectedCategories }: CategoriesInterface) => {
    const [collapsed, setCollapse] = useState(false)

    const handleHighlight = () => {
        if(categoryName === 'cor' && selectedCategories.color === '')
            return 'bg-gray-200'
         if(categoryName === 'material' && selectedCategories.material === '')
            return 'bg-gray-200'
        if(categoryName === 'formato' && selectedCategories.format === '')
            return 'bg-gray-200'
    }
    
    return (
        <>
            <li onClick={() => setCollapse(prevState => !prevState)} className={`w-full border-b ${collapsed ? 'bg-gray-200' : ''} border-gray-200 pl-4 py-3 transition-colors cursor-pointer hover:bg-gray-200`}>
                <span className="uppercase text-lg">{categoryName}</span>
            </li>
            <ul>
                {collapsed ?   <li onClick={() => setCategories(categoryName, '')} className={`flex ${handleHighlight()} items-center gap-4 px-8 py-3 hover:bg-gray-200 transition-colors cursor-pointer`}>
                    <CaretRight size={18} />
                    <span className='text-sm sm:text-normal'>TODOS</span>
                </li> : <></>}
               
                {collapsed ? array.map((category: CategoryInterface) => <ItemFilterSidebar selectedCategories={selectedCategories} category={categoryName} setCategories={setCategories} key={category.id} name={category.name} />) : <></>}
            </ul>
        </>
    )
}