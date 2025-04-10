
import React, { useState } from 'react';
import LoginForm from '../Components/Forms/LoginForm';
import SignupForm from '../Components/Forms/SignupForm';
import logo from "../assets/logo.png"
import bluelogo from "../assets/blueLogo.png"

export default function Login() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  w-full md:my-9 my-0 rounded-2xl min-h-[90vh]">
      <div className="relative rounded-tl-2xl rounded-bl-2xl overflow-hidden hidden md:block">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img
          className="h-full w-full object-cover -z-1"
          src="https://img.freepik.com/free-vector/gradient-connection-background_23-2150462053.jpg?t=st=1744182115~exp=1744185715~hmac=a2a1aa037a4b1c323e09d9a0ab22ff416c05932ddaa2b37787a75a97bb638ec6&w=1380"
          alt=""
        />
        <img src={logo} alt="" className='absolute bottom-4 h-14 w-auto z-20' />
        <div className='text-6xl font-bold absolute z-20 top-8 left-5'>
          <h2
            style={{
              WebkitTextStroke: '1px lightgray',
              color: '#d3d3d311',
            }}
          >
            New
          </h2>
          <p className='text-lightgray'>Resolution In</p>
          <p className='text-lightgray'>Technology</p>
        </div>

      </div>

      <div className="flex flex-col justify-center items-center w-full md:h-[90vh] h-[100vh] bg-gradient-to-br from-indigo-50 to-indigo-200 md:rounded-tr-2xl md:rounded-br-2xl">
        <img src={bluelogo} alt="" className='text-center  h-14 w-auto md:hidden block mb-10 ' />
        <div className="grid grid-cols-2 w-full gap-4 px-4  mb-6 ">
          <button
            className={`px-6 py-2  font-medium transition duration-300 ${activeTab === 'login'
                ? 'text-pri  border-b-2 border-pri '
                : 'border-b-2 border-gray-700 text-gray-700'
              }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 font-medium transition ${activeTab === 'signup'
                ? 'text-pri  border-b-2 border-pri '
                : 'border-b-2 border-gray-700 text-gray-700 '
              }`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}
