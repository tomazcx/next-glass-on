import { Input } from "../components/Form/Input"
import { Layout } from "../components/Sections/Layout"

const Register = () => {
  return (
    <Layout>
      <main className="flex flex-col items-center w-full my-12">
        <form action="" className="flex flex-col gap-7 w-11/12 max-w-[600px]">
          <h1 className="text-3xl">Cadastre sua conta</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio officia corrupti enim quam nesciunt. Ut labore magni quas repellendus at veritatis ab in placeat aut, eius voluptatum? Dicta, id rerum!</p>
          <Input text="Nome*" type="text" />
          <Input text="Sobrenome*" type="text" />
          <Input text="Email*" type="email" />
          <Input text="Data de nascimento*" type="date" />

          <div className="grid grid-cols-2 gap-4">
            <Input text="Senha*" type="password" />
            <Input text="Repetir senha*" type="password" />
          </div>

          <button className="bg-gray-800 rounded-lg px-4 py-2 w-full md:w-36 text-white hover:bg-gray-700 transition-colors">Cadastrar-se</button>
        </form>


      </main>
    </Layout>
  )
}

export default Register