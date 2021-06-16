import Avatar7 from './images/photo7.jpg';
import Avatar8 from './images/photo8.jpg';
import Avatar3 from './images/photo3.jpg';
import Avatar4 from './images/photo4.jpg';
import Avatar5 from './images/photo5.jpg';
import Avatar1 from './images/photo1.jpg';
import Avatar2 from './images/photo2.jpg';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    profileAvatar: [{photo: Avatar8}],
    profileName: [{name: 'hello elio'}],
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
    profilePhotosInfo: [{name: 'Valery\'s', photosCount: '32'}],
    profilePhotos: [
        {
            vissiblePhotoOne: Avatar1,
            vissiblePhotoTwo: Avatar2,
            vissiblePhotoThree: Avatar3,
            vissiblePhotoFour: Avatar4,
            vissiblePhotoFive: Avatar5,
        },
    ],
    profileFriendsCount: [{friendsCount: '193'}],
    profileFriends: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Julia'},
        {id: 3, name: 'Gleb'},
        {id: 4, name: 'Sabina'},
        {id: 5, name: 'Alexa'},
        {id: 6, name: 'Daria'},
        {id: 7, name: 'Buzina'},
        {id: 8, name: 'Katya'},
        {id: 9, name: 'Gleb'},
    ],
    profileSubscriptionCount: [{count: '178'}],
    profileSubscription: [
        {id: 1, photo: Avatar8, Name: 'Artzoom', category: 'Culture'},
        {id: 1, photo: Avatar2, Name: 'Realism', category: 'Paint'},
        {
            id: 1,
            photo: Avatar3,
            Name: 'Alest',
            category: 'best galaxy artist',
        },
        {id: 1, photo: Avatar4, Name: 'Metofond', category: 'everything'},
        {id: 1, photo: Avatar5, Name: 'Lentach', category: 'Common'},
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                avatar: Avatar7,
                title: 'user',
                description: '',
                // photo: Avatar2,
                text: state.profileNewPostText,
            };
            state.profileWallPosts.push(newPost);
            state.profileNewPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.profileNewPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;