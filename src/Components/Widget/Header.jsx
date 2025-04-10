import React, { useRef } from 'react';
import { FaCrown } from 'react-icons/fa';
import { FiBell, FiSettings, FiUser } from 'react-icons/fi';
import { TbHierarchy } from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/blueLogo.png";
import { IoGrid } from 'react-icons/io5';
import { OverlayPanel } from 'primereact/overlaypanel';



export default function Header({navItems}) {
    const op = useRef(null);
    const navigate = useNavigate()

    const settingItems = [
        { label: 'Profile', icon: 'pi pi-user', path:""  },
        { label: 'Settings', icon: 'pi pi-cog', path:""},
        { label: 'Logout', icon: 'pi pi-sign-out' ,path :"/" }
    ];

    return (
        <div className="relative bg-lightgray px-4 md:px-6 py-2 flex flex-wrap md:flex-nowrap justify-between items-center border rounded-full my-2 mx-auto max-w-screen-xl">

            {/* Logo */}
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <img src={logo} className="h-6 w-auto" alt="logo" />
            </div>

            <div className="hidden md:flex gap-1 overflow-x-auto md:overflow-visible scrollbar-hide md:space-x-2">
                {navItems.map(({ label, path, icon }) => (
                    <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) =>
                            `flex items-center bg-gray text-xs px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${isActive ? 'text-black font-bold bg-gray' : 'text-gray-400 bg-gray font-bold'
                            }`
                        }
                    >
                        <span className="text-base">{icon}</span>
                        <span className=" ml-2 uppercase">{label}</span>
                    </NavLink>
                ))}
            </div>

            <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <div className="flex bg-gray rounded-full px-2 py-1 space-x-1 relative">
                    <button
                        className="text-black p-2 rounded-full bg-white"
                        onClick={(e) => op.current.toggle(e)}
                    >
                        <FiSettings size={16} />
                    </button>
                    <OverlayPanel ref={op} className="w-40 shadow-md rounded-md">
                        <ul className="text-sm text-gray-700">
                            {settingItems.map(item => (
                                <li onClick={()=>navigate('/')} key={item.label} className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                                    <i className={item.icon}></i> {item.label}
                                </li>
                            ))}
                        </ul>
                    </OverlayPanel>

                    <button className="text-black p-2 rounded-full">
                        <FiBell size={16} />
                    </button>
                </div>

                <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp"
                    alt="profile"
                    className="w-9 h-9 rounded-full object-cover border-2 border-lightpri"
                />
            </div>
        </div>
    );
}
