import c from './User.module.css'

const User = (props) => {

    return (
        <div>

            <div className={c.userBlock}>
                <div className={c.imgFollow}>
                    <div className={c.img}><img src={props.photoUrl} alt="" /></div>
                    
                    <button onClick={() => {props.toggleFollow(props.idUser)}} className={c.follow}>{props.followed ? "unfollow" : "follow"}</button>
                </div>
                <div className={c.userInfo}>
                    <span className={c.fullNameStatus}>
                        <div className={c.fullName}>{props.name}</div>
                        <div className={c.status}>{props.status}</div>
                    </span>
                    <span className={c.countryCity}>
                        <div className={c.country}>{"props.country"}</div>
                        <div className={c.city}>{"props.city"}</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default User;