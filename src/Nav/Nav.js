import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { UserContext } from '../context/UserContext'
import { MdPerson, MdHome, MdMessage } from 'react-icons/md'
import Login from './comps/Login'
import Tab from './comps/Tabs'

const Nav = ({ openNav, setOpenNav }) => {
  const {user} = useContext(UserContext);
  const [openLogin, setOpenLogin] = useState(false);

  // console.log(user);
  
  const handleClick = () => {
    setOpenLogin(!openLogin);
  }

  const handleOpenNav = () => {
    setOpenNav(!openNav)
  }

  //html editor text appears over nav bar

  return (
    <div className={`w-3/4 h-screen border border-r-black absolute top-28 z-100 bg-blue-50 ${openNav ? `left-0` : `-left-full`} transition-all ease-in-out duration-700`} >
      {!user &&
        <div onClick={handleClick} className='w-full h-20 grid grid-cols-4 border-b-2 border-b-slate-400 shadow-md'>
          <div className='col-span-1 flex border-r-2 border-r-slate-250'>
            <MdPerson className='m-auto' size={40} />
          </div>
          <div className='col-span-3 flex'>
            <h1 className={` text-2xl mx-5 my-auto`}>Login</h1>
          </div>
        </div>

      }

      {openLogin &&
        <Login />
      }

      {user &&
        <Tab text={user} italic='italic'>
          <MdPerson className='m-auto' size={40} />
        </Tab>
      }
      <Link href='/'>
        <a onClick={handleOpenNav}>
        <Tab text='Home' >
          <MdHome className='m-auto' size={40} />
        </Tab>
        </a>
      </Link>
      {/* <Tab text='Forums'>
        <MdMessage className='m-auto' size={30} />
      </Tab> */}
    </div>
  )
}

export default Nav