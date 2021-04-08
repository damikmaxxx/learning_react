import User from './User/User';
import c from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/man-300x300.png'
import React from 'react'
class Users extends React.Component {

    componentDidMount = () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            debugger
        })
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    
    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            if(i > 10){
                pages.push("...");
                break
            }
            pages.push(i)

        }
        return (
            <div>
                <div>
                    Users
                </div>
                <div className={c.paginator}>
                    {pages.map(p => {
                       return <span onClick={() => {this.onPageChanged(p)}}  className={this.props.currentPage === p && c.selectedPage }>{p}</span>
                    })}
                </div>
                {this.props.users.map(u => <User toggleFollow={this.props.toggleFollow} idUser={u.id} followed={u.followed} photoUrl={userPhoto} name={u.name} status={u.status} />)}
            </div>
        )

    }
}

export default Users