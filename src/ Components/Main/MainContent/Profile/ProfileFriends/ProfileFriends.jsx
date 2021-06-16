import react from 'react';
import FriendUser from './ProfileFriendUser';


const ProfileFriends = (props) => {
  let friendsCount = props.profileFriendsCount.map(friend => {
    return (friend.friendsCount);
  });
  let friends = props.profileFriends.map((friend) => {
    return <FriendUser name={friend.name} id={friend.id}/>;
  });
  return (
    <div className="profile__friends">
      <a href="/SocialConcept/friends">
        Friends <span>{friendsCount}</span>
      </a>
      <div className="profile__friends-list">{friends}</div>
    </div>
  );
};

export default ProfileFriends;
