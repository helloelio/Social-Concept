import react from 'react';
import './Profile.scss';
import ProfileMain from './ProfileMain/ProfileMain';
import ProfileContent from './ProfileContent/ProfileContent';
import ProfileFriends from './ProfileFriends/ProfileFriends';
import ProfilePhotos from './ProfilePhotos/ProfilePhotos';
import ProfileSubscriptions from './ProfileSubscriptions/ProfileSubscriptions';
import ProfilePost from './ProfileWall/ProfilePost';

const Profile = (props) => {
  return (
    <main className="main">
      <div className="main__content">
        <div id="profile">
          <ProfileMain profileAvatar={props.profileAvatar} />
          <ProfileContent
            profileName={props.profileName}
            profileInfo={props.profileInfo}
            profileSubInfo={props.profileSubInfo}
          />
          <ProfileFriends
            profileFriendsCount={props.profileFriendsCount}
            profileFriends={props.profileFriends}
          />
          <ProfilePhotos
            profilePhotosInfo={props.profilePhotosInfo}
            profilePhotos={props.profilePhotos}
          />
          <ProfileSubscriptions
            profileSubscription={props.profileSubscription}
            profileSubscriptionCount={props.profileSubscriptionCount}
          />
          <ProfilePost
            profileWallPosts={props.profileWallPosts}
            profileNewPostText={props.profileNewPostText}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </main>
  );
};

export default Profile;
