import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Answer } from './Answer'
import classNames from 'classnames'

interface QuestionInterface{
    text: string
}

export const Question = (props: QuestionInterface) => {

    const [answer, setAnswer] = useState(false)

    return (
        <div className='w-11/12'>
            <div
                onClick={() => setAnswer(!answer)}
                className={classNames("border cursor-pointer border-black items-center flex justify-between py-2 px-8", {
                    'rounded-full': !answer, 
                    'rounded-t-full rounded-b-none border-b-0': answer
                })}>

                <span>{props.text}</span>
                <PlusCircle size={25} color="#000000" className={classNames('transition-all transform',{
                    'rotate-45': answer
                })} />
            </div>
            {answer ? <Answer /> : <></>}
        </div>
    )

}