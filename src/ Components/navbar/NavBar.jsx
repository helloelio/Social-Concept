import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//========================
import Profile from '../Main/MainContent/Profile/Profile';
import Friends from '../Main/MainContent/Friends/Friends';
import OnlineFriends from '../Main/MainContent/Friends/OnlineFriends';
import Messages from '../Main/MainContent/Messages/Messages';
import News from '../Main/MainContent/News/News';
import Settings from '../Main/MainContent/Settings/Settings';
import Music from '../Main/MainContent/Music/Music';
import LoginForm from '../LoginForm/LoginForm';
//========================
import NavItem from './NavItem';
import './NavBar.scss';

const NavBar = (props) => {
    return (
        <Router>
            <nav className="nav">
                <ul className="nav__list">
                    <NavItem
                        class="profile"
                        text="Profile"
                        href="/SocialConcept/profile"
                    />
                    <NavItem
                        class="friends"
                        text="Friends"
                        href="/SocialConcept/friends"
                    />
                    <NavItem
                        class="messages"
                        text="Messages"
                        href="/SocialConcept/messages"
                    />
                    <NavItem
                        class="music"
                        text="Music"
                        href="/SocialConcept/music"
                    />
                    <NavItem
                        class="news"
                        text="News"
                        href="/SocialConcept/news"
                    />
                    <NavItem
                        class="settings"
                        text="Settings"
                        href="/SocialConcept/settings"
                    />
                </ul>
            </nav>
            <Switch>
                <Route exact path="/SocialConcept">
                    <LoginForm path="/SocialConcept/login" />
                </Route>
                <Route path="/SocialConcept/profile">
                    <Profile
                        profileAvatar={props.profile.profileAvatar}
                        profileName={props.profile.profileName}
                        profileInfo={props.profile.profileInfo}
                        profileSubInfo={props.profile.profileSubInfo}
                        profilePhotosInfo={props.profile.profilePhotosInfo}
                        profilePhotos={props.profile.profilePhotos}
                        profileFriendsCount={props.profile.profileFriendsCount}
                        profileFriends={props.profile.profileFriends}
                        profileSubscriptionCount={
                            props.profile.profileSubscriptionCount
                        }
                        profileSubscription={props.profile.profileSubscription}
                        profileWallPosts={props.profile.profileWallPosts}
                        dispatch={props.dispatch}
                    />
                </Route>
                <Route path="/SocialConcept/friends">
                    <Friends AllfriendsData={props.AllfriendsData} />
                </Route>
                <Route path="/SocialConcept/friends&online">
                    <OnlineFriends
                        OnlineFriendsData={props.OnlineFriendsData}
                    />
                </Route>
                <Route path="/SocialConcept/messages">
                    <Messages
                        dialogData={props.dialogs.dialogData}
                        dialogItemMyData={props.dialogs.dialogItemMyData}
                        dialogItemEnemyData={props.dialogs.dialogItemEnemyData}
                        dispatch={props.dispatch}
                    />
                </Route>
                <Route path="/SocialConcept/news">
                    <News NewsItemData={props.news.NewsItemData} />
                </Route>
                <Route path="/SocialConcept/music">
                    <Music />
                </Route>
                <Route path="/SocialConcept/settings">
                    <Settings />
                </Route>
            </Switch>
        </Router>
    );
};

export default NavBar;
