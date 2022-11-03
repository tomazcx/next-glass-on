import { CategorySidebar } from "./CategorySidebar";

interface CategoriesInterface{
    name: string;
    id: string;
}

interface SidebarInterface {
    colors: CategoriesInterface[];
    formats: CategoriesInterface[];
    materials: CategoriesInterface[];
}

export const SidebarProducts = ({colors, formats, materials} : SidebarInterface) => {
    return (
        <aside className="hidden md:flex bg-gray-100 col-span-1 h-full flex-col py-8 ">
            <ul>
                <li className='text-lg py-4 pl-3'>Filtrar por:</li>
                <CategorySidebar category={'cor'} array={colors} />
                <CategorySidebar category={'formato'} array={formats} />
                <CategorySidebar category={'material'} array={materials} />

            </ul>

        </aside>
    )
}