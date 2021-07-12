import { connect } from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer"
import React from "react";

class HeaderContainer extends React.Component {
    
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}
const MapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
    
})

export default connect(MapStateToProps,{logout})(HeaderContainer);