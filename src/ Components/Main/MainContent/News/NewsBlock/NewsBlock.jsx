import React from 'react';
import './NewsBlock.scss';
import NewsItem from './NewsItem';

const NewsBlock = (props) => {
    let newsItem = props.NewsItemData.map((news) => {
        return (
            <NewsItem
                id={news.id}
                avatar={news.avatar}
                title={news.title}
                description={news.description}
                photo={news.photo}
                text={news.text}
            />
        );
    });
    return <div className="news__block">{newsItem}</div>;
};

export default NewsBlock;
