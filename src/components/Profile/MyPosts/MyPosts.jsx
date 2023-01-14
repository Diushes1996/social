import Post from './Post/Post';
import React from 'react';
import s from './MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profieReducer';

const MyPosts = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  let postElements = [props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} followers={p.followers} id={p.id} />)]

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost} className={s.buttonPosts}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  )
}

export default MyPosts;