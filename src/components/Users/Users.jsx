import User from './User/User';

export const Users = (props) => {
    
    let users = props.users.map(u => <User toggleFollow={props.toggleFollow} idUser={u.id} followed={u.followed} photoUrl={u.photoUrl} fullName={u.fullName} status={u.status} city={u.location.city} country={u.location.country} />)
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