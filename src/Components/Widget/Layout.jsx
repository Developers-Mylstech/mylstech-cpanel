import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { TbHierarchy } from 'react-icons/tb';
import { FaCrown } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoGrid } from 'react-icons/io5';
import BottomNav from './BottomNav';

export default function Layout() {
  const navItems = [
    { label: 'Services', path: '/', icon: <TbHierarchy /> },
    { label: 'Subscription', path: '/subscription', icon: <FaCrown /> },
    { label: 'About', path: '/about', icon: <FiUser /> },
    { label: 'Additional', path: '/additional', icon: <IoGrid /> },
  ];
  return (
    <div className='0 relative '>
      <div className='mx-4 mb-20 md:m-0'>
        <Header navItems={navItems} />
        <Outlet />
      </div>
      
      <BottomNav navItems={navItems} />
    </div>
  )
}
