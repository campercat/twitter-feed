import React from 'react';

import Tweet from './Tweet'

const TwitterFeed = (props) => {
  // debugger
  const tweetArray = props.data.map(tweet => {
    return <Tweet
      key={tweet.id_str}
      text={tweet.text}
      retweetCount={tweet.retweet_count}
      favoriteCount={tweet.favorite_count}
      liked={tweet.liked}
      retweeted={tweet.retweeted}
      user={tweet.user}
      entities={tweet.entities}
      />
  })

  return(
    <div>
      {tweetArray}
    </div>
  )
};

export default TwitterFeed;

// userName={tweet.user.name}
// userScreenName={tweet.user.screen_name}
// userProfileImage={tweet.user.profile_image_url}