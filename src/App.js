import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header.js';
import { Sidebar } from './components/Sidebar/Sidebar.js';
import { Feed } from './components/Feed/Feed.js';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';
import { Login } from './components/Login/Login';
import { auth } from './firebase';
import { Widgets } from './components/Widgets/Widgets';

function App() {
  const user = useSelector((state) => state.user.user);
  const dispath = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
    if(userAuth){
      dispath(login({
      email: userAuth.email,
      uid: userAuth.uid,
      displayName: userAuth.displayName,
        photoURL: userAuth.photoURL,
      }))
    } else {
      dispath(logout());
    }
    })
  },[]);

  return (
    <div className="app">
      <Header />
      {!user? (
        <Login />
        ):
        (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
      )}
    </div>
  );
}

export default App;
