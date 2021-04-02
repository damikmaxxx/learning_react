import MyPosts from './MyPosts';
import React from 'react'
import { UpdateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';





let mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    UpdateNewPostText: (text) => {
      dispatch(UpdateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;