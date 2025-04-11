import React, { useRef } from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import { OverlayPanel } from 'primereact/overlaypanel';
import logo from '../../assets/blueLogo.png';

export default function Sidebar({ navItems }) {
    const op = useRef(null);
    const navigate = useNavigate();

    const settingItems = [
        { label: 'Profile', icon: 'pi pi-user', path: '' },
        { label: 'Settings', icon: 'pi pi-cog', path: '' },
        { label: 'Logout', icon: 'pi pi-sign-out', path: '/login' }
    ];

    return (
        <div className="w-64 min-h-screen bg-white  border-r flex flex-col justify-between relative mx-auto items-center">
            <div className="my-6">
                <img src={logo} className="h-10 w-auto mx-auto" alt="logo" />
            </div>

            <nav className="flex flex-col gap-5 flex-1 w-full p-3 mb-5">
                {navItems.map(({ label, path, icon }) => (
                    <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${isActive ? 'bg-white text-black shadow' : 'text-gray-500 hover:bg-white hover:text-black'
                            }`
                        }
                    >
                        <span className="text-lg">{icon}</span>
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
                        <OverlayPanel ref={op} className="w-40 shadow-md rounded-md">
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
                            className="w-10 h-10 rounded-full object-cover border-2 border-lightpri mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
