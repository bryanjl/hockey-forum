import React from 'react'
import {MdPostAdd, MdDoubleArrow} from 'react-icons/md'

const Thread = () => {
  return (
      <>
          {/* THREAD */}
          <div className='h-20 w-full grid grid-cols-4 border border-black p-2'>
              <div className='col-span-1 m-auto'>
                  <MdDoubleArrow size={50} />
              </div>
              <div className='col-span-3'>
                  <h1 className='text-lg'>Oilers and Coyotes</h1>
                  <div className='pt-2 flex'>
                      <MdPostAdd size={25} />
                      <p className='pl-1 font-light'>25</p>
                      <p className='pl-3 font-light text-italic italic'>brybry posted 33 minutes ago</p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Thread