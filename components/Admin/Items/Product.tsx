interface InterfaceProduct{
    productModal(value:boolean):void;    
    item: {
        id: string,
        name: string;
        sunLens: boolean;
        glassColor:{
            name:string;
        };
        material: {
            name:string;
        };
        format: {
            name:string;
        };
    }
    setId (value:string):void
}

export const ItemProduct = ({productModal, item, setId} : InterfaceProduct) => {

    const handleModal = () => {
        productModal(true)
        console.log(item.id)
        setId(item.id)
    }

    return (
        <div className='px-4 md:px-0 justify-between border text-sm md:text-normal rounded-lg bg-gray-200 flex gap-4 md:grid grid-cols-12 py-1 cursor-pointer hover:bg-gray-300 transition-colors' onClick={() => handleModal()}>
            <span className='col-span-2 text-center'>{item.name}</span>
            <span className='col-span-2 text-center'>{item.sunLens ? 'De sol' : 'De grau'}</span>
            <span className='col-span-2 text-center hidden md:block'>{item.glassColor.name}</span>
            <span className='col-span-2 text-center hidden md:block'>{item.material.name}</span>
            <span className='col-span-2 text-center hidden md:block'>{item.format.name}</span>
        </div>
    )
}