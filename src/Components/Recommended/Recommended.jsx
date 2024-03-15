import React from 'react';
import { useState, useEffect } from 'react';
import './Recommended.css';
import { APIKey, valueConverter } from '../../data';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt=""/>
            <div className="vid-info">
              <h4>{item.snippet.title.length > 25 ? item.snippet.title.slice(0,25) + "..." : item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Recommended;