import React from 'react';

export default function SignupForm() {
  return (
    <div className=" flex flex-col items-center justify-start w-full bg-gradient-to-br from-indigo-50 to-indigo-200 rounded-tr-2xl rounded-br-2xl px-4">
      
      <h1 className='text-3xl font-bold text-center text-pri my-6'><span className='text-gray-600'>Welcome to</span> Mylstech </h1>
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pri mb-6">Signup</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label> 
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border-b-2 focus:outline-none focus:border-pri focus:ring-indigo-500 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border-b-2 focus:outline-none focus:border-pri focus:ring-indigo-500 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border-b-2 focus:outline-none focus:border-pri focus:ring-indigo-500 shadow-sm"
              required
            />
          </div>
        
          <button
            type="submit"
            className="w-full py-2 px-3 bg-pri hover:bg-pri text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Signup
          </button>
         
 
        </form>
        {/* <p className="mt-4 text-sm text-center text-gray-500">
          Don’t have an account? <a href="#" className="text-indigo-600  ">Sign up</a>
        </p> */}
      </div>
    </div>
  );
}
