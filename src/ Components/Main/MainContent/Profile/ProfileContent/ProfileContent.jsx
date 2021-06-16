import react from 'react';
import ProfileContentInfo from './ProfileContentInfo';

const ProfileContent = (props) => {
  let profileName = props.profileName.map(content => {
    return <h1 id={content.id} content={content.name}> {content.name} </h1>;
  });
  return (
    <div className="profile__content">
      <div className="profile__name">
        {profileName}
      </div>
      <span className="line"></span>
      <ProfileContentInfo profileInfo={props.profileInfo}
                          profileSubInfo={props.profileSubInfo}/>
    </div>
  );
};
export default ProfileContent;
