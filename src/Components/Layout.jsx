import React from 'react'
import {Outlet} from 'react-router-dom'
import Hearder from './Hearder'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Hearder/>
        <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout