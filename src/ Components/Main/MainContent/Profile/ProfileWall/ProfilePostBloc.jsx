import react from 'react';
import ProfilePostitem from './ProfilePostitem';

const ProfilePostBloc = (props) => {
  let postItems = props.profileWallPosts.map((post) => {
    return (
      <ProfilePostitem
        id={post.id}
        avatar={post.avatar}
        title={post.title}
        description={post.description}
        photo={post.photo}
        text={post.text}
      />
    );
  });

  return <div className="wall__block">{postItems}</div>;
};

export default ProfilePostBloc;
