import Topic from '../src/Topics/Topic';

//test data from api
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
