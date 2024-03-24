"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


function CarouselAbout() {
  const [current, setCurrent] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(""); 
  const [buttonState, setButtonState] = React.useState("visible");
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const items = [
    { name: 'Krenar Dervishaj', role: 'Co-Founder, FullStack Developer and UI/UX Designer', className:'rounded-full w-[150px] h-[150px] ml-[0px] mt-[0px] sm:ml-[-10px] sm:mb-6 sm:w-[300px] sm:h-[300px]', img: '/keniPFP.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?' },
    { name: 'Shefqet CJ Lame', role: 'Co-Founder and FullStack Developer', img: '/cjPFP.png', className:'rounded-full w-[150px] h-[150px] ml-[0px] mt-[10px] sm:mr-8 sm:mt-4 sm:w-[250px] sm:h-[250px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'},
    { name: 'Luars Qamo', role: 'Co-Founder and FullStack Developer', img: '/archiePFP.png', className:'rounded-full w-[200px] h-[200px] ml-[0px] mt-[-10px] sm:mr-8 sm:mb-4 sm:w-[300px] sm:h-[300px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'}
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const backgroundClass = screenWidth < 640 ? 'split-bg-vertically' : 'bgForAbout'; // Assuming 640px as the breakpoint

  const triggerFadeEffect = () => {
    if (buttonState === "visible") {
      setButtonState("fading out");
      setTimeout(() => {
        setButtonState("invisible");
        setTimeout(() => {
          setButtonState("fading in");
          setTimeout(() => {
            setButtonState("visible");
          }, 500); // Match your fade-in duration
        }, 10); // Briefly wait in the "invisible" state before starting fade-in
      }, 500); // Match your fade-out duration
    }
  };

  const goToPrevSlide = () => {
    triggerFadeEffect();
    setSlideDirection("next");
    setCurrent(current => (current - 1 + items.length) % items.length);
  };

  const goToNextSlide = () => {
    triggerFadeEffect();
    setSlideDirection("prev");
    setCurrent(current => (current + 1) % items.length);
  };

  return (
    <div className='carousel-container mt-20 w-[290px] md:w-[400px] lg:w-[800px]'>
      <img src="/quotes.png" alt="quotes" className='sm:h-30 h-15 w-20 sm:w-40 sm:mt-[-70px] mt-[-30px] ml-[-50px] sm:ml-[-120px] absolute'/>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={`${backgroundClass} py-6 rounded-[39px]`}>
            <div className='flex flex-wrap  space-x-4 relative justify-center items-start'>
              <img src={item.img} alt={item.name} className={item.className}/>
              <div className='px-6 mt-0 sm:mt-10 sm:py-0 py-6 flex flex-col sm:items-start items-center'>
                <p className='text-center sm:text-wraps text-[15px] sm:w-[300px] w-[200px] sm:text-sm sm:text-left'>{item.text}</p>
                <h1 className='sm:text-left text-center sm:mt-16 font-semibold mt-4'>{item.name}</h1>
                <h1 className='sm:text-left text-center text-sm sm:mt-4 mt-2'>{item.role}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselAbout
