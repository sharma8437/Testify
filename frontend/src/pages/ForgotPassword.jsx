import React, { useState } from "react"; // Import useState
import { LockClosedIcon } from "@heroicons/react/solid"; // Adjust the import for v2

export default function ForgotPassword() {
  const [email, setEmail] = useState(''); // State for the email input

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert('Password reset link sent');
    } else {
      alert('Email not found');
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 items-center justify-center px-6 py-12">
      <div className="sm:max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          <LockClosedIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-red-600">Testify</h1>
          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            Reset Your Password
          </h2>
          <p className="mt-2 text-gray-500">
            Enter your registered email to receive a reset link.
          </p>
        </div>

        <form onSubmit={handleForgotPassword} className="mt-8 space-y-6">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email} // Bind the email state
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              className="block w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition"
              placeholder="Enter Your Registered Email"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Remember your password?{' '}
          <a href="/" className="font-medium text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
