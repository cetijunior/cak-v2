import React from "react";

const MobDevSection2 = () => {
  return (
    <>
      <div className="pt-12 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-2xl w-full sm:w-[70rem] lg:w-[80rem] mx-4 lg:mx-0">
          <div className="flex flex-col space-y-4 px-4">
            <h1 className="text-2xl lg:text-3xl text-center">
              A unique work method that
              <br />
              guarantees 150% efficiency
            </h1>
            <p className="text-center">
              We call it The Helmes Way. For the past 20 years, we’ve worked to
              perfect it.
            </p>
            <p className="text-center">
              Our methods enable at least 150% greater efficiency, in both
              delivery and ownership costs,
              <br /> compared to other outsourcing models.
            </p>
          </div>
          <div className="pt-8 flex flex-wrap justify-center gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center h-[10rem] w-[10rem] bg-white rounded-3xl shadow-custom-blue p-4"
              >
                <h1>Service</h1>
                <h1 className="text-blue-500 text-2xl lg:text-3xl">66</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 p-4">
        <div className="space-y-7">
          <h1 className="text-2xl lg:text-3xl font-serif text-center lg:text-left">
            Our customers find our
            <br /> services exceptional
          </h1>
          <p className="text-center lg:text-left">
            We don’t just develop high-end mobile apps, but we also build
            business relationships. Our early insights and final results
            routinely exceed customer expectations.
          </p>
          <p className="text-center lg:text-left">
            Our customers find our service quality outstanding. We have an NPS
            twice as high as the software industry average.
          </p>
          <p className="text-center lg:text-left">
            Our top 20 customers have been with us for more than 10 years on
            average, trusting us to develop their business-critical software.
          </p>
          <p className="text-center lg:text-left">
            We are often ranked as the best external development partner by our
            customers.
          </p>
        </div>
        <img
          className="h-auto max-w-full lg:h-[30rem] lg:w-[40rem] xl:w-[50rem]"
          src="https://www.helmes.com/wp-content/uploads/2021/10/Helmes_Design_Central-1.jpg"
          alt="Helmes Design"
        ></img>
      </div>
      <div className="flex justify-center items-center h-auto lg:h-[20rem] bg-blue-200 p-4">
        <div className="flex flex-col justify-center items-center space-y-10">
          <h1 className="text-2xl lg:text-3xl">Contact us</h1>
          <p className="text-center text-lg lg:text-xl font-thin">
            Get in touch! Contact any of our people or drop us a line at
            info@helmes.com.<br></br> Let’s discuss your mobile app development
            plans.
          </p>
        </div>
      </div>
    </>
  );
};

export default MobDevSection2;
