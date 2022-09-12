import Topic from '../src/Topics/Topic';

//test data from api
const topicList = [
  {
    topicTitle: 'Current Hockey Fights',
    forums:[
      {
        title: 'Best Fights',
        id: '1',
        threads: [
          {title: 'thread1', id: '1'}, 
          {title: 'thread2', id: '2'}, 
          {title: 'thread3', id: '3'}
        ] //ids to go to thread
      },
      {
        title: 'Worst Fights',
        id: '2',
        threads: [
          {title: 'thread1', id: '1'}, 
          {title: 'thread2', id: '2'}, 
          {title: 'thread3', id: '3'}
        ]
      }
    ]
  },
  {
    topicTitle: 'Classic Hockey Fights',
    forums:[
      {
        title: 'Best Fights',
        id: '1',
        threads: [
          {title: 'thread1', id: '1'}, 
          {title: 'thread2', id: '2'}, 
          {title: 'thread3', id: '3'}
        ] //ids to go to thread
      },
      {
        title: 'Worst Fights',
        id: '2',
        threads: [
          {title: 'thread1', id: '1'}, 
          {title: 'thread2', id: '2'}, 
          {title: 'thread3', id: '3'}
        ]
      }
    ]
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
