import User from './User/User';
import * as axios from "axios";
import userPhoto from '../../assets/images/man-300x300.png'

export const Users = (props) => {
   
    if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
    
    let users = props.users.map(u => <User toggleFollow={props.toggleFollow} idUser={u.id} followed={u.followed} photoUrl={userPhoto} name={u.name} status={u.status} />)
    return (
        <div>
            <div>
                Users
            </div>
            {users}
        </div>
    )
}

export default Users;