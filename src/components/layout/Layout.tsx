import Navbar from "./Navbar"
import Footer from "./Footer"

import {ReactNode} from "react"
interface Props {
    children: ReactNode
  }

const Layout: React.FC <Props>= ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col grow">{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Layout