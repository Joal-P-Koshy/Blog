import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
    <>
    <section className="post-detail">
      <div className="container post-detail-container">
        <div className="post-detail-header">
          <PostAuthor/>
          <div className="post-detail-buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail-thumbnail">
          
        </div>
      </div>
    </section>
    </>
  )
}

export default PostDetail