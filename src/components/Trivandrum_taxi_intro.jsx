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
        Reliable & Professional Taxi Service in Trivandrum 2026 | Carbon Cabs
      </h1>
      <p
        className="paragraph-p text-gray-300 max-w-5xl mx-auto mb-8"
        ref={paraRef}
      >
        Looking for the best taxi service in Trivandrum for your 2026 travels? Carbon Cabs is your trusted local partner for all your transportation needs across the capital city. Whether you need a quick taxi near me for a city commute, a punctual pickup from Technopark, or a scenic outstation journey, we provide 24/7 premium service with a modern, well-maintained fleet.
        <br />
        <br />
        Our updated 2026 fleet includes sanitized sedans (Swift Dzire, Etios), spacious SUVs (Innova Crysta, Ertiga), and luxury cars to ensure a comfortable ride for every occasion. From the busy streets of East Fort and Pattom to the coastal beauty of Kovalam and Varkala, our professional, licensed drivers ensure you reach your destination safely and on time. We pride ourselves on transparent, fixed-rate billing—meaning no surge pricing or hidden fees, even during peak hours or late-night trips. Experience the most dependable cab booking in Trivandrum with real-time GPS tracking and dedicated customer support.
      </p>
      <a
       href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I'd%20like%20to%20enquire%20about%20booking%20a%20taxi%20in%20Trivandrum.%20Could%20you%20please%20share%20the%20availability%20and%20fare%20details?"
        className="bg-[#CAE942] text-[#232526] py-3 px-8 rounded-lg font-bold shadow-lg hover:bg-[#b5d534] transition-colors"
        ref={btnRef}
      >
        Book Your Trivandrum Taxi
      </a>
    </div>
  );
}