import React, { useContext, useEffect, useState } from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link, useParams } from 'react-router-dom'
import { userContext } from '../Context/userContext'
import DeletePost from './DeletePost'
import axios from 'axios'

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)

  const { currentUser } = useContext(userContext);

  useEffect(()=>{
    const getPost = async()=>{
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(response.data)

      } catch (error) {
        setError(error)
      }
    }
    getPost();
  },[])

  return (
    <>
      <section className="post-detail">
        {error && <p className='error'>{error}</p>}
        {post && <div className="container post-detail-container">
          <div className="post-detail-header">
            <PostAuthor authorId={post.creator} createdAt={post.createdAt}/>
            { currentUser?.id == post?.creator && <div className="post-detail-buttons">
              <Link to={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
              <DeletePost postId={id}/>
            </div> }
          </div>
          <h1>{post.title}</h1>
          <div className="post-detail-thumbnail">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
          </div>
          <p dangerouslySetInnerHTML={{__html: post.description}}></p>

        </div>}
      </section>
    </>
  )
}

export default PostDetail