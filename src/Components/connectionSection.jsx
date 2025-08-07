import React from 'react';
import group from '../assets/Group 3.png';

function Feature({ title, desc }) {
  return (
    <div className="border-2 border-white p-4 shadow-xl rounded-xl bg-[#f2f2f2] text-black text-left transition-transform duration-300 hover:scale-105">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const connectionSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#f2f2f2] px-4 py-10 gap-6">
      
      {/* Image Section */}
      <div className="flex justify-center animate-fadeIn">
        <img
          src={group}
          alt="image"
          className="w-full max-w-md transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text + Features Section */}
      <div className="text-black px-2 md:px-6 mb-2 animate-fadeIn delay-100">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
          Where Every Click Sparks a Connection!
        </h2>
        <p className="max-w-2xl mx-auto md:mx-0 mb-10 text-center md:text-left">
          A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life.
        </p>

        <div className="flex flex-col text-center gap-3">
          <Feature title="🎥 Short Videos & Reels" desc="Share engaging, bite-sized content that keeps everyone entertained." />
          <Feature title="🔔 Smart Notifications" desc="Stay updated on what matters without the noise." />
          <Feature title="👥 Interest-Based Communities" desc="Join groups and discussions that match your passion." />
        </div>
      </div>
    </section>
  );
};

export default connectionSection;
