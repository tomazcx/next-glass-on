import { Trash } from "phosphor-react"

interface InterfaceCategory{
    deleteModal (value: boolean):void;
    item: {
        name: string;
        id: string;
    };
    setId (value:string):void;
}

export const ItemCategory = ({deleteModal, item, setId} : InterfaceCategory) => {

    const handleModal = () =>{
        deleteModal(true)
        setId(item.id)
    }
     return (
        <div className="bg-gray-200 rounded-lg flex justify-between md:grid grid-cols-12 items-center px-4 md:p-0" >
            <span className="col-span-2 text-center">{item.name}</span>

            <span className="col-start-12 col-span-1 py-1">
                <Trash size={24} color="#db000b" className='cursor-pointer' onClick={() => handleModal()} />
            </span>
        </div>
    )
}