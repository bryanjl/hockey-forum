import React, { useState } from 'react'
import Logo from './Logo'
import {MdMenu} from "react-icons/md"
import Nav from '../Nav/Nav';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <header className='sticky top-0'>
            <div className='h-28 w-full bg-black grid grid-cols-4'>
                <div className='flex'>
                    <MdMenu onClick={() => setOpenNav(!openNav)} color='white' size={50} className='m-auto' />
                </div>
                <Nav openNav={openNav} />
                <Logo />
            </div>
        </header>
    )
}

export default Header