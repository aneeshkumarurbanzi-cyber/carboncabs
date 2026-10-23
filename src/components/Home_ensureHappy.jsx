"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home_ensureHappy() {
  const imageWrapRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const listRef = useRef([]);
  const btnRef = useRef(null);

  // Your useEffect hook with all the GSAP animations is correct and needs no changes.
  useEffect(() => {
    if (imageWrapRef.current) {
      gsap.fromTo(
        imageWrapRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    gsap.fromTo(
      [headingRef.current, paraRef.current, btnRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    if (listRef.current?.length) {
      gsap.fromTo(
        listRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
stagger: 0.13,
          delay: 0.3,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container-padding">
      <div className="border p-5 md:p-10 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 shadow-xl">
        
        {/* FIX: The height classes have been simplified for a robust responsive layout. */}
        <div
          ref={imageWrapRef}
          className="relative w-full h-80 md:h-full rounded-lg overflow-hidden"
        >
          <Image
            src="/assets/home_happyjourney.webp"
            alt="carbon cabs ensure happy journey"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-5">
          <h2 className="heading-h2" ref={headingRef}>
            ensuring you have a comfortable journey
          </h2>
          <p className="paragraph-p" ref={paraRef}>
            Hassle-free cab rides. Friendly drivers. Seamless online booking.
            Whether it’s a daily ride or a special trip, Carbon Cabs is your best
            partner for safe and comfortable taxi service in Trivandrum.
          </p>
          <ul className="list-disc pl-5 text-[#CAE942]">
            {[
              "Convenient application",
              "Skilled drivers",
              "Affordable fares",
              "Quality and comfort in every trip",
            ].map((point, idx) => (
              <li key={idx} ref={(el) => (listRef.current[idx] = el)}>
                {point}
              </li>
            ))}
          </ul>
          <span className="flex gap-4" ref={btnRef}>
            <a
              href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I'd%20like%20to%20enquire%20about%20booking%20a%20taxi.%20Could%20you%20please%20share%20the%20availability%20and%20fare%20details?"
              className="bg-[#CAE942] text-black py-2 px-4 rounded-lg shadow-2xl"
            >
              Book now
            </a>
            <a
              href="/packages"
              className="text-[#CAE942] bg-black py-2 px-4 rounded-lg shadow-2xl"
            >
              Explore More
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
