import './Friends.scss';
import FreindsItem from './FriendsItem/FrindsItem';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    let Allfriends = props.AllfriendsData.map((friend) => {
        return (
            <FreindsItem
                id={friend.id}
                name={friend.name}
                photo={friend.photo}
                description={friend.description}
            />
        );
    });
    return (
        <main className="main">
            <div className="main__content">
                <div className="friends__main">
                    <div className="friends__title">
                        <NavLink
                            className="AllFriends"
                            to="/SocialConcept/friends"
                        >
                            All friends
                        </NavLink>
                        <NavLink
                            className="OnlineFriends"
                            to="/SocialConcept/friends&online"
                        >
                            Friends online
                        </NavLink>
                    </div>
                    <span className="line"></span>
                    <div className="friends__list">
                        <div className="friends__items">{Allfriends}</div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Friends;
