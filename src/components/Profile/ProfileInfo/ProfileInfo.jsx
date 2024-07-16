import s from "./ProfileInfo.module.css"

export const ProfileInfo = ({ profile }) => {

    return (
      <>
        <div>
          <img src={profile} alt="" />
        </div>
        <div className={s.profile_status_text}>
          Здесь какой-то статус
        </div>
      </>
    )
  }