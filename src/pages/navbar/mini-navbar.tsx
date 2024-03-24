import { useRouter } from 'next/router'; // Correct import statement
import React from 'react';
import Link from 'next/link';
import '../../../styles/globals.css';

function MiniNavbar() {
    const router = useRouter();

    const serviceLinks = [
        { href: '/about', img: '/computer.png', title: 'Website Development', description: 'Specializing in custom web solutions to enhance your online presence.' },
        { href: '/services-pages/mob-dev', img: '/smartphone.png', title: 'Mobile App Development', description: 'Creating mobile applications that offer seamless user experiences.' },
        { href: '/services-pages/smma', img: '/smma.png', title: 'Social Media Marketing', description: 'Strategies to grow your brand’s presence on various social platforms.' },
        { href: '/services-pages/design', img: '/web-design.png', title: 'Design', description: 'Innovative design solutions tailored to your business’s needs.' }
    ];

    const handleClose = () => {
        router.push('/');
    };

    const navigateToSection = (sectionId: string) => {
        // Close the MiniNavbar
        // Then navigate to the main page with the specific section hash
        router.push('/#' + sectionId);
    };

    return (
        <div className={`fixed inset-0 bg-[#2a3f8b] z-20 transform transition-transform duration-300 ease-in-out sm:hidden`}>
            <img src='/close.png' alt='Close' className="w-10 h-10 absolute top-5 right-5 cursor-pointer" onClick={handleClose} />

            <ul className='flex h-full flex-col w-[300px] pl-5 space-y-12 items-start justify-center text-white'>
                <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('about')}>About Us</li>

                <div className='flex flex-row items-center space-x-26 '>
                    <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('services')}>Web Development Services</li>
                    <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180 hover:opacity-70'></img>
                </div>

                <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('projects')}>Projects</li>
                <li className='cursor-pointer text-3xl hover:opacity-70' onClick={() => navigateToSection('contact')}>Contact</li>

                <div className='flex flex-row items-center hover:opacity-70 space-x-28 '>
                    <li className='cursor-pointer text-3xl'>ENG</li>
                    <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180'></img>
                </div>

            </ul>
        </div>
    );
}

export default MiniNavbar;
