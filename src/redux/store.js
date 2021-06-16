//import images
import Avatar1 from './images/photo1.jpg';
import Avatar2 from './images/photo2.jpg';
import Avatar3 from './images/photo3.jpg';
import Avatar4 from './images/photo4.jpg';
import Avatar5 from './images/photo5.jpg';
import Avatar6 from './images/photo6.jpg';
import Avatar7 from './images/photo7.jpg';
import Avatar8 from './images/photo8.jpg';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

let store = {
    _state: {
        profilePage: {
            profileAvatar: [{ photo: Avatar8 }],
            profileName: [{ name: 'hello elio' }],
            profileInfo: [
                {
                    born: '17 July',
                    city: 'Penza',
                    study: 'Penza Art School named after K. A. Savitsky',
                    site: '@alest',
                    href: 'https://www.instagram.com/alest__/?hl=ru',
                },
            ],
            profileSubInfo: [
                {
                    friendsCount: '193',
                    photosCount: '39',
                    videosCount: '95',
                    musicCount: '1754',
                },
            ],
            profilePhotosInfo: [{ name: "Valery's", photosCount: '32' }],
            profilePhotos: [
                {
                    vissiblePhotoOne: Avatar1,
                    vissiblePhotoTwo: Avatar2,
                    vissiblePhotoThree: Avatar3,
                    vissiblePhotoFour: Avatar4,
                    vissiblePhotoFive: Avatar5,
                },
            ],
            profileFriendsCount: [{ friendsCount: '193' }],
            profileFriends: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Julia' },
                { id: 3, name: 'Gleb' },
                { id: 4, name: 'Sabina' },
                { id: 5, name: 'Alexa' },
                { id: 6, name: 'Daria' },
                { id: 7, name: 'Buzina' },
                { id: 8, name: 'Katya' },
                { id: 9, name: 'Gleb' },
            ],
            profileSubscriptionCount: [{ count: '178' }],
            profileSubscription: [
                { id: 1, photo: Avatar8, Name: 'Artzoom', category: 'Culture' },
                { id: 1, photo: Avatar2, Name: 'Realism', category: 'Paint' },
                {
                    id: 1,
                    photo: Avatar3,
                    Name: 'Alest',
                    category: 'best galaxy artist',
                },
                {
                    id: 1,
                    photo: Avatar4,
                    Name: 'Metofond',
                    category: 'everything',
                },
                { id: 1, photo: Avatar5, Name: 'Lentach', category: 'Common' },
            ],
            profileWallPosts: [
                {
                    id: 1,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    // photo: Avatar1,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 2,
                    avatar: Avatar3,
                    title: 'The god',
                    description: '',
                    // photo: Avatar3,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 3,
                    avatar: Avatar4,
                    title: 'Ellio',
                    description: '',
                    // photo: Avatar6,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 4,
                    avatar: Avatar5,
                    title: 'Hello ',
                    description: '',
                    // photo: Avatar7,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
            ],
            profileNewPostText: '',
        },
        friendsPage: {
            AllfriendsData: [
                {
                    id: 1,
                    name: 'Hello Elio',
                    photo: Avatar1,
                    description: 'Online',
                },
                {
                    id: 2,
                    name: 'Alest Artist',
                    photo: Avatar2,
                    description: 'Offline',
                },
                {
                    id: 3,
                    name: 'Our Love',
                    photo: Avatar3,
                    description: 'Online',
                },
                {
                    id: 4,
                    name: 'Queen A',
                    photo: Avatar4,
                    description: 'Offline',
                },
                {
                    id: 5,
                    name: 'God World',
                    photo: Avatar5,
                    description: 'Offline',
                },
                {
                    id: 6,
                    name: 'Jesus M',
                    photo: Avatar6,
                    description: 'Offline',
                },
                {
                    id: 7,
                    name: 'PHU <3',
                    photo: Avatar7,
                    description: 'Online',
                },
                {
                    id: 8,
                    name: 'Mefisto',
                    photo: Avatar8,
                    description: 'Offline',
                },
                { id: 9, name: 'Baal', photo: Avatar7, description: 'Online' },
                {
                    id: 10,
                    name: 'Diablo',
                    photo: Avatar6,
                    description: 'Online',
                },
                {
                    id: 11,
                    name: 'Andriel',
                    photo: Avatar5,
                    description: 'Offline',
                },
                {
                    id: 12,
                    name: 'Sous Plan',
                    photo: Avatar4,
                    description: 'Online',
                },
                {
                    id: 13,
                    name: 'Roer Cill',
                    photo: Avatar3,
                    description: 'Offline',
                },
                {
                    id: 14,
                    name: 'Gleb Medvedev',
                    photo: Avatar2,
                    description: 'Online',
                },
                {
                    id: 15,
                    name: 'zxc qwe',
                    photo: Avatar1,
                    description: 'Online',
                },
                {
                    id: 16,
                    name: 'Pop s',
                    photo: Avatar7,
                    description: 'Offline',
                },
                {
                    id: 17,
                    name: 'Deer Bear',
                    photo: Avatar4,
                    description: 'Offline',
                },
                {
                    id: 18,
                    name: 'Cloes Min',
                    photo: Avatar3,
                    description: 'Offline',
                },
                {
                    id: 19,
                    name: 'Nroe Ked',
                    photo: Avatar5,
                    description: 'Online',
                },
                { id: 20, name: '1234', photo: Avatar2, description: 'Online' },
                {
                    id: 21,
                    name: 'Roer Cill',
                    photo: Avatar3,
                    description: 'Offline',
                },
                {
                    id: 22,
                    name: 'Roer Cill',
                    photo: Avatar3,
                    description: 'Offline',
                },
                {
                    id: 23,
                    name: 'Andriel',
                    photo: Avatar5,
                    description: 'Offline',
                },
                {
                    id: 24,
                    name: 'Pop s',
                    photo: Avatar7,
                    description: 'Offline',
                },
                {
                    id: 25,
                    name: 'Pop s',
                    photo: Avatar7,
                    description: 'Offline',
                },
                {
                    id: 26,
                    name: 'Gleb Medvedev',
                    photo: Avatar2,
                    description: 'Online',
                },
                {
                    id: 27,
                    name: 'Roer Cill',
                    photo: Avatar3,
                    description: 'Offline',
                },
                { id: 28, name: 'Baal', photo: Avatar7, description: 'Online' },
                {
                    id: 29,
                    name: 'Mefisto',
                    photo: Avatar8,
                    description: 'Offline',
                },
            ],
            OnlineFriendsData: [
                {
                    id: 1,
                    name: 'Hello Elio',
                    photo: Avatar1,
                    description: 'Online',
                },
                {
                    id: 3,
                    name: 'Our Love',
                    photo: Avatar3,
                    description: 'Online',
                },
                {
                    id: 7,
                    name: 'PHU <3',
                    photo: Avatar7,
                    description: 'Online',
                },
                { id: 9, name: 'Baal', photo: Avatar7, description: 'Online' },
                {
                    id: 10,
                    name: 'Diablo',
                    photo: Avatar6,
                    description: 'Online',
                },
                {
                    id: 12,
                    name: 'Sous Plan',
                    photo: Avatar4,
                    description: 'Online',
                },
            ],
        },
        dialogsPage: {
            dialogData: [
                {
                    id: 1,
                    userName: 'Gleb Medvedev',
                    avatar: Avatar1,
                    userState: 'Online',
                },
                {
                    id: 2,
                    userName: 'Hello elio',
                    avatar: Avatar2,
                    userState: 'Online',
                },
                {
                    id: 3,
                    userName: 'Alest the best',
                    avatar: Avatar3,
                    userState: 'Offline',
                },
                {
                    id: 4,
                    userName: 'Galaxy Artist',
                    avatar: Avatar4,
                    userState: 'Online',
                },
                {
                    id: 5,
                    userName: 'Jesus',
                    avatar: Avatar5,
                    userState: 'Offline',
                },
                {
                    id: 6,
                    userName: 'Lilit',
                    avatar: Avatar6,
                    userState: 'Online',
                },
                {
                    id: 7,
                    userName: 'Inariy',
                    avatar: Avatar7,
                    userState: 'Offline',
                },
                {
                    id: 8,
                    userName: 'Valentino',
                    avatar: Avatar8,
                    userState: 'Online',
                },
                {
                    id: 9,
                    userName: 'Grey',
                    avatar: Avatar4,
                    userState: 'Online',
                },
                {
                    id: 10,
                    userName: 'qwerty qwerty',
                    avatar: Avatar2,
                    userState: 'Online',
                },
                {
                    id: 11,
                    userName: 'qwerty ytrewq',
                    avatar: Avatar6,
                    userState: 'Online',
                },
                {
                    id: 12,
                    userName: 'asdf asdf',
                    avatar: Avatar7,
                    userState: 'Offline',
                },
            ],
            dialogItemMyData: [],
            dialogItemMyNewText: '',
            dialogItemEnemyData: [{ id: 1, message: 'Love you swetie' }],
        },
        newsPage: {
            NewsItemData: [
                {
                    id: 1,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar1,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 2,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar2,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 3,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar3,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 4,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar4,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 5,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar5,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 6,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar6,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 7,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar7,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 8,
                    avatar: Avatar8,
                    title: 'Elon Musk',
                    description: '',
                    photo: Avatar8,
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = messagesReducer(
            this._state.dialogsPage,
            action
        );
        this._callSubscriber(this._state);
    },
};

window.store = store;
export default store;
