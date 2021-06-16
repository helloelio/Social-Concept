import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    debugger
    let path = '/SocialConcept/messages/' + '?sel=' + props.id;
    return (
        <NavLink to={path} activeClassName="active__dialog">
            <div className="dialog__item">
                <img className="dialog__item-avatar" src={props.avatar} alt=""/>
                <div className="dialog__item-name">
                    {props.userName}
                    <span className="dialog__item-userState">{props.userState}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default DialogItem;
