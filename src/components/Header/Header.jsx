import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.row}>
                <div className={c.img}>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_281341.png" />

                </div>
            </div>
        </header>
    )
}


export default Header;