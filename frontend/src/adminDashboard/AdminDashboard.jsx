import React, { useState } from "react";
import AdminTable from "./AdminTable";
import UpdateBox from "./UpdateBox";

const AdminDashboard = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-red-500 text-white flex flex-col items-center py-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold mb-8">Testify</h1>

        {/* Navigation */}
        <nav className="w-full flex flex-col space-y-4 px-4">
          <a
            href="#profile"
            className="py-2 px-4 rounded hover:bg-red-600 transition text-white text-center md:text-left"
          >
            Profile
          </a>
          <a
            href="#today-test"
            className="py-2 px-4 rounded hover:bg-red-600 transition text-white text-center md:text-left"
          >
            Today Test
          </a>
          <a
            href="#total-test"
            className="py-2 px-4 rounded hover:bg-red-600 transition text-white text-center md:text-left"
          >
            Total Test
          </a>
          <a
            href="#passed-test"
            className="py-2 px-4 rounded hover:bg-red-600 transition text-white text-center md:text-left"
          >
            Passed Test
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-3 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
        

            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 outline-none text-gray-600 placeholder-gray-400 w-24 md:w-48 lg:w-64"
              />
              <span className="material-icons text-gray-400 cursor-pointer">search</span>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex justify-center flex-1 mt-4 md:mt-0">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300 text-sm">
              Create Test
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {/* Notification Icon */}
            <div className="relative cursor-pointer">
              <span className="material-icons text-gray-600 hover:text-gray-800">
                <img src="https://img.icons8.com/?size=48&id=AszNi9Jvemeu&format=gif" alt="" />
              </span>
              {/* Red Badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1.5">
                3
              </span>
            </div>

            {/* User Profile */}
            <div className="relative">
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onClick={toggleProfileDropdown}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
                  alt="User"
                  className="w-9 h-9 rounded-full"
                />
                <span className="hidden md:inline text-gray-800 font-medium">
                  Sonu Sharma
                </span>
                <span className="material-icons text-gray-600">↓</span>
              </div>

              {/* Profile Dropdown */}
              {profileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <a
                    href="#profile-settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile Settings
                  </a>
                  <a
                    href="#logout"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Welcome, Sonu Sharma
          </h2>
          <p className="text-gray-600">
            Manage tests and view reports from the sidebar.
          </p>
          <AdminTable />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
