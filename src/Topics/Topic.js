import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UserContext } from '../context/UserContext';
import Link from 'next/link';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import ForumList from './ForumList';

const Topic = ({ topicTitle, topicID }) => {
    const {user} = useContext(UserContext);
    const [openList, setOpenList] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [forums, setForums] = useState([]);
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    // console.log(user)

    useEffect(() => {
        setIsFetching(true)
        fetch(`https://hockey-chronicles-api.herokuapp.com/api/v1/forum/forums?topic=${topicID}`)
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

    const handleSubmitForum = () => {
        const bodyData = {
            title: titleValue,
            description: descriptionValue,
            createdBy: user.username,
            topic: topicID
        }

        fetch('https://hockey-chronicles-api.herokuapp.com/api/v1/forum/forums/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

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
                                <ForumList key={forum._id} openList={openList} forumTitle={forum.title} />
                            </a>
                        </Link>
                    </>
                )}
                {user !== null && user.role === 'admin' &&
                    <Link href="#">
                    <a>
                        <div className={`${openList ? 'block' : 'hidden'}`}>
                            <div className='w-full border-t-2 p-2 pl-4 bg-slate-50 cursor-pointer'>
                                <h1 className='font-medium text-center'>Create New Forum</h1>
                                <form className='bg-white rounded'>
                                    {/* TITLE INPUT */}
                                    <div>
                                        <label
                                            className='block text-gray-700 text-sm font-bold mb-2'
                                            htmlFor='forumTitle'
                                        >
                                            Title:
                                        </label>
                                        <input
                                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='forumTitle'
                                            type='text'
                                            value={titleValue}
                                            placeholder='Enter a title...'
                                            onChange={(e) => setTitleValue(e.target.value)}
                                        />
                                    </div>
                                    {/* DESCRIPTION INPUT */}
                                    <div className='mt-2'>
                                        <label
                                            className='block text-gray-700 text-sm font-bold mb-2'
                                            htmlFor='threadDescription'>
                                            Description:
                                        </label>
                                        <textarea
                                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20'
                                            id='threadDescription'
                                            type='text'
                                            value={descriptionValue}
                                            placeholder='Enter a description...'
                                            onChange={(e) => setDescriptionValue(e.target.value)}
                                        />
                                    </div>
                                    {/* NAVIGATE TO UPON CREATION */}
                                    <div className='w-full flex'>
                                        <button onClick={handleSubmitForum} className='m-auto px-5 py-2 border border-black rounded-md bg-slate-200'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </a>
                </Link>
                }
                
            </div>
        </>
    )
}

export default Topic;