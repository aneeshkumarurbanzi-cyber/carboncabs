'use client';
import React, { useRef, useLayoutEffect } from "react";
import { GoDotFill } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Kochi_packages() {
  const headingRef = useRef(null);
  const moreRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (moreRef.current) {
      gsap.fromTo(
        moreRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: moreRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          delay: i * 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, []);

  return (
    <section className="container-padding bg-[#2D2D2D]">
      <h2
        className="heading-h2 text-[#CAE942] mb-10 text-center text-3xl md:text-4xl font-extrabold tracking-tight"
        ref={headingRef}
      >
        🚖 Our Top Kochi Taxi Tour Packages
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {[
          {
            title: "Kochi to Munnar Taxi Package",

            distance: "130 km",
            time: "4–4.5 hrs",
            fare: "₹3,000 (one-way) | ₹4,800–₹6,000 (round trip)",
            attractions: [
              "Cheeyappara & Valara Waterfalls",
              "Tea Museum & Tea Gardens",
              "Mattupetty Dam, Boating",
              "Echo Point & Kundala Lake",
              "Top Station View Point",
            ],
            ideal: "Honeymooners, families, weekend escape",
            tip: "Best visited from October to April. Book 2-day return for full sightseeing.",
          },
          {
            title: "Kochi to Alleppey Taxi",

            distance: "60 km",
            time: "1.5 hrs",
            fare: "₹2,200 (one-way) | ₹3,800 (round trip)",
            attractions: [
              "Houseboat Jetty Drop",
              "Alleppey Beach & Lighthouse",
              "Revi Karunakaran Museum",
              "Backwater cruise (optional)",
            ],
            ideal: "Day trips, houseboat transfers, cruise guests",
            tip: "Pair with CarbonCabs’ Houseboat Package for best rates.",
          },
          {
            title: "Kochi to Athirapally Cab Package",

            distance: "70 km",
            time: "2 hrs",
            fare: "₹2,500 (one-way) | ₹4,000 (round trip)",
            attractions: [
              "Athirapally Waterfalls (Bahubali shooting spot)",
              "Charpa Falls, Vazhachal Gardens",
              "Sholayar Forest Drive",
            ],
            ideal: "Monsoon trips, kid-friendly picnics",
            tip: "Avoid Sundays for crowd-free falls.",
          },
          {
            title: "Fort Kochi & Cochin Taxi Tour Packages",

            duration: "4–6 hrs",
            fare: "₹1,800 to ₹2,500",
            attractions: [
              "Chinese Fishing Nets & Fort Walk",
              "Mattancherry Palace, Jew Street",
              "Santa Cruz Basilica, Princess Street Cafes",
              "Marine Drive Photo Stop",
            ],
            ideal: "Culture lovers, cruise tourists, short city rides",
            tip: "Ideal for a half-day of sightseeing.",
          },
          {
            title: "Kochi to Thekkady Taxi Package",

            distance: "150 km",
            time: "4.5–5 hrs",
            fare: "₹3,800 (one-way) | ₹6,500+ (round trip)",
            attractions: [
              "Periyar Wildlife Sanctuary",
              "Boating in Periyar Lake",
              "Spice Plantation Tour",
              "Elephant Safari & Cultural Shows",
            ],
            ideal: "Wildlife lovers, adventure families",
            tip: "Pre-book forest tickets on weekends.",
          },
        ].map((pkg, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-gradient-to-br from-[#232526] to-[#1a1b1c] border border-[#CAE942]/30 rounded-2xl p-8 shadow-2xl hover:shadow-[#CAE942]/20 hover:border-[#CAE942]/50 transition-all duration-300 flex flex-col gap-4 transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-xl font-bold text-[#CAE942] m-0 p-0">
                {pkg.title}
              </h1>
            </div>
            <div className="text-gray-200 text-sm leading-relaxed space-y-2">
              {pkg.distance && (
                <div className="flex">
                  <GoDotFill className="text-[#CAE942] text-lg mr-1" />
                  <span className="font-semibold mr-1">Distance:</span>{" "}
                  {pkg.distance}
                </div>
              )}
              {pkg.time && (
                <div className="flex">
                  <GoDotFill className="text-[#CAE942] text-lg mr-1" />
                  <span className="font-semibold mr-1">Time:</span> {pkg.time}
                </div>
              )}
              {pkg.duration && (
                <div className="flex">
                  <GoDotFill className="text-[#CAE942] text-lg mr-1" />
                  <span className="font-semibold mr-1">Duration:</span>{" "}
                  {pkg.duration}
                </div>
              )}
              <div className="flex">
                <GoDotFill className="text-[#CAE942] text-lg mr-1" />
                <span className="font-semibold mr-1">Fare:</span> {pkg.fare}
              </div>
              <div>
                <div className="flex items-center">
                  <GoDotFill className="text-[#CAE942] text-lg mr-1" />
                  <span className="font-semibold">Included Attractions:</span>
                </div>
                <ul className="ml-7 mt-1 space-y-1">
                  {pkg.attractions.map((att, i) => (
                    <li key={i} className="flex items-start gap-2 ">
                      <GoDotFill className="text-[#ffffff] mt-1" />
                      <span>{att}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-start mt-2">
                <GoDotFill className="text-[#CAE942] text-lg mr-1 mt-0.5" />
                <span className="font-semibold mr-2">Ideal For:</span>
                <span className="break-words">{pkg.ideal}</span>
              </div>
              <div className="flex flex-wrap items-start">
                <GoDotFill className="text-[#CAE942] text-lg mr-1 mt-0.5" />
                <span className="font-semibold mr-2">Travel Tip:</span>
                <span className="break-words">{pkg.tip}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Offbeat Section */}
        <div
          ref={(el) => (cardsRef.current[5] = el)}
          className="bg-gradient-to-br from-[#232526] to-[#1a1b1c] border border-[#CAE942]/30 rounded-2xl p-8 shadow-2xl hover:shadow-[#CAE942]/20 hover:border-[#CAE942]/50 transition-all duration-300 flex flex-col gap-4 transform hover:-translate-y-2"
        >
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-xl font-bold text-[#CAE942] m-0 p-0">
              Offbeat Kochi Taxi Destinations
            </h1>
          </div>
          <div className="text-sm space-y-6 grid grid-cols-1 gap-3">
            <div className="flex items-start gap-2">
              <GoDotFill className="text-[#CAE942] text-base mt-1" />
              <div>
                <h2 className="font-semibold">Kochi to Jadayupara:</h2> 80 km | 2
                hrs | ₹2,800–₹3,200
                <ul className="ml-5 mt-1 space-y-1">
                  <li className="flex items-start gap-2">
                    <GoDotFill className="text-[#ffffff] mt-1" />
                    <span>World’s largest bird sculpture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GoDotFill className="text-[#ffffff] mt-1" />
                    <span>Ziplining & cable car</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GoDotFill className="text-[#CAE942] text-base mt-1" />
              <div>
                <h2 className="font-semibold">Kochi to Varkala:</h2> 160 km | 4.5
                hrs | ₹4,500+
                <ul className="ml-5 mt-1 space-y-1">
                  <li className="flex items-start gap-2">
                    <GoDotFill className="text-[#ffffff] mt-1" />
                    <span>Cliff beaches, sunsets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GoDotFill className="text-[#ffffff] mt-1" />
                    <span>Temples & shopping streets</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GoDotFill className="text-[#CAE942] text-base mt-1" />
              <div>
                <h2 className="font-semibold">Kochi to Mandra & Samranikodi Islands:</h2> ₹3,500–₹4,000
                <ul className="ml-5 mt-1 space-y-1">
                  <li className="flex items-start gap-2">
                    <GoDotFill className="text-[#ffffff] mt-1" />
                    <span>Island ferry rides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GoDotFill className="text-[#ffffff] mt-1" />
                    <span>Peaceful rural backwater escapes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Packages Section */}
      <div className="mt-12 mb-5 text-center" ref={moreRef}>
        <p className="text-gray-300 mb-4 text-base md:text-lg">
          We don’t just limit our taxi packages to Kochi! CarbonCabs also offers
          curated cab tours from Trivandrum, Calicut, and other Kerala cities.
          Explore temple circuits, beach escapes, hill station adventures and more.
        </p>
        <a
          href="/packages"
          className="inline-block bg-[#CAE942] text-[#232526] font-bold px-6 py-3 rounded-lg shadow hover:bg-[#b6d82f] transition"
        >
          Explore More Packages
        </a>
      </div>
    </section>
  );
}
