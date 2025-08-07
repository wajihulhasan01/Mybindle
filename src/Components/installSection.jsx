import React from 'react'

function Step({ number, title, desc }) {
  return (
    <div>
      <div className="text-5xl font-bold text-[#FF5349] mb-5">{number}</div>
      <div className='border-2 border-white rounded-2xl p-6'>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1 font-bold">{desc}</p>
    </div>
    </div>
  );
}

const installSection = () => {
  return (
    <div>
      <section className="bg-[#f2f2f2] text-black py-16 px-6 text-center">
        <h2 className="text-[3.92vw] leading-[4.25vw] font-semibold tracking-[-0.196vw] text-center font-avant-gard">How to Install Our App</h2>
        <p className='text-[1.063vw] leading-[1.661vw] font-semibold text-center font-avant-gard'>Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <Step number="01" title="Download" desc="Open Play Store or App Store" />
          <Step number="02" title="Install App" desc="The app will install automatically." />
          <Step number="03" title="Ready to Use" desc="Sign up or log in to start exploring!" />
        </div>
      </section>

    </div>
  )
}

export default installSection