import React, { useState } from 'react'
import { DummyPost } from '../data'
import PostItem from '../Components/PostItem';


const CategoryPost = () => {
  const [posts, setPosts] = useState(DummyPost);

  return (
    <>
      <section>
        {
          posts?.length > 0 ?
            <div className="container posts-container">
              {
                posts.map(({ id, thumbnail, category, title, description, authorId }) =>
                  <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorId={authorId} />)
              }
            </div> :
            <h2 className='center'>No post Found</h2>
        }
      </section>
    </>)
}

export default CategoryPost