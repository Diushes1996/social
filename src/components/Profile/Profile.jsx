import {MyPosts} from './MyPosts/MyPosts.jsx';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';
import { useFetchProfile } from './hooks/useFetchProfile.js';
import { Preloader } from '../common/Preloader/Preloader.js';

export const Profile = () => {

  const { isLoading, profile } = useFetchProfile();

  return (
    <div className={s.profilePage}>
      {isLoading ? <Preloader /> : <ProfileInfo profile={profile}/>}
      <MyPosts />
    </div>
  )
}