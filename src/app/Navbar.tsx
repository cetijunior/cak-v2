'use client'

import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='relative flex items-center justify-between bg-[#F8F9FB] w-screen'>
            <div className='p-4'>
                <h1 className='text-2xl font-bold text-[#446AF2]'>CAK Web Solutions</h1>
            </div>

            <div className='pr-4'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden'>
                    {/* Conditional text for Menu Button */}
                    <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
                </button>
            </div>

            {/* Adjusted classes for dropdown effect */}
            <div className={`absolute top-full mt-4 right-0 shadow-custom-blue bg-[#F8F9FB] flex-col items-start space-y-4 p-4 rounded sm:static 
                             sm:bg-transparent sm:shadow-none sm:flex sm:flex-row sm:space-y-0 sm:space-x-8 sm:p-0 ${isMenuOpen ? 'flex' : 'hidden'}`}
            >
                <ul>
                    <li className='cursor-pointer text-xl hover:opacity-70'>About Us</li>
                    <li className='cursor-pointer text-xl hover:opacity-70'>Web Development Services</li>
                    <li className='cursor-pointer text-xl hover:opacity-70'>Projects</li>
                    <li className='cursor-pointer text-xl hover:opacity-70'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
