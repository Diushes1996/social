import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={s.profilePage}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
    </div>
  )
}

export default Profile;