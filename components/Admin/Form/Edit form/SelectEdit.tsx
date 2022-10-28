interface ValueInterface {
    name: string
}

interface SelectInterface {
    array?: any[],
    title: string,
    initialValue?: ValueInterface,
    editMode: boolean,
    register?:any,
    id: string;
}

export const SelectEdit = ({ array, title, initialValue, editMode, register, id }: SelectInterface) => {
    return (
        <span className="font-semibold">
            {title}:
            {editMode ?
                <select id={id} name={id} {...register(id)} defaultValue={initialValue?.name}  className="font-normal">
                    {array?.map((category:ValueInterface) => <option key={category.name} value={category.name}>{category.name}</option>)}
                </select> :
                <span className="font-normal">{initialValue?.name} </span>
            }

        </span>
    )
}