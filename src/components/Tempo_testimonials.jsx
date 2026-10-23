"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaStar, FaGoogle, FaBusAlt, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const groupReviews = [
  {
    name: "Dr. Thomas Jacob",
    rating: 5,
    feedback: "We booked two 26-seater Tempo Travellers for a family wedding at Al Saj Convention Center. The vehicles arrived 20 mins early, spotless, and the AC was powerful enough for the Trivandrum heat. Perfect coordination for our 50+ guests."
  },
  {
    name: "Meenakshi R.",
    rating: 5,
    feedback: "The Force Urbania is a game changer! We took the 12-seater for a premium family trip to Munnar. Exceptional legroom, USB ports at every seat, and a very smooth suspension. Highly recommend Carbon Cabs for luxury group travel."
  },
  {
    name: "Suresh Gopinath",
    rating: 5,
    feedback: "Organized a corporate team outing from Technopark to Ponmudi in their 49-seater AC bus. The driver was an expert on those hairpin turns. Proper GPS tracking and high-quality audio system made the journey fun and safe."
  },
  {
    name: "Capt. Nirmal Singh",
    rating: 5,
    feedback: "Booked a 17-seater for a Sabarimala pilgrimage with my group. The driver was extremely patient, knew all the rest stops, and drove very safely through the night. Very transparent pricing compared to other local operators."
  },
  {
    name: "Sarah & David",
    rating: 5,
    feedback: "As international tourists, we were worried about group logistics for our Kerala tour. Carbon Cabs provided a 12-seater Urbania that was better than European standards. Professional, punctual, and very knowledgeable driver."
  },
  {
    name: "Rahul Vishwanath",
    rating: 5,
    feedback: "Best 26-seater Urbania rental in Trivandrum. We used it for a college reunion trip to Kanyakumari. The boot space for luggage was huge and the reclining seats made the 3-hour journey feel like 10 minutes."
  }
];

export default function GroupTravel_testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? groupReviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === groupReviews.length - 1 ? 0 : prevIndex + 1));
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
    <section className="w-full bg-gradient-to-br from-[#1B1B1B] to-[#2D2D2D] py-24 px-4 border-t border-gray-800" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-h2 text-[#CAE942] mb-4">Group Travel Success Stories</h2>
          <p className="text-gray-300 paragraph-p">From luxury family tours to large-scale wedding logistics, see why groups trust our 2026 fleet.</p>
        </div>

        <div className="relative overflow-hidden min-h-[420px] md:min-h-[320px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groupReviews.map((t, idx) => (
              <div key={idx} ref={el => (slideRefs.current[idx] = el)} className="min-w-full px-4">
                <div className="bg-[#232526] rounded-3xl p-8 md:p-12 border border-[#CAE942]/10 shadow-2xl relative flex flex-col md:flex-row items-center gap-8">
                  
                  {/* Avatar with Group Icon Overlay */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#CAE942] flex items-center justify-center text-3xl md:text-4xl font-black text-[#1B1B1B] shadow-[0_0_20px_rgba(202,233,66,0.2)]">
                        {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full text-[#1B1B1B] text-xl shadow-lg border-2 border-[#1B1B1B]">
                        <FaBusAlt />
                    </div>
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

        {/* Custom Pagination & GMB Button */}
        <div className="flex flex-col items-center mt-12 gap-8">
          <div className="flex items-center gap-6">
            <button onClick={handlePrev} className="w-14 h-14 rounded-full border border-[#CAE942]/30 text-[#CAE942] flex items-center justify-center hover:bg-[#CAE942] hover:text-black transition-all shadow-lg active:scale-90">
              <span className="text-2xl">←</span>
            </button>
            
            <div className="flex gap-2">
              {groupReviews.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-[#CAE942]' : 'w-2 bg-gray-600'}`} 
                />
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
              href="https://wa.me/+919895519435?text=Hi%20Carbon%20Cabs,%20I%20want%20to%20book%20a%20group%20travel." 
              target="_blank" 
              className="flex items-center gap-3 bg-[#CAE942] text-black py-4 px-8 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(202,233,66,0.3)] transition-all active:scale-95"
            >
              <FaWhatsapp className="text-2xl" /> 
              <span>Book Your Group Travel</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}