import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-50 shadow-lg rounded-lg p-6 md:p-8">
      {/* Right Form */}
      <div className="w-full md:w-3/5 lg:w-1/2 p-4 md:p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <span className="ml-2 text-4xl font-bold text-red-600">Testify</span>
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">SIGN UP</h2>
        <p className="text-gray-500 mb-6">Create your account to join us and start your journey</p>

        {/* Form Fields */}
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <select
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select your company</option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
                <option value="company3">Company 3</option>
              </select>
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700">Employee ID</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your employee ID"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="••••••••"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md shadow-sm"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-red-600 hover:underline">
            Login
          </a>
        </div>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">or</div>

        {/* Social Media Icons */}
        
      </div>
      {/* Optional Left Illustration */}
      {/* <div className="hidden md:block w-1/2 pr-8">
        <img src="https://img.freepik.com/premium-vector/register-button-design_24911-41801.jpg?w=1060" alt="Illustration" className="max-w-full h-auto" />
      </div> */}
    </div>
  );
};

export default Signup;
