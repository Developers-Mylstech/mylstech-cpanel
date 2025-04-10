import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='mx-2 md:mx-4'>
     <Header/>
     <Outlet/>
    </div>
  )
}
