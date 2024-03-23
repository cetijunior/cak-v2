import Video from 'next-video';
import React from 'react'
import HeroV from '../../videos/HeroV.mp4'

function Hero() {
    return (
        <div className='w-screen'>
            <div className="flex bg-[#1E1919 mt-[-350px] items-center justify-center">
                <video autoPlay loop muted className="rounded-lg w-screen">
                    <source src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
                        type="video/mp4"
                    />
                    Your Browser does not support the video tag.
                </video>
            </div>
            <div className='flex flex-col items-center justify-center w-screen'>
                <div className='w-[700px] p-20 z-10 h-[400px] bg-[#F8F9FB] shadow-custom-blue mt-[-300px] rounded-xl  space-y-4'>
                    <h1 className='text-center text-5xl font-bold'>
                        World-Clas Website Development
                    </h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, non error.
                        Suscipit nobis id excepturi repudiandae itaque ipsa quia at sequi in. Ipsam doloremque tempore, nisi eveniet ex consequatur earum?
                    </h3>
                </div>
                <button className='bg-[#446AF2] z-20 text-white mt-[-20px] py-3 px-20 rounded-3xl'>Contact Us</button>
            </div>
        </div>
    )
}

export default Hero