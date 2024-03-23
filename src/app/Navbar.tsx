import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <div className='p-4 flex flex-row items-center justify-between w-screen'>
            <h1 className='text-2xl font-bold text-[#446AF2]'>CAK Web Solutions</h1>

            <div className='flex flex-row space-x-8'>
                <h1 className='cursor-pointer text-xl hover:opacity-70'>About Us</h1>
                <h1 className='cursor-pointer text-xl hover:opacity-70'>Web Development Services</h1>
                <h1 className='cursor-pointer text-xl hover:opacity-70'>Projects</h1>
                <h1 className='cursor-pointer text-xl hover:opacity-70'>Contact</h1>

            </div>
        </div>
    )
}

export default Navbar