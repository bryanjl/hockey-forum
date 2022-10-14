import { useContext, useEffect } from 'react';
import { UserContext } from '../src/context/UserContext';
import Topic from '../src/Topics/Topic';

export default function Home(props) {
  const {user, setUser} = useContext(UserContext)
  useEffect(() => {
    if (!user) {
      //ERROR HERE NEED TO GET USER USING TOKEN
      let token = localStorage.getItem('token');
      if (token) {
        fetch('https://hockey-chronicles-api.herokuapp.com/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        }).then((response) => {
          //need to do response check here!
          //success/failure check
          return response.json()
        }).then(data => {
          localStorage.setItem('token', data.token);
          console.log(data);
        });
      }
    }
  }, [])

  return (
    <>
      <div className='w-full h-20 flex'>
        <h1 className='my-auto pl-10 text-3xl font-bold'>Forums</h1>
      </div>
      <div className={`lg:grid lg:grid-cols-4`}>
        <div className='lg:col-span-3'>
          {
            props.data.data.map(topic =>
              <>
                <Topic topicTitle={topic.attributes.title} forums={topic.attributes.forums.data} />
              </>
            )
          }
        </div>
        <div className='lg:col-span-1 lg:border-l-2 lg:p-10'>
          {/* //side bar */}
          {/* links to sponsors/etc */}
          <div className='lg:w-full lg:h-40 lg:border lg:mt-5'></div>
          <div className='lg:w-full lg:h-40 lg:border lg:mt-5'></div>
          <div className='lg:w-full lg:h-40 lg:border lg:mt-5'></div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch('http://localhost:1337/api/topics?populate=*');
  const data = await res.json();

  //console.log(data);

  return {
    props: {
      data
    }
  }
}
