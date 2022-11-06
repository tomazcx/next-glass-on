import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../components/Form/Input"
import { Layout } from "../components/Sections/Layout"
import { CREATE_CLIENT } from "../graphql/mutations/create/registerClient"

const Register = () => {

  const router = useRouter()

  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(false)
  const [registerClient] = useMutation(CREATE_CLIENT, {
    onCompleted: () => router.push("/")
  })

  const handleRegister = (data: any) => {

    try {
      if (data.password === data.passwordTwo) {
        const name = data.name + data.surname
        registerClient({
          variables: {
            email: data.email,
            birthDate: data.birthDate,
            password: data.password,
            name: name
          }
        })

      } else {

        throw new Error

      }
    } catch (e) {
      setError(true)
    }
  }

  return (
    <Layout>
      <main className="flex flex-col items-center w-full my-12 mt-28">
        <form onSubmit={handleSubmit(data => handleRegister(data))} className="flex flex-col gap-7 w-11/12 max-w-[600px]">
          <h1 className="text-3xl">Cadastre sua conta</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio officia corrupti enim quam nesciunt. Ut labore magni quas repellendus at veritatis ab in placeat aut, eius voluptatum? Dicta, id rerum!</p>
          <Input register={register} id="name" text="Primeiro nome*" type="text" />
          <Input register={register} id="surname" text="Sobrenome*" type="text" />
          <Input register={register} id="email" text="Email*" type="email" />
          <Input register={register} id="birthDate" text="Data de nascimento*" type="date" />

          <div className="grid grid-cols-2 gap-4">
            <Input register={register} id="password" text="Senha*" type="password" />
            <Input register={register} id="passwordTwo" text="Repetir senha*" type="password" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
          <button className="bg-gray-800 rounded-lg px-4 py-2 w-full md:w-36 text-white hover:bg-gray-700 transition-colors">Cadastrar-se</button>
          {error ? <span className="text-red-400">Senhas não coincidem</span> : <></>}
          </div>
        </form>


      </main>
    </Layout>
  )
}


export default Register