import React from "react"
import axios from "axios"
import userWithoutPhoto from "./../../assets/img/userWithoutPhoto.png"

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        {u.photos.small ? <img src={u.photos.small} alt='userPhoto' /> : <img src={userWithoutPhoto} alt='userPhoto' />}
                        {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
    }
}

export default Users;