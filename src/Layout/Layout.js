import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Image from 'next/image'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='lg:grid lg:grid-cols-4'>
        
        {/* LEFT BAR - NAV */}
        <div className='lg:col-span-1 lg:border-r-2'>
          <div className=''>
            {/* LEAVE EMPTY FOR NOW */}
          </div>
        </div>

        {/* MAIN */}
        <div className='lg:col-span-2'>
          <main>{children}</main>
        </div>

        {/* //side bar */}
        <div className='lg:col-span-1'>
          <div className='lg:border-l-2 lg:p-10 h-full'>
            {/* links to sponsors/etc */}
            <div className='lg:w-full lg:mt-5 lg:block hidden'>
              <Image src='/4th_line_voice.png' width={500} height={500} alt='4th Line Voice' />
            </div>
            <div className='lg:w-full lg:mt-5 lg:block hidden'>
              <Image src='/five_for_fighting.png' width={500} height={500} alt='Five For Fighting' />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Layout