import React from 'react'
import strokeBody from '../assets/iPhone 14 Pro.png'
import iPhone from '../assets/iPhone.png'

const donationSection = () => {
  return (
    <section className="bg-[#f2f2f2] text-white p-2">
  <div className="flex flex-col md:flex-row items-center justify-between gap-12 boader bg-[#FF5349] rounded-2xl p-4 relative overflow-hidden pb-21">
    
    {/* Left Text Section */}
    <div className="flex-3 text-center md:text-left z-10 p-5">
      <h2 className="text-[3.5vw] leading-[4vw] font-bold font-avant-gard">
        Be the Reason <br />
        Someone Smiles Today!
      </h2>
      <p className="mt-6 text-lg max-w-xl mx-auto md:mx-0">
        Your generosity can change lives. Every donation brings hope, support, and a brighter future. 
        Give today and make a difference!
      </p>
      <button className="mt-6 bg-white text-[#FF5349] font-semibold px-6 py-3 rounded-xl">
        Donate Now
      </button>
    </div>

    {/* Right Phone Images */}
    <div className="flex-1 relative w-full flex justify-center items-center">
      {/* Small Phone (left) */}
      <img
        src={strokeBody}
        alt="Payment Methods Phone"
        className="w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] z-10 relative -left-63 top-30"
      />

      {/* Big Phone (right) */}
      <img
        src={iPhone}
        alt="Thank You Phone"
        className="w-[340px] sm:w-[370px] md:w-[400px] lg:w-[420px] absolute right-8 -top-2"
      />
    </div>
  </div>
</section>
  )
}

export default donationSection