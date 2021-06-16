import react from 'react';

const ProfileSubinfo = (props) => {
  return (
    <div className="profile__subinfo">
      <ul>
        <li>
          <a href="/">
              <span className="profile__subinfo-numbers">
                {props.friendsCount}
              </span>
            friends
          </a>
        </li>
        <li>
          <a href="/">
              <span className="profile__subinfo-numbers">
                {props.photosCount}
              </span>
            photos
          </a>
        </li>
        <li>
          <a href="/">
              <span className="profile__subinfo-numbers">
                {props.videosCount}
              </span>
            videos
          </a>
        </li>
        <li>
          <a href="/">
              <span className="profile__subinfo-numbers">
                {props.musicCount}
              </span>
            music
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSubinfo;