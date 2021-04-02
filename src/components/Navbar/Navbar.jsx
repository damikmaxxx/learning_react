import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={c.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={c.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={c.active}>Message</NavLink></li>
                <li><NavLink to="/news" activeClassName={c.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={c.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={c.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}


export default Navbar;