import react from 'react';

const ProfileInfo = (props) => {
  return (
    <div className="profile__info">
      <ul>
        <li>
          Born:<a href="/">{props.born}</a>
        </li>
        <li>
          City:<a href="/">{props.city}</a>
        </li>
        <li>
          Stud:<a href="/">{props.study}</a>
        </li>
        <li>
          Site:
          <a rel="noreferrer" target="_blank" href={props.href}>
            {props.site}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ProfileInfo;