import Image from 'next/image';
import Topic from '../src/Topics/Topic';

export default function Home(props) {
  // console.log(props)
  return (
    <>

      <div className={``}>

        <div className=''>
          <div className='w-full h-20 flex'>
            <h1 className='my-auto pl-10 text-3xl font-bold'>Topics</h1>
          </div>
          {
            props.data.data.map((topic) =>
              <>
                <Topic key={topic._id} topicTitle={topic.title} topicID={topic._id} />
              </>
            )
          }
        </div>

      </div>
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch('https://hockey-chronicles-api.herokuapp.com/api/v1/forum/topics');
  const data = await res.json();

  //console.log(data);

  return {
    props: {
      data
    }
  }
}
