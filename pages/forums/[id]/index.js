import React from 'react'

const Forum = (props) => {
  return (
    <>
      <div className="flex">
        <h1 className="m-auto mt-5 mb-5 text-2xl">{props.data.data.attributes.title}</h1>
      </div>

      {/* THREAD WRAPPER */}
      <div className="w-full h-full px-5">
        {
          props.data.data.attributes.threads.data.map(thread => 
            // THIS SHOULD BE A COMPONENT
            <>
              <div className="w-full h-36 border border-black mt-2 rounded-sm grid grid-cols-4 cursor-pointer shadow-lg">
                <div className='col-span-1 border-r-2'></div>
                <div className='col-span-3 grid grid-rows-2'>
                  <div className='p-1'>
                    <h1 className='w-full'>{thread.attributes.title}</h1>
                  </div>
                  <div className='border border-t-2'>
                    {/* NAME OF CREATOR */}

                    {/* NUMBER OF RESPONSES */}
                  </div>
                </div>             
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`http://localhost:1337/api/forums/${context.params.id}?populate=*`)
  const data = await res.json();
  console.log(data.data.attributes.threads.data[0].title)
  // CAN REDUCE SIZE OF OBJECT
  return {props:{
    data
  }};
}

export default Forum
