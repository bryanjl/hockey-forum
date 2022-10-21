import dynamic from "next/dynamic";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'),{
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function HTMLEditor({ posts, setPosts, replyValue, threadID }) {
    const {user} = useContext(UserContext);

    const [value, setValue] = useState(replyValue);

    useEffect(() => {
        setValue(replyValue)
    }, [replyValue])

    const handlePost = () => {
        //!!!!!Check for blank value!!!!!!!
        let date = new Date(Date.now());
        date = date.toISOString()
        
        let newPost = {
            id: posts.length + 1,
            attributes: {
                title: '',
                body: value,
                createdAt: date,
                creator: user
            }
        };
        
        let newData = [...posts];
        newData.push(newPost);
        setPosts(newData);

        //thread id needs to be dynamic!!
        newPost = {
            data: {
                title: '',
                body: value,
                thread: threadID,
                creator: user
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
