import React from 'react'
import Post from '../../../src/Posts/Post'
import {MdOutlineAccountCircle, MdAccessTime} from 'react-icons/md'
import HTMLEditor from '../../../src/Editor/HTMLEditor'

const Thread = (props) => {
  let date = props.data.data.attributes.createdAt
  date = date.split('T')[0]
  return (
    <>
      <div className='m-5'>
        <h1 className='mb-3 text-3xl font-bold'>{props.data.data.attributes.title}</h1>
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
        props.data.data.attributes.posts.data.map(post => 
          <>
            <Post data={post} />
          </>  
        )
      }


      {/* <HTMLEditor /> */}
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