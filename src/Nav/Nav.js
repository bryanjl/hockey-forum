import React from 'react'
import { MdPerson, MdHome, MdMessage } from 'react-icons/md'
import Tab from './comps/Tabs'

const Nav = ({ openNav }) => {
  return (
    <div className={`w-3/4 h-screen border border-r-black absolute top-28 z-10 bg-blue-50 ${openNav ? `left-0` : `-left-full`} transition-all ease-in-out duration-700`} >
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