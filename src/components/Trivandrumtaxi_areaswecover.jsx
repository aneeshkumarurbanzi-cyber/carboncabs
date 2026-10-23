'use client';
import React, { useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaMapMarkedAlt } from 'react-icons/fa';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrivandrumTaxi_areas() {
  const areas = [
    { name: "Kazhakkoottam & Technopark", type: "IT Hub" },
    { name: "Kovalam & Vizhinjam", type: "Coastal" },
    { name: "Varkala & Edava", type: "Tourism" },
    { name: "Statue & East Fort", type: "City Center" },
    { name: "Medical College & Pattom", type: "Institutional" },
    { name: "Kowdiar & Peroorkada", type: "Residential" },
    { name: "Neyyattinkara & Kattakada", type: "Suburban" },
    { name: "Attingal & Venjaramoodu", type: "Northern Hub" },
    { name: "Ponmudi & Vithura", type: "Hill Station" },
  ];

  const headingRef = useRef(null);
  const gridRef = useRef(null);

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
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".area-item"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="container-padding py-20 bg-[#1B1B1B] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="heading-h2 text-[#CAE942] mb-6" ref={headingRef}>
              Areas We Cover in Trivandrum 2026
            </h2>
            <p className="text-gray-300 paragraph-p">
              Carbon Cabs provides comprehensive 24/7 coverage across the capital city and its suburban regions. 
              Whether it’s an urgent city commute or a long-distance trip, our fleet is strategically 
              positioned to reach you within 15-20 minutes in most major locations.
            </p>
          </div>
          <div className="flex-shrink-0 bg-[#2D2D2D] p-6 rounded-3xl border border-[#CAE942]/20 hidden lg:block">
            <FaMapMarkedAlt className="text-9xl text-[#CAE942]/20" />
          </div>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          ref={gridRef}
        >
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="area-item bg-[#232526] p-6 rounded-xl border border-gray-800 hover:border-[#CAE942] transition-all group flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#1B1B1B] flex items-center justify-center text-[#CAE942] group-hover:bg-[#CAE942] group-hover:text-black transition-colors">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{area.name}</h3>
                <span className="text-xs text-[#CAE942] font-semibold uppercase tracking-widest">{area.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#CAE942] text-black p-8 rounded-2xl shadow-2xl inline-block max-w-2xl">
            <h3 className="text-xl font-black mb-2">Don't see your location?</h3>
            <p className="font-medium mb-4">We serve every corner of the Trivandrum district. Just call us with your pickup point, and we'll dispatch the nearest cab immediately.</p>
            <a 
              href="tel:+919895519435" 
              className="inline-block bg-black text-[#CAE942] px-8 py-3 rounded-lg font-black hover:scale-105 transition-transform"
            >
              Call for Instant Pickup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}