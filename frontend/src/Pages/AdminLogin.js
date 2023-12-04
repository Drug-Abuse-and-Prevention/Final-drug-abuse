
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your admin login logic here
    // For simplicity, we're using hardcoded credentials
    if (username === 'admin' && password === 'admin123') {
      // Assuming successful login, update the parent component state
      onLogin(true);
      // Navigate to the admin dashboard
      navigate('/admindashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300 bg">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-gray-500 text-2xl font-semibold mb-6">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded text-gray-800"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <div className="flex">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded text-gray-800"
            />
            <button
              className="ml-2 text-gray-500 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '🔐'}
            </button>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="mt-4 text-gray-500 text-sm">
          Don't have an account? <Link to="/employeeregister" className="text-blue-500">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
