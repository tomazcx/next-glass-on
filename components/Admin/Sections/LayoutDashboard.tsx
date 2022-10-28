import { ReactNode, useEffect } from "react"
import { Aside } from "./Aside"
import { Header } from "./Header"
import { parseCookies } from 'nookies'
import { Router, useRouter } from "next/router"

interface LayoutInterface{
    children: ReactNode
}

export const LayoutDashboard = ({children} : LayoutInterface) => {
  const router = useRouter()

  const verifyLogin = () => {
    const cookies = parseCookies()
    if(cookies['nextauth-token'] === undefined) return router.push("/admin/login")
  }

  useEffect(() => {
    verifyLogin()
  }, [])

    return(
        <div className="flex-col h-screen flex">
          <Header />
          <main className='grid lg:grid-cols-5 flex-1'>
            <Aside />
            {children}
          </main>
        </div>
    )
}