'use client';
import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallTaxi_priceChart() {
  const priceData = [
    {
      route: "Central Railway Station ↔ Technopark",
      sedan: "₹450",
      suv: "₹600"
    },
    {
      route: "East Fort ↔ Medical College",
      sedan: "₹250",
      suv: "₹350"
    },
    {
      route: "Statue Junction ↔ Trivandrum Airport (TRV)",
      sedan: "₹350",
      suv: "₹450"
    },
    {
      route: "Kazhakkoottam ↔ Peroorkada",
      sedan: "₹500",
      suv: "₹700"
    }
  ];

  const chartRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
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
    }
    if (chartRef.current) {
      gsap.fromTo(
        chartRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container-padding py-16 bg-[#1B1B1B]">
      <div className="max-w-4xl mx-auto">
        <h2
          className="heading-h2 text-center text-[#CAE942] mb-2"
          ref={headingRef}
        >
          24/7 Call Taxi Fare Chart (2026)
        </h2>
        <p className="text-center text-gray-400 mb-10 text-sm max-w-2xl mx-auto">
          Fixed city rates with no surge pricing. Whether you are heading to the office or returning home late at night, these are our transparent 2026 estimates.
        </p>

        <div
          className="overflow-x-auto shadow-2xl rounded-2xl border border-[#CAE942]/10"
          ref={chartRef}
        >
          <table className="w-full bg-[#232526]">
            <thead>
              <tr className="bg-[#CAE942] text-black">
                <th className="px-6 py-5 text-left font-black tracking-tight">Popular City Routes</th>
                <th className="px-6 py-5 text-center font-black tracking-tight">Sedan Rate</th>
                <th className="px-6 py-5 text-center font-black tracking-tight">SUV Rate</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-800 hover:bg-[#2D2D2D] transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-[#232526]' : 'bg-[#1F2021]'
                  }`}
                >
                  <td className="px-6 py-5 text-gray-100 font-semibold">{item.route}</td>
                  <td className="px-6 py-5 text-center text-[#CAE942] font-black text-lg">{item.sedan}</td>
                  <td className="px-6 py-5 text-center text-[#CAE942] font-black text-lg">{item.suv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 bg-[#232526] border border-[#CAE942]/20 rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-bold text-[#CAE942] mb-5 flex items-center gap-2">
             Call Taxi Inclusions:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Average 15-minute pickup across city hubs",
              "Zero surge pricing during peak or rain hours",
              "GPS-tracked vehicles with Live Location sharing",
              "Professional drivers for safe night commutes",
              "Deep-sanitized interiors for every ride",
              "Fixed rates discussed before the trip starts"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#CAE942] font-bold">✓</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-6">Local city rides start at <strong>₹150</strong>. Call now for a 15-minute pickup.</p>
          <a
            href="tel:+919895519435"
            className="inline-flex items-center gap-3 bg-[#CAE942] text-black px-10 py-4 rounded-xl font-black hover:scale-105 transition-transform duration-200 shadow-[0_10px_30px_rgba(202,233,66,0.2)]"
          >
            Call 24/7 for Taxi: +91 9895519435
          </a>
        </div>
      </div>
    </div>
  );
}