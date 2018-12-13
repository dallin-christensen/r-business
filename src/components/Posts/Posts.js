import React from 'react'
import './Posts.css'

const Post = ({ data }) => {
  const { author, title, num_comments, permalink } = data
  
  return (
    <div className='post-container' onClick={() => window.open(`https://www.reddit.com${permalink}`)}>
      <div className='post-top'>
        {title}
      </div>
      <div className='post-bottom'>
        <p className='post-bottom-left'>{num_comments} comments</p>
        <p className='post-bottom-right'>Submitted by {author}</p>
      </div>
    </div>
  )
}

const Posts = ({ posts }) => {
  return (
    <div className='posts-container'>
      {
        posts.map((post, i) => { // higher-order function, map, returning <Post /> components
          const { data } = post
          return <Post data={data} key={i} />
        })
      }
    </div>
  )
}

export default Posts
