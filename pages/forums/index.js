import React from 'react'
import Thread from '../../src/Thread/Thread'

const Forum = () => {
  return (
    <>
      <div className='m-5'>
        <h1 className='mb-3 text-3xl font-bold'>Trade Rumors and Free Agent Talk</h1>
        <p>Trade rumors, transactions, and free agent talk. Rumors must use the RUMOR prefix in thread title. Proposals must contain the PROPOSAL prefix in the thread title.</p>
      </div>
      <Thread />
      <Thread />
    </>
  )
}

export default Forum