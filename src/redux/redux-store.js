import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import allFriendsReduser from './friends-reducer';
import onlineFriendsReduser from './online-friends-reducer';
import newsReducer from './news-rducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    allFriendsPage: allFriendsReduser,
    onlineFriendsPage: onlineFriendsReduser,
    dialogsPage: messagesReducer,
    newsPage: newsReducer
});

let store = createStore(reducers);

export default store;