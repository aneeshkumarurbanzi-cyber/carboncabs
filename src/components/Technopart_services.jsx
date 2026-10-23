'use client';
import React, { useRef, useEffect } from 'react';
import { FaFileInvoice, FaPlaneArrival, FaBuilding, FaUserShield, FaClock } from 'react-icons/fa';
import { MdGpsFixed } from 'react-icons/md';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Technopark_it_services() {
  const services = [
    { 
      name: "Monthly Subscriptions", 
      detail: "Convenience of a dedicated cab for daily office travel with one consolidated invoice.", 
      icon: <FaFileInvoice /> 
    },
    { 
      name: "Airport & Station Runs", 
      detail: "Reliable pick-up from Technopark to the airport or railway station at fixed prices.", 
      icon: <FaPlaneArrival /> 
    },
    { 
      name: "Inter-Phase Transfers", 
      detail: "Quick rides between Phase 1, 2, 3 or nearby business parks like the VSSC area.", 
      icon: <FaBuilding /> 
    },
    { 
      name: "Late-Night Safe Rides", 
      detail: "Ensuring safe travel after office parties or urgent project deadlines with GPS tracking.", 
      icon: <FaUserShield /> 
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
            Premium Corporate Support
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#CAE942] tracking-tight" ref={headingRef}>
            Services Tailored for IT Professionals
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
            From daily commutes to emergency night shifts, Carbon Cabs provides 
            the most reliable 2026 transport solutions for the Technopark ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => (cardsRef.current[index] = el)}
              className="bg-[#232526] p-8 rounded-3xl border border-gray-800 hover:border-[#CAE942] transition-all group flex flex-col items-center text-center shadow-2xl"
            >
              <div className="text-4xl text-[#CAE942] mb-5 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate CTA Block */}
        <div className="mt-16 bg-gradient-to-r from-[#232526] to-[#2D2D2D] p-1 rounded-3xl border border-[#CAE942]/20 shadow-inner">
          <div className="bg-[#1B1B1B] p-8 md:p-12 rounded-[calc(1.5rem-4px)] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-[#CAE942] mb-4">Dedicated Corporate Dispatch</h3>
              <p className="text-gray-300 leading-relaxed">
                Need a taxi for your entire team? Our dispatchers are strategically stationed at 
                <strong> Kazhakkoottam Tech Junction</strong> to ensure 15-minute pickups for all tech hubs. 
                Fixed pricing, GPS safety, and verified professional drivers come standard.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a 
                href="tel:+919895519435" 
                className="flex items-center justify-center gap-3 bg-[#CAE942] text-black py-4 px-10 rounded-xl font-black hover:scale-105 transition-transform shadow-xl whitespace-nowrap"
              >
                <FaClock className="text-xl" /> Book Corporate Ride
              </a>
              <span className="text-center text-gray-500 text-xs font-bold uppercase tracking-tighter">Priority for Technopark employees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}