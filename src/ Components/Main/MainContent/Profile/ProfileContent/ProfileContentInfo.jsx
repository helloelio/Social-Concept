import react from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import ProfileSubinfo from './profileInfo/ProfileSubinfo';

const ProfileContentInfo = (props) => {

  let profileInfo = props.profileInfo.map(content => {
    return <ProfileInfo id={content.id} born={content.born} city={content.city} study={content.study}
                        site={content.site} href={content.href}/>;
  });
  let profileSubInfo = props.profileSubInfo.map(content => {
    return <ProfileSubinfo id={content.id} friendsCount={content.friendsCount} photosCount={content.friendsCount}
                           videosCount={content.videosCount} musicCount={content.musicCount}/>;
  });

  return (
    <div className="profile__content-info">
      {profileInfo}
      <span className="line"></span>
      {profileSubInfo}
    </div>
  );
};

export default ProfileContentInfo;