import React, { useContext, useEffect, useState } from 'react'
import { DummyPost } from '../data'
import { Link, useNavigate } from 'react-router-dom'
import {userContext} from '../Context/userContext'

const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPost);

  const { currentUser } = useContext(userContext)
  const token = currentUser?.token;
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  },[])
  return (
    <>
      <section className="dashboard">
        {
          posts?.length > 0 ?
            <div className="container dashboard-container">
              {
                posts.map(post => {
                  return <article key={post.id} className='dashboard-post'>
                    <div className="dashboard-post-info">
                      <div className="dashboard-post-thumbnail">
                        <img src={post.thumbnail} alt="" />
                      </div>
                      <h5 className="">{post.title}</h5>
                    </div>
                    <div className="dashboard-post-actions">
                      <Link to={`/posts/${post.id}`} className='btn sm'>View</Link>
                      <Link to={`/posts/${post.id}/edit`} className='btn sm primary'>Edit</Link>
                      <Link to={`/posts/${post.id}/delete`} className='btn sm danger'>Delete</Link>
                    </div>
                  </article>
                })
              }
            </div> : <h2 className="center">You have no posts yet!</h2>
        }
      </section>
    </>
  )
}

export default Dashboard