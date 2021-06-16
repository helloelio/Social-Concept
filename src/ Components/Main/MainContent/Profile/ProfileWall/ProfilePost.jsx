import React from 'react';
import ProfilePostBloc from './ProfilePostBloc';
import './ProfilePost.scss';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../../redux/profile-reducer';


const ProfilePost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        if (newPostElement.current.value !== '') {
            props.dispatch(addPostActionCreator());
            newPostElement.current.value = '';
        } else {
            alert('you cannot send empty message');
        }
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    };

    return (
        <div className="profile__wall">
            <div className="profile__wallInput">
                <input
                    ref={newPostElement}
                    onChange={onPostChange}
                    type="text"
                    placeholder="Write something..."
                    value={props.profileNewPostText}
                />
                <input
                    type="submit"
                    placeholder="Send"
                    onClick={addPost}/>
            </div>
            <ProfilePostBloc profileWallPosts={props.profileWallPosts}/>
        </div>
    );
};

export default ProfilePost;
