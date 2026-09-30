import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-white flex flex-wrap gap-5 text-blue-900 p-5'>
        <h1 className='text-blue-900 font-bold text-5xl'>Verbose</h1>
        <div className='gap-6 flex flex-wrap fixed top-0 right-0 z-50 font-bold p-4 text-3xl pt-5'>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/demo">Demo</Link>
            <Link to="/pricing">Pricing</Link>
            <div className='bg-green-400 rounded-2xl p-2'>
                <Link to="/register">Get Started</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar