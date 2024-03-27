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
        "rounded-full w-[150px] transition-all duration-500 ease-in-out transform hover:scale-105 h-[150px] ml-[0px] z-10 mt-[0px] lg:ml-[-40px] md:ml-[20px] md:mt-[-15px] mt-0 md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]",
      img: "/keniPFP.png",
      text: "Krenar Dervishaj, co-founder of CAK, merges creativity with tech to excel in web development and UI/UX design. His innovative leadership ensures high-quality, unique digital solutions from the agency.",
    },
    {
      name: "Shefqet CJ Lame",
      role: "Co-Founder and FullStack Developer",
      img: "/cjPFP.png",
      className:
        "rounded-full w-[150px] h-[150px] transition-all duration-500 ease-in-out transform hover:scale-105 ml-[0px] mt-[10px] z-10 lg:ml-[-85px] md:ml-[20px] lg:mt-[20px] md:mt-[0px] md:w-[200px] md:h-[200px] lg:w-[275px] lg:h-[275px]",
      text: "CJ, co-founder of CAK, brings strategic insight and technical expertise to web development. His focus on innovative solutions drives the agency's success in delivering impactful digital products.",
    },
    {
      name: "Luars Qamo",
      role: "Co-Founder and FullStack Developer",
      img: "/archiePFP.png",
      className:
        "rounded-full w-[200px] h-[200px] transition-all duration-500 ease-in-out transform hover:scale-105 ml-[0px] mt-[-30px] z-10 lg:ml-[-85px] lg:mt-[-30px] md:mt-[-50px] lg:mr-8 md:ml-[-15px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]",
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
      className={`carousel-container ${backgroundClass} transition-all duration-500 ease-in-out transform hover:scale-105 z-10 shadow-custom-blue h-[600px] lg:h-[350px] rounded-[39px] md:h-[250px] md:w-[650px] mt-20 w-[290px] lg:w-[800px]`}
    >
      <img
        src="/quotes.png"
        alt="quotes"
        className="lg:h-[100px] md:h-[50px] md:w-[70px] h-[40px] w-[60px] lg:w-40 lg:mt-[-70px] md:mt-[-30px] md:ml-[-45px] mt-[-20px] ml-[-35px] lg:ml-[-120px] absolute"
      />
      <img
        src="/quotes.png"
        alt="quotes"
        className="lg:h-[100px] h-[40px] w-[60px] lg:w-40 md:h-[50px] md:w-[70px] lg:mt-[320px] md:mt-[230px] md:ml-[620px] mt-[580px] rotate-180 ml-[265px] lg:ml-[760px] absolute"
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
              className={` rounded-[39px] h-[600px] lg:h-[350px] md:h-[250px] md:w-[650px] w-[290px] lg:w-[800px]`}
            >
              <div
                className={`flex flex-wrap ${backgroundClass} h-[600px] lg:h-[350px] md:h-[250px] py-8 rounded-[39px] space-x-4 relative justify-center items-start`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className={item.className}
                />
                <div className="absolute bg-custom-blue-gradient z-0 h-[150px] lg:h-[300px] md:h-[200px] md:w-[200px] lg:w-[200px] lg:right-[530px] md:right-[430px] blur-[35px] w-[150px] rounded-full" />
                <div className="px-6 mt-0 lg:mt-10 lg:py-0 rounded-[39px] space-y-4 flex flex-col md:items-start lg:items-start items-center">
                  <p className="text-center text-[15px] lg:mb-4 mt-8 md:mt-[0px] lg:mt-0 lg:w-[300px] w-[200px] md:text-sm md:w-[350px] lg:text-sm md:text-left lg:text-left">
                    {item.text}
                  </p>
                  <h1 className="lg:text-left text-center lg:mt-16 font-semibold mt-4">
                    {item.name}
                  </h1>
                  <h1 className="lg:text-left text-center text-sm lg:mt-4 mt-2">
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
