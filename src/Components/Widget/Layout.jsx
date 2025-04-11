import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TbHierarchy } from 'react-icons/tb';
import { FaCrown } from 'react-icons/fa';
import { FiUser, FiMenu } from 'react-icons/fi';
import { IoGrid } from 'react-icons/io5';
import Sidebar from './Sidebar';
import { RxCross2 } from 'react-icons/rx';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const websiteNavItems = [
    { label: 'Home', path: '/', icon: <TbHierarchy /> },
    { label: 'About', path: '/about', icon: <FiUser /> },
    { label: 'Contact', path: '/contact', icon: <IoGrid /> }
  ];


  const webappNavItems = [
    { label: 'Customer', path: '/customer', icon: <FiUser /> },
    { label: 'Employee', path: '/employee', icon: <FiUser /> },
    { label: 'Services', path: '/services', icon: <TbHierarchy /> },
    { label: 'Access Rights', path: '/access-rights', icon: <IoGrid /> },
    { label: 'Plans', path: '/plans', icon: <FaCrown /> }
  ];


  return (
    <div className="relative min-h-screen">
      <button
        className="md:hidden sticky top-4 left-4 z-50 bg-white rounded-lg p-2 "
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <RxCross2 size={20} /> : <FiMenu size={20} />}
      </button>

      <div
        className={`fixed top-0 left-0 scrollbar-hide h-full w-64 bg-white overflow-y-auto z-40 transform transition-transform duration-300 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0`}
      >
        <Sidebar navItems={{websiteNavItems,webappNavItems}}  />
      </div>

      <div className="p-4 md:ml-64">
        <Outlet />
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          `}
      </style>

    </div>
  );
}
