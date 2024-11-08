import React, { useState } from 'react';
import '../Styles/Login.css';

function Login() {
  const [isSignIn, setIsSignIn] = useState(true); // Start in sign-in mode

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-page">
      <div className={`container ${isSignIn ? 'sign-in-mode' : 'sign-up-mode'}`}>
        
        {/* Sign In Form on Left Side */}
        <div className="form-section sign-in-form">
          <h2>Welcome Back!</h2>
          <p>Sign in to access all features</p>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <p onClick={toggleForm} style={{ cursor: 'pointer', color: '#4158d0' }}>
            Don't have an account? Sign Up
          </p>
        </div>

        {/* Sign Up Form on Right Side */}
        <div className="form-section sign-up-form">
          <h2>Create Account</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <p onClick={toggleForm} style={{ cursor: 'pointer', color: '#4158d0' }}>
            Already have an account? Sign In
          </p>
        </div>

        {/* Overlay Section */}
        <div className="overlay">
          <div className="overlay-content">
            {isSignIn ? (
              <>
                <h2>Welcome Back!</h2>
                <p>Sign in to access all features</p>
                <button onClick={toggleForm}>Sign Up</button>
              </>
            ) : (
              <>
                <h2>Hello, Friend!</h2>
                <p>Register to start your journey with us</p>
                <button onClick={toggleForm}>Sign In</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
