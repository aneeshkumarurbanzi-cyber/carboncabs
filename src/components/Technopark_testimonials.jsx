"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaStar, FaGoogle, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technoparkTestimonials = [
  {
    name: "Arjun Das",
    role: "Senior Lead, TCS",
    rating: 5,
    feedback: "The best monthly cab service for Technopark. I've been using Carbon Cabs for my daily commute to Phase 1 for six months. They are always on time, the cars are clean, and the automated GST invoicing makes my reimbursement process effortless."
  },
  {
    name: "Sruthi Nair",
    role: "Software Engineer, Infosys",
    rating: 5,
    feedback: "Being a developer at Phase 2 (Ganga/Yamuna), I often have late-night project releases. Carbon Cabs is my go-to for safe night rides. The GPS tracking link and the professional behavior of the drivers give me a lot of confidence."
  },
  {
    name: "Kevin Mathews",
    role: "Project Manager, UST",
    rating: 5,
    feedback: "Highly reliable for airport drops. I travel frequently for client meetings, and I never have to worry about 4 AM pickups. They track my return flights and are always waiting at the arrival gate. Exceptional corporate service."
  },
  {
    name: "Meera R.",
    role: "HR Manager",
    rating: 5,
    feedback: "We recently booked an Urbania for a team outing from Phase 3. The vehicle was premium, and the driver knew the best routes to avoid Kazhakkoottam traffic. It was a seamless experience for our entire group of 20."
  },
  {
    name: "Rahul Krishnan",
    role: "Consultant, Oracle",
    rating: 5,
    feedback: "I appreciate the transparency in pricing. No peak-hour surge even during heavy rains. Their fixed-rate model for Technopark to Lulu Mall or the Railway Station is much better than any other app-based service in Trivandrum."
  },
  {
    name: "Deepa S.",
    role: "Team Lead, Allianz",
    rating: 4,
    feedback: "Prompt response for inter-phase transfers. Sometimes I need to move between Phase 1 and Phase 3 for meetings; Carbon Cabs usually arrives within 10 minutes. Very professional and dependable for IT staff."
  }
];

export default function TechnoparkTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? technoparkTestimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === technoparkTestimonials.length - 1 ? 0 : prevIndex + 1));
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
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  return (
    <section className="w-full bg-[#1B1B1B] py-24 px-4 border-t border-[#CAE942]/5" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#CAE942] mb-4">Trusted by 5000+ IT Professionals</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">See why employees at UST, Infosys, and TCS prefer Carbon Cabs for their daily commute.</p>
        </div>

        <div className="relative overflow-hidden min-h-[480px] md:min-h-[380px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {technoparkTestimonials.map((t, idx) => (
              <div key={idx} ref={el => (slideRefs.current[idx] = el)} className="min-w-full px-4">
                <div className="bg-[#232526] rounded-[2rem] p-8 md:p-12 border border-[#CAE942]/10 shadow-2xl relative flex flex-col md:flex-row items-center gap-8">
                  
                  {/* Avatar with Tech-style shadow */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-[#CAE942] flex items-center justify-center text-3xl md:text-4xl font-black text-[#1B1B1B] shadow-[10px_10px_0px_rgba(202,233,66,0.1)]">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start text-[#CAE942] gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`text-xl ${i < t.rating ? "text-yellow-400" : "text-gray-600"}`} />
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">{t.role}</p>
                    <p className="text-gray-200 text-lg md:text-xl italic mb-6 leading-relaxed">
                      "{t.feedback}"
                    </p>
                    <h3 className="text-xl font-bold text-white tracking-wide">— {t.name}</h3>
                  </div>

                  <div className="absolute bottom-6 right-10 text-[#CAE942]/5 text-9xl font-serif hidden md:block select-none">”</div>
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
              {technoparkTestimonials.map((_, idx) => (
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
              href="https://wa.me/+919895519435?text=Hi%20Carbon%20Cabs,%20I%20am%20from%20Technopark%20and%20want%20to%20book%20a%20ride." 
              target="_blank" 
              className="flex items-center gap-3 bg-[#CAE942] text-black py-4 px-8 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(202,233,66,0.3)] transition-all active:scale-95"
            >
              <FaWhatsapp className="text-2xl" /> 
              <span>Book Your Technopark Ride</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}