import User from './User/User';
import c from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/man-300x300.png'
import React from 'react'
class Users extends React.Component {

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    componentDidMount = () =>{
        
        this.getUsers()
    }
    render() {
        return (
            <div>
                <div>
                    Users
                </div>
                <div className={c.paginator}>
                    <span>1</span>
                    <span className={c.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {this.props.users.map(u => <User toggleFollow={this.props.toggleFollow} idUser={u.id} followed={u.followed} photoUrl={userPhoto} name={u.name} status={u.status} />)}
            </div>
        )

    }
}

export default Users