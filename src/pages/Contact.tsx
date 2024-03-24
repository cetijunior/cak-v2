import React from 'react'

function Contact() {
    return (
        <section id='contact' className='bg-white mx-auto py-10 min-h-[600px]'>
            <div className='flex flex-wrap items-start justify-center'>
                <div className='flex flex-col bg-[#E6F0F8] shadow-custom-blue rounded-[39px] h-[700px] w-[650px]'>
                   <h1 className='px-10 py-10 text-3xl font-bold '>Contact Us!</h1>
                   <p className='px-10 text-[14px] w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aspernatur voluptate possimus, labore aliquid dicta consequatur delectus? Consequuntur quis sint nam fugiat repellendus, distinctio dolorem dolores omnis provident autem velit?</p>
                   <p className='px-10 py-8 text-[14px] w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aspernatur voluptate possimus, labore aliquid dicta consequatur delectus?</p>  
                   <h1 className='px-10 text-[18px] font-semibold '>Send us an e-mail</h1>
                   <h2 className='px-10 text-[14px]'>info@cakwebsolutions.com</h2>
                   <h1 className='px-10 mt-[10px] text-[18px] font-semibold '>Give us a call</h1>
                   <h2 className='px-10 text-[14px]'>+49 (176) 2359-2066</h2>
                   <div className='flex flex-wrap justify-center mt-4 items-start'>
                    <img src="/archieContact.png" alt="archiecontact" className='w-[180px] h-[240px] shadow-custom-blue'/>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='px-10 text-[18px] font-semibold '>Luars Qamo</h1>
                        <h2 className='px-10 text-[14px]'>Co-founder of CAK</h2>
                        <p className='px-10 py-4 text-[13px] w-[250px]'>I will make sure the best team that fits your task will contact you as quickly as possible</p>   
                    </div>
                   </div>
                </div>
                <div className='bg-white w-[400px] h-[550px] ml-[-80px] mt-[100px] shadow-custom-blue rounded-[39px]'>

                </div>
            </div>
        </section>
    )
}

export default Contact