import React from 'react'
import { Link } from "react-router-dom"
import Avatar from '../Images/avatar.png'


const PostAuthor = () => {
  return (
    <>
      <Link to={`/posts/users/sample`} className='post-author'>
        <div className="post-author-avatar">
          <img src={Avatar} alt="" className="" />
        </div>
        <div className="post-author-details">
          <h5 className="">By : Sample Author</h5>
          <small>Just Now</small>
        </div>
      </Link>
    </>
  )
}

export default PostAuthor