import React, {useEffect} from 'react'
import s from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className={s.body}>
        <div className={s.app_wrapper}>
          <Header/>
          <Navbar/>
          <div className={s.app_wrapper_content}>
            <Route path="/dialogs" render={ () => <Dialogs store={props.store} /> } />
            <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /> } />
          </div>
        </div>
      </div>
      </BrowserRouter>
  );
  
}

export default App;
