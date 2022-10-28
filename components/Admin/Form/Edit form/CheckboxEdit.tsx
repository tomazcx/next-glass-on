interface CheckboxInterface {
    editMode: boolean;
    label: string;
    value: boolean;
    id: string;
    register:any;
}

export const CheckboxEdit = ({ editMode, label, value, id, register }: CheckboxInterface) => {
    return (
        <span className="font-semibold">{label}
            {editMode ?
                <input {...register(id)} type="checkbox" className="ml-2" defaultChecked={value} name={id} id={id} />:
                <span className="font-normal"> {value ? 'Sim' : 'Não'}</span>
            }
        </span>

    )
}