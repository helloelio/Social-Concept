import React from 'react';

const MessageItemEnemy = (props) => {
    return (
        <div className="dialog__message-enemy">
            <p className="dialog__message-item">{props.message}</p>
        </div>
    );
};

export default MessageItemEnemy;
