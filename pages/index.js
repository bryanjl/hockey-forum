import Image from 'next/image';
import Topic from '../src/Topics/Topic';

export default function Home(props) {

  return (
    <>

      <div className={``}>

        <div className=''>
          <div className='w-full h-20 flex'>
            <h1 className='my-auto pl-10 text-3xl font-bold'>Forums</h1>
          </div>
          {
            props.data.data.map((topic) =>
              <>
                <Topic key={topic.id} topicTitle={topic.attributes.title} forums={topic.attributes.forums.data} />
              </>
            )
          }
        </div>

      </div>
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch('http://localhost:1337/api/topics?populate=forums&populate=forums.threads');
  const data = await res.json();

  //console.log(data);

  return {
    props: {
      data
    }
  }
}
