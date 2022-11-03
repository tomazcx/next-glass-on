import { useState } from "react"
import { ItemFilterSidebar } from "./ItemFilterSidebar";

interface CategoryInterface {
    name: string;
    id: string;
}

interface CategoriesInterface {
    category: string
    array: CategoryInterface[]
}

export const CategorySidebar = ({ category, array }: CategoriesInterface) => {
    const [collapsed, setCollapse] = useState(false)
    return (
        <>
            <li onClick={() => setCollapse(prevState => !prevState)} className={`w-full border-b ${collapsed ? 'bg-gray-200' : ''} border-gray-200 pl-4 py-3 transition-colors cursor-pointer hover:bg-gray-200`}>
                <span className="uppercase text-lg">{category}</span>
            </li>
            <ul>
                {collapsed ? array.map((category: CategoryInterface) => <ItemFilterSidebar key={category.id} name={category.name} />) : <></>}
            </ul>
        </>
    )
}