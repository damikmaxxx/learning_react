import { connect } from 'react-redux'
import { setUsersAC, toggleFollowAC } from '../../redux/users-reducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users
    }

}

let mapDispatchToProps = (dispatch) => {
    return{
        toggleFollow:(userId) => {
            
            dispatch(toggleFollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)