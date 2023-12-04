import React, { useState } from 'react';
import nithLogo from '../Images/nith_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={nithLogo} alt="NITH Logo" className="h-20 w-20 mr-2" />
          <div className="ml-2">
            <h1 className="text-xl font-bold text-gray-500">National Institute of Technology Hamirpur</h1>
            <p className="text-sm text-gray-500">Drug Abuse Reporting & Prevention</p>
          </div>
        </div>
        {/* Menu button with dynamic icon */}
        <button className="lg:hidden bg-gray-500" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
        {/* Navigation links */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 right-4 bg-gray-700 p-4 rounded">
            <a href="/" className="block text-gray-300 py-2">Home</a>
            <a href="/about" className="block text-gray-300 py-2">About</a>
            <a href="/adminlogin" className="block text-gray-300 py-2">Admin Login</a>
            <a href="/employeeregister" className="block text-gray-300 py-2">Register</a>
          </div>
        )}
        {/* Navigation links for larger screens */}
        <div className="hidden lg:flex space-x-4 text-gray-500">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/adminlogin" className="hover:text-gray-300">Admin Login</a>
          <a href="/employeeregister" className="hover:text-gray-300">Register</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
