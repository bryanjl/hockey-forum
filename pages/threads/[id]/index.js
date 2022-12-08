import React, { useEffect, useState } from 'react'
import Post from '../../../src/Posts/Post'
import {MdOutlineAccountCircle, MdAccessTime} from 'react-icons/md'
import HTMLEditor from '../../../src/Editor/HTMLEditor'



const Thread = (props) => {
  // console.log(props.data.data.id)

  // let date = props.data.data.createdAt;
  // date = date.split('T')[0];

  //This could just be a constant -> no need to set data after initial render
  const [thread, setThread] = useState(props.data.data);
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  
  useEffect(() => {
    setIsFetching(true)
    fetch(`https://hockey-chronicles-api.herokuapp.com/api/v1/forum/posts?thread=${props.data.data._id}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.success === false){
                setPosts([]);
            }else {
                setPosts(data.data);
            }
            setIsFetching(false)                
        });
  }, [props.data.data._id]);

  //function for reply button on post
  const [replyValue, setReplyValue] = useState('');

  return (
    <>
      <div className='m-5'>
        <h1 className='mb-3 text-3xl font-bold'>{thread.title}</h1>
        <div className='flex justify-around'>
          <div className='flex'>
            <MdOutlineAccountCircle size={25} />
            <p className='italic font-light pl-2'>{thread.createdBy}</p>
          </div>
          <div className='flex'>
            <MdAccessTime size={25} />
            <p className='italic font-light pl-2'>{thread.createdAt}</p>
          </div>
        </div>
      </div>
      {
        posts.map(post =>
          <>
            <Post key={post._id} data={post} setReplyValue={setReplyValue} />
          </>
        )
      }

      <HTMLEditor posts={posts} setPosts={setPosts} replyValue={replyValue} threadID={props.data.data._id} />
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`https://hockey-chronicles-api.herokuapp.com/api/v1/forum/threads/${context.params.id}`)
  const data = await res.json();
  //console.log(data.data.attributes.threads.data[0].title)
  // CAN REDUCE SIZE OF OBJECT
  return {props:{
    data
  }};
}

export default Thread