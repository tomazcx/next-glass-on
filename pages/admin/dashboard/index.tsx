import { Aside } from "../../../components/Admin/Sections/Aside"
import { Header } from "../../../components/Admin/Sections/Header"


const HomeDashboard = () => {
    return(
        <div className="flex-col h-screen flex">
          <Header />
          <main className='grid grid-cols-5 flex-1'>
            <Aside />
            <h1>Bem vindo ao seu dashboard</h1>
          </main>
        </div>
    )
}

export default HomeDashboard