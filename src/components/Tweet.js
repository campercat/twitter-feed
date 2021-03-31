import React from 'react'

const Tweet = (props) => {
  // debugger
  let isRetweeted
  let isLiked
  if(props.retweeted) {
    isRetweeted = "retweeted"
  } else {
    isRetweeted = "notRetweeted"
  }
  if(props.liked) {
    isLiked = "liked"
  } else {
    isLiked = "notLiked"
  }

  return (
    <div className="main-container">
      <img src={props.user.profile_image_url}></img>
      <div className="main-body">
        <div className="user-info">
          <p className="">{props.user.name}</p>
          <p className="">{props.user.screen_name}</p>
        </div>
        <p>{props.text}</p>
      </div>
      <i className="fas fa-reply"></i>
      <i className={`fas fa-retweet ${isRetweeted}`}></i>
      <p>{props.retweetCount}</p>
      <i className={`fas fa-heart ${isLiked}`}></i>
      <p>{props.favoriteCount}</p>
    </div>
  )
}

export default Tweet;
