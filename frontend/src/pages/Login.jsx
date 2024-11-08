import React from 'react';
// import '../Styles/Login.css'
import loginlogo from "../assets/loginlogo.svg"
// import facebook from "../assets/facebook.svg"
// import twitter from "../assets/twitter.svg"
// import gitHub from "../assets/github.svg"
// import google from '../assets/google.svg'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-50 shadow-lg rounded-lg p-6 md:p-8">
        {/* Left Illustration */}
        <div className="hidden md:block w-1/2 pr-8">
          {/* Replace with an illustration image if available */}
          <img src={loginlogo} alt="Illustration" className="max-w-full h-auto" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/5 lg:w-[35%]  p-4 md:p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            {/* <img src="/path-to-logo.png" alt="testify" className="h-8 w-8" /> */}
            <span className="ml-2 text-4xl font-bold text-red-600">Testify</span>
          </div>

          {/* Title and Subtitle */}
          <h2 className="text-2xl font-bold text-gray-800 mb-1">LOGIN</h2>
          <p className="text-gray-500 mb-6">Please sign in to your account and start the adventure</p>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email or Username</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your email or username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  {/* Add an eye icon here */}
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>
{/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <Link to="/ForgotPassword" className="text-sm text-gray-500 hover:text-red-500">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md shadow-sm"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-600">
            New on our platform?{" "}
            <Link to="/signup" className="text-red-600 hover:underline">
              Create an account
            </Link>
          </div>

       
           {/* <div className="flex justify-center space-x-4">
          <a href="https://www.google.com/" className="text-gray-500 hover:text-red-600">
             Google Icon 
              <img src={google} alt="" />
            </a>
            <a href="https://www.facebook.com/" className="text-gray-500 hover:text-red-600">
              <img src={facebook} alt="" />
            </a> 
            <a href="https://x.com/?lang=en" className="text-gray-500 hover:text-red-600">
            
              <img src={twitter} alt="" />
            </a>
            <a href="https://github.com/" className="text-gray-500 hover:text-red-600">
           
              <img src={gitHub} alt="" />
            </a>
          </div> 

          Buy Now Button 
           <div className="mt-6 flex justify-center">
            <button className="py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-md shadow-lg hover:opacity-90">
              Buy Now
            </button>
          </div>  */}
        </div>
      </div>
    // </div>
  );
};

export default Login;
