import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Logo from '../Images/logo.png'
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
const Hearder = () => {

  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    }
    else {
      setIsNavShowing(true);
    }
  }
  return (
    <>
      <nav>
        <div className="container nav-container">
          <Link to='/' className='nav-logo' onClick={closeNavHandler}>
            <img src={Logo} alt="" className="" />
          </Link>

          { isNavShowing &&<ul className="nav-menu">
              <li><Link to='/profile/hhk' onClick={closeNavHandler}>Sample Name</Link></li>
              <li><Link to='/create' onClick={closeNavHandler}>Create Post</Link></li>
              <li><Link to='/authors' onClick={closeNavHandler}>Authors</Link></li>
              <li><Link to='/logout' onClick={closeNavHandler}>Logout</Link></li>
            </ul>}
          <button className="nav-toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <AiOutlineClose /> : <HiBars3 />}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Hearder