"use client";

import React from 'react'
import Image from 'next/image';


function CarouselAbout() {
  const [current, setCurrent] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(""); 
  const [buttonState, setButtonState] = React.useState("visible");
  const [animationKey, setAnimationKey] = React.useState(0);
  const items = [
    { name: 'Krenar Dervishaj', role: 'Co-Founder, FullStack Developer and UI/UX Designer', className:'rounded-full ml-2 mt-14 w-[300px] h-[300px]', img: '/keniPFP.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?' },
    { name: 'Shefqet CJ Lame', role: 'Co-Founder and FullStack Developer', img: '/cjPFP.png', className:'mt-16 rounded-full ml-4 w-[300px] h-[300px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'},
    { name: 'Luars Qamo', role: 'Co-Founder and FullStack Developer', img: '/archiePFP.png', className:'rounded-3xl mt-[-10px] rounded-full ml-[-44px] w-[400px] h-[400px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'}
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
    <div>
      <button onClick={goToPrevSlide} className={`button-fade z-10 sm:left-[495px] left-3 mt-[325px] sm:mt-[170px] absolute w-10 h-10 bg-white shadow-custom-blue rounded-full ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} `}>Left</button>
      <button onClick={goToNextSlide} className={` button-fade  z-10 sm:right-20 right-3 mt-[325px] sm:mt-[170px] absolute w-10 h-10 bg-white shadow-custom-blue rounded-full ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} `}>Right</button>
      <div key={animationKey} className={`sm:flex sm:flex-row flex flex-col sm:gap-10 gap-10 split-bg-vertically sm:bgForAbout rounded-[39px] shadow-custom-blue ${getAnimationClass(current)}`}>
                    <img src={items[current].img} alt={items[current].name} className={items[current].className}/>
                    <div className='px-4 mb-6'>
                        <p className='text-center sm:text-left'>{items[current].text}</p>
                        <h1 className='sm:text-left text-center font-semibold mt-4'>{items[current].name}</h1>
                        <h1 className='sm:text-left text-center text-sm'>{items[current].role}</h1>
                    </div>
                </div>
      
    </div>
  )
}

export default CarouselAbout
