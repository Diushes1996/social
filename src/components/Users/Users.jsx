const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: false, fullName: 'Dmitry', status: 'I am a super hero', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: true, fullName: 'Andrew', status: 'I hate apples', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: false, fullName: 'Sasha', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 4, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg', followed: true, fullName: 'Alex', status: 'I am a looser', location: { city: 'Baranovichi', country: 'USA' } }
        ])
    }

    return (
        <div>
            {
                props.users.map(u=> <div key={u.id}>
                    <div>
                        <img src={u.photoUrl} alt="" />
                        {u.followed?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>:<button onClick={()=>{props.follow(u.id)}}>Followed</button>}
                    </div>
                    <div>
                        <p>{u.fullName}</p>
                        <p>{u.status}</p>
                        <p>{u.location.city}</p>
                        <p>{u.location.country}</p>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;