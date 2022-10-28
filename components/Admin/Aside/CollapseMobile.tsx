import Link from "next/link";
import { CaretRight } from "phosphor-react";
import { ReactNode, useContext, useState } from "react";


interface ItemInterface {
    title: string;
    link: string;

}

interface CollapseInterface {
    icon: ReactNode;
    name: string;
    items: ItemInterface[];
}

export const CollapseMobile = (props: CollapseInterface) => {

    const [active, setActive] = useState<boolean>(false);
    let count =0

    return (
        <div>
            <div onClick={() => setActive(prevState => !prevState)} className=" w-full cursor-pointer flex justify-between   items-center">
                <div className="flex items-center gap-4">
                    {props.icon}
                    <strong>{props.name}</strong>    
                </div>
                
                <CaretRight size={24} color="#000" className={`${active ? 'rotate-90' : ''} transition-all`} />
            </div>
            <div className={`flex flex-col ${active ? "" : "hidden"}`}>
                {props.items.map(item => {
                    ++count;
                    return <Link key={`0${count}`} href={item.link} passHref><a className=" w-full py-4 px-12 hover:bg-gray-200 transition-all">{item.title}</a></Link>
                })}
            </div>
        </div>

    )
}