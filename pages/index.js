import Head from 'next/head'
import Image from 'next/image'

import Topic from '../src/Topics/Topic';

//import styles from '../styles/Home.module.css'

const topicList = [
  {
    topicTitle: 'Current Hockey Fights',
    forums: ['Best Fights', 'Worst Fights']
  },
  {
    topicTitle: 'Classic Hockey Fights',
    forums: ['Best Fights', 'Worst Fights']
  }
];

export default function Home() {
  return (
    <>
      <div className='w-full h-20 flex'>
        <h1 className='my-auto pl-10 text-3xl font-bold'>Forums</h1>
      </div>
      {
        topicList.map(topic => 
          <>
            <Topic topicTitle={topic.topicTitle} forums={topic.forums} />
          </>
          )
        }
    </>
  )
}
