import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import ForumList from './ForumList';

const Topic = ({ topicTitle, topicID }) => {
    const [openList, setOpenList] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [forums, setForums] = useState([]);

    useEffect(() => {
        setIsFetching(true)
        fetch(`http://localhost:5000/api/v1/forum/forums?topic=${topicID}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.success === false){
                    setForums([]);
                }else {
                    setForums(data.data);
                }
                setIsFetching(false)                
            })
    }, [topicID]);

    return (
        <>
            {/* DROPDOWN */}
            <div className='w-5/6 m-auto border border-black rounded-md mt-4 cursor-pointer hover:bg-slate-50'>
                <div onClick={() => setOpenList(!openList)} className='py-3 pl-2 flex justify-between'>
                    <h3 className='text-xl'>{topicTitle}</h3>
                    <MdArrowDropDown className={`${openList ? 'hidden' : ''}`} size={35} />
                    <MdArrowDropUp className={`${openList ? '' : 'hidden'}`} size={35} />
                </div>
                {!isFetching &&
                forums.map((forum) => 
                    <> 
                        <Link href={`/forums/${forum._id}`}>
                            <a>
                                <ForumList key={forum._id} openList={openList} forumTitle={forum.title}  />        
                            </a>
                        </Link>
                    </>
                )}  
            </div>
        </>
    )
}

export default Topic;