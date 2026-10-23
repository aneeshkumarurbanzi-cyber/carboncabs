'use client';
import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Airport_intro() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, paraRef.current, btnRef.current],
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
  }, []);

  return (
    <div className="container-padding py-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-xl text-center">
      <h1 className="heading-h2 text-[#CAE942] mb-6" ref={headingRef}>
        24/7 Call Taxi in Trivandrum 2026 – Instant Booking | Carbon Cabs
      </h1>
      <p
        className="paragraph-p text-gray-300 max-w-5xl mx-auto mb-8"
        ref={paraRef}
      >
        
        Stuck at the station or need a quick ride at midnight? Carbon Cabs provides instant call taxi service across Trivandrum. Our drivers are strategically located at key points (Kazhakkoottam, East Fort, Central Railway Station, Thampanoor) to reach you in 15 minutes or less. Whether it’s a hospital emergency or last-minute meeting, just call and a cab will be on its way.
      </p>
      <a
       href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I%20need%20a%20taxi%20immediately."
        className="bg-[#CAE942] text-[#232526] py-3 px-8 rounded-lg font-bold shadow-lg hover:bg-[#b5d534] transition-colors"
        ref={btnRef}
      >
        Book Your Airport Cab Now
      </a>
    </div>
  );
}