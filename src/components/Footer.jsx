import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo and Copyright */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">EventManager</h2>
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link to="/events" className="text-gray-400 hover:text-white">Events</Link>
            <Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
