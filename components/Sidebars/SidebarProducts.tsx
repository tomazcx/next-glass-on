import { CategorySidebar } from "./CategorySidebar";

interface CategoriesInterface{
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
    materials: CategoriesInterface[];
    selectedCategories: SelectedCategories;
    setCategories(category: string, value: string):void
}

export const SidebarProducts = ({colors, formats, materials, setCategories, selectedCategories} : SidebarInterface) => {
    return (
        <aside className="hidden md:flex bg-gray-100 col-span-1 h-full flex-col py-8 ">
            <ul>
                <li className='text-lg py-4 pl-3'>Filtrar por:</li>
                <CategorySidebar selectedCategories={selectedCategories} key={'01'} setCategories={setCategories} categoryName={'cor'} array={colors} />
                <CategorySidebar selectedCategories={selectedCategories} key={'02'} setCategories={setCategories} categoryName={'formato'} array={formats} />
                <CategorySidebar selectedCategories={selectedCategories} key={'03'} setCategories={setCategories} categoryName={'material'} array={materials} />

            </ul>

        </aside>
    )
}