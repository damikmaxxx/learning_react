import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {getStatus,updateStatus, getProfile, setUserProfile } from '../../redux/profile-reducer';
import Profile from "./Profile";


class ProfileContainer extends React.Component {
   
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
            if (!userId){
                
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        
        return (
            <Profile {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, { setUserProfile, getProfile,getStatus,updateStatus}),
    withRouter,
   // withAuthRedirect,
)(ProfileContainer)

