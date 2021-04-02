import c from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div className={c.background}>
                <img src="https://s01.yapfiles.ru/files/1841323/blurbackground1680x1050spectrumelectromagnetic4k901_4.jpg" />
            </div>
            <div className="profile_info">
                <div className="profile_info_logo">
                    logo
            </div>
                <div className="profile_info_text">
                    <div className="profile_info_text_name">Damir</div>
                    <div className="profile_info_text_full">Full Info</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo