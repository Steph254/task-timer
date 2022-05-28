import { useState } from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout/Layout"
import { UserContext } from "../contexts/UserContext"

function MyApp({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState("")

  return (
    <UserContext.Provider value={{ username, setUsername }}> 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </UserContext.Provider>
  )
}

export default MyApp