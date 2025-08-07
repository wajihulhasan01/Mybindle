import React from 'react';
import logo from '../assets/Group.png';
import Appview from '../assets/Group 1.png';

const HeroSection = () => {
  return (
    <section className="pt-[2rem] px-[1.5rem] md:px-[3rem]">
      {/* Top Logo */}
      <div className="flex justify-center items-center mb-6 animate-fadeIn">
        <img src={logo} alt="logo" className="w-[10%] sm:w-[5%] mr-2 transition-transform duration-300 hover:scale-110" />
        <h1 className="text-2xl font-bold">Mybindle</h1>
      </div>

      {/* Flex layout: text left, image right (on wide); stacked on small */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 animate-fadeIn">
        {/* Text Column */}
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="font-avant font-semibold text-4xl sm:text-[50px] md:text-[60px] leading-tight md:leading-[75px] tracking-tight transition-opacity duration-700 ease-in-out">
            Stay Connected<br />Stay Social<br />Stay You!
          </h1>
          <p className="font-avant font-semibold text-sm md:text-base leading-6 md:leading-[36px] mt-4">
            A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
          </p>
          <button className="mt-6 bg-white text-[#FF5349] font-semibold px-6 py-2 rounded-md transition duration-300 hover:scale-105 hover:bg-gray-100">
            Get Started
          </button>
        </div>

        {/* Image Column */}
        <div className="flex-1 w-full relative flex justify-center items-center mt-10 md:mt-0">
          {/* Floating Top Badge */}
          <div className="absolute top-0 left-0 sm:left-4 bg-white text-black text-xs sm:text-sm font-bold rounded-xl px-3 py-2 shadow-md z-10 animate-bounce">
            🔥 Seamless Connections
          </div>

          {/* Image */}
          <img
            src={Appview}
            alt="App Preview"
            className="w-64 sm:w-72 md:w-80 rounded-xl z-0 transition-transform duration-500 hover:scale-105"
          />

          {/* Floating Bottom Badge */}
          <div className="absolute bottom-0 right-0 sm:right-4 bg-white text-black text-xs sm:text-sm font-bold rounded-xl px-3 py-2 shadow-md z-10 animate-bounce delay-300">
            🌎 Discover & Explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
