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
    <div className='sm:h-[400px] sm:w-[800px] h-[200px] w-[400px] sm:flex flex flex-col sm:flex-row rounded-[39px]'>
      <button onClick={goToPrevSlide} className={`w-10 h-10 button-fade ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} rounded-full bg-white sm:mt-[180px] absolute shadow-custom-blue mt-[370px] ml-[-20px] sm:ml-0 sm:left-[635px] z-10`}>Left</button>
      <div key={animationKey} className={`sm:h-[400px] sm:w-[800px] h-[800px] w-[330px] ${getAnimationClass(current)} sm:flex flex flex-col sm:flex-row rounded-[39px] md:split-bg-horizontally split-bg-vertically shadow-custom-blue`}>
                    <img src={items[current].img} alt={items[current].name} className={items[current].className}/>
                    <div className='flex flex-col'>
                        <p className='text-left px-10 sm:py-14 py-12 w-[300px] text-[#131B23]'>{items[current].text}</p>
                        <h1 className='text-left px-10 w-[300px] text-[#131B23]'>{items[current].name}</h1>
                        <h1 className='text-left text-sm px-10 mb-4 text-[#131B23]'>{items[current].role}</h1>
                    </div>
                </div>
      <button onClick={goToNextSlide} className={`w-10 h-10 button-fade rounded-full button-fade ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} bg-white shadow-custom-blue absolute sm:right-[60px] right-[10px] mt-[370px] sm:mt-[180px] z-10`}>Right</button>
    </div>
  )
}

export default CarouselAbout
