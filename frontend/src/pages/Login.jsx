import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation schema
import loginlogo from "../assets/loginlogo.svg";
import { Link } from 'react-router-dom';

const Login = () => {
  // Formik setup with initial values, validation schema, and onSubmit handler
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email or Username is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted!', values);
      // Handle login logic here (e.g., API call)
    },
  });

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-50 shadow-lg rounded-lg p-6 md:p-8">
      {/* Left Illustration */}
      <div className="hidden md:block w-1/2 pr-8">
        <img src={loginlogo} alt="Illustration" className="max-w-full h-auto" />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-2/5 lg:w-[35%] p-4 md:p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <span className="ml-2 text-4xl font-bold text-red-600">Testify</span>
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">LOGIN</h2>
        <p className="text-gray-500 mb-6">Please sign in to your account and start the adventure</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Email/Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email or Username</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-3 py-2 border ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
              placeholder="Enter your email or username"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-3 py-2 border ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
              placeholder="••••••••"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
            ) : null}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          New on our platform?{' '}
          <Link to="/signup" className="text-red-600 hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
    