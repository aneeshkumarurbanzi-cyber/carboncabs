"use client";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home_whychoose() {
  const whyChooseRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const whyChooseSection = whyChooseRef.current;

    // Animate the section container
    gsap.fromTo(
      whyChooseSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyChooseSection,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );

    // Animate each list item with a staggered delay
    gsap.fromTo(
      listItemsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: whyChooseSection,
          start: "top 80%",
          end: "top 40%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className="container-padding">
      <div
        className="bg-[#2D2D2D] border p-5 md:p-10 rounded-2xl flex flex-col gap-5 md:gap-10"
        ref={whyChooseRef}
      >
        <h2 className="heading-h2">Why Choose Carbon Cabs?</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-baseline gap-3 md:gap-5 text-[#CAE942] paragraph-p">
          {[
            "Convenient Online Booking",
            "Trained, Verified Drivers",
            "Clean, Comfortable Vehicles",
            "24/7 Customer Support",
            "Transparent Pricing & No Hidden Fees",
            "Safe & Reliable Rides",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-baseline gap-2"
              ref={(el) => (listItemsRef.current[index] = el)}
            >
              <FaCheckCircle className="text-[#CAE942]" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
