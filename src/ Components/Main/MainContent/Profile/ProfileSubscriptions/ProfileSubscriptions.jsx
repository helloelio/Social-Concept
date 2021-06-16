import react from 'react';
import SubList from './ProfileSubList';

const ProfileSubscriptions = (props) => {
    let subscriptions = props.profileSubscription.map((sub) => {
        return (
            <SubList
                id={sub.id}
                name={sub.Name}
                photo={sub.photo}
                category={sub.category}
            />
        );
    });
    let subscriptionsCount = props.profileSubscriptionCount.map(sub => {
        return (
            <a href="/">
                Subscriptions<span> {sub.count}</span>
            </a>
        );
    });
    return (
        <div className="profile__subscriptions">
            {subscriptionsCount}
            <div className="profile__subscription-list">{subscriptions}</div>
        </div>
    );
};
export default ProfileSubscriptions;
