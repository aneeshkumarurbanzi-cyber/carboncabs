"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MdFlight, MdTour } from "react-icons/md";
import { FaTaxi, FaBus, FaBusinessTime } from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbClock24 } from "react-icons/tb";
import { RiTaxiWifiFill } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home_ourservices() {
  const services = [
    {
      title: "Airport Taxi Service",
      description: "Fast, reliable 24/7 airport transfers in clean sedans and SUVs. Stress-free pickups and drops to Trivandrum Airport (TRV).",
      price: "Starting @ ₹150",
      icon: <MdFlight />,
      url: "/trivandrum-airport-taxi",
    },
    {
      title: "Taxi Service in Trivandrum",
      description: "Professional 24/7 cab service for city rides and local trips. Choose from sanitized sedans, SUVs, and luxury cars.",
      price: "Starting @ ₹16/km",
      icon: <FaTaxi />,
      url: "/taxi-service-trivandrum",
    },
    {
      title: "Outstation Taxi Service",
      description: "Safe and affordable outstation cabs from Trivandrum to Kochi, Munnar, Kanyakumari, and beyond.",
      price: "Starting @ ₹16/km",
      icon: <FaCableCar />,
      // SEO Fix: Points to section on main page until dedicated page is ready
      url: "/taxi-service-trivandrum#outstation", 
    },
    {
      title: "Technopark Taxi Service",
      description: "Tailored cab solutions for IT professionals. Includes monthly commute plans and punctual office-to-airport transfers.",
      price: "Starting @ ₹150",
      icon: <RiTaxiWifiFill />,
      url: "/technopark-taxi",
    },
    {
      title: "24/7 Call Taxi Trivandrum",
      description: "Instant booking call taxi service with 15-minute pickup. Available round-the-clock for emergency or late-night rides.",
      price: "Starting @ ₹150",
      icon: <TbClock24 />,
      url: "/call-taxi-trivandrum",
    },
    {
      title: "Monthly Car Rental",
      description: "Budget-friendly long-term car rentals with drivers for tourists, corporate employees, and students in Trivandrum.",
      price: "Starting @ ₹25,000/mo",
      icon: <BsFillCalendarDateFill />,
      // SEO Fix: Points to section on main page
      url: "/taxi-service-trivandrum#monthly", 
    },
    {
      title: "Urbania & Tempo Rentals",
      description: "Premium 12, 17, and 26-seater Force Urbania and Tempo Travellers for group tours, weddings, and team outings.",
      price: "Starting @ ₹8,000/day",
      icon: <FaBus />,
      url: "/trivandrum-tempo-traveller-urbania-rentals",
    },
    {
      title: "Kerala Taxi Tour Packages",
      description: "Customized taxi tour packages for Munnar, Alleppey, and Kanyakumari with expert local drivers.",
      price: "Starting @ ₹1,500/day",
      icon: <MdTour />,
      url: "/packages",
    },
    {
      title: "Business Travel Solutions",
      description: "Corporate taxi services with executive vehicles, flexible scheduling, and monthly GST billing for companies.",
      price: "Starting @ ₹1,200/day",
      icon: <FaBusinessTime />,
      // SEO Fix: Points to Technopark hub
      url: "/technopark-taxi#corporate", 
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current[0].parentNode,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="container-padding py-16 bg-[#1B1B1B]">
      <div className="max-w-4xl mb-10">
        <h2 className="heading-h2 text-[#CAE942]">Our Premium Services 2026</h2>
        <p className="paragraph-p text-gray-300 mt-4">
          Beyond standard city rides, <strong>Carbon Cabs</strong> provides specialized transport solutions tailored to your unique needs. 
          Whether you require a professional Technopark commute or a long-distance outstation taxi, 
          we are available 24/7 to ensure a safe journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link href={service.url} key={index} className="group">
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#232526] p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-[#CAE942]/10 
                         transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#CAE942] group-hover:shadow-2xl h-full"
            >
              <div className="text-5xl text-[#CAE942] mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#CAE942] mb-3 leading-tight">
                {service.title}
              </h3>
              
              <div className="text-xs font-bold text-gray-400 bg-black/40 px-3 py-1 rounded-full mb-4 border border-gray-800">
                {service.price}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}