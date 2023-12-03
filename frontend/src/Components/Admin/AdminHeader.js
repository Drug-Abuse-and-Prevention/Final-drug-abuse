import React, { useState } from 'react';
import nithLogo from '../../Images/nith_logo.png';
const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Remove isAdminLoggedIn from local storage on logout
    localStorage.removeItem('isAdminLoggedIn');

    // Redirect to the admin login page
    window.location.href = '/';
  };

  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={nithLogo} alt="NITH Logo" className="h-20 w-20 mr-2" />
          <div className="ml-2">
            <h1 className="text-xl font-bold text-gray-500">National Institute of Technology Hamirpur</h1>
            <p className="text-sm text-gray-500">Drug Abuse & Prevention</p>
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
            <a href="/admindashboard" className="block text-gray-300 py-2">Administration</a>
            <button onClick={handleLogout} className="block text-gray-300 py-2 cursor-pointer">Logout</button>
          </div>
        )}
        {/* Navigation links for larger screens */}
        <div className="hidden lg:flex space-x-4 text-gray-500">
          <a href="/admindashboard" className="hover:text-gray-300">Administration</a>
          <button onClick={handleLogout} className="hover:text-gray-300 cursor-pointer">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
