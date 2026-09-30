import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Go up one directory to reach 'pages'
import Home from '../pages/Home';
import Features from '../pages/Features';
import Contact from '../pages/Contact';
import Demo from '../pages/Demo';
import Pricing from '../pages/Pricing';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;