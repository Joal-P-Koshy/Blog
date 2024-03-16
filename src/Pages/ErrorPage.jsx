import React from 'react'
import {Link} from "react-router-dom"


const ErrorPage = () => {
  return (
    <>
    <section className="error-page">
      <div className="center">
        <Link to='/' className='btn primary'>Back to Home</Link>
        <h2 className="">Page not found!</h2>
      </div>
    </section>
    </>
  )
}

export default ErrorPage