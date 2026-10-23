"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home_additionalService() {
  const gridRef = useRef(null);

  const services = [
    {
      title: "Intercity & Outstation Rides", // Varied from "Outstation Taxi Service"
      price: "Rates from ₹16/km",
      link: "/taxi-service-trivandrum",
      desc: "Reliable long-distance travel with experienced highway drivers for safe journeys beyond city limits."
    },
    {
      title: "IT Park & Corporate Commutes", // Varied from "Technopark Taxi Service"
      price: "Starting @ ₹150",
      link: "/technopark-taxi-trivandrum",
      desc: "Dedicated transport solutions for Technopark professionals, offering punctual daily office pickups."
    },
    {
      title: "Emergency & Late Night Pickups", // Varied from "24/7 Call Taxi Trivandrum"
      price: "15-Min Rapid Response",
      link: "/call-taxi-trivandrum",
      desc: "On-demand taxi service available round-the-clock for urgent travel needs or late-night arrivals."
    },
    {
      title: "Extended Stay Rentals", // Varied from "Monthly Car Rental"
      price: "Packages from ₹25,000/mo",
      link: "/taxi-service-trivandrum",
      desc: "Cost-effective long-term vehicle solutions perfect for NRIs, students, and corporate staff in Kerala."
    },
    {
      title: "Group & Event Transportation", // Varied from "Urbania & Tempo Rentals"
      price: "Large Fleet @ ₹8,000/day",
      link: "/trivandrum-tempo-traveller-urbania-rentals",
      desc: "Spacious Force Urbania and Tempo Travellers ideal for wedding parties, family reunions, and team outings."
    },
    {
      title: "Customized Holiday Sightseeing", // Varied from "Kerala Taxi Tour Packages"
      price: "Private Tours @ ₹1,500/day",
      link: "/packages",
      desc: "Explore Munnar, Alleppey, and Kanyakumari with expert local drivers who know the best hidden spots."
    }
  ];

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".additional-service-card"),
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
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
    <div className='container-padding flex flex-col gap-5 md:gap-10'>
        <h2 className="heading-h2">Additional Services</h2>
        <p className='paragraph-p'>Beyond standard city rides, Carbon Cabs provides specialized transport solutions tailored to your unique needs. Whether you require a professional Technopark commute, a spacious Urbania for family weddings, or a long-distance outstation taxi, our 2026 fleet is equipped to handle every journey with punctuality and care</p>
        <div
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
          ref={gridRef}
        >
            {services.map((service, index) => (
              <div key={index} className='additional-service-card bg-[#232526] p-6 rounded-lg shadow-lg flex flex-col border items-center justify-center gap-4 transition-transform duration-200 hover:-translate-y-2 hover:border-[#CAE942] hover:shadow-2xl'>
                <h3 className='text-xl font-semibold text-[#CAE942]'>{service.title}</h3>
                <p className='text-lg font-bold text-white'>{service.price}</p>
                <p className='text-gray-300 text-center'>{service.desc}</p>
                <a href={service.link} className="bg-[#CAE942] text-black py-2 px-4 rounded-lg shadow-2xl">Learn More</a>
              </div>
            ))}
        </div>
    </div>
  )
}

