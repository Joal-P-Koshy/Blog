import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [userData, setUserData] = useState(
    {
      name:'',
      email:'',
      password:'',
      password2:''
    }
  )

  const changeInputHandler = (e) =>{
    setUserData(prevState => {
      return {...prevState, [e.target.name] : e.target.value}
    })
  }
  return (
    <section className="register">
      <div className="container">
        <h2 className="">Sign Up</h2>
        <form action="" className="form register-form">

          <p className="form-error-message">This is an error message</p>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>

          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>

          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>

          <input type="password" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler}/>

          <button className="btn primary" type='submit'>Register</button>
        </form>

        <small>Already have an account? <Link to="/login">Sign in</Link></small>
      </div>
    </section>
  )
}

export default Register