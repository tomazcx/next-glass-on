interface DataInterface{
    id: string;
    name: string;
}

interface SelectInterface{
    text: string;
    options?: DataInterface[];
    id: string;
    register: any
}

export const Select = ({ text, options, id, register}: SelectInterface) => {
    return (
        <div className="flex-col flex gap-3 col-span-6">
            <label htmlFor={id}>{text}</label>
            <select {...register(id)} name={id} id={id} className="py-[2px] px-2 bg-gray-200 rounded-lg w-10/12 max-w-[500px]">
                <option value="0" disabled selected>Selecione uma opção</option>
                {options?.map((option:DataInterface) => <option key={option.id} value={option.name}>{option.name}</option>)} 
            </select>
        </div>
    )
}