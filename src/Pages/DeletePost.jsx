import React, { useContext, useEffect } from 'react'
import {userContext} from '../Context/userContext'
import { useNavigate } from 'react-router-dom'




const DeletePost = () => {
  const { currentUser } = useContext(userContext)
  const token = currentUser?.token;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  },[])
  return (
    <div>DeletePost</div>
  )
}

export default DeletePost