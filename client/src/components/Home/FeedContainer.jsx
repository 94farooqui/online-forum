import React from 'react'
import Post from './Post'

const FeedContainer = () => {
  return (
    <div className="w-[600px] max-w-[600px] flex flex-col gap-4">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default FeedContainer