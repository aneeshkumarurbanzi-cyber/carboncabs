'use client';
import React, { useRef, useEffect } from "react";
import { FaCheckCircle, FaCarSide, FaMapMarkedAlt, FaMusic, FaFan } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Airport_rideSmooth() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, paraRef.current],
      { y: 90, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".airport-smooth-card"),
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.13,
          delay: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container-padding py-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-xl">
      <h2 className="heading-h2 text-center text-[#CAE942] mb-6" ref={headingRef}>
        Safe, Smooth & Sanitized Rides
      </h2>
      <p className="paragraph-p text-center text-gray-300 max-w-2xl mx-auto mb-8" ref={paraRef}>
        We ensure a hygienic and peaceful ride every time. Our vehicles are equipped with AC, GPS, music, and more—driven by trained professionals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
        <div className="airport-smooth-card flex items-center gap-4 bg-[#2D2D2D] p-6 rounded-xl shadow-lg border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition">
          <FaFan className="text-4xl text-[#CAE942]" />
          <div>
            <h3 className="text-lg font-semibold text-[#CAE942]">Air-Conditioned Comfort</h3>
            <p className="text-gray-200">Stay cool and comfortable throughout your journey.</p>
          </div>
        </div>
        <div className="airport-smooth-card flex items-center gap-4 bg-[#2D2D2D] p-6 rounded-xl shadow-lg border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition">
          <FaMapMarkedAlt className="text-4xl text-[#CAE942]" />
          <div>
            <h3 className="text-lg font-semibold text-[#CAE942]">GPS-Enabled Rides</h3>
            <p className="text-gray-200">Track your ride and ensure a safe journey.</p>
          </div>
        </div>
        <div className="airport-smooth-card flex items-center gap-4 bg-[#2D2D2D] p-6 rounded-xl shadow-lg border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition">
          <FaMusic className="text-4xl text-[#CAE942]" />
          <div>
            <h3 className="text-lg font-semibold text-[#CAE942]">In-Ride Entertainment</h3>
            <p className="text-gray-200">Enjoy music and a relaxing atmosphere.</p>
          </div>
        </div>
        <div className="airport-smooth-card flex items-center gap-4 bg-[#2D2D2D] p-6 rounded-xl shadow-lg border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition">
          <FaCarSide className="text-4xl text-[#CAE942]" />
          <div>
            <h3 className="text-lg font-semibold text-[#CAE942]">Trained Professionals</h3>
            <p className="text-gray-200">Driven by experienced and courteous drivers.</p>
          </div>
        </div>
        <div className="airport-smooth-card flex items-center gap-4 bg-[#2D2D2D] p-6 rounded-xl shadow-lg border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition">
          <FaCheckCircle className="text-4xl text-[#CAE942]" />
          <div>
            <h3 className="text-lg font-semibold text-[#CAE942]">Hygienic & Sanitized</h3>
            <p className="text-gray-200">Vehicles cleaned and sanitized after every ride.</p>
          </div>
        </div>
        <div className="airport-smooth-card flex items-center gap-4 bg-[#2D2D2D] p-6 rounded-xl shadow-lg border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition">
          <FaMapMarkedAlt className="text-4xl text-[#CAE942]" />
          <div>
            <h3 className="text-lg font-semibold text-[#CAE942]">Anywhere in Kerala & South India</h3>
            <p className="text-gray-200">Ride stress-free from Trivandrum Airport to your destination.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
