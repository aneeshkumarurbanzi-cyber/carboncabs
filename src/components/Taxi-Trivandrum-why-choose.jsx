'use client';
import React, { useRef, useEffect } from 'react';
// Updated icons for general city taxi service
import { FaClock, FaUserCheck, FaCar, FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutlineCleanHands, MdSecurity } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrivandrumTaxi_features() {
  const features = [
    {
      title: "Verified & Licensed Drivers",
      description:
        "All drivers are licensed, trained, and background-checked. They are courteous local experts familiar with Trivandrum routes and traffic patterns.",
      icon: <FaUserCheck />,
    },
    {
      title: "Zero Hidden Charges",
      description:
        "The quoted fare includes all taxes, tolls, and driver allowances. In 2026, we promise transparent pricing—you pay exactly what we agree on.",
      icon: <BsTagsFill />,
    },
    {
      title: "Clean & Sanitized Fleet",
      description:
        "We maintain a new fleet of vehicles with strict regular maintenance and deep sanitization protocols for a fresh, safe ride every time.",
      icon: <FaCar />,
    },
    {
      title: "Punctual 24/7 Service",
      description:
        "We track live traffic to ensure on-time pickups. Late-night and early-morning city commutes or outstation trips are our specialty.",
      icon: <FaClock />,
    },
    {
      title: "Real-Time GPS Tracking",
      description:
        "Your safety is our priority. All our 2026 taxis are GPS-enabled, allowing our 24/7 support team and your loved ones to track your journey.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Safe & Secure Travel",
      description:
        "From SOS features in the car to experienced highway drivers for outstation trips, we provide the most secure taxi service in Trivandrum.",
      icon: <MdSecurity />,
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
        gridRef.current.querySelectorAll(".feature-card"),
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
        <h2
          className="heading-h2 text-[#CAE942] mb-4"
          ref={headingRef}
        >
          Why Carbon Cabs for Trivandrum?
        </h2>
        <p className="text-gray-300 paragraph-p">
          We combine local expertise with modern technology to provide a premium 
          transport experience. Whether it's a short city hop or a long outstation 
          journey, here is why travelers trust us in 2026.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={gridRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-[#2D2D2D] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[#CAE942]/10 hover:border-[#CAE942] transition-all duration-300 group"
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