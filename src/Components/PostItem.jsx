import React from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'


const PostItem = ({postId, thumbnail, category, title, description, authorId, createdAt}) => {
    const shortTitle = title.length > 20 ? title.substr(0, 20) + '...' : title;
    const shortDescription = description.length > 145 ? description.substr(0, 145) + '...' : description;
  return (
    <>
    <article className="post">
        <div className="post-thumbnail">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} className="" />
        </div>
        <div className="post-content">
            <Link to={`/posts/${postId}`}>
                <h3 className="">{shortTitle}</h3>
            </Link>
            <p dangerouslySetInnerHTML={{__html: shortDescription}}/>
            <div className="post-footer">
                <PostAuthor authorId={authorId} createdAt={createdAt}/>
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
    </>
  )
}

export default PostItem