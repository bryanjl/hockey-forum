import { useState, useEffect } from 'react'
import { UserContext } from '../src/context/UserContext'
import Layout from '../src/Layout/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let storedUsername = localStorage.getItem('username');
    let userRole = localStorage.getItem('role');
    let storedUser = {
      username: storedUsername,
      role: userRole
    }
    // console.log(storedUser)
    setUser(storedUser)
    
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>

        <Component {...pageProps} />

      </Layout>
    </UserContext.Provider>
  )
}

export default MyApp
