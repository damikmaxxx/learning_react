import { Route } from "react-router";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { withRouter } from "react-router-dom";
import Preloader from "./components/common/preloader/preloader";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const LoginPage = React.lazy(() => import("./components/Login/Login"))
class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp()
  }

  render(){
    if (!this.props.initialized){
      return <Preloader/>
    }
    return (
    
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">        
        <React.Suspense fallback={<Preloader />}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
          <Route path="/dialogs" render={() => <DialogsContainer/>} />
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route path="/login" render={() => <LoginPage/>} />

        </React.Suspense>
          
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
  );
  }
  
}

const mapStateToProps = (state) => ({
  initialized:state.app.initialized
})

export default  compose(withRouter,connect(mapStateToProps,{initializeApp}))(App)
