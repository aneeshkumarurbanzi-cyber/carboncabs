'use client';
import Hero from "@/assets/contact_hero.webp";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tempo_hero() {
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
    <div
      className="min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] relative flex flex-col justify-center items-center text-center pt-30 md:pt-40 pb-10"
      style={{
        backgroundImage: `url(${Hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-10 text-white">
        <h2
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          ref={headingRef}
        >
          Tempo Traveller & Urbania Rentals in Trivandrum
        </h2>
        <p
          className="mt-4 text-lg md:text-xl font-medium drop-shadow-md"
          ref={paraRef}
        >
          Your Ride, Your Way – Easy Group Travel Starts Here
        </p>
        <button
          ref={btnRef}
          onClick={() => (window.location.href = "/contact-us")}
          className="mt-6 px-6 py-3 bg-[#CAE942] text-[#232526] font-bold rounded-lg shadow-lg hover:bg-[#b5d534] transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

