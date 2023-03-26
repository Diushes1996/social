import React from "react"
import axios from "axios"
import userWithoutPhoto from "./../../assets/img/userWithoutPhoto.png"
import s from "./Users.module.css"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); //для показа целочисленного кол-ва страниц

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        
        //карусель страниц начало
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);
        //карусель страниц конец

        return <div>
            <div>
                {slicedPages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage} 
                    onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
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