'use client';
import React, { useRef, useEffect } from 'react';
import { FaTrain, FaBus, FaLaptopCode, FaStore, FaClock } from 'react-icons/fa';
import { MdGpsFixed } from 'react-icons/md';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallTaxi_hubs() {
  const hubs = [
    { 
      name: "Trivandrum Central (Thampanoor)", 
      detail: "Railway Station North & South Exits", 
      icon: <FaTrain /> 
    },
    { 
      name: "East Fort Bus Terminal", 
      detail: "City Center & Temple Area standby", 
      icon: <FaBus /> 
    },
    { 
      name: "Kazhakkoottam Tech Junction", 
      detail: "Punctual pickups for Technopark employees", 
      icon: <FaLaptopCode /> 
    },
    { 
      name: "Lal Bazaar & Pattoor", 
      detail: "Rapid response for busy commercial zones", 
      icon: <FaStore /> 
    }
  ];

  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="container-padding py-20 bg-[#1B1B1B]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-[#CAE942] mb-4 uppercase tracking-widest font-bold text-sm">
            <MdGpsFixed className="animate-pulse text-xl" /> 
            Real-Time Driver Standby
          </div>
          <h2 className="heading-h2 text-[#CAE942]" ref={headingRef}>
            Fast 15-Minute Pickup Across Trivandrum
          </h2>
          <p className="text-gray-300 paragraph-p mt-4 max-w-3xl mx-auto">
            Our drivers are strategically stationed at major transit hubs and business districts 
            to ensure you never have to wait. From emergency late-night rides to 
            scheduled office drops, we are always nearby.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, index) => (
            <div 
              key={index} 
              ref={el => (cardsRef.current[index] = el)}
              className="bg-[#232526] p-8 rounded-2xl border border-gray-800 hover:border-[#CAE942] transition-all group flex flex-col items-center text-center shadow-2xl"
            >
              <div className="text-4xl text-[#CAE942] mb-5 group-hover:scale-110 transition-transform">
                {hub.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {hub.name}
              </h3>
              <p className="text-gray-400 text-sm italic">
                {hub.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#232526] to-[#2D2D2D] p-1 rounded-3xl border border-[#CAE942]/20 shadow-inner">
          <div className="bg-[#1B1B1B] p-8 md:p-12 rounded-[calc(1.5rem-4px)] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-[#CAE942] mb-4">Downtown to Suburbs Coverage</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you’re in the heart of the city at <strong>Statue Junction</strong> or in suburban 
                regions like <strong>Neyyattinkara</strong> or <strong>Attingal</strong>, our GPS-enabled dispatch system 
                sends the nearest cab to your location immediately. Minimal wait time, fixed pricing, and professional service.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a 
                href="tel:+919895519435" 
                className="flex items-center justify-center gap-3 bg-[#CAE942] text-black py-4 px-10 rounded-xl font-black hover:scale-105 transition-transform shadow-xl whitespace-nowrap"
              >
                <FaClock className="text-xl" /> Call for Instant Pickup
              </a>
              <span className="text-center text-gray-500 text-xs font-bold uppercase tracking-tighter">Average arrival: 12-15 mins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}