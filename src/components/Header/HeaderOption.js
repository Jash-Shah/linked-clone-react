import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

export const HeaderOption = ({ avatar, Icon, title }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  
  const logoutUser = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div onClick={logoutUser} className="headerOption">
      {Icon && <Icon className="headerOption__icon"/>}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className='headerOption__title'> {title} </h3>
    </div>
  )
}
