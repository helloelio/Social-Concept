import './Friends.scss';
import FreindsItem from './FriendsItem/FrindsItem';
import { NavLink } from 'react-router-dom';

const OnlineFriends = (props) => {
    let OnlineFriends = props.OnlineFriendsData.map((OnlineFriend) => {
        return (
            <FreindsItem
                id={OnlineFriend.id}
                name={OnlineFriend.name}
                photo={OnlineFriend.photo}
                description={OnlineFriend.description}
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
                        <div className="friends__items">{OnlineFriends}</div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OnlineFriends;
