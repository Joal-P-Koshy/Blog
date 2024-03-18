import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';
import axios from 'axios';

const Posts = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
                setposts(response?.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchPosts();
    },[])

    return (
        <>
            <section className="posts">
                {
                    posts?.length > 0 ?
                        <div className="container posts-container">
                            {
                                posts.map(({ id, thumbnail, category, title, description, authorId, createdAt }) =>
                                    <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorId={authorId} createdAt={createdAt}/>)
                            }
                        </div> :
                        <h2 className='center'>No post Found</h2>
                }
            </section>
        </>
    )
}

export default Posts