import Video from 'next-video';
import React from 'react'
import HeroV from '../../videos/HeroV.mp4'

function Hero() {
    return (
        <div className='w-screen'>
            <div className='flex mt-[-600px] justify-center'>
                <Video
                    style={{ width: 1980, height: 1080, objectFit: "fill" }}
                    src={HeroV}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                >
                </Video>
            </div>
            <div className='flex flex-col items-center justify-center w-screen'>
                <div className='w-[600px] z-10 h-[400px] bg-[#F8F9FB] shadow-custom-blue mt-[-300px] rounded-xl p-10 space-y-4'>
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