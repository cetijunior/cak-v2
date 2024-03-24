'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpenServices, setIsDropdownOpenServices] = useState(false);
    const [isDropdownOpenLanguages, setIsDropdownOpenLanguages] = useState(false);


    const serviceLinks = [
        { href: '/services-pages/web-dev', img: '/computer.png', title: 'Website Development', description: 'Specializing in custom web solutions to enhance your online presence.' },
        { href: '/services-pages/mob-dev', img: '/smartphone.png', title: 'Mobile App Development', description: 'Creating mobile applications that offer seamless user experiences.' },
        { href: '/services-pages/smma', img: '/smma.png', title: 'Social Media Marketing', description: 'Strategies to grow your brand’s presence on various social platforms.' },
        { href: '/services-pages/design', img: '/web-design.png', title: 'Design', description: 'Innovative design solutions tailored to your business’s needs.' }
    ];

    const languageLinks = [
        { href: '', title: 'ENG' },
        { href: '', title: 'DE' },
        { href: '', title: 'AL' },
    ];


    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className='relative sm:px-10 shadow-custom-blue flex items-center justify-between bg-[#F8F9FB] w-screen'>
            <div className='p-4'>
                <h1 className='text-2xl font-bold text-[#446AF2]'>CAK Web Solutions</h1>
            </div>

            {/* Menu/Close Button at the top for small screens */}
            <div className='pr-4 mb-[-10px] z-30 sm:hidden'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {/* Update the path here to correctly point to the images in the public folder */}
                    {isMenuOpen ? <img src='/close.png' alt='Close' className="w-10 h-10" /> : <img src='/menu.png' alt='Menu' className="w-10 h-10" />}
                </button>
            </div>

            {/* Desktop Navbar */}
            <div className='hidden sm:flex flex-row items-center sm:px-10 space-x-8'>
                <div className='hidden sm:flex flex-row items-center space-x-8'>
                    <h1 className='cursor-pointer hover:text-[#446AF2] text-xl z-20' onClick={() => scrollToSection('about-us')}>About Us</h1>
                    <h1 onMouseEnter={() => setIsDropdownOpenServices(true)} onMouseLeave={() => setIsDropdownOpenServices(false)} onClick={() => scrollToSection('services')} className='cursor-pointer hover:text-[#446AF2] text-xl z-20 relative'>
                        Web Development Services
                        {isDropdownOpenServices && (
                            <div className='absolute bg-[#f0efef] shadow-custom-blue rounded-md'>
                                {serviceLinks.map((link) => (
                                    <Link legacyBehavior key={link.href} href={link.href}>
                                        <div className='flex flex-row items-center w-full px-2 space-x-3'>
                                            <img src={link.img} alt={link.title} className="items-start mp-4" width={20} height={20} />
                                            <a className='items-center py-2 text-gray-700 hover:text-[#446AF2]'>{link.title}</a>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </h1>
                    <h1 className='cursor-pointer hover:text-[#446AF2] text-xl z-20' onClick={() => scrollToSection('projects')}>Projects</h1>
                    <h1 className='cursor-pointer hover:text-[#446AF2] text-xl z-20' onClick={() => scrollToSection('contact')}>Contact</h1>

                    <h1 onMouseEnter={() => setIsDropdownOpenLanguages(true)} onMouseLeave={() => setIsDropdownOpenLanguages(false)} className='cursor-pointer hover:text-[#446AF2] text-xl z-20 relative'>
                        ENG
                        {isDropdownOpenLanguages && (
                            <div className='absolute bg-[#f0efef] ml-[-20] shadow-custom-blue rounded-md'>
                                {languageLinks.map((link) => (
                                    <Link legacyBehavior key={link.href} href={link.href}>
                                        <div className='flex flex-col items-start  w-full px-2 space-x-3'>
                                            <a className='items-center py-2 text-gray-700 hover:text-[#446AF2]'>{link.title}</a>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </h1>

                </div>

                {/* Fullscreen Menu for small screens */}
                <div className={`fixed inset-0 bg-[#2a3f8b] z-20 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
                    <ul className='flex h-full flex-col w-[150px] pl-10 space-y-20 items-start justify-center text-white'>
                        <li className='cursor-pointer text-2xl hover:opacity-70'>About Us</li>
                        <div className='flex flex-row items-center space-x-36 '>
                            <li className='cursor-pointer text-2xl hover:opacity-70'>ENG</li>
                            <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180 hover:opacity-70'></img>
                        </div>
                        <li className='cursor-pointer text-2xl hover:opacity-70'>Projects</li>
                        <li className='cursor-pointer text-2xl hover:opacity-70'>Contact</li>
                        <div className='flex flex-row items-center space-x-36 '>
                            <li className='cursor-pointer text-2xl '>ENG</li>
                            <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180 hover:opacity-70'></img>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
