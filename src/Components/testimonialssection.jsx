import { useState } from "react";

const testimonialsData = [
  { name: "Emily R", country: "USA", message: "This platform changed the way I stay in touch with my friends and family. I love how easy it is to share my moments!" },
  { name: "Amit K", country: "India", message: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online" },
  { name: "Sophie M", country: "UK", message: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand" },
  { name: "Javier L", country: "Spain", message: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!" },
  { name: "Lucas T", country: "Brazil", message: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!" },
  { name: "Nora S", country: "Canada", message: "I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense" },
  { name: "abc", country: "def", message: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment here feels special" },
  { name: "ghi", country: "jkl", message: "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. I’m hooked!" },
];

const Testimonial = ({ name, country, message }) => (
  <div className="bg-[#f2f2f2] rounded-lg p-4 shadow">
    <div className="flex flex-col mb-4">
      <p className="m-1">⭐⭐⭐⭐⭐</p>
      <p className="text-sm text-gray-700 m-1">{message}</p>
      <div className="m-1 flex">
      <img
        src={`https://i.pravatar.cc/50?u=${name}`} // Dummy profile image
        alt={name}
        className=" w-10 h-10 rounded-full mr-3"
      />
      <div className="flex flex-col">
        <p className=" text-sm font-semibold">{name}</p>
        <p className="text-gray-500 text-xs">{country}</p>
      </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonialsData : testimonialsData.slice(0, 6);

  return (
    <section className="bg-[#f2f2f2] text-black py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial, idx) => (
          <Testimonial
            key={idx}
            name={testimonial.name}
            country={testimonial.country}
            message={testimonial.message}
          />
        ))}
      </div>

      {/* See More / See Less Button */}
      {testimonialsData.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#f2f2f2] text-[#FF5349] font-semibold px-6 py-2 rounded-2xl drop-shadow-lg border-2 border-white"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
