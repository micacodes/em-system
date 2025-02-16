import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-purple-700">
            EventManager
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/events" label="Events" />
            <NavLink to="/dashboard" label="Dashboard" />
            <NavLink to="/login" label="Login" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <MobileNavLink to="/" label="Home" />
          <MobileNavLink to="/events" label="Events" />
          <MobileNavLink to="/dashboard" label="Dashboard" />
          <MobileNavLink to="/login" label="Login" />
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, label }) => (
  <Link to={to} className="text-gray-700 hover:text-purple-700 font-medium transition duration-300">
    {label}
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, label }) => (
  <Link to={to} className="block px-6 py-2 text-gray-700 hover:bg-gray-100 text-lg">
    {label}
  </Link>
);

export default Navbar;
