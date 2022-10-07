import React from 'react'

const Post = ({data}) => {
  return (
    <div className='border border-black w-5/6 mx-auto mt-5 mb-3 min-h-40 grid grid-rows-4 rounded-md'>
        {/* USER INFO */}
        {/* <div className='row-span-1 border border-black flex'>
            <h6 className='my-auto pl-2 text-lg font-medium'>{data.attributes.title}</h6>
        </div> */}
        {/* POST BODY */}
        <div className='row-span-2 flex'>
            <p className='p-2'>{data.attributes.body}</p>
        </div>
        <div className='row-span-1 border-t-2 grid grid-cols-4'>
            <div className='col-span-1 border-r-2'>
                image
            </div>
            <div className='col-span-3'>
                user info
                / date
            </div>
        </div>
        {/* ACTION BUTTONS */}
        <div className='row-span-1 flex justify-end border-t-2'>
            <div className='my-auto mr-2'>
                <button type='button' className='border px-2 bg-red-50 rounded-lg'>Quote</button>
            </div>
            <div className='my-auto mr-2'>
                <button type='button' className='border px-2 bg-red-50 rounded-lg'>Reply</button>
            </div>
        </div>
    </div>
  )
}

export default Post