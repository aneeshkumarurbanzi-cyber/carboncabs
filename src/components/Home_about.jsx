"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home_about() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    gsap.fromTo(
      aboutSection,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
          end: "top 40%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className="container-padding" ref={aboutRef}>
      {/* Background gradient */}
      <div className="border p-5 md:p-10 bg-[#2D2D2D] rounded-2xl flex flex-col gap-5 md:gap-10">
        <h2 className="heading-h2">Carbon Cabs – Trusted Cab Service in Trivandrum</h2>
        <p className="paragraph-p">
          Carbon Cabs is your reliable travel companion for all your commuting
          needs in Trivandrum. From airport pickups to outstation trips and
          daily commutes, we provide flexible, timely, and hassle-free taxi
          service in Trivandrum. With a user-friendly app and website,
          professional drivers, and a wide range of vehicles—economy to
          premium—our cab booking in Trivandrum is seamless. Whether you’re
          heading to a business meeting, catching a flight, or exploring the
          city, count on us for punctuality, cleanliness, and peace of mind
          throughout your journey.
        </p>
      </div>
    </div>
  );
}
