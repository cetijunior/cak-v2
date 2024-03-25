"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Props } from 'next/script';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        setIsSubmitting(true);

        // Simulated email send operation
        setTimeout(() => {
            window.location.href = `mailto:info@cakwebsolutions.com?subject=${encodeURIComponent(formData.subject)}&body=Hello, my name is: ${encodeURIComponent(formData.name)}. ${encodeURIComponent(formData.message)} (${encodeURIComponent(formData.email)})`;
            reset();
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section id='contact' className='bg-white mx-auto py-10 min-h-[600px]'>
            <div className='flex flex-wrap items-start justify-center'>
                <div className='flex flex-col bg-[#E6F0F8] shadow-custom-blue rounded-[39px] h-[700px] w-[650px]'>
                    <h1 className='px-10 py-10 text-3xl font-bold '>Contact Us!</h1>
                    <p className='px-10 text-[14px] w-[550px]'>Partner with CAK to accelerate your software development projects. Contact us to discuss your project requirements, receive a free consultation, and get a personalized project cost estimate and time-to-market assessment!</p>
                    <p className='px-10 py-8 text-[14px] w-[550px]'>Send us an e-mail or fill in the form. We will be in touch within one business day!</p>
                    <h1 className='px-10 text-[18px] font-semibold '>Send us an e-mail</h1>
                    <h2 className='px-10 text-[14px]'>info@cakwebsolutions.com</h2>
                    <h1 className='px-10 mt-[10px] text-[18px] font-semibold '>Give us a call</h1>
                    <h2 className='px-10 text-[14px]'>+49 (176) 2359-2066</h2>
                    <div className='flex flex-wrap justify-center mt-4 items-start'>
                        <img src="/archieContact.png" alt="archiecontact" className='w-[180px] h-[240px] shadow-custom-blue' />
                        <div className='flex flex-col space-y-2'>
                            <h1 className='px-10 text-[18px] font-semibold '>Luars Qamo</h1>
                            <h2 className='px-10 text-[14px]'>Co-founder of CAK</h2>
                            <p className='px-10 py-4 text-[13px] w-[250px]'>I will make sure the best team that fits your task will contact you as quickly as possible</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[400px] h-[550px] ml-[-130px] mt-20 transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col shadow-custom-blue rounded-[39px]'>
                    <form onSubmit={handleSubmit(onsubmit)} >
                        <div className='px-4 py-4 flex flex-col space-y-2'>
                            <h1 className='text-2xl font-bold text-center py-4'>Fill in the form!</h1>
                            <h1>Your Full Name</h1>
                            <input
                                {...register('name', { required: "*The name is missing" })}
                                placeholder={errors.name ? errors.name.message : 'Your name here'}
                                type='text'
                            />
                            <div className='w-300 h-[1px] bg-black'></div>
                            <h1>Company Name</h1>
                            <input
                                {...register('name', { required: "*The Company name is missing" })}
                                placeholder={errors.name ? errors.name.message : 'Your Company name here'}
                                type='text'
                            />
                            <div className='w-300 h-[1px] bg-black'></div>
                            <h1>Company Email</h1>
                            <input
                                {...register('email', { required: "*The email is missing", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
                                placeholder={errors.email ? errors.email.message : 'Email'}
                                type='email'
                            />
                            <div className='w-300 h-[1px] bg-black'></div>
                            <h1>Subject</h1>
                            <input
                                {...register('subject', { required: "*The subject is missing" })}
                                placeholder={errors.subject ? errors.subject.message : 'Subject'}
                                type='text'
                            />
                            <div className='w-300 h-[1px] bg-black'></div>
                            <h1>Message</h1>
                            <input
                                {...register('message', { required: "*The message is missing" })}
                                placeholder={errors.message ? errors.message.message : 'Message'}
                            />
                            <div className='w-300 h-[1px] bg-black'></div>
                            <button
                                type='submit'
                                disabled={isSubmitting || Object.keys(errors).length > 0}
                            >
                                {isSubmitting ? 'Submitting...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact