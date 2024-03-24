'use client';

import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='relative sm:px-10 flex items-center justify-between bg-[#F8F9FB] w-screen'>
            <div className='p-4'>
                <h1 className='text-2xl font-bold text-[#446AF2]'>CAK Web Solutions</h1>
            </div>

            {/* Menu/Close Button at the top for small screens */}
            <div className='pr-4 z-30 sm:hidden'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {/* Update the path here to correctly point to the images in the public folder */}
                    {isMenuOpen ? <img src='/close.png' alt='Close' className="w-10 h-10" /> : <img src='/menu.png' alt='Menu' className="w-6 h-6 rotate-180" />}
                </button>
            </div>

            {/* Fullscreen Menu for small screens */}
            <div className={`fixed inset-0 bg-[#2a3f8b] z-20 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
                <ul className='flex h-full flex-col w-[150px] pl-10 space-y-20 items-start justify-center text-white'>
                    <li className='cursor-pointer text-2xl hover:opacity-70'>About Us</li>
                    <div className='flex flex-row items-center space-x-16 '>
                        <li className='cursor-pointer text-wrap text-2xl hover:opacity-70'>Web Development Services</li>
                        <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180'></img>
                    </div>
                    <li className='cursor-pointer text-2xl hover:opacity-70'>Projects</li>
                    <li className='cursor-pointer text-2xl hover:opacity-70'>Contact</li>
                    <div className='flex flex-row items-center space-x-36 '>
                        <li className='cursor-pointer text-2xl hover:opacity-70'>ENG</li>
                        <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180'></img>
                    </div>
                </ul>
            </div>

            {/* Navbar list for larger screens */}
            <div className='hidden sm:flex flex-row items-center space-x-8 pr-4'>
                <ul className='flex flex-row space-x-8 text-[#3c3d41]'>
                    <li className='cursor-pointer text-xl hover:opacity-70'>About Us</li>
                    <li className='cursor-pointer text-xl hover:opacity-70'>Web Development Services</li>
                    <li className='cursor-pointer text-xl hover:opacity-70'>Projects</li>
                    <li className='cursor-pointer text-xl hover:opacity-70'>Contact</li>
                    <li className='cursor-pointer text-xl hover:opacity-70'>ENG</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
