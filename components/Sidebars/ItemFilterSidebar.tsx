import { CaretRight } from "phosphor-react"
import { useState } from "react";

interface SelectedCategories{
    material:string;
    color:string;
    format:string;
}

interface ItemInterface{
    name:string;
    category:string;
    setCategories (value:string, category:string):void;
    selectedCategories: SelectedCategories;
}

export const ItemFilterSidebar = ({name, setCategories, category, selectedCategories} : ItemInterface) => {

    const [isSelected, setSelected] = useState(false)

    const handleSelect = () => {
        setCategories(category, name)
        setSelected(true)
    }

    const handleHighlight = () => {
        if(category === 'cor' && selectedCategories.color === name)
            return 'bg-gray-200'
         if(category === 'material' && selectedCategories.material === name)
            return 'bg-gray-200'
        if(category === 'formato' && selectedCategories.format === name)
            return 'bg-gray-200'
    }

    return(
        <li onClick={() => handleSelect()} className={`flex ${handleHighlight()} items-center gap-4 px-8 py-3 hover:bg-gray-200 transition-colors cursor-pointer`}>
            <CaretRight size={18} />
            <span className='text-sm sm:text-normal'>{name}</span>
        </li>
    )   
}