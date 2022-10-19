import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import ForumList from './ForumList';

const Topic = ({ topicTitle, forums }) => {
    const [openList, setOpenList] = useState(false);

    return (
        <>
            {/* DROPDOWN */}
            <div className='w-5/6 m-auto border border-black rounded-md mt-4 cursor-pointer hover:bg-slate-50'>
                <div onClick={() => setOpenList(!openList)} className='py-3 pl-2 flex justify-between'>
                    <h3 className='text-xl'>{topicTitle}</h3>
                    <MdArrowDropDown className={`${openList ? 'hidden' : ''}`} size={35} />
                    <MdArrowDropUp className={`${openList ? '' : 'hidden'}`} size={35} />
                </div>
                {
                forums.map((forum) => 
                    <> 
                        <Link href={`/forums/${forum.id}`}>
                            <a>
                                <ForumList key={forum.id} openList={openList} forumTitle={forum.attributes.title} threadCount={forum.attributes.threads.data.length}  />        
                            </a>
                        </Link>
                    </>
                )}  
            </div>
        </>
    )
}

export default Topic