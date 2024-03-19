import React, { useEffect, useState } from 'react'
import PostItem from '../Components/PostItem';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AuthorPosts = () => {
  const [posts, setposts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`)
              setposts(response?.data)
          } catch (err) {
              console.log(err);
          }
      }
      fetchPosts();
  },[id])

  return (
      <>
          <section className="posts">
              {
                  posts?.length > 0 ?
                      <div className="container posts-container">
                          {
                              posts.map(({ _id: id, thumbnail, category, title, description, creator, createdAt }) =>
                                  <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorId={creator} createdAt={createdAt}/>)
                          }
                      </div> :
                      <h2 className='center'>No post Found</h2>
              }
          </section>
      </>
  )
}

export default AuthorPosts