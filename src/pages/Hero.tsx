'use client'

import React from 'react'

function Hero() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div className='w-screen'>
            <div className="flex bg-[#1E1919 mt-[-50px] sm:mt-[-350px] items-center justify-center">
                <video autoPlay loop muted className="rounded-lg w-screen">
                    <source src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
                        type="video/mp4"
                    />
                    Your Browser does not support the video tag.
                </video>
            </div>
            <div className='flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen '>
                <div className='w-[400px] sm:w-[650px] p-20 z-10 sm:h-[400px] bg-[#F8F9FB] shadow-custom-blue mt-[-40px] sm:mt-[-350px] rounded-xl space-y-4'>
                    <h1 className='text-center text-2xl sm:text-5xl font-bold'>
                        World-Clas Website Development
                    </h1>
                    <h3 className='text-center'>
                        Discover our range of services
                        and find out how we can help you
                        take your project to the next level.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis, quasi, in cupiditate vero dicta eligendi maiores id ut quidem, illo molestiae alias quisquam magnam?
                        Minima perferendis consectetur delectus culpa? Perspiciatis!
                    </h3>
                </div>
                <button onClick={() => scrollToSection('contact')} className='bg-[#446AF2] z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl'>Contact Us</button>
            </div>
        </div>
    )
}

export default Hero