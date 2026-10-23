'use client';
import Hero from "@/assets/kochi_tour_package_hero.webp";
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
        className="relative z-10 lg:h-screen pt-30 pb-10 md:py-40 px-6 md:px-20 xl:w-2/3 flex flex-col xl:pl-30 justify-center lg:pt-60 gap-8"
      >
        <span className="text-lg md:text-xl font-semibold text-[#CAE942] mb-2 tracking-wide drop-shadow-lg">
          Plan Your Perfect Kerala Trip with Carbon Cabs
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
          Kochi Taxi Tour Packages – Comfort, Clarity & Custom Plans
        </h1>
        <p className="md:text-xl lg:text-2xl text-white/90 max-w-2xl drop-shadow">
          Seeking a safe and reliable taxi tour package in Kochi? Whether it's the tea hills of Munnar or the serene backwaters of Alleppey, Carbon Cabs offers full-service outstation trips, airport pickups, and customized sightseeing plans with transparent pricing and professional drivers.
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
