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
                    {isMenuOpen ?
                        <img src='/close.png' alt='Close' className="w-10 h-10" onClick={navigateBack} />
                        :
                        <Link href='/navbar/MiniNavbar'>
                            <img src='/menu.png' alt='Menu' className="w-10 h-10" />
                        </Link>
                    }
                </button>

            </div>

            {/* Desktop Navbar */}
            <div className='hidden sm:flex flex-row items-center sm:px-10 space-x-8'>
                <div className='hidden sm:flex flex-row items-center space-x-8'>
                    <h1 className='cursor-pointer hover:text-[#446AF2] text-xl z-20' onClick={() => scrollToSection('about')}>About Us</h1>
                    <h1 onClick={() => scrollToSection('services')}
                        onMouseEnter={() => setIsDropdownOpenServices(true)}
                        className='cursor-pointer hover:text-[#446AF2] text-xl z-20 h-100p relative'>
                        Web Development Services
                        {isDropdownOpenServices && (
                            <div onMouseLeave={() => setIsDropdownOpenServices(false)} className='absolute top-full left-1/2 transform -translate-x-1/2 mt-10 w-[700px] bg-[#ffffff] shadow-custom-blue rounded-md p-4'>
                                <div className='grid grid-cols-2 gap-4'>
                                    {serviceLinks.map((link, index) => (
                                        <Link legacyBehavior key={index} href={link.href}>
                                            <a className='flex items-center space-x-3 bg-white p-2 rounded-lg hover:shadow-custom-blue'>
                                                <img src={link.img} alt={link.title} className="w-10 h-10" />
                                                <div>
                                                    <div className='font-semibold text-gray-900'>{link.title}</div>
                                                    <div className='text-sm text-gray-600'>{link.description}</div>
                                                </div>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
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


            </div>
        </div>
    );
}

export default Navbar;
