import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const sidebarTopImgURL = "https://media.licdn.com/dms/image/C4D16AQHgHd2vvgcxUg/profile-displaybackgroundimage-shrink_350_1400/0/1668608710309?e=1686182400&v=beta&t=lmZ5dXbdxj2u_5JcbvkyTHyRaM1gXTW7eMCE7oK2iJM";

export const Sidebar = () => {
  const user = useSelector((state) => state.user.user);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={sidebarTopImgURL} alt="" />
        <Avatar className='sidebar__avatar' src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2> {user.displayName} </h2>
        <h4> {user.email} </h4>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p> Who Viewed You? </p>
            <p className="sidebar__statNumber">2,000</p>
          </div>
          <div className="sidebar__stat">
            <p> Views on Post </p>
            <p className="sidebar__statNumber">4,200</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p> Recent </p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  )
}
