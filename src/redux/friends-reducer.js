import Avatar1 from './images/photo1.jpg';
import Avatar2 from './images/photo2.jpg';
import Avatar3 from './images/photo3.jpg';
import Avatar4 from './images/photo4.jpg';
import Avatar5 from './images/photo5.jpg';
import Avatar6 from './images/photo6.jpg';
import Avatar7 from './images/photo7.jpg';
import Avatar8 from './images/photo8.jpg';

let initialStat = {
    AllfriendsData: [
        { id: 1, name: 'Hello Elio', photo: Avatar1, description: 'Online' },
        { id: 2, name: 'Alest Artist', photo: Avatar2, description: 'Offline' },
        { id: 3, name: 'Our Love', photo: Avatar3, description: 'Online' },
        { id: 4, name: 'Queen A', photo: Avatar4, description: 'Offline' },
        { id: 5, name: 'God World', photo: Avatar5, description: 'Offline' },
        { id: 6, name: 'Jesus M', photo: Avatar6, description: 'Offline' },
        { id: 7, name: 'PHU <3', photo: Avatar7, description: 'Online' },
        { id: 8, name: 'Mefisto', photo: Avatar8, description: 'Offline' },
        { id: 9, name: 'Baal', photo: Avatar7, description: 'Online' },
        { id: 10, name: 'Diablo', photo: Avatar6, description: 'Online' },
        { id: 11, name: 'Andriel', photo: Avatar5, description: 'Offline' },
        { id: 12, name: 'Sous Plan', photo: Avatar4, description: 'Online' },
        { id: 13, name: 'Roer Cill', photo: Avatar3, description: 'Offline' },
        {
            id: 14,
            name: 'Gleb Medvedev',
            photo: Avatar2,
            description: 'Online',
        },
        { id: 15, name: 'zxc qwe', photo: Avatar1, description: 'Online' },
        { id: 16, name: 'Pop s', photo: Avatar7, description: 'Offline' },
        { id: 17, name: 'Deer Bear', photo: Avatar4, description: 'Offline' },
        { id: 18, name: 'Cloes Min', photo: Avatar3, description: 'Offline' },
        { id: 19, name: 'Nroe Ked', photo: Avatar5, description: 'Online' },
        { id: 20, name: '1234', photo: Avatar2, description: 'Online' },
        { id: 21, name: 'Roer Cill', photo: Avatar3, description: 'Offline' },
        { id: 22, name: 'Roer Cill', photo: Avatar3, description: 'Offline' },
        { id: 23, name: 'Andriel', photo: Avatar5, description: 'Offline' },
        { id: 24, name: 'Pop s', photo: Avatar7, description: 'Offline' },
        { id: 25, name: 'Pop s', photo: Avatar7, description: 'Offline' },
        {
            id: 26,
            name: 'Gleb Medvedev',
            photo: Avatar2,
            description: 'Online',
        },
        { id: 27, name: 'Roer Cill', photo: Avatar3, description: 'Offline' },
        { id: 28, name: 'Baal', photo: Avatar7, description: 'Online' },
        { id: 29, name: 'Mefisto', photo: Avatar8, description: 'Offline' },
    ],
};

const allFriendsReduser = (state = initialStat.AllfriendsData) => {
    return state;
};

export default allFriendsReduser;
