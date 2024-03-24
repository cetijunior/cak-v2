import React from 'react'
import CarouselAbout from './carousel-about/CarouselAbout'

function About() {
    return (
        <section id='about' className='bg-white h-screen w-screen px-8 sm:px-24 py-[700px] sm:py-0'>
            <div className=' sm:flex sm:flex-row flex flex-col gap-4 items-center '>
                <div className='flex flex-col sm:gap-10 gap-10'>
                    <h2 className='sm:text-left text-center text-3xl font-semibold'>Who are we?</h2>
                    <p className='sm:text-left text-center w-[400px]'>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Sit <br /> architecto modi dolor, atque laborum qui <br />ea dolorem cupiditate fugit harum <br />corrupti veniam. Blanditiis repudiandae <br /> earum id laboriosam omnis quas <br />voluptate!</p>
                </div>
                <CarouselAbout />
            </div>
        </section>
    )
}

export default About