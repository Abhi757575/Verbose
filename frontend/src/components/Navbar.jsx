import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    

    
  return (
    <div className='bg-white flex flex-wrap gap-5 text-blue-900 p-5'>
        <a href='/' className='text-blue-900 font-bold text-5xl'>Verbose</a>
        <div className='gap-6 flex flex-wrap fixed top-0 right-100 z-50 font-bold p-4 text-xl pt-10'>
            <Link to="/">How it works</Link>
            <Link to="/demo">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">FAQ</Link>

            <div className='bg-green-400 rounded-2xl p-2'>
                <Link to="/register">Get Started</Link>
            </div>

            <div>
                
                if(ae = NO){
                    <div>
                        <img src></img>
                        <button></button>
                    </div>
                }
            </div>
            
        </div>
    </div>
  )
}

export default Navbar