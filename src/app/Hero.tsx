import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div>
            <Image className='mt-[-40px] w-screen' src='/hero.png' width={1920} height={1080} alt={''} />

            <div className='flex flex-col items-center justify-center w-screen'>
                <div className='w-[600px] h-[400px] bg-[#F8F9FB] shadow-custom-blue rounded-xl mt-[-250px] p-10 space-y-4'>
                    <h1 className='text-center text-5xl font-bold'>
                        World-Clas Website Development
                    </h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, non error.
                        Suscipit nobis id excepturi repudiandae itaque ipsa quia at sequi in. Ipsam doloremque tempore, nisi eveniet ex consequatur earum?
                    </h3>
                </div>
                <button className='bg-[#446AF2] text-white mt-[-20px] py-3 px-20 rounded-3xl'>Contact Us</button>
            </div>
        </div>
    )
}

export default Hero