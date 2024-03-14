import "./Navbar.css"
import React from "react";
import { Link } from 'react-router-dom';
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/user_profile.jpg";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        {/* To change state to the opposite of the previous one, add exlamation mark before */}
        <img className="menu-icon" onClick={() => setSidebar(prev => !prev)} src={menuIcon} alt="" />
        <Link to='/'>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search"/>
          <img src={searchIcon}
          alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" />
        <img src={notificationIcon} alt="" />
        <img src={profileIcon} className="user-icon" alt="" />
      </div>
    </nav>
  )
}

export default Navbar;