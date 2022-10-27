import { Question } from "../components/Others/Question"
import { Layout } from "../components/Sections/Layout"

const Questions = () => {
  return (
    <Layout>
      <main className="flex items-center flex-col gap-4 my-12 mt-28">
        <h1 className="font-bold text-xl text-black">Dúvidas frequentes</h1>
        <p className="text-center px-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum exercitationem deserunt magni quaerat explicabo architecto fugiat vero numquam, adipisci dolores obcaecati, natus doloribus, quis sunt perspiciatis nisi cupiditate praesentium?</p>
        <Question text="Termos de uso" />
        <Question text="Trocas e devoluções" />
        <Question text="Termos de serviço" />
        <Question text="Política de reembolso" />
      </main>
    </Layout>
  )
}

export default Questions