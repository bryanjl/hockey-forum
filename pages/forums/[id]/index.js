// import React from 'react'
// import Thread from '../../../src/Thread/Thread'

// const Forum = () => {
//   return (
//     <>
//       <div className='m-5'>
//         <h1 className='mb-3 text-3xl font-bold'>Trade Rumors and Free Agent Talk</h1>
//         <p>Trade rumors, transactions, and free agent talk. Rumors must use the RUMOR prefix in thread title. Proposals must contain the PROPOSAL prefix in the thread title.</p>
//       </div>
//       <Thread />
//       <Thread />
//     </>
//   )
// }

// export default Forum

import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";

import React from 'react'

const Forum = ({data}) => {
  const router = useRouter();
  const {id} = router.query
  return (
    <div>
      <h1>{data.attributes.title}</h1>
    </div>
  )
}

Forum.getInitialProps = async ({query}) => {
  const res = await fetch(`http://localhost:1337/api/forums/${query.id}`)
  const data = await res.json();
  //console.log(data)
  return data;
}

export default Forum
