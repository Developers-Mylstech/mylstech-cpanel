import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgetPasswordForm({setShowForget}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start gap-10 h-auto rounded-tr-2xl rounded-br-2xl px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-600 mb-6">
        <span className="text-pri">Forgot your password?</span>
      </h1>
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pri mb-6">Reset Password</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border-b-2 focus:outline-none focus:border-pri focus:ring-indigo-500 shadow-sm"
              // required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-3 bg-pri hover:bg-pri text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Remembered your password?{' '}
          <button
            onClick={()=>setShowForget(false)}
            className="text-pri "
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
}
