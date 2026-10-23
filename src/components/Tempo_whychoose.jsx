'use client';
import React, { useRef, useEffect } from 'react';
import { FaCouch, FaUserCheck, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { MdSecurity, MdOutlineCleanHands } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GroupTaxi_features() {
  const features = [
    {
      title: "Spacious & Premium Comfort",
      description:
        "Our 2026 fleet features high-roof Force Urbanias and Tempo Travellers with luxury reclining seats and dual AC for the ultimate group experience.",
      icon: <FaCouch />,
    },
    {
      title: "Route-Savvy Expert Drivers",
      description:
        "Experienced local drivers who master Kerala’s geography, from the narrow hairpin turns of Ponmudi to the coastal stretches of Varkala beach.",
      icon: <FaUserCheck />,
    },
    {
      title: "Transparent & Fixed Pricing",
      description:
        "Enjoy all-inclusive rates with no hidden fees. We offer transparent daily rates and special 2026 budget packages for multi-day Kerala tours.",
      icon: <BsTagsFill />,
    },
    {
      title: "Flexible Rental Plans",
      description:
        "Ideal for half-day city trips, full-day pilgrimages, or extended Munnar tours. We customize our schedule to fit your group’s itinerary.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "GPS-Enabled Group Safety",
      description:
        "All buses and travellers are equipped with real-time GPS tracking and 24/7 SOS support, ensuring total security for school and corporate trips.",
      icon: <MdSecurity />,
    },
    {
      title: "12 to 50 Seater Variety",
      description:
        "From compact 12-seater Urbanias for family outings to 49-seater luxury AC buses for wedding guest transfers, we handle any group size.",
      icon: <FaUsers />,
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
    <section className="container-padding py-20 bg-[#1B1B1B]">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2
          className="heading-h2 text-[#CAE942] mb-4"
          ref={headingRef}
        >
          Why Choose Our Group Vehicles?
        </h2>
        <p className="text-gray-300 paragraph-p max-w-3xl mx-auto">
          We combine luxury, scale, and local expertise to provide the best 
          <strong> Tempo Traveller and Bus rental in Trivandrum</strong>. 
          Discover why groups trust Carbon Cabs for their Kerala adventures.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={gridRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-[#232526] p-8 rounded-3xl shadow-xl flex flex-col items-center text-center border border-[#CAE942]/5 hover:border-[#CAE942] transition-all duration-300 group"
          >
            <div className="text-5xl text-[#CAE942] mb-6 group-hover:scale-110 transition-transform duration-300">
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