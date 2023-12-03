

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 ">
      <div className="container mx-auto flex justify-between items-center  ">
        <div className="flex items-center space-x-4 ml-5">
          <div className="font-bold text-lg ">Safety & Prevention</div>
          <div className="group relative">
            <a href="/news" className="hover:text-gray-300 group-hover:text-gray-300">News</a>
            <div className="hidden group-hover:block absolute left-0 mt-2 space-y-2 bg-gray-800 text-sm">
              <a href="/news-category1" className="block px-4 py-2 hover:bg-gray-700">Category 1</a>
              <a href="/news-category2" className="block px-4 py-2 hover:bg-gray-700">Category 2</a>
            </div>
          </div>
          <div className="group relative">
            <a href="/ourmission" className="hover:text-gray-300 group-hover:text-gray-300">Our Mission</a>
            <div className="hidden group-hover:block absolute left-0 mt-2 space-y-2 bg-gray-800 text-sm">
              <a href="/mission1" className="block px-4 py-2 hover:bg-gray-700">Mission 1</a>
              <a href="/mission2" className="block px-4 py-2 hover:bg-gray-700">Mission 2</a>
            </div>
          </div>
          <div className="group relative">
            <a href="/program" className="hover:text-gray-300 group-hover:text-gray-300">Programs</a>
            <div className="hidden group-hover:block absolute left-0 mt-2 space-y-2 bg-gray-800 text-sm">
              <a href="/program1" className="block px-4 py-2 hover:bg-gray-700">Program 1</a>
              <a href="/program2" className="block px-4 py-2 hover:bg-gray-700">Program 2</a>
            </div>
          </div>
          <div className="group relative">
            <a href="/data" className="hover:text-gray-300 group-hover:text-gray-300 ">Data</a>
            <div className="hidden group-hover:block absolute left-0 mt-2 space-y-2 bg-gray-800 text-sm">
              <a href="/ReportsAndDataTable" className="block px-6 py-2 hover:bg-gray-700">Reports and Data table</a>
              <a href="/QuickStatics" className="block px-6 py-2 hover:bg-gray-700">Quick Statics</a>
            </div>
          </div>
          
        </div>
        <div className="hidden md:flex items-center space-x-4">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
