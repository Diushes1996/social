import Post from './Post/Post';
import s from './MyPosts.module.css'
// import { useMemo } from 'react';

const MyPosts = (props) => {

  // console.log(props.state)

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  }

  let postElements = [props.state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} followers={p.followers} id={p.id} />)]
  
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <input onChange={onPostChange} value={props.newPostText} className={s.postInput}/>
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