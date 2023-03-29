import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader/>
    }

    return (
      <div>
        <img src="https://media.istockphoto.com/vectors/sky-and-sun-at-sea-background-ocean-and-beach-vector-island-scenery-vector-id1264799981?k=20&m=1264799981&s=170667a&w=0&h=S3gL3JXu6wDE_lpH1MIdDWp0I4wqj9fguSUiX2OVt9w=" alt="bg-content" />
        <div>
          Avatar
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div>
          Description
        </div>
      </div>
    )
  }

  export default ProfileInfo;