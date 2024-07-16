import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'
import { usePosts } from '../hooks/usePosts.js';
import { useMemo } from 'react';

export const MyPosts = () => {

  const { posts, refInput, addPost } = usePosts();

  let postElements = useMemo(() => posts.map(p => <Post message={p.message} />), [posts])

  return (
    <div>
      <h3>My posts:</h3>
      <div>
        <div>
          <input ref={refInput} className={s.postInput} />
        </div>
        <div>
          <button onClick={addPost} className={s.buttonPosts}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  )
}