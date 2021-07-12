import MyPostsContainer from './MyPosts/MyPostsContainer';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
  return (
    <div className={c.profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>    
      <MyPostsContainer store={props.store}/>
    </div>
  )
}


export default Profile;