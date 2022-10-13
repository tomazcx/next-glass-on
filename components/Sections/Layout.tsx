import { Footer } from "./Footer"
import { Header } from "./Header"

interface ChildrenInterface {
    children: React.ReactNode
}

export const Layout = ({ children }: ChildrenInterface) => {
    return (
        <div className=' flex flex-col justify-between'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}