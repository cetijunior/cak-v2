"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true);

    // Simulated email send operation
    setTimeout(() => {
      window.location.href = `mailto:info@cakwebsolutions.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=Hello, my name is: ${encodeURIComponent(
        formData.name
      )}. ${encodeURIComponent(formData.message)} (${encodeURIComponent(
        formData.email
      )})`;
      reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="bg-white mx-auto py-10 min-h-[600px]">
      <div className="flex flex-wrap items-start justify-center ">
        <div className="flex flex-col bg-[#E6F0F8] shadow-custom-blue rounded-[39px] h-[1200px] px-4 w-[350px] lg:h-[700px] lg:w-[650px] md:h-[700px] md:w-[650px] transition-all duration-500 ease-in-out transform hover:scale-105">
          <h1 className="px-10 py-10 lg:text-left text-center text-3xl font-bold ">
            Contact Us!
          </h1>
          <p className="px-10 text-[14px] lg:text-left text-center lg:w-[550px]">
            Choose CAK to propel your software development forward. Get in touch
            to explore your project needs, benefit from our complimentary
            consultation, and receive a tailored estimate for both cost and
            launch timeline!
          </p>
          <p className="px-10 py-8 text-[14px] lg:text-left text-center lg:w-[550px]">
            Send us an e-mail or fill in the form. We will be in touch within
            one business day!
          </p>
          <h1 className="px-10 text-[18px] lg:text-left text-center font-semibold ">
            Send us an e-mail
          </h1>
          <h2 className="px-10 text-[14px] lg:text-left text-center">
            info@cakwebsolutions.com
          </h2>
          <h1 className="px-10 mt-[10px] text-[18px] lg:text-left text-center font-semibold ">
            Give us a call
          </h1>
          <h2 className="px-10 text-[14px] lg:text-left text-center">
            +49 (176) 2359-2066
          </h2>
          <div className="flex flex-wrap justify-center py-4 lg:py-0 space-y-6 lg:space-y-0 mt-4 items-start">
            <img
              src="/archieContact.png"
              alt="archiecontact"
              className="lg:w-[180px] lg:h-[240px] md:w-[180px] md:h-[240px] w-[300px] h-[400px] rounded-[39px] lg:rounded-[39px] md:rounded-2xl shadow-custom-blue2 transition-all duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="flex sm:flex-col flex-wrap justify-start space-y-2">
              <h1 className="px-10 text-[18px] mt-[20px] lg:mt-[0px] text-left font-semibold ">
                Luars Qamo
              </h1>
              <h2 className="px-10 text-[14px]">Co-founder of CAK</h2>
              <p className="px-10 py-4 text-[13px] w-[250px]">
                I`ll ensure the team best suited for your project gets in touch
                with you swiftly.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white lg:w-[400px] md:w-[500px] w-[310px] h-[550px] lg:ml-[-80px] mt-[-40px] lg:mt-[100px] md:mt-[-30px] flex flex-col shadow-custom-blue2 rounded-[39px] transition-all duration-500 ease-in-out transform hover:scale-105">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-4 py-4 flex flex-col space-y-2">
              <h1 className="text-2xl font-bold text-center py-4">
                Fill in the form!
              </h1>
              <h1>Your Full Name</h1>
              <input
                {...register("name", { required: "*The name is missing" })}
                placeholder={
                  errors.name ? errors.name.message : "Your name here"
                }
                className="transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer border-none"
                type="text"
              />
              <div className="w-300 h-[1px] bg-black" />
              <h1>Company Name</h1>
              <input
                {...register("name", {
                  required: "*The Company name is missing",
                })}
                className="transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer border-none"
                placeholder={
                  errors.name ? errors.name.message : "Your Company name here"
                }
                type="text"
              />
              <div className="w-300 h-[1px] bg-black" />
              <h1>Company Email</h1>
              <input
                {...register("email", {
                  required: "*The email is missing",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer border-none"
                placeholder={errors.email ? errors.email.message : "Email"}
                type="email"
              />
              <div className="w-300 h-[1px] bg-black" />
              <h1>Subject</h1>
              <input
                {...register("subject", {
                  required: "*The subject is missing",
                })}
                className="transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer border-none"
                placeholder={
                  errors.subject ? errors.subject.message : "Subject"
                }
                type="text"
              />
              <div className="w-300 h-[1px] bg-black" />
              <h1 className="">Message</h1>
              <input
                {...register("message", {
                  required: "*The message is missing",
                })}
                className="transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer border-none"
                placeholder={
                  errors.message ? errors.message.message : "Message"
                }
              />
              <div className="w-300 h-[1px] bg-black" />
              <div className="flex justify-center transition-all duration-500 ease-in-out transform hover:scale-105">
                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className="bg-[#2D9CDB] text-white w-32 h-12 shadow-custom-blue rounded-[39px] mt-4"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
