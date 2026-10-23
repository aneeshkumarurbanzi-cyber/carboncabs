'use client';
import React, { useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaRegCommentDots, FaCarSide } from 'react-icons/fa';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <FaMapMarkerAlt className="text-3xl text-[#CAE942]" />,
    title: "Book Your Ride",
    desc: "Choose your pick-up and drop-off location using our website or app."
  },
  {
    icon: <FaRegCommentDots className="text-3xl text-[#CAE942]" />,
    title: "Wait for Confirmation",
    desc: "Receive an instant booking confirmation via SMS or WhatsApp."
  },
  {
    icon: <FaCarSide className="text-3xl text-[#CAE942]" />,
    title: "Enjoy the Ride",
    desc: "Sit back, relax, and reach your destination with ease."
  }
];

export default function About_howitWOrks() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".about-howitworks-step"),
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.18,
          delay: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container-padding py-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-xl">
      <h2 className="heading-h2 text-center text-[#CAE942] mb-10" ref={headingRef}>How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" ref={gridRef}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="about-howitworks-step flex flex-col items-center text-center bg-[#2D2D2D] p-8 rounded-xl shadow-lg border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#CAE942] mb-2">{step.title}</h3>
            <p className="text-gray-200">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
