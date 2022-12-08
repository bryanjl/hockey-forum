import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ThreadCard from '../../../src/Thread/ThreadCard'
import CreateThread from '../../../src/Thread/CreateThread';


const Forum = (props) => {
  
  const [threads, setThreads] = useState([]);
  const [forum, setForum] = useState(props.data.data);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true)
    fetch(`https://hockey-chronicles-api.herokuapp.com/api/v1/forum/threads?forum=${props.data.data._id}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.success === false){
                setThreads([]);
            }else {
                setThreads(data.data);
            }
            setIsFetching(false)                
        });
  }, [props.data.data._id]);
  
  return (
    <>
      <div className="p-2">
        <h1 className="m-auto mt-5 mb-5 text-2xl">{forum.title}</h1>
        <h1 className="m-auto mt-5 mb-5 text-lg">{forum.description}</h1>
        <h5 className='pl-4'>Threads</h5>
      </div>

      {/* THREAD WRAPPER */}
      <div className="w-full h-full px-5">
        {
          threads.map(thread =>
            <>
              <Link href={`/threads/${thread._id}`}>
                <a>
                  <ThreadCard 
                    id={thread._id} 
                    threadTitle={thread.title} 
                    threadDescription={thread.description} 
                    // postCount={thread.attributes.posts.data.length} 
                    creator={thread.createdBy} 
                  />
                </a>
              </Link>
            </>
          )
        }
      </div>
      {/* BUTTON TO OPEN?? */}
      <CreateThread threads={threads} setThreads={setThreads} forumID={props.data.data._id} />
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`https://hockey-chronicles-api.herokuapp.com/api/v1/forum/forums/${context.params.id}`)
  const data = await res.json();
  //console.log(data.data.attributes.threads.data[0].title)
  // CAN REDUCE SIZE OF OBJECT
  return {props:{
    data
  }};
}

export default Forum
