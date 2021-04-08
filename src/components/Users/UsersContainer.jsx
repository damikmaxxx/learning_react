import { connect } from 'react-redux'
import { setUsersAC, toggleFollowAC,setCurrentPageAC,setTotalUsersCountAC } from '../../redux/users-reducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
    }

}

let mapDispatchToProps = (dispatch) => {
    return{
        toggleFollow:(userId) => {
            
            dispatch(toggleFollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalUsers) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)