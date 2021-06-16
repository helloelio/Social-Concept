import react from 'react';

const ProfilePhotos = (props) => {
  let profilePhotosInfo = props.profilePhotosInfo.map(data => {
    return (
      <a href="">
        {data.name} photos<span> {data.photosCount}</span>
      </a>
    );
  });
  let profilePhotos = props.profilePhotos.map(data => {
    return (
      <div className="profile__photos-stack">
        <a href="/SocialConcept/profile">
          <img src={data.vissiblePhotoOne} alt=""/>
        </a>
        <a href="/SocialConcept/profile">
          <img src={data.vissiblePhotoTwo} alt=""/>
        </a>
        <a href="/SocialConcept/profile">
          <img src={data.vissiblePhotoThree} alt=""/>
        </a>
        <a href="/SocialConcept/profile">
          <img src={data.vissiblePhotoFour} alt=""/>
        </a>
        <a href="/SocialConcept/profile">
          <img src={data.vissiblePhotoFive} alt=""/>
        </a>
      </div>
    );
  });

  return (
    <div className="profile__photos">
      {profilePhotosInfo}
      {profilePhotos}
    </div>
  );
};

export default ProfilePhotos;
