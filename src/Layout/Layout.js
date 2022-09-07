import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <main>{children}</main>
        {/* <Main /> */}
    </>
  )
}

export default Layout