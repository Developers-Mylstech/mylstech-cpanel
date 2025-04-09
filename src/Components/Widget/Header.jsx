import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { FiBell, FiMail, FiSettings, FiTool, FiUser } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { TbHierarchy } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/blueLogo.png"

const navItems = [
  { label: 'Services', path: '/', icon: <TbHierarchy /> },
  { label: 'Subscription', path: '/plans', icon:<FaCrown /> },
  { label: 'About', path: '/about', icon: <FiUser /> },
  { label: 'Contact', path: '/contact', icon: <MdEmail /> },
];

export default function Header() {
  return (
    <div className="bg-lightgray px-4 md:px-8 py-3  flex justify-between items-center border rounded-full my-2 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.png" alt="logo" className="h-10 w-auto" /> */}
        {/* <span className="text-sm text-textDark font-semibold">MYLS TECH</span> */}
        <img src={logo} className='h-10 w-auto' alt="" />
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {navItems.map(({ label, path, icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex bg-gray items-center uppercase text-xs px-6 py-3 rounded-full font-bold transition-all duration-200 ${
                isActive
                  ? ' text-black font-bold'
                  : 'text-gray-400  hover:text-black'
              }`
            }
          >
            <span className="mr-2 text-base">{icon}</span>
            <span className="">{label}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex bg-gray rounded-full px-2 py-1 space-x-2">
          <button className="text-black p-2 rounded-full bg-white">
            <FiSettings size={18} />
          </button>
          <button className="text-black p-2 rounded-full ">
            <FiBell size={18} />
          </button>
        </div>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-lightpri"
        />
      </div>
    </div>
  );
}
