interface InputInterface {
    text: string;
    type: string;
    id: string;
    register?: any;
    onChange? (e: InputEvent):void;
}

export const Input = ({ text, type, id, register, onChange}: InputInterface) => {
    return (
        <div className="flex-col flex gap-2 col-span-6">
            <label htmlFor={id}>{text}</label>
            <input {...register?.(id)} onChange={(e:InputEvent) => onChange?.(e)} type={type} name={id} id={id} className=" py-[2px] px-2 bg-gray-200 rounded w-10/12 max-w-[500px]" />
        </div>
    )
}