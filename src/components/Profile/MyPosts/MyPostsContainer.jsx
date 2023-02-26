import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profieReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator()); //метод dispatch прнимает в себя action - это объект, у которого есть свойство type
  }

  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts addPost={addPost} onPostChange={onPostChange} state={props.state}/>
  )
}

export default MyPostsContainer;