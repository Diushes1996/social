import userWithoutPhoto from "./../../assets/img/userWithoutPhoto.png";
import { NavLink } from "react-router-dom";

export const Users = ({ users }) => {
  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={
                    u.photos.small != null ? u.photos.small : userWithoutPhoto
                  }
                  alt="userPhoto"
                />
              </NavLink>
            </div>
            {/* <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div> */}
          </div>
          <div>
            <p>{u.name}</p>
            <p>{u.status}</p>
            <p>{u.id}</p>
            <p>{"u.location.city"}</p>
            <p>{"u.location.country"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
