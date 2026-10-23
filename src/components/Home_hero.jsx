"use client";

import Hero from "@/assets/home_hero.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home_hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    // Parallax effect for background
    gsap.to(hero, {
      backgroundPositionY: "50%",
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade-in and slide-up animation for content
    gsap.fromTo(
      content,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hero,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative"
      style={{
        backgroundImage: `url(${Hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div
        ref={contentRef}
        className="relative z-10 lg:h-screen pt-30 pb-10 md:py-40 px-6 md:px-20 xl:w-2/3 flex flex-col xl:pl-30 lg:pt-60 justify-center gap-8"
      >
        <span className="text-lg md:text-xl font-semibold text-[#CAE942] mb-2 tracking-wide drop-shadow-lg">
          Your Journey, Our Priority
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
          Premium Taxi & Rental Services in Trivandrum 2026 | Carbon Cabs
        </h1>
        <p className="md:text-xl lg:text-2xl text-white/90 max-w-2xl drop-shadow">
          Carbon Cabs is the leading provider of professional taxi and rental services in Trivandrum for 2026. We operate 24/7, connecting you quickly to local hotspots like Kovalam Beach, East Fort, and Technopark. Whether you need a quick airport transfer or a spacious vehicle for group travel, Carbon Cabs delivers safe, sanitized rides with updated 2026 transparent rates.
        </p>
        <a
          href="/contact-us"
          className="flex items-center gap-2 bg-[#CAE942] text-black py-3 px-8 rounded-lg shadow-lg hover:scale-110 hover:bg-[#e6f86a] transition-transform duration-200 font-bold text-lg w-fit mt-2"
        >
          Book Your Ride
        </a>
      </div>
    </div>
  );
}
