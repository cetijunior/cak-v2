"use client";

import React from 'react'
import Image from 'next/image';


function CarouselAbout() {
  const [current, setCurrent] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(""); 
  const [buttonVisible, setButtonVisible] = React.useState(true);
  const items = [
    { name: 'Krenar Dervishaj', role: 'Co-Founder, FullStack Developer and UI/UX Designer', className:'rounded-full ml-2 mt-14 w-[300px] h-[300px]', img: '/keniPFP.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?' },
    { name: 'Shefqet CJ Lame', role: 'Co-Founder and FullStack Developer', img: '/cjPFP.png', className:'mt-16 rounded-full ml-4 w-[300px] h-[300px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'},
    { name: 'Luars Qamo', role: 'Co-Founder and FullStack Developer', img: '/archiePFP.png', className:'rounded-3xl mt-[-10px] rounded-full ml-[-44px] w-[400px] h-[400px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'}
  ];

  const fadeButtons = () => {
    setButtonVisible(false); // Start by hiding the buttons (fade out)
    setTimeout(() => {
      setButtonVisible(true); // Fade the buttons back in
    }, 300); // Adjust the timing based on your fade effect duration
  };

  const goToPrevSlide = () => {
    fadeButtons(); // Fade the buttons out
      setSlideDirection("");
    setTimeout(() => {
      setSlideDirection("slide-right");
      setCurrent((current) => (current === items.length - 1 ? 0 : current + 1));
    }, 10);
  };

  const goToNextSlide = () => {
    fadeButtons(); // Fade the buttons out
    setSlideDirection("");
    setTimeout(() => {
      setSlideDirection("slide-left");
      setCurrent((current) => (current === items.length - 1 ? 0 : current + 1));
    }, 10); 
    
    const isLastItem = current === items.length - 1;
    const newIndex = isLastItem ? 0 : current + 1;
    setCurrent(newIndex);
  };
  
  return (
    <div className='h-[400px] w-[800px] flex flex-row rounded-[39px]'>
      <button onClick={goToPrevSlide} className={`w-10 h-10 ${buttonVisible ? 'button-visible' : 'button-hidden'} rounded-full bg-white mt-[180px] absolute shadow-custom-blue left-[635px] z-10`}>Left</button>
      <div className={`bg-[#] h-[400px] w-[800px] ${slideDirection} flex flex-row rounded-[39px] split-bg shadow-custom-blue`}>
                    <img src={items[current].img} alt={items[current].name} className={items[current].className}/>
                    <div className='flex flex-col'>
                        <p className='text-left px-10 py-14 w-[300px] text-[#131B23]'>{items[current].text}</p>
                        <h1 className='text-left px-10 w-[300px] text-[#131B23]'>{items[current].name}</h1>
                        <h1 className='text-left text-sm px-10 text-[#131B23]'>{items[current].role}</h1>
                    </div>
                </div>
      <button onClick={goToNextSlide} className={`w-10 h-10 ${buttonVisible ? 'button-visible' : 'button-hidden'} rounded-full bg-white shadow-custom-blue absolute right-[45px] mt-[180px] z-10`}>Right</button>
    </div>
  )
}

export default CarouselAbout
