"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function CarouselAbout() {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const items = [
    {
      name: "Krenar Dervishaj",
      role: "Co-Founder, FullStack Developer and UI/UX Designer",
      className:
        "rounded-full w-[150px] transition-all duration-500 ease-in-out transform hover:scale-105 h-[150px] ml-[0px] z-10 mt-[0px] sm:ml-[-40px] sm:w-[300px] sm:h-[300px]",
      img: "/keniPFP.png",
      text: "Krenar Dervishaj, co-founder of CAK, merges creativity with tech to excel in web development and UI/UX design. His innovative leadership ensures high-quality, unique digital solutions from the agency.",
    },
    {
      name: "Shefqet CJ Lame",
      role: "Co-Founder and FullStack Developer",
      img: "/cjPFP.png",
      className:
        "rounded-full w-[150px] h-[150px] transition-all duration-500 ease-in-out transform hover:scale-105 ml-[0px] mt-[10px] z-10 sm:ml-[-85px] sm:mt-[20px] sm:w-[275px] sm:h-[275px]",
      text: "CJ, co-founder of CAK, brings strategic insight and technical expertise to web development. His focus on innovative solutions drives the agency's success in delivering impactful digital products.",
    },
    {
      name: "Luars Qamo",
      role: "Co-Founder and FullStack Developer",
      img: "/archiePFP.png",
      className:
        "rounded-full w-[200px] h-[200px] transition-all duration-500 ease-in-out transform hover:scale-105 ml-[0px] mt-[-30px] z-10 sm:ml-[-85px] sm:mt-[-30px] sm:mr-8 sm:w-[300px] sm:h-[300px]",
      text: "Luars, co-founder of CAK, excels in web development, leveraging his technical skills to bring dynamic solutions to life. His dedication ensures the delivery of exceptional digital products.",
    },
  ];

  React.useEffect(() => {
    // Update screenWidth with the actual window width after mount
    setScreenWidth(window.innerWidth);

    const updateWindowWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const backgroundClass =
    screenWidth < 640 ? "split-bg-vertically" : "bgForAbout"; // Assuming 640px as the breakpoint

  return (
    <div
      className={`carousel-container ${backgroundClass} transition-all duration-500 ease-in-out transform hover:scale-105 z-10 shadow-custom-blue h-[600px] sm:h-[350px] rounded-[39px] mt-20 w-[290px] sm:w-[800px]`}
    >
      <img
        src="/quotes.png"
        alt="quotes"
        className="sm:h-[100px] h-[40px] w-[60px] sm:w-40 sm:mt-[-70px] mt-[-20px] ml-[-35px] sm:ml-[-120px] absolute"
      />
      <img
        src="/quotes.png"
        alt="quotes"
        className="sm:h-[100px] h-[40px]  w-[60px] sm:w-40 sm:mt-[320px] mt-[580px] rotate-180 ml-[265px] sm:ml-[760px] absolute"
      />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={`rounded-[39px]`}>
            <div
              className={` rounded-[39px] h-[600px] sm:h-[350px] w-[290px] sm:w-[800px]`}
            >
              <div
                className={`flex flex-wrap ${backgroundClass} h-[600px] sm:h-[350px]  py-8 rounded-[39px] space-x-4 relative justify-center items-start`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className={item.className}
                />
                <div className="absolute bg-custom-blue-gradient z-0 h-[150px] sm:h-[300px] sm:w-[200px] sm:right-[530px] blur-[35px] w-[150px] rounded-full" />
                <div className="px-6 mt-0 sm:mt-10 sm:py-0 rounded-[39px] space-y-4 flex flex-col sm:items-start items-center">
                  <p className="text-center text-[15px] sm:mb-4 mt-8 sm:mt-0 sm:w-[300px] w-[200px] sm:text-sm sm:text-left">
                    {item.text}
                  </p>
                  <h1 className="sm:text-left text-center sm:mt-16 font-semibold mt-4">
                    {item.name}
                  </h1>
                  <h1 className="sm:text-left text-center text-sm sm:mt-4 mt-2">
                    {item.role}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselAbout;
