import s from "./Users.module.css";
import userWithoutPhoto from "./../../assets/img/userWithoutPhoto.png";
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    console.log(props.onPageChanged)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //для показа целочисленного кол-ва страниц

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    //карусель страниц начало
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    //карусель страниц конец

    return <div>
        <div>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p)}}>
                    {p}
                </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userWithoutPhoto} alt="userPhoto" />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
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

export default Users;