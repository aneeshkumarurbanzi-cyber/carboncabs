'use client';
import React, { useRef, useEffect } from 'react'
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
    <div className='container-padding  flex flex-col gap-5'>
        <h2 className='heading-h2 text-[#CAE942]' ref={headingRef}>Your Safety And Convenience</h2>
        <p className='paragraph-p' ref={paraRef}>At Carbon Cabs, we go the extra mile to deliver a travel experience that’s secure, stress-free, and always on time. With our intuitive website and mobile app, booking a ride or rental vehicle is seamless — whether you're planning in advance or booking last minute. We’re available 24/7 to serve your needs across Trivandrum.</p>
        <a
          href="/contact-us"
          className='bg-[#CAE942] text-[#232526] py-3 px-8 rounded-lg font-bold shadow-lg hover:bg-[#b5d534] transition-colors w-fit'
          ref={btnRef}
        >Book Your Ride Now</a>
    </div>
  )
}
