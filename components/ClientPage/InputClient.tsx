interface InputInterface{
    data?: string;
    label: string;
    type:string;
    id:string;
    register: any;
}

export const InputClient = ({data, label, type, id, register} : InputInterface) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}:</label>
            <input defaultValue={data} type={type} {...register(id)} id={id} name={id} className='bg-gray-200 py-1 px-2 rounded' />
        </div>
    )
}