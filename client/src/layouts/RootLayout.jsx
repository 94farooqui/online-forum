import React from 'react'
import Navbar from '../components/Shared/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout