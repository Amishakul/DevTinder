import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> 
      {/* All the childeren routes are insert into this outlet components, so that they can be rendered in the body component */}
      <Footer/>
    </div>
  )
}

export default Body
