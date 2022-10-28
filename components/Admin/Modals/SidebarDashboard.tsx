import Link from "next/link";
import { Bag, Eyeglasses, Palette, WaveSquare, X } from "phosphor-react";
import { ReactNode } from "react";
import { Collapse } from "../Aside/Collapse";
import { CollapseMobile } from "../Aside/CollapseMobile";

interface SidebarInterface{
    handleSidebar (value:boolean):void;
}

interface ItemInterface {
    title: string;
    link: string;

}

interface ListInterface {
    id: string,
    name: string,
    icon: ReactNode,
    items: ItemInterface[]

}


export const SidebarDashboard = ({handleSidebar} : SidebarInterface) => {

    const lists: ListInterface[] = [
        {
            id: '00',
            name: 'Produtos',
            icon: <Bag size={26} color="#000" />,
            items: [
                { 
                    title: "Listar produtos",
                    link: "/admin/dashboard/products/all"
                },
                { 
                    title: "Registrar produto",
                    link: "/admin/dashboard/products/register"
                }
            ]
        },
        {
            id: '01',
            name: 'Materiais',
            icon: <Eyeglasses size={26} color="#000" />,
            items: [
                { 
                    title: "Listar materiais",
                    link: "/admin/dashboard/materials/all"
                },
                { 
                    title: "Registrar materiais",
                    link: "/admin/dashboard/materials/register"
                }
            ]
        },
        {
            id: '02',
            name: 'Cores',
            icon: <Palette size={26} color="#030303" />,
            items: [
                { 
                    title: "Listar cores",
                    link: "/admin/dashboard/colors/all"
                },
                { 
                    title: "Registrar cores",
                    link: "/admin/dashboard/colors/register"
                }
            ]
        },
        {
            id: '03',
            name: 'Formatos',
            icon: <WaveSquare size={26} color="#030303" />,
            items: [
                { 
                    title: "Listar formatos",
                    link: "/admin/dashboard/formats/all"
                },
                { 
                    title: "Registrar formatos",
                    link: "/admin/dashboard/formats/register"
                }
            ]
        }
    ]

    return(
        <>
            <X size={32} color="#000000" onClick={() => handleSidebar(false)} />
            <nav className='flex flex-col gap-6 font-bold'>
            {lists.map(list => {
                return <CollapseMobile key={list.id} icon={list.icon} name={list.name} items={list.items} />
            })}
            </nav>
        </>
    )
}