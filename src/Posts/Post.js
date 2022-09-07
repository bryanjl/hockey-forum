import React from 'react'

const Post = () => {
  return (
    <div className='border border-black w-5/6 mx-auto mt-5 mb-3 h-40 grid grid-rows-4 rounded-md'>
        {/* USER INFO */}
        <div className='row-span-1 border border-black flex'>
            <h6 className='my-auto pl-2 text-lg font-medium'>USER INFO</h6>
        </div>
        {/* POST BODY */}
        <div className='row-span-2 border border-black flex'>
            <p className='p-2'>Body</p>
        </div>
        {/* ACTION BUTTONS */}
        <div className='row-span-1 border border-black flex justify-end'>
            <div className='my-auto mr-2'>
                <button type='button' className='border px-2 bg-red-50 rounded-lg'>Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Post