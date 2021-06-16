import react from 'react';

const NewsItem = (props) => {
    return (
        <div className="news__item">
            <div className="news__header">
                <img src={props.avatar} alt="" className="news__avatar"/>
                <div className="news__title">{props.title}</div>
                <div className="news__description">{props.description}</div>
            </div>
            <div className="news__content">
                <div className="news__image">
                    <img src={props.photo} alt=""/>
                </div>
                <div className="news__text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
