import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../Images/avatar.png'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { userContext } from '../Context/userContext';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');


  const { currentUser } = useContext(userContext)
  const token = currentUser?.token;
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  },[])
  return (
    <>
      <section className="profile">
        <div className="container profile-container">
          <Link to={`/myposts/${currentUser.id}`} className='btn'>My Posts</Link>
          <div className="profile-details">
            <div className="avatar-wrapper">
              <div className="profile-avatar">
                <img src={Avatar} alt='' />
              </div>
              <form className="avatar-form">
                <input type="file" name='avatar' id='avatar'
                  accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])} className="" />
                <label htmlFor="avatar"><FaEdit /></label>
              </form>
              <button className="profile-avatar-btn"><FaCheck /></button>
            </div>

            <h1 className="">{currentUser.name}</h1>

            <form className="form profile-form">
              {error &&<p className="form-error-message">{error}</p>}

              <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
              <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
              <input type="password" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
              <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
              <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>

              <button className="btn primary" type='submit'>Update Details</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfile