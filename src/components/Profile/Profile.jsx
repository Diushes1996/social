import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

export const Profile = (props) => {
  return (
    <div className={s.profilePage}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
    </div>
  )
}