import React from 'react'

import { VideoCard, Loader } from './'

const Videos = ({ videos, layout }) => {
  if (!videos?.length) return <Loader />

  return (
    <article className={`videos__inner ${layout}`}>
      {videos.map((item, idx) => (
        <VideoCard key={idx} video={item} />
      ))}
    </article>
  )
}

export default Videos
