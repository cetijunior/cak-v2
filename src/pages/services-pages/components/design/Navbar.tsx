/* eslint-disable @next/next/no-img-element */
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
    const navigateHome = () => router.push('/');


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
        <div className='sticky top-0 z-50 sm:px-14 shadow-custom-blue flex items-center justify-between bg-[#F8F9FB] sm:w-screen w-full'>
            <div
                className='p-4'
                onClick={navigateHome}
            >
                <h1 className='cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-2xl font-bold text-[#446AF2]'>CAK Web Solutions</h1>
            </div>

            {/* Toggle button for small screens */}
            <div className='absolute pr-4 pt-2 z-40 right-0 sm:block md:block lg:hidden'>
                <button onClick={handleMenuToggle}>
                    {isMenuOpen ? <img src='/close.png' alt='Close' className="w-10 h-10" /> : <img src='/menu.png' alt='Menu' className="w-10 h-10" />}
                </button>
            </div>

            {/* Fullscreen Menu for small screens */}
            <div onDoubleClick={handleClickScreen} className={`fixed inset-0 bg-[#446AF2] z-30 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out `}>

                <ul className='flex h-full flex-col z-30 w-[300px] pl-5 space-y-12 items-start justify-center text-white'>
                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('/')}>Home</li>

                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('about')}>About Us</li>

                    <div onClick={handleServicesDropdownToggle} className='flex flex-row items-center space-x-4 cursor-pointer'>
                        <span className='text-3xl'>Web Development Services</span>
                        <img
                            src='/arrow.png'
                            alt='next'
                            className={`w-10 h-10 transform ${rotateArrowServ ? 'rotate-0' : '-rotate-180'}`} // Apply rotation based on state
                            style={{ transition: 'transform 0.4s ease' }} // Smooth transition for rotation
                        />
                    </div>

                    {/* Adjusted for sliding effect */}
                    <div
                        style={{
                            maxHeight: isDropdownOpenServices ? '500px' : '0', // Adjust maxHeight according to the content size
                            transition: 'max-height  1s ease-in-out', // Smooth transition for max-height
                            overflow: 'auto',  // Hide content that overflows during transition
                        }}
                    >
                        <ul className='bg-[#37457a67] w-full p-2 rounded-2xl'>
                            {serviceLinks.map((link, index) => (
                                <li key={index} className='hover:bg-gray-100 hover:text-black rounded-md p-2'>
                                    <Link legacyBehavior href={link.href}>
                                        <a className='flex items-center space-x-3'>
                                            <img src={link.img} alt={link.title} className="w-6 h-6 rotate" />
                                            <span>{link.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('projects')}>Projects</li>
                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('contact')}>Contact</li>

                    <div onClick={handleLanguageDropdownToggle} className='flex flex-col cursor-pointer'>
                        <div className='flex flex-row pb-8 justify-between'>
                            <span className='text-3xl'>ENG</span>
                            <img
                                src='/arrow.png'
                                alt='next'
                                className={`w-10 h-10 ml-20 transform ${rotateArrowLang ? 'rotate-0' : '-rotate-180'}`} // Apply rotation based on state
                                style={{ transition: 'transform 0.4s ease' }} // Smooth transition for rotation
                            />
                        </div>
                        <div
                            style={{
                                maxHeight: isDropdownOpenLanguages ? '500px' : '0', // Adjust maxHeight according to the content size
                                transition: 'max-height  1s ease-in-out', // Smooth transition for max-height
                                overflow: 'hidden',  // Hide content that overflows during transition
                            }}
                        >
                            <ul className='bg-[#37457a67] w-full p-2 rounded-2xl'>
                                {languageLinks.map((link, index) => (
                                    <li key={index} className='hover:bg-gray-100 item hover:text-black rounded-md p-2'>
                                        <Link legacyBehavior href={link.href}>
                                            <a className='flex items-center justify-center space-x-3'>
                                                <span>{link.title}</span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </ul>
            </div>


            {/* Desktop Navbar */}
            <div className='hidden md:hidden lg:flex flex-row items-center md:px-10 space-x-8'>
                <div className='hidden md:hidden lg:flex flex-row items-center space-x-16 pr-16'>

                    <Link legacyBehavior href="/#about">
                        <h1 className='cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#446AF2] text-xl z-20' >
                            About Us
                        </h1>
                    </Link>
                    <Link legacyBehavior href="/#services">
                        <h1
                            onMouseEnter={() => setIsDropdownOpenServices(true)}
                            onMouseLeave={() => setIsDropdownOpenServices(false)}
                            className='cursor-pointer hover:text-[#446AF2] transition-all duration-600 ease-in-out transform hover:scale-105 text-xl z-20 h-100p relative'
                        >

                            Web Development Services
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#ffffff] hover:mt-4 hover:p-2 shadow-custom-blue rounded-md transition-max-height duration-500 ease-in-out ${isDropdownOpenServices ? 'max-h-96' : 'max-h-0'} overflow-hidden`}
                                style={{ width: '700px' }} // Adjust width as needed
                            >
                                <div className='grid grid-cols-2 '>
                                    {serviceLinks.map((link, index) => (
                                        <Link legacyBehavior key={index} href={link.href}>
                                            <a className='flex p-4 items-center transition-all duration-300 ease-in-out transform hover:scale-105 space-x-3 bg-white rounded-lg'>
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
                        </h1>
                    </Link>

                    <Link legacyBehavior href="/#projects">
                        <h1 className='cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#446AF2] text-xl z-20'>
                            Projects
                        </h1>
                    </Link>
                    <Link legacyBehavior href="/#contact">
                        <h1 className='cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#446AF2] text-xl z-20'>
                            Contact
                        </h1>
                    </Link>
                    <Link legacyBehavior href="/#services">

                        <h1
                            onMouseEnter={() => setIsDropdownOpenLanguages(true)}
                            onMouseLeave={() => setIsDropdownOpenLanguages(false)}
                            className='cursor-pointer hover:text-[#446AF2] transition-all duration-600 ease-in-out transform hover:scale-105 text-xl z-20 h-100p relative'
                        >
                            Eng
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#ffffff] hover:mt-4 hover:shadow-custom-bluerounded-md transition-max-height duration-500 ease-in-out ${isDropdownOpenLanguages ? 'max-h-96' : 'max-h-0'} overflow-hidden`}
                                style={{ width: '50px' }} // Adjust width as needed
                            >
                                <div className='flex flex-col items-center w-full '>
                                    {languageLinks.map((link, index) => (
                                        <Link legacyBehavior key={index} href={link.href}>
                                            <a className='flex p-2 items-center transition-all duration-300 ease-in-out transform hover:scale-105 space-x-3 bg-white  rounded-lg'>
                                                <div className='text-sm hover:font-semibold text-md text-black'>{link.title}</div>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </h1>
                    </Link>

                </div>
            </div>
        </div>
    );
}


export default Navbar;


