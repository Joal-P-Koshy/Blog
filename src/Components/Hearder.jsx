import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../Images/logo.png'
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
const Hearder = () => {
  return (
    <>
    <nav>
      <div className="container nav-container">
        <Link to='/' className='nav-logo'>
            <img src={Logo} alt="" className="" />
        </Link>

        <ul className="nav-menu">
          <li><Link to='/profile'>Sample Name</Link></li>
          <li><Link to='/create'>Create Post</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
        <button className="nav-toggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
    </>
  )
}

export default Hearder