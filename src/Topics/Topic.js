import React from 'react'
import { useState } from 'react'
import {MdArrowDropDown, MdArrowDropUp, MdOutlineList, MdPostAdd} from 'react-icons/md'

const Topic = () => {
    const [openList, setOpenList] = useState(false);

  return (
      <>
          {/* DROPDOWN */}
          <div className='w-5/6 m-auto border border-black rounded-md mt-4'>
              <div onClick={() => setOpenList(!openList)} className='py-3 pl-2 flex justify-between'>
                  <h3 className='text-xl'>General Hockey Discussion</h3>
                  <MdArrowDropDown className={`${openList ? 'hidden' : ''}`} size={35} />
                  <MdArrowDropUp className={`${openList ? '' : 'hidden'}`} size={35} />
              </div>
              <div className={`${openList ? 'block' : 'hidden'}`}>
                  <div className='w-full h-20 border border-black p-2 pl-4'>
                      <h1 className='font-medium'>Trade Ruors and Free Agent Talk</h1>
                      <div className='m-2 flex'>
                          <div className='my-auto flex'>
                              <MdOutlineList className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                          <div className='flex ml-2'>
                              <MdPostAdd className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                      </div>
                  </div>
                  <div className='w-full h-20 border border-black p-2 pl-4'>
                      <h1 className='font-medium'>Trade Ruors and Free Agent Talk</h1>
                      <div className='m-2 flex'>
                          <div className='my-auto flex'>
                              <MdOutlineList className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                          <div className='flex ml-2'>
                              <MdPostAdd className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                      </div>
                  </div>
                  <div className='w-full h-20 border border-black p-2 pl-4'>
                      <h1 className='font-medium'>Trade Ruors and Free Agent Talk</h1>
                      <div className='m-2 flex'>
                          <div className='my-auto flex'>
                              <MdOutlineList className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                          <div className='flex ml-2'>
                              <MdPostAdd className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                      </div>
                  </div>
                  <div className='w-full h-20 border border-black p-2 pl-4'>
                      <h1 className='font-medium'>Trade Ruors and Free Agent Talk</h1>
                      <div className='m-2 flex'>
                          <div className='my-auto flex'>
                              <MdOutlineList className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                          <div className='flex ml-2'>
                              <MdPostAdd className='' size={25} />
                              <p className='pl-1 font-light'>25</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Topic