import React, { useState } from 'react'
import PostItem from './PostItem';
import { DummyPost } from '../data';

const Posts = () => {
    const [posts, setposts] = useState(DummyPost);

    return (
        <>
            <section className="posts">
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
        </>
    )
}

export default Posts