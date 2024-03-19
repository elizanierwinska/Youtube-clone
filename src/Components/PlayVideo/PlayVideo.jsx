import './PlayVideo.css';
import React from 'react';
// import video1 from '../../assets/video.mp4';
import { useState, useEffect } from 'react';
import { APIKey, valueConverter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { decode } from 'html-entities';
import { convert } from 'html-to-text';

const PlayVideo = () => {

  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);


  const fetchChannelData = async() => {
    //fetching channel data
    const channelDataURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${APIKey}`

    await fetch(channelDataURL).then(res => res.json()).then(data => setChannelData(data.items[0]));

    //fetching comment data
    const commentURL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${APIKey}`

    console.log(commentURL)

    await fetch(commentURL).then(res => res.json()).then(data => setCommentData(data.items))
  }

  const fetchVideoData = async() => {
    //Fetching videos data
    const videoDetailsURL =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${APIKey}`

    await fetch(videoDetailsURL).then(res => res.json()).then(data => setApiData(data.items[0]));
    
  }

  useEffect(() => {
    fetchVideoData();
  }, [videoId])

  useEffect(() => {
    fetchChannelData();
  },[apiData])


  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Loading..."}</h3>
      <div className="play-video-info">
        <p>{apiData ? valueConverter(apiData.statistics.viewCount) : "unknown number of"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
        <div>
          <span><img src={like} alt="like button"/>{apiData ? valueConverter(apiData.statistics.likeCount) : '?'}</span>
          <span><img src={dislike} alt="dislike button"/></span>
          <span><img src={share} alt="share button"/>Share</span>
          <span><img src={save} alt="save button"/>Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt=" channel profile photo"/>
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>{channelData ? valueConverter(channelData.statistics.subscriberCount) : "unknown number of"} subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description : ""}</p>
        <hr />
        <h4>{apiData ? valueConverter(apiData.statistics.commentCount) : "unknown number of"} Comments</h4>
        {commentData?.map((item, index) => {
          let comment = item.snippet.topLevelComment.snippet.textDisplay
            return (
              <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User photo" />
                <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                  <p className="comment">{convert(decode(comment))}</p>
                  <div className="comment-action">
                    <img src={like} alt="like button"/>
                    <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="dislike button"/>
                    <p>Reply</p>
                    <span></span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PlayVideo;