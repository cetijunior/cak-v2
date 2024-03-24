
import { useRouter } from 'next/navigation';
import React from 'react'

function MiniNavbar() {

    const router = useRouter(); // Initialize useRouter

    // Function to close MiniNavbar and navigate back
    const handleClose = () => {
        router.push('/'); // Navigate back to the main page
    };


    return (
        <div>
            <div className={`fixed inset-0 bg-[#2a3f8b] z-20 ...`}>
                ...
                <img src='/close.png' alt='Close' className="w-10 h-10 absolute top-5 right-5" onClick={handleClose} />
                <ul className='...'>
                    ...
                </ul>
            </div>

            <div className={`fixed inset-0 bg-[#2a3f8b] z-20 transform -translate-x-full transition-transform duration-300 ease-in-out sm:hidden`}>
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
    )
}

export default MiniNavbar
