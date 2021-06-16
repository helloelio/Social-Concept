import './App.css';
import Header from './ Components/Header/Header';
import NavBar from './ Components/navbar/NavBar';

function App(props) {
    return (
        <div className="App">
            <Header/>
            <NavBar
                /*PROFILE DATA */
                profile={props.appState.profilePage}
                /* FRIENDS DATA */
                AllfriendsData={props.appState.allFriendsPage}
                OnlineFriendsData={props.appState.onlineFriendsPage}
                /* DIALOG DATA */
                dialogs={props.appState.dialogsPage}
                dialogItemEnemyData={props.appState.dialogsPage}
                dialogItemMyData={props.appState.dialogsPage}
                /* NEWS DATA */
                news={props.appState.newsPage}
                /* DISPATCH */
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default App;
