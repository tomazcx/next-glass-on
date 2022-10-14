import classNames from "classnames";
import { useState } from "react";

interface InputProps {
    text: string;
    type: string;
    value?: string;
    funChange? (value: string):void;
    funFetch? ():void;
}



export const Input = (props: InputProps) => {
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')

    const handleFocusOut = () =>{
        if(value === ''){
            setFocus(false)
        }
    }


    return (
        <div className="flex flex-col w-full">
            <span
                className={classNames('relative z-0 transition-all', {
                    'top-5' : !focus,
                    'text-sm top-0' : focus || props.type==='date' ||  props.type==='month'  || (props.value !== '' && props.value !== undefined )
                })}
            >{props.text}</span>
            <input 
            type={props.type} 
            value={props.value} 
            className="border-b w-full outline-none relative z-10 bg-transparent border-black" 
            onChange={(e) => {
                if(props.funChange !== undefined){
                    props.funChange(e.target.value)
                }
                setValue(e.target.value)
            }} 
            onFocus={() => setFocus(true)}  
            onBlur={() => {

                if(props.funFetch !== undefined){
                    props.funFetch()
                }

                handleFocusOut()
                }}  />
        </div >
    )



}