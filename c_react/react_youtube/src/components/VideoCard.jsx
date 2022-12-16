import React from 'react'

import { Link } from 'react-router-dom'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="box">
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
      </Link>
      <div className="boxInfo">
        <Link to={`/video/${videoId}`} className="videoTitle">
          {snippet?.title.slice(0, 50)}
        </Link>
        <Link to={`/channel/${snippet.channelId}`} className="channelName">
          {snippet.channelTitle}
        </Link>
      </div>
    </div>
  )
}

export default VideoCard
