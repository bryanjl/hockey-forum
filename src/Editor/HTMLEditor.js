import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'),{
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function HTMLEditor({ posts, setPosts, replyValue }) {

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //need to add user data to POST request for storing the post
        //Need to get the TOKEN from user cookies
    //Do we need a title for a post?

    const [value, setValue] = useState(replyValue);

    useEffect(() => {
        setValue(replyValue)
    }, [replyValue])

    const handlePost = () => {
        //console.log('here')
        let newPost = {
            id: posts.length + 1,
            attributes: {
                title: '',
                body: value,
                createdAt: Date.now()
            }
        };
        
        let newData = [...posts];
        newData.push(newPost);
        setPosts(newData);

        newPost = {
            data: {
                title: '',
                body: value,
                thread: 2
            }
        };

        fetch(`http://localhost:1337/api/posts/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
            },
            body: JSON.stringify(newPost)
        }).then((res) => {
            //console.log(res)
        });
        
        setValue('');
    }

    return (
        <>
            <QuillNoSSRWrapper
                className=' border border-black mx-2'
                theme='snow'
                value={value}
                onChange={setValue}
            />
            <button
                type='button'
                className='m-2 border border-black rounded-md p-2'
                onClick={handlePost}
            >
                Post Reply
            </button>
        </>
    )
}
