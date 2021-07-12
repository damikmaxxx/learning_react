import MyPosts from './MyPosts';
import {addPost } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';





let mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
  }
}

export default connect(mapStateToProps,{addPost})(MyPosts);
