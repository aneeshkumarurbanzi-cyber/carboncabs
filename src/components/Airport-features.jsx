"use client";
import React, { useRef, useEffect } from "react";
// Updated icons for better visual variety
import { FaClock, FaCarSide, FaLuggageCart } from "react-icons/fa";
import { MdFlightLand, MdSecurity } from "react-icons/md";
import { BsTagsFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Airport_features() {
  const features = [
    {
      title: "24/7 Priority Pickup",
      description:
        "If you are searching for a reliable airport taxi service near me while at TRV, Carbon Cabs offers 15-minute rapid response for both Terminal 1 and Terminal 2 arrivals.",
      icon: <FaClock />,
    },
    {
      title: "Flight Tracking",
      description:
        "We use real-time monitoring to track your arrival at TRV Airport. Our drivers are on standby exactly when you land, regardless of delays.",
      icon: <MdFlightLand />,
    },
    {
      title: "Fixed 2026 Fares",
      description:
        "No surge pricing. Example: Airport to Kovalam (₹350), East Fort (₹150), Varkala (₹800), or Kanyakumari (₹2000).",
      icon: <BsTagsFill />,
    },
    {
      title: "GPS-Enabled Safety",
      description:
        "Travel in deep-sanitized, well-maintained AC cars. Every vehicle is GPS-tracked with 24/7 SOS support for a secure journey.",
      icon: <MdSecurity />,
    },
    {
      title: "Professional Meet & Greet",
      description:
        "Receive a warm welcome from licensed drivers at the arrivals hall with a name board. Expert local knowledge of all Kerala routes.",
      icon: <FaCarSide />,
    },
    {
      title: "Luggage-Ready Fleet",
      description:
        "Choose from spacious Sedans or premium SUVs like Innova Crysta, all optimized for passenger comfort and heavy luggage.",
      icon: <FaLuggageCart />,
    },
  ];

  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      }
    );
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".airport-feature-card"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="container-padding py-16 bg-[#1B1B1B]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="heading-h2 text-[#CAE942] mb-4" ref={headingRef}>
          Why Book Our 2026 Airport Taxi?
        </h2>
        <p className="text-gray-300 paragraph-p">
          Navigating airport arrivals at Thiruvananthapuram International (TRV)
          is seamless with Carbon Cabs. We combine real-time technology with
          professional service for a stress-free start to your journey.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={gridRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="airport-feature-card bg-[#2D2D2D] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[#CAE942]/10 hover:border-[#CAE942] transition-all duration-300 group"
          >
            <div className="text-5xl text-[#CAE942] mb-5 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-[#CAE942] mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
