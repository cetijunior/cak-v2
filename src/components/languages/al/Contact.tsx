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
          <h1 className="px-10 py-10 lg:text-left font-playfair text-center text-3xl font-bold ">
            Na Kontaktoni!
          </h1>
          <p className="px-10 text-[14px] lg:text-left font-extralight text-[#131B23] text-center lg:w-[550px]">
            Zgjidhni CAK për të shtyrë përpara zhvillimin tuaj të softuerit.
            Kontaktoni për të eksploruar nevojat e projektit tuaj, përfitoni nga
            konsultimi ynë falas, dhe merrni një vlerësim të personalizuar për
            kostot dhe afatin e nisjes!
          </p>
          <p className="px-10 py-8 text-[14px] lg:text-left font-extralight text-[#131B23] text-center lg:w-[550px]">
            Na dërgoni një email ose plotësoni formularin. Ne do të jemi në
            kontakt brenda një dite pune!
          </p>
          <h1 className="px-10 text-[18px] lg:text-left font-playfair text-center font-semibold ">
            Dergoni nje E-mail
          </h1>
          <h2 className="px-10 text-[14px] lg:text-left font-extralight text-[#131B23] text-center">
            info@cakwebsolutions.com
          </h2>
          <h1 className="px-10 mt-[10px] text-[18px] lg:text-left font-playfair text-center font-semibold ">
            Na telefononi në:
          </h1>
          <h2 className="px-10 text-[14px] lg:text-left font-extralight text-[#131B23] text-center">
            +49 (176) 2359-2066
          </h2>
          <div className="flex flex-wrap justify-center py-4 lg:py-0 space-y-6 lg:space-y-0 mt-4 items-start">
            <img
              src="/archieContact.jpg"
              alt="archiecontact"
              className="lg:w-[200px] lg:h-[250px] md:w-[200px] md:h-[250px] w-[350px] shadow-custom-blue2 h-[400px] rounded-[39px] lg:rounded-[20px] md:rounded-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="flex sm:flex-col flex-wrap justify-start space-y-2">
              <h1 className="px-10 text-[18px] mt-[20px] lg:mt-[0px] font-playfair text-left font-semibold ">
                Luars Qamo
              </h1>
              <h2 className="px-10 font-extralight text-[#131B23] text-[14px]">
                Co-founder of CAK
              </h2>
              <p className="px-10 font-extralight text-[#131B23] py-4 text-[13px] w-[250px]">
                Do të siguroj që ekipi më i përshtatshëm për projektin tuaj të
                kontaktojë me ju me shpejtësi.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white lg:w-[400px] md:w-[500px] w-[310px] h-[550px] lg:ml-[-80px] mt-[-40px] lg:mt-[100px] md:mt-[-30px] flex flex-col shadow-custom-blue2 rounded-[39px] transition-all duration-500 ease-in-out transform hover:scale-105">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-4 py-4 flex flex-col space-y-2">
              <h1 className="text-2xl font-bold font-playfair text-center py-4">
                Plotësoni formularin!
              </h1>
              <h1 className="font-playfair">Emri i plotë</h1>
              <input
                {...register("name", { required: "*The name is missing" })}
                placeholder={
                  errors.name ? errors.name.message : "Your name here"
                }
                className="bg-white focus:bg-white  lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-105 cursor-text contactInput outline-none"
                type="text"
              />
              <div className="w-300 h-[0.5px] bg-[#AECBEB]" />
              <h1 className="font-playfair">Emri i kompanisë</h1>
              <input
                {...register("name", {
                  required: "*The Company name is missing",
                })}
                className="contactInput bg-white focus:bg-white lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-105 cursor-text outline-none"
                placeholder={
                  errors.name ? errors.name.message : "Your Company name here"
                }
                type="text"
              />
              <div className="w-300 h-[0.5px] bg-[#AECBEB]" />
              <h1 className="font-playfair">Email</h1>
              <input
                {...register("email", {
                  required: "*The email is missing",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="contactInput bg-white focus:bg-white lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-105 cursor-text outline-none"
                placeholder={errors.email ? errors.email.message : "Email"}
                type="email"
              />
              <div className="w-300 h-[0.5px] bg-[#AECBEB]" />
              <h1 className="font-playfair">Subjekti</h1>
              <input
                {...register("subject", {
                  required: "*The subject is missing",
                })}
                className="contactInput bg-white focus:bg-white lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-105 cursor-text outline-none"
                placeholder={
                  errors.subject ? errors.subject.message : "Subject"
                }
                type="text"
              />
              <div className="w-300 h-[0.5px] bg-[#AECBEB]" />
              <h1 className="font-playfair">Mesazhi</h1>
              <textarea
                {...register("message", {
                  required: "*The message is missing",
                })}
                className="contactInput w-full resize-none bg-white focus:bg-white lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-105 cursor-text outline-none"
                placeholder={
                  errors.message ? errors.message.message : "Message"
                }
              />
              <div className="w-300 h-[0.5px] bg-[#AECBEB]" />
              <div className="flex justify-center transition-all duration-500 ease-in-out transform hover:scale-105">
                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className="bg-[#446AF2] hover:font-bold text-white w-32 h-12 shadow-custom-blue rounded-[39px] mt-4"
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
