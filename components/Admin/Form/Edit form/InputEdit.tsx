interface InputInterface{
    register?: any;
    editMode: boolean;
    label:string;
    id: string;
    value: string;
}

export const InputEdit = ({register, label, id, editMode, value} : InputInterface) => {
    return(
        <label htmlFor={id} className="font-semibold">
            {label} 
            {editMode ? 
            <input type="text" {...register(id)} id={id} name={id} className='font-normal ml-1' disabled={!editMode} defaultValue={value} /> :
            <span className="font-normal ml-1">{value}</span>
            }
        </label>

    )
}