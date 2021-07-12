
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { changedFollow, requestUsers, setCurrentPage, toggleFollow, toggleFollowingProgress } from '../../redux/users-reducer';
import Preloader from '../common/preloader/preloader.js';
import Users from './Users';
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from '../../redux/users-selectors'

class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged = (p) => {
        this.props.requestUsers(p,this.props.pageSize)
    }
    render() {
        return (<>
        {this.props.isFetching ? <Preloader></Preloader> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                toggleFollow={this.props.toggleFollow}
                changedFollow={this.props.changedFollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
        )

    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }

}
export default compose(
    connect(mapStateToProps, {toggleFollow,setCurrentPage,toggleFollowingProgress,requestUsers,changedFollow,}),
    withAuthRedirect
)(UsersContainer)

//export default connect(mapStateToProps, {toggleFollow,setCurrentPage,toggleFollowingProgress,getUsers,changedFollow})(UsersContainer)