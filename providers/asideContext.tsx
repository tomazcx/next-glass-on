import {createContext,useState,ReactNode} from 'react'

interface ChildrenInterface{
    children:ReactNode;
}

interface InitialValueInterface{
    active:boolean;
    setActive(value:boolean):void;
}

const initialValue:InitialValueInterface = {
    active: false,
    setActive: () => {}
}

export const asideContext = createContext(initialValue)

export const AsideProvider = ({children}:ChildrenInterface) => {

    const [active, setActive] = useState(initialValue.active)

    return(
        <asideContext.Provider value={{active,setActive}}>

        </asideContext.Provider>
    )
}