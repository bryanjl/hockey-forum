import React, { useState } from 'react'
import Logo from './Logo'
import {MdMenu} from "react-icons/md"

const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <header className='sticky top-0'>
            <div className='h-28 w-full bg-black grid grid-cols-4'>
                <div className='flex'>
                    <MdMenu onClick={() => setOpenNav(!openNav)} color='white' size={50} className='m-auto' />
                </div>
                <div className={`w-3/4 h-screen border border-r-black absolute top-28 z-10 bg-blue-50 ${openNav ? `left-0` : `-left-full`} transition-all ease-in-out duration-700`} >
                    <h3 className='text-2xl'>Threads</h3>
                </div>
                <Logo />
            </div>
        </header>
    )
}

export default Header