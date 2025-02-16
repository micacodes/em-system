import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-purple-700">EventManager</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-700">Home</Link>
            <Link to="/events" className="text-gray-700 hover:text-purple-700">Events</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-purple-700">Dashboard</Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-700">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Events</Link>
          <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
          <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
