"use client";

import { FaPhone, FaWhatsapp, FaCarSide } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home_bookcabs() {

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const bookingStepsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Animate heading and paragraph as before
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom",   // Animation starts when top of element hits bottom of viewport
          end: "top 80%",        // Ends when top of element hits 80% from top of viewport
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top bottom",
          end: "top 80%",
          scrub: 0.5,
        },
        delay: 0.2,
      }
    );

    // Animate each booking step individually with scrub and delay
    if (bookingStepsRef.current) {
      const steps = bookingStepsRef.current.querySelectorAll("ol > li");
      steps.forEach((step, idx) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top bottom",
              end: "top 80%",
              scrub: 0.5 + idx * 0.1,
            },
            delay: idx * 0.15,
          }
        );
      });
    }

    // Animate contact card only once (not scroll-based)
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="container-padding">
      <div className="border p-5 md:p-10 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl flex flex-col gap-7 md:gap-12 shadow-xl">
        <h2 ref={headingRef} className="heading-h2 text-[#CAE942] text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
          Book a Cab in Trivandrum with{" "}
          <span className="text-white">Carbon Cabs</span>
        </h2>
        <p ref={paragraphRef} className="paragraph-p text-gray-200  max-w-2xl mx-auto">
          Need a fast and reliable Trivandrum taxi?{" "}
          <span className="font-semibold text-[#CAE942]">Carbon Cabs</span>{" "}
          ensures quick bookings and smooth rides throughout the city and
          outskirts.
          <br />
          Whether it's for work, leisure, or travel to nearby districts, we offer
          the right ride at the right price.
          <br />
          <span className="block mt-2">
            Choose from sedans, SUVs, and luxury cars—all well-maintained and
            comfortable.
          </span>
        </p>

        <div ref={bookingStepsRef} className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Booking Steps Card */}
          <div className="flex-1 bg-[#232526] rounded-xl p-6 shadow-lg flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-[#CAE942] mb-2 flex items-center gap-2">
              Booking is Easy & Convenient!
            </h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#CAE942] font-bold">1.</span>
                <span>
                  Select trip type –{" "}
                  <span className="font-medium">local, airport, or outstation</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CAE942] font-bold">2.</span>
                <span>Choose your preferred vehicle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CAE942] font-bold">3.</span>
                <span>
                    Call or Whatsapp us at <a href="tel:+919895519435" className="font-semibold text-[#CAE942] hover:text-[#b5d534]">+91 9895519435</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CAE942] font-bold">4.</span>
                <span>Confirm your booking details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CAE942] font-bold">5.</span>
                <span>
                  Enjoy your ride with{" "}
                  <span className="font-semibold">Carbon Cabs!</span>{" "}
                </span>
              </li>
            </ol>
          </div>

          {/* Contact Card */}
          <div ref={contactRef} className="flex-1 flex flex-col justify-center items-center bg-[#2D2D2D] rounded-xl p-6 shadow-lg gap-5">
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg text-gray-300">
                Need help or want to book instantly?
              </span>
              <a 
                href="tel:+919895519435"
                className="flex items-center gap-3 bg-[#CAE942] text-[#232526] font-bold px-6 py-3 rounded-full shadow hover:bg-[#b5d534] transition"
              >
                <FaPhone /> Call us: +91-9895519435
              </a>
              <a
href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I'd%20like%20to%20enquire%20about%20booking%20a%20taxi.%20Could%20you%20please%20share%20the%20availability%20and%20fare%20details?"                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-green-600 transition mt-2"
              >
                <FaWhatsapp /> Whatsapp: +91 9895519435
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
