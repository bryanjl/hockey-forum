import React from 'react'
import { MdOutlineList, MdPostAdd } from 'react-icons/md'

const ForumList = ({ forumTitle, openList }) => {


    return (
        <div className={`${openList ? 'block' : 'hidden'}`}>
            <div className='w-full h-20 border-t-2 p-2 pl-4 bg-slate-50 hover:bg-slate-200 cursor-pointer'>
                <h1 className='font-medium'>{forumTitle}</h1>
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
    )
}

export default ForumList