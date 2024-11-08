// // Import necessary modules and assets
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Import navigation and link from react-router-dom
// import '../Styles/Login.css'; // Ensure this path is correct for your CSS
// import loginlogo from "../assets/loginlogo.svg";
// import facebook from '../assets/facebook.svg';
// import twitter from '../assets/twitter.svg';
// import github from '../assets/github.svg';
// import google from '../assets/google.svg';

// const Login = () => {
//   // Define state for email and password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   // Handle login form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert('Please enter both email and password');
//       return;
//     }

//     // Call your API to handle login
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         navigate('/dashboard'); // Redirect on successful login
//       } else {
//         const errorData = await response.json();
//         alert(`Login failed: ${errorData.message || 'Please try again.'}`);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen w-screen bg-gray-50 shadow-lg rounded-lg p-6 md:p-8">
//       {/* Left illustration */}
//       <div className="hidden md:block w-1/2 pr-8">
//         <img src={loginlogo} alt="Login Illustration" className="max-w-full h-auto" />
//       </div>

//       {/* Right form */}
//       <div className="w-full md:w-2/5 lg:w-[35%] p-4 md:p-8">
//         {/* Logo */}
//         <div className="flex items-center justify-center mb-6">
//           <span className="ml-2 text-4xl font-bold text-red-600">Testify</span>
//         </div>

//         {/* Title and subtitle */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-1">LOGIN</h2>
//         <p className="text-gray-500 mb-6">Please sign in to your account and start the adventure</p>

//         {/* Form fields */}
//         <form className="space-y-4" onSubmit={handleLogin}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email or Username</label>
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               placeholder="Enter your email or username"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               placeholder="••••••••"
//             />
//           </div>

//           {/* Remember me and forgot password */}
//           <div className="flex items-center justify-between">
//             <label className="flex items-center text-gray-600">
//               <input
//                 type="checkbox"
//                 className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//               />
//               <span className="ml-2 text-sm">Remember me</span>
//             </label>
//             <Link to="/forget-password" className="text-sm text-gray-500 hover:text-red-500">
//               Forgot password?
//             </Link>
//           </div>

//           {/* Sign in button */}
//           <button
//             type="submit"
//             className="w-full py-2 px-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md shadow-sm"
//           >
//             Login
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           New on our platform?{" "}
//           <Link to="/create-account" className="text-red-600 hover:underline">
//             Create an account
//           </Link>
//         </div>

//         {/* Divider */}
//         <div className="my-6 text-center text-gray-400 text-sm">or</div>

//         {/* Social media icons */}
//         <div className="flex justify-center space-x-4">
//           <a href="https://www.google.com/" className="text-gray-500 hover:text-red-600">
//             <img src={google} alt="Google" />
//           </a>
//           <a href="https://www.facebook.com/" className="text-gray-500 hover:text-red-600">
//             <img src={facebook} alt="Facebook" />
//           </a>
//           <a href="https://x.com/?lang=en" className="text-gray-500 hover:text-red-600">
//             <img src={twitter} alt="Twitter" />
//           </a>
//           <a href="https://github.com/" className="text-gray-500 hover:text-red-600">
//             <img src={github} alt="GitHub" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

