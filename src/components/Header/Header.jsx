import c from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.row}>
                <div className={c.img}>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_281341.png" />

                </div>
                <div className={c.auth}>

                  {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>} 
                </div>
            </div>
        </header>
    )
}


export default Header;