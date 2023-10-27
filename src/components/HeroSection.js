import React from 'react'
import { useState, useEffect } from 'react';

const HeroSection = () => {

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColorClass = scrolling ? 'text-xl lg:text-2xl text-center mt-4 text-secondary italic' : 'text-xl lg:text-2xl text-center mt-4 text-gray-500 italic'
  const transitionDuration = 0.7

  const textStyle = {
    transition: `color ${transitionDuration}s`,
  };

  return (
    <>
        <div className='h-screen flex items-center justify-center bg-primary'>
            <div>
                <h1 className='text-4xl md:text-6xl text-white font-bold tracking-wide text-center'>
                    Simple Digital Solutions <br />for Every Business Need
                </h1>
                {/* <h2 className='text-xl lg:text-2xl text-center mt-4 text-secondary italic'>
                    No tech jargon, just results
                </h2> */}
                <h2 className={textColorClass} style={textStyle}>
                    No tech jargon, just results
                </h2>
            </div>
        </div>
    </>
  )
}

export default HeroSection