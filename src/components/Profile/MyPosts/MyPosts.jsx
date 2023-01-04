import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let postElements = [props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} followers={p.followers} id={p.id} />)]

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  )
}

export default MyPosts;