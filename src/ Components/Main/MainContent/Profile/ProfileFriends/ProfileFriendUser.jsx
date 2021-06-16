import react from 'react';

const FriendUser = (props) => {
  return (
    <div className="profile__friends-list__item">
      <a href="/">
        <span>{props.name}</span>
      </a>
    </div>
  );
};

export default FriendUser;