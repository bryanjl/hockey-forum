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
        setValue(`<h2><span style="background-color: powderblue"><em>${replyValue}</em></span></h2>`)
    }, [replyValue])

    const handlePost = () => {
        //!!!!!Check for blank value!!!!!!!
        let date = new Date(Date.now());
        date = date.toISOString()
        
        let newPost = {
                title: '',
                body: value,
                createdBy: user.username,
                thread: threadID
        };
        
        let newData = [...posts];

        fetch(`https://hockey-chronicles-api.herokuapp.com/api/v1/forum/posts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost)
        }).then((res) => res.json())
        .then((data) => {
            newData.push(data.data);
            setPosts(newData);
        });
        
        setValue('');
    }

    let formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image"
      ];

    return (
        <>
            <QuillNoSSRWrapper
                className=' border border-black mx-2'
                theme='snow'
                // formats={formats}
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
