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

  const navItems = [
    { label: 'Services', path: '/', icon: <TbHierarchy /> },
    { label: 'Subscription', path: '/subscription', icon: <FaCrown /> },
    { label: 'About', path: '/about', icon: <FiUser /> },
    { label: 'Additional', path: '/additional', icon: <IoGrid /> },
    
  ];

  return (
    <div className="relative min-h-screen">
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-lightpri p-2 rounded shadow"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <RxCross2 size={20} /> : <FiMenu size={20} />}
      </button>

      <div
        className={`fixed top-0 left-0 scrollbar-hide h-full w-64 bg-white overflow-y-auto shadow-md z-40 transform transition-transform duration-300 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0`}
      >
        <Sidebar navItems={navItems} />
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
