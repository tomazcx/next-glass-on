import { LayoutDashboard } from "../../../components/Admin/Sections/LayoutDashboard"


const HomeDashboard = () => {
    return(
        <LayoutDashboard>
            <div className="flex flex-col items-center gap-4 mt-6 col-span-4">
                <h1 className="text-center text-xl md:text-2xl mt-6">Bem vindo ao seu dashboard Glass On</h1>
                <h2 className="text-center md:text-lg">Faça o cadastro de produtos e visualize todos os seus detalhes.</h2>
            </div>
        </LayoutDashboard>
    )
}

export default HomeDashboard