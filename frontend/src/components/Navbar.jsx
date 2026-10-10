import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '8px 12px',
  borderRadius: '9999px',
  transition: 'all 0.2s ease'
});

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-gray-200 bg-white/90 backdrop-blur-xl shadow-lg px-6 py-3 flex items-center justify-between gap-5">

      {/* Logo */}
      <NavLink
        to="/"
        className="text-blue-900 font-bold text-3xl shrink-0"
      >
        Verbose
      </NavLink>

      {/* Navigation links */}
      <div className="flex items-center gap-2 font-semibold text-base">
        <NavLink to="/" end style={navLinkStyles}>
          How it works
        </NavLink>

        <NavLink to="/demo" style={navLinkStyles}>
          Features
        </NavLink>

        <NavLink to="/pricing" style={navLinkStyles}>
          Pricing
        </NavLink>

        <NavLink to="/faq" style={navLinkStyles}>
          FAQ
        </NavLink>
      </div>

      {/* CTA */}
      <NavLink
        to="/register"
        className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-full transition-colors shrink-0"
      >
        Get Started
      </NavLink>

    </nav>
  );
};

export default Navbar;