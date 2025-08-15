import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          username: name, // backend expects 'username'
          email,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        window.location.href = '/';
      } else {
        throw new Error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error(error);
      alert(error.message || 'Signup failed');
    }
  };

  const handleLogin = () => {
    console.log('Navigate to login');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-5"
      style={{ backgroundColor: '#0D0F13' }}
    >
      <div className="bg-white rounded-lg p-12 w-full max-w-md shadow-2xl">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-black-900 mb-3">
            Sign Up
          </h1>
          <div className="w-10 h-1 bg-[#0D0F13] mx-auto rounded-full"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-full bg-gray-50 outline-none text-gray-900 transition-all duration-200 focus:border-blue-900 focus:bg-white focus:shadow-lg focus:shadow-blue-900/10"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-full bg-gray-50 outline-none text-gray-900 transition-all duration-200 focus:border-blue-900 focus:bg-white focus:shadow-lg focus:shadow-blue-900/10"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-full bg-gray-50 outline-none text-gray-900 transition-all duration-200 focus:border-blue-900 focus:bg-white focus:shadow-lg focus:shadow-blue-900/10"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 sm:flex-row flex-col">
            <button
              type="submit"
              className="flex-1 px-6 py-4 bg-[#33FFDD] text-black font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
            >
              Sign Up
            </button>
            
            <button
              type="button"
              onClick={handleLogin}
              className="flex-1 px-6 py-4 bg-gray-200 text-black-700 font-semibold rounded-full transition-all duration-200 hover:bg-gray-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SignUp;
