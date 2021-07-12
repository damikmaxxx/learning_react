import c from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/* <div className={c.background}>
                <img src="https://s01.yapfiles.ru/files/1841323/blurbackground1680x1050spectrumelectromagnetic4k901_4.jpg" />
            </div> */}
            <div className="profile_info">
                <div className="profile_info_logo">
                    <img src={props.profile.photos.large} />
                </div>
                
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {/* <div className={c.profile_info_text}>
                    <div className="profile_info_text_name">{props.profile.fullName}</div>
                    <div className="profile_info_text_full">{props.profile.aboutMe}</div>
                    <div className="profile_info_work">Я {props.profile.lookingForAJob ? "ищу" : "не ищу"} работу</div>
                </div> */}
            </div>
        </div>
    )
}

export default ProfileInfo