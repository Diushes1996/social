import { connect } from 'react-redux';
import { addPost, onPostChange } from '../../../redux/profieReducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {

//   let addPost = () => {
//     props.dispatch(addPostActionCreator()); //метод dispatch прнимает в себя action - это объект, у которого есть свойство type
//   }

//   let onPostChange = (text) => {
//     props.dispatch(updateNewPostTextActionCreator(text));
//   }

//   return (
//     <MyPosts addPost={addPost} onPostChange={onPostChange} state={props.state}/>
//   )
// }

let mapStateToProps = (state) => {
  return {
    state: state,
    newPostText: state.profilePage.newPostText
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostActionCreator()) 
//     },
//     onPostChange: (text) => { 
//       dispatch(updateNewPostTextActionCreator(text)) 
//     }
//   }
// }

const MyPostsContainer = connect (mapStateToProps, {addPost, onPostChange})(MyPosts);

export default MyPostsContainer;