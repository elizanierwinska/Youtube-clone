import React from 'react';
import { useState, useEffect } from 'react';
import './Recommended.css';
import { APIKey } from '../../data';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Recommended = ({ categoryId }) => {

  const [apiData, setApiData] = useState([]);

  const fetchData = async() => {
    const relatedVideoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${APIKey}`;

    await fetch(relatedVideoURL).then(res => res.json()).then(data => setApiData(data.items));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="recommended">
      {apiData.map((item,index) =>{
        return(          
          <div className="side-video-list">
            <img src={thumbnail1} alt=""/>
            <div className="vid-info">
              <h4>Best channel to help you to become a web developer</h4>
              <p>GreatStack</p>
              <p>199k views &bull; 1 month ago</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Recommended;