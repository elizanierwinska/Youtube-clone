import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import userProfile from '../../assets/user_profile.jpg';

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel to Learn Web Development</h3>
      <div className="play-video-info">
      <p>1245 Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="like button"/>125</span>
          <span><img src={dislike} alt="dislike button"/>1</span>
          <span><img src={share} alt="share button"/>Share</span>
          <span><img src={save} alt="save button"/>Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="Jack's channel profile photo"/>
        <div>
          <p>GreatStack</p>
          <span>1M subscribes</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
        <hr />
        <h4>100 Comments</h4>
        <div className="comment">
          <img src={userProfile} alt="User photo" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>What a great video! I've got a lot to learn along the way to become a good frontend developer but I am already feeling like I know much more after this video! Thank you so much!</p>
            <div className="comment-action">
              <img src={like} alt="like button"/>
              <span>244</span>
              <img src={dislike} alt="dislike button"/>
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={userProfile} alt="User photo" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>What a great video! I've got a lot to learn along the way to become a good frontend developer but I am already feeling like I know much more after this video! Thank you so much!</p>
            <div className="comment-action">
              <img src={like} alt="like button"/>
              <span>244</span>
              <img src={dislike} alt="dislike button"/>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo;