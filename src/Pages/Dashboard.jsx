import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {userContext} from '../Context/userContext'
import axios from 'axios'
import DeletePost from './DeletePost'

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  const {id} = useParams();

  const { currentUser } = useContext(userContext)
  const token = currentUser?.token;
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  },[])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`, {withCredentials: true, headers:{Authorization: `Bearer ${token}`}})
        setPosts(response.data)

      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [])

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
                      <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt='' className="" />
                      </div>
                      <h5 className="">{post.title}</h5>
                    </div>
                    <div className="dashboard-post-actions">
                      <Link to={`/posts/${post._id}`} className='btn sm'>View</Link>
                      <Link to={`/posts/${post._id}/edit`} className='btn sm primary'>Edit</Link>
                      <DeletePost postId={post._id}/>
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