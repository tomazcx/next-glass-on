import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { InputSearch } from "../../../../components/Admin/Form/InputSearch"
import { ItemCategory } from "../../../../components/Admin/Items/Category"
import { LayoutDashboard } from "../../../../components/Admin/Sections/LayoutDashboard"
import { DELETE_FORMAT } from "../../../../graphql/mutations/delete/deleteFormat"
import { FORMATS_QUERY } from "../../../../graphql/queries/getFormats"
import Modal from 'react-modal'


interface FormatInterface {
    name: string;
    id: string;
}

const AllFormats = () => {
    const [text, setText] = useState('')
    const [id, setId] = useState('')
    const [modal, setModal] = useState(false)

    const { data } = useQuery(FORMATS_QUERY)
    const [deleteMutation] = useMutation(DELETE_FORMAT, {
        onCompleted: () => setModal(false),
        refetchQueries: [{query: FORMATS_QUERY}]
    })

    const filteredArray = text.length > 0 ? data.formats.filter((format: FormatInterface) => format.name.toLowerCase().includes(text.toLowerCase())) : []

    return (
        <LayoutDashboard>
             <Modal
                isOpen={modal}
                ariaHideApp={false}
                className="bg-gray-100 border-none absolute top-[250px] left-1/2 transform p-4 -translate-x-1/2 flex flex-col gap-4"
            >
                <span className="text-xl">Deseja mesmo deletar o formato?</span>
                <hr />
                <span>Todos os produtos categorizados com ele serão deletados automaticamente.</span>
                <div className="flex gap-4">
                    <button onClick={() => setModal(false)} className="uppercase px-2 text-center bg-blue-300 hover:bg-blue-400 transition-colors rounded">cancelar</button>
                    <button onClick={() =>  deleteMutation({ variables: { id: id } })} className="uppercase px-4 hover:bg-red-400 transition-colors bg-red-300 rounded">Deletar</button>
                </div>
            </Modal>
            <section className='flex flex-col p-8 gap-6 col-span-4 w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl'>Formatos de armação cadastrados</h1>

                    <InputSearch onChange={setText} />
                </div>
                <hr />
                <div className='grid grid-cols-12'>
                    <span className="col-span-2 text-center">Nome</span>
                </div>
                <div className="flex flex-col gap-2">
                    {text.length > 0 ?
                     filteredArray.map((format: FormatInterface) => <ItemCategory key={format.id} deleteModal={setModal} setId={setId} item={format} />) :
                     data?.formats?.map((format: FormatInterface) => <ItemCategory  key={format.id}deleteModal={setModal} setId={setId} item={format} />)}
                </div>
            </section>
        </LayoutDashboard>
    )
}

export default AllFormats