const FreindsItem = (props) => {
    return (
        <div className="friends__item">
            <a href="/">
                <img src={props.photo} alt="" />
            </a>
            <div className="friends__item-content">
                <a className="friends__item-name" href="/">
                    {props.name}
                </a>
                <p className="friends__item-description">{props.description}</p>
                <a className="friends__item-btn" href="/SocialConcept/messages">
                    Write message
                </a>{' '}
                <a className="friends__item-btn" href="/SocialConcept/messages">
                    Call
                </a>
            </div>
        </div>
    );
};

export default FreindsItem;
