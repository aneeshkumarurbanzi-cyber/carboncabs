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
        Premium Airport Taxi Service in Trivandrum 2026 | Carbon Cabs
      </h1>
      <p
        className="paragraph-p text-gray-300 max-w-5xl mx-auto mb-8"
        ref={paraRef}
      >
        Landing at <strong>Thiruvananthapuram International Airport (TRV)</strong>? Carbon Cabs provides the most reliable <strong>airport taxi service near me</strong> for travelers arriving at <strong>Terminal 1 (Domestic)</strong> or <strong>Terminal 2 (International)</strong>. We ensure a seamless transition from the arrivals gate to your destination with 24/7 availability in 2026.
        <br />
        <br />
        Our professional drivers utilize advanced 2026 flight-tracking technology to monitor your schedule in real-time, ensuring we are on standby the moment you land at <strong>T1 or T2</strong>—even if your flight is early or delayed. Experience the ultimate comfort in our updated 2026 fleet, featuring sanitized AC sedans, premium SUVs, and spacious travelers. With transparent pricing, real-time GPS tracking, and 24/7 support, we are Trivandrum’s first choice for stress-free airport transfers.
      </p>
      <a
        href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I%20need%20a%20taxi%20from%20the%20Airport."
        className="bg-[#CAE942] text-[#232526] py-3 px-8 rounded-lg font-bold shadow-lg hover:bg-[#b5d534] transition-colors"
        ref={btnRef}
      >
        Book Your Airport Cab Now
      </a>
    </div>
  );
}