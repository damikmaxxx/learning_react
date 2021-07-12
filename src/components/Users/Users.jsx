import React from 'react'
import userPhoto from '../../assets/images/man-300x300.png'
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    let portionSize = 10
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)

    }
    let portionCount =  Math.ceil(pageCount/portionSize)
    let [portionNumber,setProtionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1)* portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        
        <div>
            <div>
                Users
            </div>


           
            <div className={c.paginator}>
                {portionNumber > 1 && <button onClick={() =>{setProtionNumber(portionNumber - 1)}}>left</button>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {return <span onClick={() => {props.onPageChanged(p)}}  className={props.currentPage === p && c.selectedPage }>{p}</span>
                })}
               {portionCount > portionNumber && <button onClick={() =>{setProtionNumber(portionNumber + 1)}}>right</button>}
            </div>
            


            {props.users.map(u =><div>
            <div className={c.userBlock}>
                <div className={c.imgFollow}>
                    <NavLink to={"/profile/"+ u.id}>
                    <div className={c.img}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" /></div>
                    </NavLink>
                    
                    <button disabled={props.followingInProgress.some(id => id  === u.id)} onClick={() => {props.changedFollow(u.id,u.followed)}} className={c.follow}>{u.followed ? "unfollow" : "follow"}</button>
                </div>
                <div className={c.userInfo}>
                    <span className={c.fullNameStatus}>
                        <div className={c.fullName}>{u.name}</div>
                        <div className={c.status}>{u.status}</div>
                    </span>
                    <span className={c.countryCity}>
                        <div className={c.country}>{"country"}</div>
                        <div className={c.city}>{"city"}</div>
                    </span>
                </div>
            </div>
            </div>)}
        </div>
    )
}

export default Users