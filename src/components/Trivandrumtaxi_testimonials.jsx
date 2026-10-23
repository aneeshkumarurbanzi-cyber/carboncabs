"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaStar, FaGoogle, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trivandrumReviews = [
  {
    name: "Anjali Menon",
    rating: 5,
    feedback: "The Toyota Etios arrived 10 minutes early for my 4 AM airport drop from Peroorkada. Spotless car and the driver was very professional. It's hard to find such reliable taxi service in Trivandrum at that hour."
  },
  {
    name: "Ravi Sreekumar",
    rating: 5,
    feedback: "Booked a Force Urbania for a family wedding trip from East Fort to Nagercoil. Huge luggage space and the AC was excellent for the whole group. Carbon Cabs made our family travel completely stress-free."
  },
  {
    name: "Priya Suresh",
    rating: 5,
    feedback: "Used them for a 3-day Trivandrum to Munnar trip. Our driver handled the hairpin turns expertly and knew all the best local sightseeing spots. Transparent per-km pricing with no hidden surprises at the end."
  },
  {
    name: "Sreejith RS",
    rating: 5,
    feedback: "My go-to for Technopark to Airport commutes. They actually track my flight status and are always at the gate before I even land. Hands down the best corporate taxi experience I've had in Kerala."
  },
  {
    name: "Lakshmi Raj",
    rating: 5,
    feedback: "Saju Chettan was polite and great with our kids during a long city tour of Padmanabhaswamy Temple and Museum. Even with heavy Trivandrum traffic, he remained patient and kept us informed."
  },
  {
    name: "Sandeep Pillai",
    rating: 5,
    feedback: "Reliable service with courteous drivers. Finished a Kanyakumari day-trip recently; the vehicle was well-maintained and the fixed rate guarantee for 2026 is what makes them better than other local cabs."
  }
];

export default function TrivandrumTaxi_testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? trivandrumReviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === trivandrumReviews.length - 1 ? 0 : prevIndex + 1));
  };

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

  useEffect(() => {
    if (slideRefs.current[currentIndex]) {
      gsap.fromTo(
        slideRefs.current[currentIndex],
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [currentIndex]);

  return (
    <section className="w-full bg-gradient-to-br from-[#1B1B1B] to-[#2D2D2D] py-24 px-4" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-h2 text-[#CAE942] mb-4">What Our Trivandrum Clients Say</h2>
          <p className="text-gray-300 paragraph-p">Join thousands of satisfied locals and tourists who trust Carbon Cabs for every journey.</p>
        </div>

        <div className="relative overflow-hidden min-h-[420px] md:min-h-[320px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {trivandrumReviews.map((t, idx) => (
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

        <div className="flex flex-col items-center mt-12 gap-8">
          <div className="flex items-center gap-6">
            <button onClick={handlePrev} className="w-14 h-14 rounded-full border border-[#CAE942]/30 text-[#CAE942] flex items-center justify-center hover:bg-[#CAE942] hover:text-black transition-all shadow-lg active:scale-90">
              <span className="text-2xl">←</span>
            </button>
            
            <div className="flex gap-2">
              {trivandrumReviews.map((_, idx) => (
                <div key={idx} className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-[#CAE942]' : 'w-2 bg-gray-600'}`} />
              ))}
            </div>

            <button onClick={handleNext} className="w-14 h-14 rounded-full border border-[#CAE942]/30 text-[#CAE942] flex items-center justify-center hover:bg-[#CAE942] hover:text-black transition-all shadow-lg active:scale-90">
              <span className="text-2xl">→</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://share.google/54I5l2Euy23t6PLyQ" 
              target="_blank" 
              className="flex items-center gap-3 bg-white/5 text-white border border-white/10 py-4 px-8 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              <FaGoogle className="text-xl text-[#4285F4]" /> 
              <span>Verified Google Reviews</span>
            </a>

            <a 
              href="https://wa.me/+919895519435?text=Hi%20Carbon%20Cabs,%20I%20am%20looking%20for%20a%20Trivandrum%20taxi." 
              target="_blank" 
              className="flex items-center gap-3 bg-[#CAE942] text-black py-4 px-8 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(202,233,66,0.3)] transition-all active:scale-95"
            >
              <FaWhatsapp className="text-2xl" /> 
              <span>Book Your Trivandrum Ride</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}