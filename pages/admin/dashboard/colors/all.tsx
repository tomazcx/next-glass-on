import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { InputSearch } from "../../../../components/Admin/Form/InputSearch"
import { ItemCategory } from "../../../../components/Admin/Items/Category"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"
import { COLORS_QUERY } from "../../../../graphql/queries/categories/getColors"
import Modal from 'react-modal'
import { DELETE_COLOR } from "../../../../graphql/mutations/delete/deleteColor"

interface ColorInterface {
    id: string;
    name: string;
}

const AllColors = () => {

    const [text, setText] = useState('')
    const [modal, setModal] = useState(false)
    const [id, setId] = useState('')

    const { data } = useQuery(COLORS_QUERY)

    const [deleteMutation] = useMutation(DELETE_COLOR, {
        onCompleted: () => setModal(false),
        refetchQueries:[{query:COLORS_QUERY}]
    })

    const filteredArray = text.length > 0 ? data.colors.filter((color:ColorInterface) => color.name.toLowerCase().includes(text.toLowerCase())) : []

    return (
        <LayoutDashboard>
            <Modal
                isOpen={modal}
                ariaHideApp={false}
                className="bg-gray-100 border-none w-10/12 max-w-[400px] absolute top-[150px] lg:top-[250px] left-1/2 transform p-4 -translate-x-1/2 flex flex-col gap-4"
            >
                <span className="text-xl">Deseja mesmo deletar a cor?</span>
                <hr />
                <span>Todos os produtos categorizados com ela serão deletados automaticamente.</span>
                <div className="flex gap-4">
                    <button onClick={() => setModal(false)} className="uppercase px-2 text-center bg-blue-300 hover:bg-blue-400 transition-colors rounded">cancelar</button>
                    <button onClick={() =>  deleteMutation({ variables: { id: id } })} className="uppercase px-4 hover:bg-red-400 transition-colors bg-red-300 rounded">Deletar</button>
                </div>
            </Modal>
            <section className='flex flex-col p-8 gap-6 col-span-4 w-full'>
            <div className='flex md:items-center gap-4 justify-between flex-col md:flex-row'>
                    <h1 className='text-lg md:text-l '>Cores de armação cadastrados</h1>

                    <InputSearch onChange={setText} />
                </div>
                <hr />
                <div className='grid grid-cols-12'>
                    <span className="col-span-2 text-center">Nome</span>
                </div>
                <div className="flex flex-col gap-2">
                    {text.length > 0 ?
                    filteredArray.map((color: ColorInterface) => <ItemCategory key={color.id} item={color} deleteModal={setModal} setId={setId} />) :
                    data?.colors?.map((color: ColorInterface) => <ItemCategory key={color.id} item={color} deleteModal={setModal} setId={setId} />)}
                </div>
            </section>
        </LayoutDashboard>
    )
}

export default AllColors