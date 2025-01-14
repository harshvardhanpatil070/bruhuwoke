import React from "react";
import logo from "../assets/images/namokar.png"; // Adjust path as needed
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-background text-black h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
        {/* Logo and Text */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center">
            <img
              src={logo} // Dynamically imported logo
              alt="Logo"
              className="h-16 w-auto object-contain" // Larger logo with proportional size
            />
            
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-sm sm:text-base">
          <Link
            to="/equipmentpage"
            className="font-bold text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Equipment
          </Link>
          <Link
            to="/about"
            className="font-bold text-gray-700 hover:text-blue-500 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-bold text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="font-bold text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;