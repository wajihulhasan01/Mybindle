import React from 'react'
import grp4 from '../assets/Group4.png'
import grp5 from '../assets/Group 5.png'
import playStore from '../assets/Play Store.png'
import AppStore from '../assets/App Store.png'


const footerSection = () => {
  return (
    <section className="bg-[#f2f2f2] text-white p-3 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 boader bg-[#FF5349] rounded-t-4xl p-6 relative mr-5 pb-11">
        
        {/* Left Text Section */}
        <div className="flex-3 text-center md:text-left z-10">
          <h2 className="text-[3.5vw] leading-[4vw] font-bold font-avant-gard">
            Join the Fun – Download <br/> MyBindle Now!
          </h2>
          <p className="my-6 text-lg max-w-xl mx-auto md:mx-0">
            Your Social Network, Your Way
            Download MyBindle Now and Be a Part of a Community That’s Always Evolving!</p>
            <img src={AppStore} alt="apstore" className='w-[20%] inline mx-2'/>
            <img src={playStore} alt="playstore" 
            className='w-[20%] inline mx-2'/>
        </div>
    
        {/* Right Phone Images */}
        <div className="flex-1 relative w-full flex justify-center items-center">
          {/* Small Phone (left) */}
          <img
            src={grp4}
            alt="Payment Methods Phone"
            className="w-[320px] sm:w-[350px] md:w-[380px] lg:w-[400px] z-10 relative -left-53 top-25"
          />
    
          {/* Big Phone (right) */}
          <img
            src={grp5}
            alt="Thank You Phone"
            className="w-[340px] sm:w-[370px] md:w-[400px] lg:w-[420px] absolute -right-13 -top-10"
          />
        </div>
      </div>
    </section>
  )
}

export default footerSection