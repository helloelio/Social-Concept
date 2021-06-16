import react from 'react';
import NewsBlock from './NewsBlock/NewsBlock';

const News = (props) => {
    return (
        <main className="main">
            <div className="main__content">
                <NewsBlock NewsItemData={props.NewsItemData}/>
            </div>
        </main>
    );
};

export default News;
