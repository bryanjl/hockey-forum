import React from 'react'

import { MdPostAdd } from 'react-icons/md'

const ThreadCard = ({threadTitle, threadDescription, postCount, creator}) => {
    return (
        <>
            <div className="w-full min-h-36 border border-black mt-2 rounded-sm grid grid-cols-4 cursor-pointer shadow-lg">
                <div className='col-span-1 border-r-2'>
                    {/* PROFILE PICTURE */}
                </div>
                <div className='col-span-3 grid grid-rows-2'>
                    <div className='p-1'>
                        <h1 className='w-full font-bold'>{threadTitle}</h1>
                    </div>
                    <div className='p-1'>
                        <p>{threadDescription}</p>
                    </div>
                    <div className='border border-t-2 px-2 py-2 flex justify-between'>
                        {/* NAME OF CREATOR */}
                        <div className=''>
                            <p>{creator}</p>
                        </div>
                        {/* NUMBER OF RESPONSES */}
                        <div className='flex'>
                            <MdPostAdd className='' size={25} />
                            <p>{postCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default ThreadCard