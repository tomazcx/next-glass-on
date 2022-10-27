interface DataInterface{
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface SelectInterface{
    text: string;
    options?: DataInterface[];
    id: string;
    onChange? (e:any):void
}

export const Select = ({ text, options, id, onChange}: SelectInterface) => {
    return (
        <div className="flex-col flex gap-3 col-span-6">
            <label htmlFor={id}>{text}</label>
            <select onChange={(e) => onChange?.(e)} name={id} id={id} className="py-[2px] px-2 bg-gray-200 rounded-lg w-10/12 max-w-[500px]">
                <option value="0" disabled selected>Selecione uma opção</option>
                {options?.map((option:DataInterface) => <option value={option.id}>{option.name}</option>)} 
            </select>
        </div>
    )
}