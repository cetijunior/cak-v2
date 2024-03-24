"use client";

import React from 'react';


function CarouselAbout() {
  const [current, setCurrent] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(""); 
  const [buttonState, setButtonState] = React.useState("visible");
  const [animationKey, setAnimationKey] = React.useState(0);
  const items = [
    { name: 'Krenar Dervishaj', role: 'Co-Founder, FullStack Developer and UI/UX Designer', className:'rounded-full w-[150px] h-[150px] ml-[70px] mt-[-60px] sm:ml-2 sm:mt-4 sm:w-[300px] sm:h-[300px]', img: '/keniPFP.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?' },
    { name: 'Shefqet CJ Lame', role: 'Co-Founder and FullStack Developer', img: '/cjPFP.png', className:'rounded-full w-[150px] h-[150px] ml-[70px] mt-[-60px] sm:ml-8 sm:mt-12 sm:w-[250px] sm:h-[250px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'},
    { name: 'Luars Qamo', role: 'Co-Founder and FullStack Developer', img: '/archiePFP.png', className:'rounded-full w-[200px] h-[200px] ml-[45px] mt-[-65px] sm:ml-2 sm:mt-8 sm:w-[300px] sm:h-[300px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'}
  ];

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
    setSlideDirection("prev");
    setCurrent(current => (current - 1 + items.length) % items.length);
    setAnimationKey(prevKey => prevKey + 1); // Update the animation key
  };

  const goToNextSlide = () => {
    triggerFadeEffect();
    setSlideDirection("next");
    setCurrent(current => (current + 1) % items.length);
    setAnimationKey(prevKey => prevKey + 1); // Update the animation key
  };

  const getAnimationClass = (index: any) => {
    if (slideDirection === "next") {
      if (index === current) {
        return "slide-in-from-right";
      } else if (index === (current - 1 + items.length) % items.length) {
        return "slide-out-to-left";
      }
    } else if (slideDirection === "prev") {
      if (index === current) {
        return "slide-in-from-left";
      } else if (index === (current + 1) % items.length) {
        return "slide-out-to-right";
      }
    }
    return "";
  };

  
  return (
    <div className='mt-20 w-[290px] sm:w-[800px]'>
      <button onClick={goToPrevSlide} className={`button-fade z-10 sm:left-[615px] left-8 mt-[220px] sm:mt-[160px] absolute w-10 h-10 bg-white shadow-custom-blue rounded-full ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} `}>Left</button>
      <button onClick={goToNextSlide} className={` button-fade z-10 sm:right-20 right-8 mt-[220px] sm:mt-[160px] absolute w-10 h-10 bg-white shadow-custom-blue rounded-full ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} `}>Right</button>
      <div key={animationKey} className={`sm:flex sm:flex-row flex flex-col sm:gap-10 gap-10 split-bg-vertically sm:bgForAbout relative sm:right-[-125px] rounded-[39px] shadow-custom-blue ${getAnimationClass(current)}`}>
                    <img src={items[current].img} alt={items[current].name} className={items[current].className}/>
                    <div className='px-4 mt-0 sm:mt-12 py-6 flex flex-col sm:items-start items-center'>
                        <p className='text-center text-[15px] sm:w-[300px] w-[200px] sm:text-sm sm:text-left'>{items[current].text}</p>
                        <h1 className='sm:text-left text-center sm:mt-16 font-semibold mt-4'>{items[current].name}</h1>
                        <h1 className='sm:text-left text-center text-sm sm:mt-4 mt-2 '>{items[current].role}</h1>
                    </div>
                </div>
      
    </div>
  )
}

export default CarouselAbout
