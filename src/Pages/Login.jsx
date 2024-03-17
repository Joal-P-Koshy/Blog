import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState(
    {
      email:'',
      password:''
    }
  )

  const changeInputHandler = (e) =>{
    setUserData(prevState => {
      return {...prevState, [e.target.name] : e.target.value}
    })
  }
  return (
    <section className="login">
      <div className="container">
        <h2 className="">Sign In</h2>
        <form action="" className="form login-form">

          <p className="form-error-message">This is an error message</p>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>

          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>

          <button className="btn primary" type='submit'>Login</button>
        </form>

        <small>Don't have an account? <Link to="/register">Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login