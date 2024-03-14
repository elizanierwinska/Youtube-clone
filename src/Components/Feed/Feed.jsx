import './Feed.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
//use moment library to calculate the date 
import moment from 'moment';
import { APIKey, valueConverter } from '../../data';


const Feed = ({ category }) => {

  const [data,setData] = useState([]);
  

  const fetchData = async() => {
    const videoListURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${APIKey}
    `

 
    await fetch(videoListURL).then(response => response.json()).then(data=>setData(data.items))
  }

  useEffect(() => {
    fetchData();
  },[category])

   return (
    <div className="feed">
      {data.map((item, index) => {
        return (
        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
          <img src={item.snippet.thumbnails.medium.url} alt=''/>

          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
        )
      })}
    </div>
  );
}

export default Feed;
