import React from 'react';
import './Sidebar.css';
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import home from '../../assets/home.png';
import gameIcon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';



const Sidebar = ({ sidebar, setSidebar, category, setCategory }) => {
  return (
    <div>
      <div className={`sidebar ${sidebar ? '' : "small-sidebar"}`}>
        <div className="flex">
          <img src={menuIcon} className="menu-icon" onClick={() => setSidebar(prev => !prev)} alt='menu icon'/>
          <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="shortcut-links">
          <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
            <img src={home} alt="home icon"/>
            <p>Home</p>
          </div>
          <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
            <img src={gameIcon} alt="gaming icon"/>
            <p>Gaming</p>
          </div>
          <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
            <img src={automobiles} alt="automobiles icon"/>
            <p>Automobile</p>
          </div>
          <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
            <img src={sports} alt="sports icon"/>
            <p>Sports</p>
          </div>
          <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
            <img src={entertainment} alt="entertainment icon"/>
            <p>Entertainment</p>
          </div>
          <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
            <img src={tech} alt="tech icon"/><p>Technology</p>
          </div>
          <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
            <img src={music} alt="music icon"/>
            <p>Music</p>
          </div>
          <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
            <img src={blogs} alt="blogs icon"/>
            <p>Blogs</p>
          </div>
          <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
            <img src={news} alt="news icon"/>
            <p>News</p>
          </div>
          <hr id="hr"/>
        </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="channel's icon"/>
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="channel's icon"/>
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="channel's icon"/>
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="channel's icon"/>
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="channel's icon"/>
          <p>Nas Daily</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Sidebar;