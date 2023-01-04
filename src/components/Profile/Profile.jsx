import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText}/>
    </div>
  )
}

export default Profile;