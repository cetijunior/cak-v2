'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpenServices, setIsDropdownOpenServices] = useState(false);
    const [isDropdownOpenLanguages, setIsDropdownOpenLanguages] = useState(false);
    const [rotateArrowLang, setRotateArrowLang] = useState(false);
    const [rotateArrowServ, setRotateArrowServ] = useState(false);



    const router = useRouter();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navigateHome = () => router.push('/'); // Navigate to the home page


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

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev); // Toggle menu open/close state
    };

    const navigateToSection = (sectionId: string) => {
        setIsMenuOpen(false); // Close the menu
        router.push('/#' + sectionId); // Navigate to section with smooth scroll
    };

    const handleLanguageDropdownToggle = () => {
        setIsDropdownOpenLanguages(!isDropdownOpenLanguages);
        setRotateArrowLang(!rotateArrowLang); // Toggle the rotation state as well
    };

    const handleServicesDropdownToggle = () => {
        setIsDropdownOpenServices(!isDropdownOpenServices);
        setRotateArrowServ(!rotateArrowServ); // Toggle the rotation state as well
    };

    const handleClickScreen = () => {
        setIsDropdownOpenLanguages(false)
        setIsDropdownOpenServices(false)
    }


    return (
        <div className='sticky top-0 z-50 sm:px-10 shadow-custom-blue flex items-center justify-between bg-[#F8F9FB] w-screen'>
            <div onDoubleClick={navigateHome} className='p-4'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <h1 className='cursor-pointer text-2xl font-bold text-[#446AF2]'>CAK Web Solutions</h1>
            </div>

            {/* Toggle button for small screens */}
            <div className='absolute pr-4 pt-2 z-40  right-0 sm:hidden'>
                <button onClick={handleMenuToggle}>
                    {isMenuOpen ? <img src='/close.png' alt='Close' className="w-10 h-10" /> : <img src='/menu.png' alt='Menu' className="w-10 h-10" />}
                </button>
            </div>

            {/* Fullscreen Menu for small screens */}
            <div onDoubleClick={handleClickScreen} className={`fixed inset-0 bg-[#2a3f8b] z-30 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out `}>

                <ul className='flex h-full flex-col z-30 w-[300px] pl-5 space-y-12 items-start justify-center text-white'>
                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('/')}>Home</li>

                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('about')}>About Us</li>

                    <div onClick={handleServicesDropdownToggle} className='flex flex-row items-center space-x-4 cursor-pointer'>
                        <span className='text-3xl'>Web Development Services
                        </span>
                        <img
                            src='/arrow.png'
                            alt='next'
                            className={`w-10 h-10 ${rotateArrowServ ? 'rotate-0' : 'rotate-180'}`} // Apply rotation based on state
                            style={{ transition: 'transform 0.4s ease' }} // Smooth transition for rotation
                        />
                    </div>
                    {isDropdownOpenServices && (
                        <ul className='left-0 bottom-60 bg-gray-700 shadow-md mt-12 p-2 rounded-lg'>
                            {serviceLinks.map((link, index) => (
                                <li key={index} className='hover:bg-gray-100 hover:text-black rounded-md p-2'>
                                    <Link legacyBehavior href={link.href}>
                                        <a className='flex items-center space-x-3'>
                                            <img src={link.img} alt={link.title} className="w-6 h-6" />
                                            <span>{link.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('projects')}>Projects</li>
                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('contact')}>Contact</li>

                    <div onClick={handleLanguageDropdownToggle} className='flex flex-row items-center space-x-24 cursor-pointer'>
                        <span className='text-3xl'>ENG</span>
                        <img
                            src='/arrow.png'
                            alt='next'
                            className={`w-10 h-10 ${rotateArrowLang ? 'rotate-0' : 'rotate-180'}`} // Apply rotation based on state
                            style={{ transition: 'transform 0.4s ease' }} // Smooth transition for rotation
                        />
                    </div>
                    {isDropdownOpenLanguages && (
                        <ul className='left-0 text-white bg-gray-700 shadow-md bottom-36 m-5 rounded-lg'>
                            {languageLinks.map((link, index) => (
                                <li key={index} className='hover:bg-gray-100 hover:text-black rounded-md p-2'>
                                    <Link legacyBehavior href={link.href}>
                                        <a className='flex items-center space-x-3'>
                                            <span>{link.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </ul>
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
