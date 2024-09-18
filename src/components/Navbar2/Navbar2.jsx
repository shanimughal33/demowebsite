import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import Filter from '../Filter/Filter'; // Import the Filter component

const Navbar2 = ({ onSearch, categories, onFilterChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-4 text-black bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left section - Links */}
        <div className="hidden space-x-8 md:flex">
          <NavLink
            to="/"
            exact
            className="px-4 py-2 text-xl font-semibold rounded hover:bg-blue-600 hover:text-white"
            activeClassName="bg-blue-700 text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="px-4 py-2 text-xl font-semibold rounded hover:bg-blue-600 hover:text-white"
            activeClassName="bg-blue-700 text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="px-4 py-2 text-xl font-semibold rounded hover:bg-blue-600 hover:text-white"
            activeClassName="bg-blue-700 text-white"
          >
            Contact
          </NavLink>
        </div>

        {/* Middle section - Search and Filter */}
        <div className="flex items-center justify-center w-full max-w-4xl space-x-4">
          <div className="w-full md:w-auto">
            <Search onSearch={onSearch} />
          </div>
          <div className="relative w-full md:w-auto">
            <button
              className="px-4 py-2 font-semibold text-black bg-gray-200 rounded-md hover:bg-blue-600 hover:text-white"
              onClick={toggleDropdown}
            >
              Filter
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 w-40 mt-2 bg-white border rounded shadow-md">
                <Filter categories={categories} onFilterChange={onFilterChange} />
              </div>
            )}
          </div>
        </div>

        {/* Right section - Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-64 h-full p-4 bg-white">
          <button className="mb-4 text-black" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <NavLink
            to="/"
            exact
            className="block px-3 py-2 text-black rounded hover:bg-blue-700 hover:text-white"
            activeClassName="bg-blue-700 text-white"
            onClick={toggleSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block px-3 py-2 text-black rounded hover:bg-blue-700 hover:text-white"
            activeClassName="bg-blue-700 text-white"
            onClick={toggleSidebar}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-3 py-2 text-black rounded hover:bg-blue-700 hover:text-white"
            activeClassName="bg-blue-700 text-white"
            onClick={toggleSidebar}
          >
            Contact
          </NavLink>

          {/* Add Search and Filter for mobile */}
          <div className="py-2">
            <Search onSearch={onSearch} />
          </div>
          <div className="py-2">
            <Filter categories={categories} onFilterChange={onFilterChange} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
