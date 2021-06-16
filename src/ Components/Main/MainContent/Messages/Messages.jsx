import react from 'react';
import DialogItem from './DiagloItem/DialogItem';
import './Messages.scss';
import MessageItemMy from './MessageItem/MessageItemMy';
import MessageItemEnemy from './MessageItem/MessageItemEnemy';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../../../redux/messages-reducer';

const Messages = (props) => {

    let newMessageElement = react.createRef();

    let myMessage = props.dialogItemMyData.map((msg) => {
        return (
            <MessageItemMy message={msg.message}/>
        );
    });
    let enemyMessage = props.dialogItemEnemyData.map(msg => {
        return (
            <MessageItemEnemy message={msg.message}/>
        );
    });
    let dialogElements = props.dialogData.map((dialog) => {
        return (
            <DialogItem
                userName={dialog.userName}
                avatar={dialog.avatar}
                userState={dialog.userState}
                id={dialog.id}
            />
        );
    });

    let sendMessage = () => {
        if (newMessageElement.current.value !== '') {
            props.dispatch(sendMessageActionCreator());
            newMessageElement.current.value = '';
        } else {
            alert('you cant send empty message');
        }

    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    };

    return (
        <main className="main">
            <div className="main__content">
                <section className="dialogs">
                    <div className="dialog__items">{dialogElements}</div>

                    <div className="dialog__messages">
                        <div className="message__output">
                            {enemyMessage}
                            {myMessage}
                        </div>
                        <div className="message__input">
                            <input
                                ref={newMessageElement}
                                onChange={onMessageChange}
                                type="text"
                                value={props.dialogItemMyNewText}/>
                            <input
                                className="message__input-submit"
                                type="submit"
                                value="Send"
                                onClick={sendMessage}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Messages;
