import axios from "axios"
import userWithoutPhoto from "./../../assets/img/userWithoutPhoto.png"

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
                // props.setUsers([
                //     { id: 1, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: false, fullName: 'Dmitry', status: 'I am a super hero', location: { city: 'Minsk', country: 'Belarus' } },
                //     { id: 2, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: true, fullName: 'Andrew', status: 'I hate apples', location: { city: 'Moscow', country: 'Russia' } },
                //     { id: 3, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: false, fullName: 'Sasha', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' } },
                //     { id: 4, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: true, fullName: 'Alex', status: 'I am a looser', location: { city: 'Baranovichi', country: 'USA' } }
                // ])
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u=> <div key={u.id}>
                    <div>
                        {u.photos.small?<img src={u.photos.small} alt='userPhoto'/>:<img src={userWithoutPhoto} alt='userPhoto'/>}
                        {u.followed?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                    <div>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                        <p>{u.id}</p>
                        <p>{"u.location.city"}</p>
                        <p>{"u.location.country"}</p>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;