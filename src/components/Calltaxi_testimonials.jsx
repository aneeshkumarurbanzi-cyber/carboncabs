"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaStar, FaGoogle, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const callTaxiTestimonials = [
  {
    name: "Anjali Menon",
    rating: 5,
    feedback: "As a solo female traveler, safety is my priority. I've used Carbon Cabs multiple times for late-night returns from Technopark. The drivers are professional, and the live tracking link gives my family peace of mind."
  },
  {
    name: "Vinesh S.",
    rating: 5,
    feedback: "Needed a cab during heavy evening rain to reach East Fort. While other apps showed 'No Cars,' Carbon Cabs arrived in 10 minutes. The car was clean and the AC was perfect despite the humidity."
  },
  {
    name: "Prof. Raghavan",
    rating: 5,
    feedback: "Highly reliable for hospital visits. I book them for monthly checkups at KIMS. The drivers are patient, help me into the car, and never rush or drive rashly. A very dignified service."
  },
  {
    name: "Sneha Philip",
    rating: 4,
    feedback: "Best part is the fixed pricing. No 'peak hour' surprises like other apps. Used them for a full day of shopping at Lulu Mall and a few other stops. Much easier than driving my own car."
  },
  {
    name: "Rahul R.",
    rating: 5,
    feedback: "Quickest booking in Trivandrum. I usually just message them on WhatsApp and get confirmation instantly. The drivers know the shortcuts well, which is a lifesaver during traffic hours."
  },
  {
    name: "George Kutty",
    rating: 5,
    feedback: "Excellent fleet! We booked a sedan for a family function. The vehicle was brand new and the driver was dressed neatly. They maintain a premium standard that is rare locally."
  }
];

export default function CallTaxiTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? callTaxiTestimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === callTaxiTestimonials.length - 1 ? 0 : prevIndex + 1));
  };

  // Entrance Animation
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  // Slide Animation
  useEffect(() => {
    if (slideRefs.current[currentIndex]) {
      gsap.fromTo(
        slideRefs.current[currentIndex],
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  return (
    <section className="w-full bg-gradient-to-br from-[#1B1B1B] to-[#2D2D2D] py-24 px-4" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CAE942] mb-4">Trivandrum's Favorite City Taxi</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Reliable 24/7 rides for Technopark commutes, shopping trips, and emergency travel.</p>
        </div>

        <div className="relative overflow-hidden min-h-[450px] md:min-h-[350px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {callTaxiTestimonials.map((t, idx) => (
              <div key={idx} ref={el => (slideRefs.current[idx] = el)} className="min-w-full px-4">
                <div className="bg-[#232526] rounded-3xl p-8 md:p-12 border border-[#CAE942]/10 shadow-2xl relative flex flex-col md:flex-row items-center gap-8">
                  
                  {/* Initials Avatar */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#CAE942] flex items-center justify-center text-3xl md:text-4xl font-black text-[#1B1B1B] shadow-[0_0_20px_rgba(202,233,66,0.2)]">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start text-[#CAE942] gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`text-xl ${i < t.rating ? "text-yellow-400" : "text-gray-600"}`} />
                      ))}
                    </div>
                    <p className="text-gray-200 text-lg md:text-xl italic mb-6 leading-relaxed">
                      "{t.feedback}"
                    </p>
                    <h3 className="text-xl font-bold text-white tracking-wide">— {t.name}</h3>
                  </div>

                  <div className="absolute top-6 right-10 text-[#CAE942]/5 text-9xl font-serif hidden md:block select-none">”</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex flex-col items-center mt-12 gap-8">
          <div className="flex items-center gap-6">
            <button 
              onClick={handlePrev} 
              className="w-14 h-14 rounded-full border border-[#CAE942]/30 text-[#CAE942] flex items-center justify-center hover:bg-[#CAE942] hover:text-black transition-all shadow-lg active:scale-90"
            >
              <span className="text-2xl">←</span>
            </button>
            
            <div className="flex gap-2">
              {callTaxiTestimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-[#CAE942]' : 'w-2 bg-gray-600'}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext} 
              className="w-14 h-14 rounded-full border border-[#CAE942]/30 text-[#CAE942] flex items-center justify-center hover:bg-[#CAE942] hover:text-black transition-all shadow-lg active:scale-90"
            >
              <span className="text-2xl">→</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://share.google/8Yq0mm563etohdUvD" 
              target="_blank" 
              className="flex items-center gap-3 bg-white/5 text-white border border-white/10 py-4 px-8 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              <FaGoogle className="text-xl text-[#4285F4]" /> 
              <span>Verified Google Reviews</span>
            </a>

            <a 
              href="https://wa.me/+919895519435?text=Hi%20Carbon%20Cabs,%20I%20want%20to%20book%20a%20city%20taxi." 
              target="_blank" 
              className="flex items-center gap-3 bg-[#CAE942] text-black py-4 px-8 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(202,233,66,0.3)] transition-all active:scale-95"
            >
              <FaWhatsapp className="text-2xl" /> 
              <span>Book Your City Ride</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}