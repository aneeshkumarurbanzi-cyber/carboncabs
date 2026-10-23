"use client";

import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: "Central Trivandrum",
    places: [
      "Kowdiar",
      "Pattom",
      "Sreekariyam",
      "Kazhakkoottam",
      "Karamana",
      "Vazhuthacaud",
      "Palayam",
      "Statue",
      "Medical College",
      "Vellayambalam"
    ]
  },
  {
    title: "North Trivandrum",
    places: [
      "Vattiyoorkavu",
      "Pothencode",
      "Pangode",
      "Kattakada",
      "Peroorkada",
      "Nalanchira",
      "Mannanthala",
      "Sreekariyam",
      "Chempazhanthy",
      "Vattappara"
    ]
  },
  {
    title: "South Trivandrum",
    places: [
      "Kollamkode",
      "Neyyattinkara",
      "Balaramapuram",
      "Parassala",
      "Vizhinjam",
      "Poovar",
      "Varkala",
      "Ponmudi",
      "Kovalam",
      "Vizhinjam"
    ]
  },
  {
    title: "Outstation Areas",
    places: [
      "Kumarakom",
      "Alleppey",
      "Kochi",
      "Munnar",
      "Thekkady",
      "Kanyakumari",
      "Rameswaram",
      "Madurai",
      "Thanjavur",
      "Tirupati"
    ]
  }
];

export default function Home_areasWeServe() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Animate heading and paragraph
    gsap.fromTo(
      [headingRef.current, paragraphRef.current],
      { y: 90, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    // Animate area cards with stagger
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".area-card"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
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
    <div className="container-padding w-full py-12 bg-gradient-to-br from-[#232526] to-[#414345]">
      <h2
        ref={headingRef}
        className="heading-h2 text-center mb-4 text-[#CAE942]"
      >
        Areas We Serve
      </h2>
      <p
        ref={paragraphRef}
        className="paragraph-p text-center mb-10 text-gray-200 max-w-2xl mx-auto"
      >
        Our taxi service covers all major areas and neighborhoods in Trivandrum and surrounding regions. No matter where you are, Carbon Cabs is just a call away!
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
        ref={gridRef}
      >
        {areas.map((area, idx) => (
          <div key={idx} className="area-card bg-[#232526] rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#CAE942] hover:shadow-yellow-200 transition">
            <div className="mb-3">
              <FaMapMarkerAlt className="text-3xl text-[#CAE942]" />
            </div>
            <h3 className="text-xl font-bold text-[#CAE942] mb-2 text-center">{area.title}</h3>
            <ul className="space-y-2">
              {area.places.map((place, i) => (
                <li key={i} className="text-gray-200 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#CAE942] rounded-full"></span>
                  {place}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
