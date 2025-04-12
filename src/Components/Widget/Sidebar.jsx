import React, { useRef, useState } from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import { OverlayPanel } from 'primereact/overlaypanel';
import logo from '../../assets/blueLogo.png';
import { RxCross2 } from 'react-icons/rx';
import { Dialog } from 'primereact/dialog';
import ProfileUpdateForm from '../../Screen/WebApp/Profile';

export default function Sidebar({ navItems }) {
    const { setIsSidebarOpen } = navItems
    const op = useRef(null);
    const navigate = useNavigate();
    const [ profileDailog, setProfileDialog]=useState(false)

    const settingItems = [
        { label: 'Account', icon: 'pi pi-cog', path: '/account' },
        { label: 'Logout', icon: 'pi pi-sign-out', path: '/login' }
    ];

    return (

        <div
            className="w-64 min-h-screen bg-no-repeat  bg-contain  border-r 0 flex flex-col justify-between relative mx-auto items-center"
        >
            <div className="w-full  flex flex-col items-center  backdrop-blur-2xl   ">
                <div className="my-6 flex justify-between items-center w-full px-4 md:px-6">
                    <img src={logo} className="h-10" alt="logo" />
                    <button
                        className="md:hidden text-gray-600 hover:text-black"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <RxCross2 size={24} />
                    </button>
                </div>


                <nav className="flex flex-col gap-5 flex-1 w-full p-3 mb-5">
                    <span className='font-bold uppercase text-xs text-pri'>• Website</span>
                    {navItems?.websiteNavItems?.map(({ label, path, icon }) => (
                        <NavLink
                            key={label}
                            onClick={() => setIsSidebarOpen(false)}
                            to={path}

                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${isActive ? 'bg-pri text-white shadow' : 'text-gray-500 hover:bg-white hover:text-black'
                                }`
                            }
                        >
                            <span className="text-base">{icon}</span>
                            <span className="ml-3 uppercase">{label}</span>
                        </NavLink>
                    ))}
                    <span className='font-bold uppercase text-xs text-pri'>• Management</span>
                    {navItems?.webappNavItems?.map(({ label, path, icon }) => (
                        <NavLink
                            key={label}
                            onClick={() => setIsSidebarOpen(false)}
                            to={path}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${isActive ? 'bg-pri text-white shadow' : 'text-gray-500 hover:bg-white hover:text-black'
                                }`
                            }
                        >
                             <span className="text-base">{icon}</span>
                             <span className="ml-3 uppercase">{label}</span>
                        </NavLink>

                    ))}
                </nav>


                <div className="space-y-4 sticky bottom-5 w-[90%]">
                    <div className="flex items-center justify-between shadow-lg px-2 py-1 rounded-full bg-white">
                        <div>

                            <button
                                className="text-black p-2 rounded-full"
                                onClick={(e) => op.current.toggle(e)}
                            >
                                <FiSettings size={16} />
                            </button>
                            <OverlayPanel
                                ref={op}
                                className=" w-40 shadow-md rounded-md"
                            >
                                <ul className="text-sm text-gray-700">
                                    {settingItems.map(item => (
                                        <li
                                            key={item.label}
                                            onClick={() => navigate(item.path)}
                                            className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                                        >
                                            <i className={item.icon}></i> {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </OverlayPanel>


                            <button className="text-black p-2 rounded-full">
                                <FiBell size={16} />
                            </button>

                        </div>
                        <div>

                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp"
                                alt="profile"
                                onClick={() => setProfileDialog(true)}
                                className="w-10 h-10 cursor-pointer rounded-full object-cover border-2 border-lightpri mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
