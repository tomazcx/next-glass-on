import { X } from 'phosphor-react'

interface SidebarInterface {
    handleSidebar(value: boolean): void;
}

export const SidebarProductsMobile = (props: SidebarInterface) => {

    return (
        <>
            <X size={32} color="#000000" onClick={() => props.handleSidebar(false)} />
           <ul className='text-xl'>
                <li>Filtrar por:</li>
                <li>
                    <span className="mx-4">Cor</span>
                    <ul className="mx-8">
                        <li className="flex gap-2 items-center">
                            <input type="checkbox" name="black-color" id="black-color" className="rounded-md" />
                            <label htmlFor="black-color">Preto</label>

                        </li>
                        <li className="flex gap-2 items-center">
                            <input type="checkbox" name="black-color" id="black-color" className="rounded-md" />
                            <label htmlFor="black-color">Outros</label>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="mx-4">Material</span>
                    <ul className="mx-8">
                        <li className="flex gap-2 items-center">
                            <input type="checkbox" name="black-color" id="black-color" className="rounded-md" />
                            <label htmlFor="black-color">Plástico</label>

                        </li>
                        <li className="flex gap-2 items-center">
                            <input type="checkbox" name="black-color" id="black-color" className="rounded-md" />
                            <label htmlFor="black-color">Metal</label>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="mx-4">Formato</span>
                    <ul className="mx-8">
                        <li className="flex gap-2 items-center">
                            <input type="checkbox" name="black-color" id="black-color" className="rounded-md" />
                            <label htmlFor="black-color">Redondo</label>

                        </li>
                        <li className="flex gap-2 items-center">
                            <input type="checkbox" name="black-color" id="black-color" className="rounded-md" />
                            <label htmlFor="black-color">Outros</label>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}