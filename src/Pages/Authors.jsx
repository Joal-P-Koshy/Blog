import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
        setAuthors(response?.data);

      } catch (error) {
        console.log(error);
      }
    }
    getAuthors();
  }, [])
  return (
    <section className="authors">
      {
        authors?.length > 0 ?
          <div className="container authors-container">

            {
              authors.map(({ _id: id, avatar, name, posts }) => {
                return <Link key={id} to={`/posts/users/${id}`} className='author'>
                  <div className="author-avatar">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="" />
                  </div>
                  <div className="author-info">
                    <h4 className="">{name}</h4>
                    <p>Posts: {posts}</p>
                  </div>
                </Link>
              })
            }
          </div> : <h2 className="center">No authors found</h2>
      }

    </section>
  )
}

export default Authors