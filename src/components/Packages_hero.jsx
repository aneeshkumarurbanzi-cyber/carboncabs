'use client';
import Hero from "@/assets/package_hero.webp";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About_hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
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
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          ref={headingRef}
        >
          Explore Our Packages
        </h1>
      </div>
    </div>
  );
}
