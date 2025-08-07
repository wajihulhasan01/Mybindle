import React from 'react'

   function Feature({ title, desc }) {
  return (
    <div className="border-2 border-white p-4 shadow-xl rounded-xl bg-[#f2f2f2] text-black">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const featuresSection = () => {

  return (
      <section className="bg-[#f2f2f2] text-black py-16 px-6">
        <h2 className="text-4xl font-bold text-center">Features That Keep You Hooked!</h2>
        <h1 className="text-md font-bold text-center mb-10"> Meet, Chat, Share – Anytime, Anywhere!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Feature title="🔥 Seamless Connections" desc="Stay in touch with friends, family, and like-minded people with just a tap." />
          <Feature title="📸 Share Your Story" desc="Upload photos, videos, and updates to let the world know what’s happening." />
          <Feature title="💬 Real-Time Chat" desc="Smooth, lightning-fast messaging experience." />
          <Feature title="🔒 Privacy First" desc="Your data, your control. We prioritize privacy with world-class security." />
          <Feature title="🌎 Discover & Explore" desc="Find trending content, join communities, and explore pages that match your interests." />
          <Feature title="💼 Grow Your Business" desc="Use our platform to market your brand, connect with customers, and build relationships." />
        </div>
      </section>
  )
}

export default featuresSection