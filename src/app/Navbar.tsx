import React from 'react'


function Navbar() {
    return (
        <div className=' flex flex-row z-10 items-center bg-[#F8F9FB]  justify-between w-screen'>
            <div className='p-4 flex flex-row z-10 items-center bg-[#F8F9FB]  justify-between w-screen'>
                <h1 className='text-2xl z-10 bg-[#F8F9FB]  font-bold text-[#446AF2]'>CAK Web Solutions</h1>

                <div className='flex z-10 bg-[#F8F9FB]   flex-row space-x-8'>
                    <h1 className='cursor-pointer text-xl hover:opacity-70'>About Us</h1>
                    <h1 className='cursor-pointer text-xl hover:opacity-70'>Web Development Services</h1>
                    <h1 className='cursor-pointer text-xl hover:opacity-70'>Projects</h1>
                    <h1 className='cursor-pointer text-xl hover:opacity-70'>Contact</h1>

                </div>
            </div>
        </div>
    )
}

export default Navbar