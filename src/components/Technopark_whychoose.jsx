"use client";
import React, { useRef, useEffect } from "react";
import { 
  FaCalendarAlt, 
  FaPlaneDeparture, 
  FaRoute, 
  FaClock, 
  FaUsers, 
  FaFileInvoiceDollar 
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Technopark_features() {
  const features = [
    {
      title: "Office Commute Plans",
      description:
        "Regular pickup and drop for daily work commutes. Opt for convenient monthly billing plans for your specific team or department.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Business Airport Transfers",
      description:
        "Fixed-rate rides to Trivandrum Airport (TRV) for business trips. We handle early-morning and late-night flights with 100% punctuality.",
      icon: <FaPlaneDeparture />,
    },
    {
      title: "Technopark Layout Experts",
      description:
        "Our drivers navigate all complexes (Phase 1, 2 – Ganga/Yamuna/UST/Infosys, and Phase 3) using alternate routes to avoid Kazhakkoottam traffic.",
      icon: <FaRoute />,
    },
    {
      title: "24/7 Techie Support",
      description:
        "We operate round-the-clock for late-night project releases or early shifts. Every ride includes real-time GPS tracking for corporate safety.",
      icon: <FaClock />,
    },
    {
      title: "Team Outings & Events",
      description:
        "Large vehicles available for group transfers. Transport your entire team together in our premium Force Urbania (12-26 seater) vans.",
      icon: <FaUsers />,
    },
    {
      title: "Monthly GST Invoicing",
      description:
        "Simplify your reimbursements with automated GST invoices. We provide detailed trip logs for corporate auditing and company claims.",
      icon: <FaFileInvoiceDollar />,
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
        gridRef.current.querySelectorAll(".tech-feature-card"),
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
    <section className="container-padding py-24 bg-[#1B1B1B]">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#CAE942] mb-6 tracking-tight" ref={headingRef}>
          Why Techies Choose Carbon Cabs
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Tailored transportation solutions designed for the unique requirements 
          of Technopark professionals and corporate teams in Trivandrum.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={gridRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="tech-feature-card bg-[#2D2D2D] p-8 rounded-3xl shadow-xl flex flex-col items-center text-center border border-[#CAE942]/10 hover:border-[#CAE942] transition-all duration-300 group"
          >
            <div className="text-5xl text-[#CAE942] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}