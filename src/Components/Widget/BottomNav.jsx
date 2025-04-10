import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomNav({ navItems }) {
    return (
        <>
            <div className='flex justify-center items-center  w-screen  fixed bottom-5 md:hidden'>

                <div className="flex gap-10 relative justify-between bg-white border px-5 py-2 rounded-full shadow-md   mx-auto  ">
                    {navItems.map(({ label, path, icon }) => (
                        <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) =>
                          `flex items-center justify-center bg-gray text-xs px-4 py-2 rounded-full text-center whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
                            isActive
                              ? 'text-black font-bold min-w-[7rem]' // replaces w-28
                              : 'text-gray-400 min-w-[3.5rem]' // approximate collapsed width
                          }`
                        }
                      >
                            <span className="text-base">{icon}</span>
                            <span className="hidden lg:inline ml-2 uppercase">{label}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}
