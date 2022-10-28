interface InterfaceTextarea{
    id: string;
    editMode: boolean;
    value:string;
    register:any;
}

export const TextareaEdit = ({id, editMode, value, register} : InterfaceTextarea) => {

    if(editMode)
        return(
            <textarea className='font-normal' {...register(id)} id={id} name={id} disabled={!editMode} defaultValue={value} />
        )

    return(
        <p>{value}</p>
    )
}