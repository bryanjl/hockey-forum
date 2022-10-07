import React from 'react'
import Link from 'next/link';
import ForumCard from '../../../src/Forum/ForumCard'


const Forum = (props) => {
  return (
    <>
      <div className="p-2">
        <h1 className="m-auto mt-5 mb-5 text-2xl">{props.data.data.attributes.title}</h1>
        <h5 className='pl-4'>Threads</h5>
      </div>

      {/* THREAD WRAPPER */}
      <div className="w-full h-full px-5">
        {
          props.data.data.attributes.threads.data.map(thread => 
            // THIS SHOULD BE A COMPONENT
            <>
              <Link href={`/threads/${thread.id}`}>
                <a>
                  <ForumCard id={thread.id} forumTitle={thread.attributes.title} />
                </a>
              </Link>
            </>
          )
        }
      </div>
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`http://localhost:1337/api/forums/${context.params.id}?populate=*`)
  const data = await res.json();
  //console.log(data.data.attributes.threads.data[0].title)
  // CAN REDUCE SIZE OF OBJECT
  return {props:{
    data
  }};
}

export default Forum
