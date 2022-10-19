import React, { useState, useContext } from 'react'
import { UserContext } from '../../../src/context/UserContext'
import Post from '../../../src/Posts/Post'
import {MdOutlineAccountCircle, MdAccessTime} from 'react-icons/md'
import HTMLEditor from '../../../src/Editor/HTMLEditor'



const Thread = (props) => {
  const {user} = useContext(UserContext)

  let date = props.data.data.attributes.createdAt;
  date = date.split('T')[0];

  //This could just be a constant -> no need to set data after initial render
  const [data, setData] = useState(props.data.data.attributes);
  const [posts, setPosts] = useState(props.data.data.attributes.posts.data);
  
  //function for reply button on post
  const [replyValue, setReplyValue] = useState('')

  const handleReply = (reply) => {
    setReplyValue(reply);

    //upload to db
    //create data body
    let newPost = {
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

    fetch(`http://localhost:1337/api/threads/`, {
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
      <div className='m-5'>
        <h1 className='mb-3 text-3xl font-bold'>{data.title}</h1>
        <div className='flex justify-around'>
          <div className='flex'>
            <MdOutlineAccountCircle size={25} />
            <p className='italic font-light pl-2'>brybry</p>
          </div>
          <div className='flex'>
            <MdAccessTime size={25} />
            <p className='italic font-light pl-2'>{date}</p>
          </div>
        </div>
      </div>
      {
        posts.map(post =>
          <>
            <Post key={post.id} data={post} handleReply={handleReply} />
          </>
        )
      }

      <HTMLEditor posts={posts} setPosts={setPosts} replyValue={replyValue} />
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`http://localhost:1337/api/threads/${context.params.id}?populate=*`)
  const data = await res.json();
  //console.log(data.data.attributes.threads.data[0].title)
  // CAN REDUCE SIZE OF OBJECT
  return {props:{
    data
  }};
}

export default Thread