"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function CarouselAbout() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const items = [
    {
      name: "Krenar Dervishaj",
      role: "Co-Founder, FullStack Developer and UI/UX Designer",
      className:
        "rounded-full w-[150px] h-[150px] ml-[0px] mt-[0px] sm:ml-[-30px] sm:mb-[45px] sm:w-[300px] sm:h-[300px]",
      img: "/keniPFP.png",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?",
    },
    {
      name: "Shefqet CJ Lame",
      role: "Co-Founder and FullStack Developer",
      img: "/cjPFP.png",
      className:
        "rounded-full w-[150px] h-[150px] ml-[0px] mt-[10px] sm:ml-[-85px] sm:mt-[50px] sm:mb-[20px] sm:w-[275px] sm:h-[275px]",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?",
    },
    {
      name: "Luars Qamo",
      role: "Co-Founder and FullStack Developer",
      img: "/archiePFP.png",
      className:
        "rounded-full w-[200px] h-[200px] ml-[0px] mt-[-10px] sm:ml-[-85px] sm:mt-[15px] sm:mb-[30px] sm:mr-8 sm:w-[300px] sm:h-[300px]",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?",
    },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundClass =
    screenWidth < 640 ? "split-bg-vertically" : "bgForAbout"; // Assuming 640px as the breakpoint

  return (
    <div
      className={`carousel-container ${backgroundClass} shadow-custom-blue rounded-[39px] mt-20 w-[250px] sm:w-[800px]`}
    >
      <img
        src="/quotes.png"
        alt="quotes"
        className="sm:h-30 h-15 w-20 sm:w-40 sm:mt-[-70px] mt-[-30px] ml-[-50px] sm:ml-[-120px] absolute"
      />
      <img
        src="/quotes.png"
        alt="quotes"
        className="sm:h-30 h-15 w-20 sm:w-40 sm:mt-[300px] mt-[500px] rotate-180 ml-[270px] sm:ml-[760px] absolute"
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
            <div className={` rounded-[39px] w-[250px] sm:w-[800px]`}>
              <div
                className={`flex flex-wrap ${backgroundClass} py-4 rounded-[39px] space-x-4 relative justify-center items-start`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className={item.className}
                />
                <div className="px-6 mt-0 sm:mt-10  sm:py-0 rounded-[39px] py-6 space-y-4 flex flex-col sm:items-start items-center">
                  <p className="text-wrap text-[15px] sm:w-[300px] w-[200px] sm:text-sm sm:text-left">
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
