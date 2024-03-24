import { useRouter } from 'next/router'; // Correct import statement
import React from 'react';
import '../../../styles/globals.css';

function MiniNavbar() {
    const router = useRouter();

    const handleClose = () => {
        router.push('/');
    };

    return (
        <div className='fixed inset-0 bg-[#2a3f8b] z-50'>
            <img src='/close.png' alt='Close' className="w-10 h-10 absolute top-5 right-5 cursor-pointer" onClick={handleClose} />

            <ul className='flex h-full flex-col w-[300px] pl-5 space-y-12 items-start justify-center text-white'>
                <li className='cursor-pointer text-3xl hover:opacity-70'>About Us</li>

                <div className='flex flex-row items-center space-x-26 '>
                    <li className='cursor-pointer text-3xl hover:opacity-70'>Web Development Services</li>
                    <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180 hover:opacity-70'></img>
                </div>

                <li className='cursor-pointer text-3xl hover:opacity-70'>Projects</li>
                <li className='cursor-pointer text-3xl hover:opacity-70'>Contact</li>

                <div className='flex flex-row items-center space-x-28 '>
                    <li className='cursor-pointer text-3xl '>ENG</li>
                    <img src='/arrow.png' alt='next' className='w-10 h-10 rotate-180 hover:opacity-70'></img>
                </div>

            </ul>
        </div>
    );
}

export default MiniNavbar;
