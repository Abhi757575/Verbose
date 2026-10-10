import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-3xl font-extrabold tracking-tight text-white"
            >
              Verbose<span className="text-green-400">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Turn conversations into connections. Explore a smarter,
              simpler way to engage with your audience using Verbose.
            </p>

            <Link
              to="/demo"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-green-300"
            >
              Explore the demo <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link className="transition hover:text-green-400" to="/features">Features</Link></li>
              <li><Link className="transition hover:text-green-400" to="/demo">Live Demo</Link></li>
              <li><Link className="transition hover:text-green-400" to="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link className="transition hover:text-green-400" to="/">Home</Link></li>
              <li><Link className="transition hover:text-green-400" to="/contact">Contact Us</Link></li>
              <li><Link className="transition hover:text-green-400" to="/faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Account</h3>
            <ul className="space-y-3 text-sm">
              <li><Link className="transition hover:text-green-400" to="/login">Sign In</Link></li>
              <li><Link className="transition hover:text-green-400" to="/register">Get Started</Link></li>
              <li><Link className="transition hover:text-green-400" to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <p>© {year} Verbose. All rights reserved.</p>

          <p>
            Built for better conversations
            <span className="ml-1 text-green-400">●</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;