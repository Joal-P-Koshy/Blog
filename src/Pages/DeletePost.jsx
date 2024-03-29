import React, { useContext, useEffect } from 'react'
import {userContext} from '../Context/userContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'




const DeletePost = ({postId: id}) => {
  const { currentUser } = useContext(userContext)
  const token = currentUser?.token;
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  },[])

  const removePost = async() => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, {withCredentials: true, headers: {Authorization:`Bearer ${token}`}})
      if(response.status == 200){
        if(location.pathname == `/myposts/${currentUser.id}`){
          navigate(0)
        }
        else{
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Link className='btn sm danger' onClick={() => removePost(id)}>Delete</Link>
  )
}

export default DeletePost