import { ReactNode } from "react"
import { Aside } from "./Aside"
import { Header } from "./Header"

interface LayoutInterface{
    children: ReactNode
}

export const LayoutDashboard = ({children} : LayoutInterface) => {
    return(
        <div className="flex-col h-screen flex">
          <Header />
          <main className='grid grid-cols-5 flex-1'>
            <Aside />
            {children}
          </main>
        </div>
    )
}