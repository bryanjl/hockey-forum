import React, { useState } from 'react'

const CreateThread = ({threads, setThreads}) => {
    const [titleValue, setTitleValue]= useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleCreateThread = () => {
        //create data body
        let newThread = {
            data: {
                title: titleValue,
                description: descriptionValue,
                forum: 2
            }
        }

        //NEED TO ADD USER INFO and DATE
        let newThreads = [...threads];
        newThreads.push({
            id: threads.length + 1,
            attributes: {
                title: titleValue,
                description: descriptionValue
            }
        });

        setThreads(newThreads);

        fetch(`http://localhost:1337/api/threads/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
            },
            body: JSON.stringify(newThread)
        }).then((res) => {
            // console.log(res)
        });

        //clear the value
        setTitleValue('');
        setDescriptionValue('');
    }

    return (
        <>
            {/* CREATE NEW THREAD */}
            < div className='mx-2 my-2 mt-10 shadow-md  border border-black rounded' >
                <div className='flex w-full p-2'>
                    <h1 className='m-auto text-2xl'>Create a new thread</h1>
                </div>

                <form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
                    {/* TITLE INPUT */}
                    <div>
                        <label 
                            className='block text-gray-700 text-sm font-bold mb-2' 
                            htmlFor='threadTitle'
                        >
                            Title:
                        </label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            id='threadTitle' 
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
                </form>
                <div className='flex w-full p-2'>
                    <button 
                        className='border border-black p-2 rounded m-auto'
                        onClick={handleCreateThread}
                    >
                        Create Thread
                    </button>
                </div>
            </div >
        </>
    )
}

export default CreateThread