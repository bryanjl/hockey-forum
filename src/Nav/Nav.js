import React, { useState } from 'react'
import { MdPerson, MdHome, MdMessage } from 'react-icons/md'
import Login from './comps/Login'
import Tab from './comps/Tabs'

const Nav = ({ openNav }) => {
  const [openLogin, setOpenLogin] = useState(false);
  
  const handleClick = () => {
    setOpenLogin(!openLogin);
  }
  return (
    <div className={`w-3/4 h-screen border border-r-black absolute top-28 z-10 bg-blue-50 ${openNav ? `left-0` : `-left-full`} transition-all ease-in-out duration-700`} >
      <div onClick={handleClick} className='w-full h-20 grid grid-cols-4 border-b-2 border-b-slate-400 shadow-md'>
        <div className='col-span-1 flex border-r-2 border-r-slate-250'>
        <MdPerson className='m-auto' size={40} />
        </div>
        <div className='col-span-3 flex'>
          <h1 className={` text-2xl mx-5 my-auto`}>Login</h1>
        </div>
      </div>

      {openLogin &&
        <Login />
      }
      
      <Tab text='pilgrimBry' italic='italic'>
        <MdPerson className='m-auto' size={40} />
      </Tab>
      <Tab text='Home' >
        <MdHome className='m-auto' size={40} />
      </Tab>
      <Tab text='Forums'>
        <MdMessage className='m-auto' size={30} />
      </Tab>
    </div>
  )
}

export default Nav