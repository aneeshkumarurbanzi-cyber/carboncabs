'use client';
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// BEST PRACTICE: Give your component a descriptive name.
export default function AboutSections() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  // Your GSAP animation logic is perfect and does not need to be changed.
  useEffect(() => {
    if (section1Ref.current) {
      gsap.fromTo(
        section1Ref.current.children,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (section2Ref.current) {
      gsap.fromTo(
        section2Ref.current.children,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container-padding py-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center" ref={section1Ref}>
        <div className="flex flex-col gap-5 md:gap-8">
          <h2 className="heading-h2 text-[#CAE942]">Your Satisfaction is Our Top Priority</h2>
          <p className="paragraph-p text-gray-300">
            We’re not just another cab service. Whether it’s a quick ride to the
            airport, a business meeting, or a night out, we offer a fleet of
            well-maintained vehicles and highly professional drivers who know
            the roads and value your time. Expect punctuality, cleanliness, and
            friendly service every step of the way.
          </p>
        </div>

        {/* FIX: Wrapped Image in a sized, relative container and used the 'fill' prop. */}
        <div className="relative w-full h-80 rounded-xl shadow-lg overflow-hidden">
          <Image
            src='/assets/About_top_priority.webp'
            alt="A professional driver assisting a customer with their luggage."
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-10 items-center mt-12 " ref={section2Ref}>
        <div className="flex flex-col gap-5 md:gap-8 md:w-1/2">
          <h2 className="heading-h2 text-[#CAE942]">Ensuring You Have a Comfortable Trip</h2>
          <p className="paragraph-p text-gray-300">
            We’re not just another cab service. Whether it’s a quick ride to the
            airport, a business meeting, or a night out, we offer a fleet of
            well-maintained vehicles and highly professional drivers who know the
            roads and value your time. Expect punctuality, cleanliness, and
            friendly service every step of the way.
          </p>
        </div>
        
        {/* FIX: Wrapped the second Image in a sized, relative container. */}
        <div className="relative w-full md:w-1/2 h-80 rounded-xl shadow-lg overflow-hidden">
          <Image
            src='/assets/About_confortable_trip.webp'
            alt="The clean and comfortable interior of a modern taxi."
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
