import React from 'react';
import './Sidebar.css';
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



const Sidebar = () => {
  return (
    <div>
      <div className='sidebar '>
        <div className="sortcut-links">
          <div className="side-link">
            <img src={home} alt=""/><p>Home</p>
          </div>
          <div className="side-link">
            <img src={gameIcon} alt=""/><p>Gaming</p>
          </div>
          <div className="side-link">
            <img src={automobiles} alt=""/><p>Automobile</p>
          </div>
          <div className="side-link">
            <img src={sports} alt=""/><p>Sports</p>
          </div>
          <div className="side-link">
            <img src={entertainment} alt=""/><p>Entertainment</p>
          </div>
          <div className="side-link">
            <img src={tech} alt=""/><p>Technology</p>
          </div>
          <div className="side-link">
            <img src={music} alt=""/><p>Music</p>
          </div>
          <div className="side-link">
            <img src={blogs} alt=""/><p>Blogs</p>
          </div>
          <div className="side-link">
            <img src={news} alt=""/><p>News</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;