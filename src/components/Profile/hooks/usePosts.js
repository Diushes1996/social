import { useRef, useState } from 'react';

export const usePosts = () => {

    const [posts, setPosts] = useState([]);

    const refInput = useRef(null)

    const addPost = () => {
        const newPost = [...posts, { message: refInput.current.value }]
        setPosts(newPost)
        console.log(posts)
    }

    return { posts, refInput, addPost };
};