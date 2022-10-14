import { useState } from 'react'
import { UserContext } from '../src/context/UserContext'
import Layout from '../src/Layout/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState()

  return (
    <Layout>
      <UserContext.Provider value={{user, setUser}}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  )
}

export default MyApp
