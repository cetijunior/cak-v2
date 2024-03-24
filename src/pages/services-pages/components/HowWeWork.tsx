import Link from 'next/link'
import React from 'react'

const HowWeWork = () => {
  return (
    <section>
            <div className='flex flex-col justify-center items-center gap-7 sm:flex-row '>
                <div className='flex flex-col space-y-5 mr-20 '>
                <h1 className='text-4xl text-black pb-10'>
                    How we Work ? 
                </h1>
                <h3>
                     We call it the CAK way.
                </h3>
                <p className='text-black pl-6'>
                Our proprietary working model<br></br> 
                guarantees world-class service at least <br></br>
                 150% more efficient than alternative <br></br>
                software development models.
                </p>
                <p className='text-black pl-6'>
                Our proprietary working model<br></br> 
                guarantees world-class service at least <br></br>
                 150% more efficient than alternative <br></br>
                software development models.
                </p>
                <p className='text-black pl-6'>
                Our proprietary working model<br></br> 
                guarantees world-class service at least <br></br>
                 150% more efficient than alternative <br></br>
                software development models.
                </p>
                <p className='text-black pl-6'>
                Our proprietary working model<br></br> 
                guarantees world-class service at least <br></br>
                 150% more efficient than alternative <br></br>
                software development models.
                </p>
                <div className='flex flex-row items-center gap-2'>
                <Link className='text-blue-300 hover:text-blue-600' href={'/'}>Contact us</Link> 
                <img className='h-[20px] w-[20px] rotate-180' src='/arrow.png'></img>
                </div>
                </div>
                <img  className='h-[33rem] w-[50rem] rounded-xl' src='https://www.helmes.com/wp-content/uploads/2021/09/MG_9332-1024x683.jpg'></img>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 pt-10 space-y-5'>
                <h1 className='text-bold text-4xl text-black'>
                    How the realationship begins
                </h1>
                <p>
                We use the <Link className='text-blue-400' href={'/'}>Quick Start model</Link> for onboarding new projects.<br></br> 
                In order to gain a holistic understanding, we conduct a <br></br>
                 thorough analysis of your business’s IT infrastructure.
                </p>
            </div>
            <div className='flex flex-row justify-center items-center space-x-5 pt-20'>
                <div className='flex flex-col items-start p-6 justify-center w-[400px] h-[300px] space-y-7 rounded-3xl shadow-custom-blue'>
                <h1 className='flex items-start font-bold text-2xl'>
                Step 1: Fact check, test<br/> assumptions
                </h1>
                <p>
                Plan the work, work the plan. Proper<br></br> formulation and planning of the project<br></br> ensures success.
                </p>
                </div>

                <div className='flex flex-col items-start p-6 justify-center w-[400px] h-[300px] space-y-7 rounded-3xl shadow-custom-blue'>
                <h1 className='flex items-start font-bold text-2xl'>
                Step 1: Fact check, test<br/> assumptions
                </h1>
                <p>
                Plan the work, work the plan. Proper<br></br> formulation and planning of the project<br></br> ensures success.
                </p>
                </div>

                <div className='flex flex-col items-start p-6 justify-center w-[400px] h-[300px] space-y-7 rounded-3xl shadow-custom-blue'>
                <h1 className='flex items-start font-bold text-2xl'>
                Step 1: Fact check, test<br/> assumptions
                </h1>
                <p>
                Plan the work, work the plan. Proper<br></br> formulation and planning of the project<br></br> ensures success.
                </p>
                </div>
                
            </div>
    </section>
  )
}

export default HowWeWork