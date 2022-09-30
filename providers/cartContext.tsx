import {createContext, useState} from 'react'

interface ChildrenInterface{
    children: React.ReactNode
}

interface InitialValueInterface{
    value: number;
    setValue(value:number):void;
}

const initialValue: InitialValueInterface ={
    value: 0,
    setValue:()=>{}
}


export const CartContext = createContext(initialValue);

export const CartProvider = ({children} : ChildrenInterface) => {

    const [value, setValue] = useState(initialValue.value)

    return(
        <CartContext.Provider value={{value, setValue}}>
            {children}
        </CartContext.Provider>
    )
}