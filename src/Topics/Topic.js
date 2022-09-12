import React from 'react'
import { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import ForumList from './ForumList';

const Topic = ({ topicTitle, forums }) => {
    const [openList, setOpenList] = useState(false);

    return (
        <>
            {/* DROPDOWN */}
            <div className='w-5/6 m-auto border border-black rounded-md mt-4'>
                <div onClick={() => setOpenList(!openList)} className='py-3 pl-2 flex justify-between'>
                    <h3 className='text-xl'>{topicTitle}</h3>
                    <MdArrowDropDown className={`${openList ? 'hidden' : ''}`} size={35} />
                    <MdArrowDropUp className={`${openList ? '' : 'hidden'}`} size={35} />
                </div>
                {
                forums.map((forum, i) => 
                    <>
                        <ForumList key={i} openList={openList} forumTitle={forum} />        
                    </>
                )}  
            </div>
        </>
    )
}

export default Topic