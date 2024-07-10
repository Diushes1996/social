import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader/>
    }

    return (
      <>
        <div>
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div className={s.profile_status_text}>
          Здесь какой-то статус
        </div>
      </>
    )
  }

  export default ProfileInfo;