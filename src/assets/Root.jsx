import React from 'react'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Search from './Search'

const Root = () => {
  return (
    <>
    <Navbar/>
    <Search/>
      <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Root
