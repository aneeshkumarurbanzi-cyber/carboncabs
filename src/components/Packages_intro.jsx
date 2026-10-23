'use client';
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About_intro() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, paraRef.current, btnRef.current],
      { y: 70, opacity: 0 },
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
    <div className="container-padding  flex flex-col gap-5">
      <h2 className="heading-h2 text-[#CAE942]" ref={headingRef}>
        Explore Kerala and Beyond – Safely and Comfortably
      </h2>
      <p className="paragraph-p" ref={paraRef}>
        Looking for a peaceful getaway or a spiritual journey? With Wheels On
        Go, your trip starts the moment you book. Our well-maintained taxis and
        friendly drivers ensure a smooth, safe, and enjoyable travel experience
        — anywhere in Kerala and beyond. .
      </p>
      <a
        href="/contact-us"
        className="bg-[#CAE942] text-[#232526] py-3 px-8 rounded-lg font-bold shadow-lg hover:bg-[#b5d534] transition-colors w-fit"
        ref={btnRef}
      >
        Book Your Ride Now
      </a>
    </div>
  );
}
