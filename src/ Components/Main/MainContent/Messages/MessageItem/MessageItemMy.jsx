import react from 'react';
import React from 'react';

const MessageItemMy = (props) => {

    return (
        <div className="dialog__message-my">
            <p className="dialog__message-item">{props.message}</p>
        </div>
    );
};
export default MessageItemMy;
