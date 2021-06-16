import Avatar1 from './images/photo1.jpg';
import Avatar3 from './images/photo3.jpg';
import Avatar7 from './images/photo7.jpg';
import Avatar6 from './images/photo6.jpg';
import Avatar4 from './images/photo4.jpg';

let initialState = {
    OnlineFriendsData: [
        {id: 1, name: 'Hello Elio', photo: Avatar1, description: 'Online'},
        {id: 3, name: 'Our Love', photo: Avatar3, description: 'Online'},
        {id: 7, name: 'PHU <3', photo: Avatar7, description: 'Online'},
        {id: 9, name: 'Baal', photo: Avatar7, description: 'Online'},
        {id: 10, name: 'Diablo', photo: Avatar6, description: 'Online'},
        {id: 12, name: 'Sous Plan', photo: Avatar4, description: 'Online'},
    ],
}
let onlineFriendsReduser = (state = initialState.OnlineFriendsData, action) => {
    return state
}

export default onlineFriendsReduser;