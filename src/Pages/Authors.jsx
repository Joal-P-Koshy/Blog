import React, { useState } from 'react'
import Avatar from '../Images/avatar.png'
import { Link } from 'react-router-dom';


const authorsData=[
  {id: 1, avatar: Avatar, name: 'john', posts: 3},
  {id: 2, avatar: Avatar, name: 'sam', posts: 4},
  {id: 3, avatar: Avatar, name: 'don', posts: 1},
  {id: 4, avatar: Avatar, name: 'pablo', posts: 0},
  {id: 5, avatar: Avatar, name: 'jack', posts: 2},
]

const Authors = () => {
  const [authors, setAuthors]= useState(authorsData);
  return (
    <section className="authors">
      {
        authors?.length > 0?
        <div className="container authors-container">

        {
          authors.map(({id, avatar, name, posts})=>{
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author-avatar">
                <img src={avatar} alt={`image of ${name}`} />
              </div>
              <div className="author-info">
                <h4 className="">{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
        </div>: <h2 className="center">No authors found</h2>
      }
      
    </section>
  )
}

export default Authors