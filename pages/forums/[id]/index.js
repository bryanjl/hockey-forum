import React, { useState } from 'react'
import Link from 'next/link';
import ThreadCard from '../../../src/Thread/ThreadCard'
import CreateThread from '../../../src/Thread/CreateThread';


const Forum = (props) => {
  
  const [threads, setThreads] = useState(props.data.data.attributes.threads.data);
  
  return (
    <>
      <div className="p-2">
        <h1 className="m-auto mt-5 mb-5 text-2xl">{props.data.data.attributes.title}</h1>
        <h5 className='pl-4'>Threads</h5>
      </div>

      {/* THREAD WRAPPER */}
      <div className="w-full h-full px-5">
        {
          threads.map(thread =>
            <>
              <Link href={`/threads/${thread.id}`}>
                <a>
                  <ThreadCard 
                    id={thread.id} 
                    threadTitle={thread.attributes.title} 
                    threadDescription={thread.attributes.description} 
                    postCount={thread.attributes.posts.data.length} 
                    creator={thread.attributes.creator} 
                  />
                </a>
              </Link>
            </>
          )
        }
      </div>
      {/* BUTTON TO OPEN?? */}
      <CreateThread threads={threads} setThreads={setThreads} forumID={props.data.data.id} />
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`http://localhost:1337/api/forums/${context.params.id}?populate=threads&populate=threads.posts`)
  const data = await res.json();
  //console.log(data.data.attributes.threads.data[0].title)
  // CAN REDUCE SIZE OF OBJECT
  return {props:{
    data
  }};
}

export default Forum
