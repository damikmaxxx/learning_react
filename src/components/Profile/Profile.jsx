import c from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />    
      <MyPostsContainer store={props.store}/>
    </div>
  )
}


export default Profile;