import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { HeaderOption } from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';

const avatarURL = "https://media.licdn.com/dms/image/D4D03AQHCHR4xGWvGNQ/profile-displayphoto-shrink_400_400/0/1664685757976?e=1686182400&v=beta&t=2zxh88iyDcrs4yPMj0pBt5BBmjK1gaEXHpStyHIpuD0";

export const Header = () => {

  return (
    <div className="header">
      <div className="header__left">
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIN" />
          <div className="header__search">
            <SearchIcon />
            <input placeholder='Search' type="text" />
          </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={GroupIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={true} title="Me" />
      </div>
    </div>
  )
}
