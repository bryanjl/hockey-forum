import React from 'react'
import Post from '../../src/Posts/Post'
import {MdOutlineAccountCircle, MdAccessTime} from 'react-icons/md'
import HTMLEditor from '../../src/Editor/HTMLEditor'

const Thread = () => {
  return (
    <>
      <div className='m-5'>
        <h1 className='mb-3 text-3xl font-bold'>Oilers and Coyotes</h1>
        <div className='flex justify-around'>
          <div className='flex'>
            <MdOutlineAccountCircle size={25} />
            <p className='italic font-light pl-2'>brybry</p>
          </div>
          <div className='flex'>
            <MdAccessTime size={25} />
            <p className='italic font-light pl-2'>September 1, 2022</p>
          </div>
        </div>   
      </div>
      <Post />
      <Post />
      <Post />

      {/* <HTMLEditor /> */}
    </>
  )
}

export default Thread