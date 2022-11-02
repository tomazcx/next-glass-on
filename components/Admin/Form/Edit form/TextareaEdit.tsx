interface InterfaceTextarea {
    id: string;
    editMode: boolean;
    value: string;
    register: any;
}

export const TextareaEdit = ({ id, editMode, value, register }: InterfaceTextarea) => {

    if (editMode)
        return (
            <textarea className='font-normal' {...register(id)} id={id} name={id} disabled={!editMode} defaultValue={value} />
        )

    return (
        <>
            <p className="block md:hidden">{value?.substring(0, 40)}{value?.length >40 ? '...' : ''}</p>
            <p className="hidden md:block">{value}</p>
        </>
    )
}