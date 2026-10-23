"use client";
import React, { useRef, useEffect } from "react";
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
        Professional Technopark Taxi Service 2026 – Reliable Corporate Commutes
      </h1>
      <p
        className="text-gray-200 text-lg md:text-xl max-w-5xl mx-auto mb-10 leading-relaxed font-medium text-left"
        ref={paraRef}
      >
        Carbon Cabs specializes in premium{" "}
        <strong>Technopark cab services</strong> tailored for the fast-paced
        lifestyle of Trivandrum’s tech professionals. We provide seamless 24/7
        coverage across{" "}
        <strong>
          Phase 1, Phase 2 (Ganga, Yamuna, UST, and Infosys campuses), and Phase
          3
        </strong>
        , ensuring you reach your office or the airport on time, every time.
        <br />
        <br />
        Our drivers are experts in the Kazhakkoottam corridor, utilizing{" "}
        <strong>2026-standard GPS tracking</strong> and deep knowledge of campus
        shortcuts to bypass peak-hour traffic. Whether you require a fixed
        monthly cab plan for a hassle-free daily commute or a safe emergency
        night ride after a late-night project release, Carbon Cabs delivers the
        punctuality and professionalism that IT experts demand.
      </p>
      <a
        href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I%20am%20calling%20from%20Technopark.%20I%20need%20to%20book%20a%20professional%20ride."
        className="inline-flex items-center gap-3 bg-[#CAE942] text-[#232526] py-4 px-10 rounded-xl font-black text-lg shadow-[0_10px_20px_rgba(202,233,66,0.2)] hover:bg-[#b5d534] hover:scale-105 transition-all duration-300 active:scale-95"
      >
        Book Your Technopark Ride
      </a>
    </div>
  );
}
