import User from './User/User';
import * as axios from "axios";
import userPhoto from '../../assets/images/man-300x300.png'
import React from 'react'
class Users extends React.Component {

    constructor(props){
        super(props)
        this.getUsers()
    }

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>get Users</button>
                <div>
                    Users
                </div>
                {this.props.users.map(u => <User toggleFollow={this.props.toggleFollow} idUser={u.id} followed={u.followed} photoUrl={userPhoto} name={u.name} status={u.status} />)}
            </div>
        )

    }
}

export default Users