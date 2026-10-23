'use client';
import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrivandrumTaxi_priceChart() {
  const priceData = [
    {
      vehicle: "Sedan (Etios / Swift Dzire)",
      base: "₹3,000",
      extra: "₹16/km",
      capacity: "4 Passengers"
    },
    {
      vehicle: "SUV (Ertiga / Marazzo)",
      base: "₹4,000",
      extra: "₹20/km",
      capacity: "6 Passengers"
    },
    {
      vehicle: "Premium SUV (Innova Crysta)",
      base: "₹5,500", // Adjusted for 2026 Premium positioning
      extra: "₹24/km",
      capacity: "7 Passengers"
    },
    {
      vehicle: "Tempo Traveller / Urbania",
      base: "Contact Us",
      extra: "Custom Rates",
      capacity: "12-26 Seats"
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
    <section className="container-padding py-16 bg-[#1B1B1B]">
      <div className="max-w-5xl mx-auto">
        <h2
          className="heading-h2 text-center text-[#CAE942] mb-4"
          ref={headingRef}
        >
          Trivandrum Taxi Fare Chart (2026)
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Transparent pricing for local city travel and outstation trips. Our rates are fixed for 2026 to ensure you get the best value without hidden surprises.
        </p>

        <div
          className="overflow-x-auto shadow-2xl rounded-2xl border border-[#CAE942]/10"
          ref={chartRef}
        >
          <table className="w-full bg-[#232526] text-left border-collapse">
            <thead>
              <tr className="bg-[#CAE942] text-black uppercase text-sm tracking-wider">
                <th className="px-8 py-5 font-black">Vehicle Type</th>
                <th className="px-8 py-5 font-black text-center">Base Fare (First 100km)</th>
                <th className="px-8 py-5 font-black text-center">Extra KM Rate</th>
                <th className="px-8 py-5 font-black text-center">Capacity</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-800 hover:bg-[#2D2D2D] transition-colors duration-200 group ${
                    index % 2 === 0 ? 'bg-[#232526]' : 'bg-[#1F2021]'
                  }`}
                >
                  <td className="px-8 py-6 text-gray-100 font-bold text-lg">{item.vehicle}</td>
                  <td className="px-8 py-6 text-center text-[#CAE942] font-black text-xl">{item.base}</td>
                  <td className="px-8 py-6 text-center text-white font-bold">{item.extra}</td>
                  <td className="px-8 py-6 text-center text-gray-400 text-sm">{item.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#232526] p-8 rounded-2xl border-l-4 border-[#CAE942] shadow-lg">
            <h3 className="text-xl font-bold text-[#CAE942] mb-4">Pricing Terms</h3>
            <ul className="text-gray-300 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-[#CAE942]">●</span>
                <span>Base fare includes driver allowance and the first 100 kilometers.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#CAE942]">●</span>
                <span>Tolls, State Permits, and Parking charges are extra as per actuals.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#CAE942]">●</span>
                <span>For multi-day trips, driver night stay charges may apply after 10 PM.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#CAE942] p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-black text-black mb-2">Need a Custom Quote?</h3>
            <p className="text-black/80 mb-6 font-medium">For wedding events, corporate contracts, or Kerala tour packages.</p>
            <a
              href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I'd%20like%20to%20enquire%20about%20booking%20a%20taxi%20in%20Trivandrum.%20Could%20you%20please%20share%20the%20availability%20and%20fare%20details?"
              className="bg-black text-[#CAE942] px-10 py-4 rounded-xl font-black hover:scale-105 transition-transform duration-200 shadow-xl"
            >
              Get Instant WhatsApp Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}