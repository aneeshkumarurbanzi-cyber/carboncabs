"use client";
import React, { useRef, useEffect } from "react";
// Fixed FaGps import to FaMapMarkerAlt and ensured others are correct
import { 
  FaMapMarkerAlt, 
  FaUserShield, 
  FaHospital, 
  FaClock, 
  FaHandSparkles 
} from "react-icons/fa";
import { BsShieldCheck, BsTagsFill } from "react-icons/bs";
// Using MdGpsFixed as an alternative high-quality GPS icon
import { MdGpsFixed } from "react-icons/md"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallTaxi_features() {
  const features = [
    {
      title: "Real-Time GPS Security",
      description:
        "Every call taxi is GPS-tracked. For added safety in 2026, you can share your live journey location with family or friends directly from our system.",
      icon: <MdGpsFixed />, // Replaced the broken FaGps with MdGpsFixed
    },
    {
      title: "Verified Professional Drivers",
      description:
        "Our drivers are more than just experts on Trivandrum routes; they are background-verified professionals with clean records and courteous behavior.",
      icon: <FaUserShield />,
    },
    {
      title: "Sanitized & Top Condition",
      description:
        "We follow strict 2026 hygiene protocols. Every vehicle undergoes regular deep sanitization and mechanical checks to ensure a safe, breakdown-free ride.",
      icon: <FaHandSparkles />,
    },
    {
      title: "Urgent Hospital Transfers",
      description:
        "Specialized support for medical emergencies. We prioritize hospital transfers and urgent clinic visits with extra care and immediate dispatch.",
      icon: <FaHospital />,
    },
    {
      title: "Safe Late-Night Travel",
      description:
        "Travel with confidence at any hour. We take extra precautions for late-night rides, ensuring female travelers and families feel 100% secure.",
      icon: <BsShieldCheck />,
    },
    {
      title: "24/7 Fixed Fare Guarantee",
      description:
        "No surge pricing during rain or peak hours. Whether it's a 3 AM pickup or a midday rush, you pay the same transparent fixed rate.",
      icon: <BsTagsFill />,
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
        gridRef.current.querySelectorAll(".call-taxi-feature-card"),
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
          Safety & Reliability You Can Trust
        </h2>
        <p className="text-gray-300 paragraph-p">
          At Carbon Cabs, your security is our highest priority. We combine 
          verified human expertise with 2026 tracking technology to provide 
          the most dependable call taxi service in Trivandrum.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={gridRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="call-taxi-feature-card bg-[#2D2D2D] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[#CAE942]/10 hover:border-[#CAE942] transition-all duration-300 group"
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