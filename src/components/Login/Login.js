import React, { useState } from 'react';
import "./Login.css";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

export const Login = () => {

  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, mail, password)
    .then((userAuth) => {
      const user = userAuth.user;

      dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }))
    }).catch((err) => (alert(err)));

  };

  const registerUser = () => {
    if(!name) (alert("Please enter a full name!"));

    createUserWithEmailAndPassword(auth, mail, password)
    .then((userAuth) => {
      updateProfile(userAuth.user, {
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic,
        }))
      })

      }).catch((err) => (alert(err)));
  };

  return (
    <div className="login">
      <img src="https://dataxconnect.com/wp-content/uploads/2022/08/linkedin-banner.png" alt="LinkedIN" />

      <form action="">
        <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Full Name (required if not registered)" type="text" />
        <input onChange={(e) => setProfilePic(e.target.value)} value={profilePic} placeholder='Profile Pic URL (optional)' type="text" />
        <input onChange={(e) => setMail(e.target.value)} value={mail} type="email" placeholder='Email'/>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password'/>

        <button type='Submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a Member?{" "}
        <span className='login__register' onClick={registerUser}>Register Now</span>
      </p>
    </div>
  )
}
