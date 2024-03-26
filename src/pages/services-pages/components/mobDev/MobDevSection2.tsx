import React from "react";

const MobDevSection2 = () => {
  return (
    <>
      <div className="pt-12 flex justify-center">
        <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-2xl w-full max-w-[80rem] p-6">
          <div className="text-center">
            <h1 className="text-3xl">
              A unique work method that guarantees 150% efficiency
            </h1>
            <p className="pt-4">
              We call it The Helmes Way. For the past 20 years, we’ve worked to
              perfect it.
            </p>
            <p>
              Our methods enable at least 150% greater efficiency, in both
              delivery and ownership costs, compared to other outsourcing
              models.
            </p>
          </div>
          <div className="pt-8 flex flex-wrap justify-around items-center gap-6">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue"
              >
                <h1>Service</h1>
                <h1 className="text-blue-500 text-3xl">66</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col lg:flex-row justify-center items-center gap-10 p-6">
        <div className="space-y-6 max-w-md lg:max-w-lg">
          <h1 className="text-3xl font-serif text-center lg:text-left">
            Our customers find our services exceptional
          </h1>
          <p>
            We don’t just develop high-end mobile apps, but we also build
            business relationships. Our early insights and final results
            routinely exceed customer expectations.
          </p>
          {/* Additional paragraphs omitted for brevity */}
        </div>
        <img
          className="max-w-full h-auto lg:w-96 xl:w-[50rem]"
          src="https://www.helmes.com/wp-content/uploads/2021/10/Helmes_Design_Central-1.jpg"
          alt="Helmes Design"
        />
      </div>
      <div className="flex justify-center items-center bg-blue-200 py-12">
        <div className="text-center space-y-6">
          <h1 className="text-3xl">Contact us</h1>
          <p className="text-xl font-thin">
            Get in touch! Contact any of our people or drop us a line at
            info@helmes.com. Let’s discuss your mobile app development plans.
          </p>
        </div>
      </div>
    </>
  );
};

export default MobDevSection2;
