'use client';
import React, { useRef, useEffect } from "react";
import { FaCheckCircle, FaUsers, FaBus, FaSuitcaseRolling } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra, MdAcUnit } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Bus_intro() {
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const groupBoxRef = useRef(null);
  const servicesRef = useRef(null);
  const listRef = useRef([]);
  const highlightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

    tl.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo([para1Ref.current, para2Ref.current], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }, "-=0.3")
      .fromTo(groupBoxRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2")
      .fromTo(servicesRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2")
      .fromTo(listRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }, "-=0.4")
      .fromTo(highlightRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2");
  }, []);

  return (
    <div className="container-padding py-10">
      <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-3xl shadow-2xl flex flex-col gap-7 p-6 md:p-12 border border-[#CAE942]/10">
        
        {/* SEO Optimized H1 Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl font-black text-[#CAE942] leading-tight" ref={headingRef}>
            Force Urbania, Tempo Traveller & Bus Rental in Trivandrum 2026
          </h1>
          <div className="h-1.5 w-32 bg-[#CAE942] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <p className="paragraph-p text-gray-200 leading-relaxed" ref={para1Ref}>
              Planning a group journey in Kerala? <strong>Carbon Cabs</strong> offers the most versatile fleet for <strong>Tempo Traveller booking in Trivandrum</strong> for 2026. From premium <strong>Force Urbania</strong> rentals for luxury family trips to <strong>12, 17, and 26-seater Tempo Travellers</strong> for pilgrimages, we ensure your group travels together in absolute comfort.
            </p>
            <p className="paragraph-p text-gray-200 mt-5 leading-relaxed" ref={para2Ref}>
              For larger events, our <strong>45 and 49-seater AC Luxury Buses</strong> are perfect for wedding guest transfers, corporate outings at Technopark, and school excursions. Serving major routes like <strong>Trivandrum to Munnar, Sabarimala, and Kanyakumari</strong>, we provide experienced drivers who master every Kerala terrain.
            </p>
          </div>

          <div className="md:col-span-4 flex items-center justify-center">
            <div
              className="bg-[#2D2D2D] p-6 rounded-2xl border border-[#CAE942]/30 flex items-center gap-4 shadow-2xl"
              ref={groupBoxRef}
            >
              <div className="text-5xl text-[#CAE942]">
                <FaUsers />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Seating Capacity</p>
                <p className="text-2xl font-black text-white">9 to 50+ Seats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights with Specific Icons */}
        <div className="bg-[#2D2D2D]/50 p-6 md:p-8 rounded-2xl border border-gray-800" ref={servicesRef}>
          <h3 className="text-xl font-bold text-[#CAE942] mb-6 flex items-center gap-2 uppercase tracking-tight">
            Our 2026 Fleet Premium Standards:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Luxury Reclining Pushback Seats", icon: <MdOutlineAirlineSeatReclineExtra /> },
              { text: "Triple AC with Individual Vents", icon: <MdAcUnit /> },
              { text: "Ample Boot & Overhead Luggage Space", icon: <FaSuitcaseRolling /> },
              { text: "Professional Multi-lingual Drivers", icon: <FaCheckCircle /> },
              { text: "Premium Audio & LED Entertainment", icon: <FaCheckCircle /> },
              { text: "GPS Tracking & SOS Safety Features", icon: <FaBus /> },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group"
                ref={el => (listRef.current[index] = el)}
              >
                <span className="text-[#CAE942] text-xl group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-gray-200 font-medium text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Contextual Footer */}
        <div
          className="paragraph-p text-gray-200 bg-black/40 p-6 rounded-2xl border-l-4 border-[#CAE942] mt-2 shadow-inner"
          ref={highlightRef}
        >
          <p>
            Whether you are looking for an <strong>Urbania rental in Trivandrum</strong> for a premium experience or a 
            <strong> 17-seater Tempo Traveller for a Munnar trip</strong>, Carbon Cabs is your trusted local partner. 
            We offer transparent per-km rates and all-inclusive day packages for 2026.
          </p>
          <span className="block mt-3 font-black text-white uppercase tracking-tighter text-sm">
            Travel Together — Travel Better with Carbon Cabs Trivandrum.
          </span>
        </div>
      </div>
    </div>
  );
}