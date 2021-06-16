import './Header.scss';
import logo from './logo192.png';
import loginImg from './loginIMG.webp';

const Header = () => {
    return (
        <header className="header">
            <div className="header__items">
                <div className="header__logo">
                    <a href="/SocialConcept">
                        <img src={logo} alt="React-logo" />
                    </a>
                </div>
                <div className="header__search">
                    <input type="text" placeholder="search" />
                </div>

                <div className="header__nav">
                    <a href="/SocialConcept" className="profile-btn">
                        <img src={loginImg} alt="" /> Login
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
