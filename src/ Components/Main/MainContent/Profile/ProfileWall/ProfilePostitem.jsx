import react from 'react';
import like from './../../../../../redux/images/heart.svg';

const ProfilePostitem = (props) => {
    let likeStyle = react.createRef();

    let likeBtn = () => {
        alert('you click on Like button');
    };
    return (
        <div className="profile__posts">
            <div className="profile__post">
                <div className="post__header">
                    <img src={props.avatar} alt="" className="post__avatar" />
                    <div className="post__title">{props.title}</div>
                    <div className="post__description">{props.description}</div>
                </div>
                <div className="post__content">
                    <div className="post__image">
                        <img src={props.photo} alt="" />
                    </div>
                    <div className="post__text">
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className="profile__buttons">
                    <button
                        ref={likeStyle}
                        className="profile__like"
                        onClick={likeBtn}
                    >
                        <img src={like} alt="like button" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePostitem;
