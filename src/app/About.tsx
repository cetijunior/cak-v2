import React from 'react'
import CarouselAbout from './CarouselAbout'

function About() {
    return (
        <section id='about' className='bg-[#F8F9FB] mx-auto w-screen px-8 py-20 min-h-[600px]'>
            <div className='flex flex-row gap-80 px-12'>
                <div className='flex flex-col gap-8 my-12'>
                    <h2 className='text-2xl text-[#131B23]'>Who are we?</h2>
                    <p className='text-md text-[#131B23]'>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Sit <br /> architecto modi dolor, atque laborum qui <br />ea dolorem cupiditate fugit harum <br />corrupti veniam. Blanditiis repudiandae <br /> earum id laboriosam omnis quas <br />voluptate!</p>
                </div>
                <CarouselAbout />
            </div>
        </section>
    )
}

export default About