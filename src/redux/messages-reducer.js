import Avatar1 from './images/photo1.jpg';
import Avatar2 from './images/photo2.jpg';
import Avatar3 from './images/photo3.jpg';
import Avatar4 from './images/photo4.jpg';
import Avatar5 from './images/photo5.jpg';
import Avatar6 from './images/photo6.jpg';
import Avatar7 from './images/photo7.jpg';
import Avatar8 from './images/photo8.jpg';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogData: [
        {id: 1, userName: 'Hello', avatar: Avatar1, userState: 'Online',},
        {id: 2, userName: 'elio', avatar: Avatar2, userState: 'Online'},
        {id: 3, userName: 'Alest', avatar: Avatar3, userState: 'Offline',},
        {id: 4, userName: 'Galaxy', avatar: Avatar4, userState: 'Online',},
        {id: 5, userName: 'Jesus', avatar: Avatar5, userState: 'Offline'},
        {id: 6, userName: 'Lilit', avatar: Avatar6, userState: 'Online'},
        {id: 7, userName: 'Inariy', avatar: Avatar7, userState: 'Offline'},
        {id: 8, userName: 'Valentino', avatar: Avatar8, userState: 'Online'},
        {id: 9, userName: 'Grey', avatar: Avatar4, userState: 'Online'},
        {id: 10, userName: 'qwerty qwerty', avatar: Avatar2, userState: 'Online',},
        {id: 11, userName: 'qwerty ytrewq', avatar: Avatar6, userState: 'Online',},
        {id: 12, userName: 'asdf asdf', avatar: Avatar7, userState: 'Offline',},
    ],
    dialogItemMyData: [],
    dialogItemMyNewText: '',
    dialogItemEnemyData: [{id: 1, message: 'Love you swetie'}],
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SEND_MESSAGE:
            let newMessage = {id: 1, message: state.dialogItemMyNewText};
            state.dialogItemMyData.push(newMessage);
            state.dialogItemMyNewText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.dialogItemMyNewText = action.newTextMessage;
            return state;
        default:
            return state;
    }
};


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text});

export default messagesReducer;