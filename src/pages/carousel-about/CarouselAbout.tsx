"use client";

import React from 'react';


function CarouselAbout() {
  const [current, setCurrent] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(""); 
  const [buttonState, setButtonState] = React.useState("visible");
  const [animationKey, setAnimationKey] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const items = [
    { name: 'Krenar Dervishaj', role: 'Co-Founder, FullStack Developer and UI/UX Designer', className:'rounded-full w-[150px] h-[150px] ml-[70px] mt-[-60px] sm:ml-2 sm:mt-4 sm:w-[300px] sm:h-[300px]', img: '/keniPFP.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?' },
    { name: 'Shefqet CJ Lame', role: 'Co-Founder and FullStack Developer', img: '/cjPFP.png', className:'rounded-full w-[150px] h-[150px] ml-[70px] mt-[-60px] sm:ml-8 sm:mt-8 sm:w-[250px] sm:h-[250px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'},
    { name: 'Luars Qamo', role: 'Co-Founder and FullStack Developer', img: '/archiePFP.png', className:'rounded-full w-[200px] h-[200px] ml-[45px] mt-[-65px] sm:ml-2 sm:mt-0 sm:w-[300px] sm:h-[300px]', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nulla nobis quisquam cum libero praesentium iste doloribus nam, molestias nemo dignissimos. Sed, repudiandae est mollitia repellat sapiente sint totam ea?'}
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
    <div className='mt-20 w-[290px] md:w-[400px] lg:w-[800px]'>
      <div key={animationKey} className={` sm:w-[800px] sm:mr-12 flex flex-wrap ${backgroundClass} relative lg:py-4 px-0 py-0 sm:right-[-125px] rounded-[39px] shadow-custom-blue ${getAnimationClass(current)}`}>
      <button onClick={goToPrevSlide} className={`button-fade z-10 ml-[-20px] mt-[195px] sm:mt-[150px] absolute w-10 h-10 bg-white shadow-custom-blue rounded-full ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} `}>Left</button>
      <button onClick={goToNextSlide} className={`button-fade z-10 right-[-20px] mt-[195px] sm:mt-[150px] absolute w-10 h-10 bg-white shadow-custom-blue rounded-full ${buttonState === "visible" || buttonState === "fading in" ? "opacity-1" : "opacity-0"} `}>Right</button>
        <img src={items[current].img} alt={items[current].name} className={items[current].className}/>
        <div className='px-6 mt-0 sm:mt-10 sm:py-0 py-4 flex flex-col sm:items-start items-center'>
          <p className='text-center sm:text-wraps text-[15px] sm:w-[300px] w-[200px] sm:text-sm sm:text-left'>{items[current].text}</p>
          <h1 className='sm:text-left text-center sm:mt-16 font-semibold mt-4'>{items[current].name}</h1>
          <h1 className='sm:text-left text-center text-sm sm:mt-4 mt-2 '>{items[current].role}</h1>
        </div>
      </div>
      <button />
      <button />
      <button />
    </div>
  )
}

export default CarouselAbout
