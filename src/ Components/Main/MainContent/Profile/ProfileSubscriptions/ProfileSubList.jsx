import react from 'react';

const SubList = (props) => {
    return (
        <div className="profile__subscription-list__item">
            <img src={props.photo} alt=""/>
            <a href="/">{props.name}</a>
            <span>{props.category}</span>
        </div>
    );
};

export default SubList;