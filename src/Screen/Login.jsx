
import React, { useState } from 'react';
import LoginForm from '../Components/Forms/LoginForm';
import SignupForm from '../Components/Forms/SignupForm';
import logo from "../assets/logo.png"
import bluelogo from "../assets/blueLogo.png"
import ForgetPasswordForm from '../Components/Forms/ForgotPassword';

export default function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [showForget, setShowForget] = useState(false)

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  w-full md:my-9 my-0 rounded-2xl min-h-[90vh]">
      <div className="relative rounded-tl-2xl rounded-bl-2xl overflow-hidden hidden md:block">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img
          className="h-full w-full object-cover -z-1"
          src="https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?t=st=1744279877~exp=1744283477~hmac=086d796dc9120f45dc5d66da4577a7ce4ff51b565b321240da766b4bd3f8fa1f&w=2000"
          alt=""
        />
        <img src={logo} alt="" className='absolute bottom-4 h-14 w-auto z-20' />
        <div className='lg:text-7xl md:text-4xl font-bold absolute z-20 top-8 left-5'>
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
        {/* <div className="grid grid-cols-2 w-full gap-4 px-4  mb-6 ">
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
        </div> */}

        {showForget == true ? <ForgetPasswordForm setShowForget={setShowForget}/>:  <LoginForm setShowForget={setShowForget}  /> }
      </div>
    </div>
  );
}
