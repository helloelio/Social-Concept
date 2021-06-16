import react from 'react';

const ProfileMain = (props) => {
  let profileAvatar = props.profileAvatar.map((ava) => {
    return (
      <div className="profile__avatar">
        <img src={ava.photo} alt="" />
      </div>
    );
  });

  return (
    <div className="profile__main">
      {profileAvatar}
      <div className="profile__button">
        <button
          onClick={() => alert('Hi you click on EDIT BUTTON')}
          className="profileButton"
        >
          Edit
        </button>
      </div>
      <div className="profile__list">
        <ul>
          <li>
            <a className="profile__item" href="/">
              Statisctic
            </a>
          </li>
          <li>
            <a className="profile__item" href="/">
              Highlights
            </a>
          </li>
          <li>
            <a className="profile__item" href="/">
              Archive
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProfileMain;
