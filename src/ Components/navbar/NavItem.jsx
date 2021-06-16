import react from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className="nav__item">
            <NavLink
                activeClassName="active__navLink"
                className={props.class}
                to={props.href}
            >
                {props.text}
            </NavLink>
        </li>
    );
};

export default NavItem;
