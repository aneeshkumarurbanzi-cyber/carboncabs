'use client';
import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Airport_priceChart() {
  const priceData = [
    {
      route: "Trivandrum Airport → Kovalam",
      sedan: "₹350",
      suv: "₹450"
    },
    {
      route: "Trivandrum Airport → East Fort (City Center)",
      sedan: "₹150",
      suv: "₹200"
    },
    {
      route: "Trivandrum Airport → Varkala",
      sedan: "₹800",
      suv: "₹1000"
    },
    {
      route: "Trivandrum Airport → Kanyakumari",
      sedan: "₹2000",
      suv: "₹2500"
    }
  ];

  const chartRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (chartRef.current) {
      gsap.fromTo(
        chartRef.current,
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container-padding py-12">
      <div className="max-w-4xl mx-auto">
        <h2
          className="heading-h2 text-center text-[#CAE942] mb-2"
          ref={headingRef}
        >
          Airport Taxi Fare Chart
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          *Prices are estimated. Final fare will be discussed during communication based on current traffic conditions and special requests.
        </p>

        <div
          className="overflow-x-auto shadow-lg rounded-lg border border-[#CAE942]/20"
          ref={chartRef}
        >
          <table className="w-full bg-[#232526]">
            <thead>
              <tr className="bg-[#CAE942] text-black">
                <th className="px-6 py-4 text-left font-bold">Route (From Airport)</th>
                <th className="px-6 py-4 text-center font-bold">Sedan Rate</th>
                <th className="px-6 py-4 text-center font-bold">SUV Rate</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-[#CAE942]/20 hover:bg-[#2D2D2D] transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-[#232526]' : 'bg-[#1F2021]'
                  }`}
                >
                  <td className="px-6 py-4 text-gray-100 font-medium">{item.route}</td>
                  <td className="px-6 py-4 text-center text-[#CAE942] font-bold">{item.sedan}</td>
                  <td className="px-6 py-4 text-center text-[#CAE942] font-bold">{item.suv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-[#1F2021] border border-[#CAE942]/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#CAE942] mb-3">What's Included?</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#CAE942] mt-1">✓</span>
              <span>Professional & courteous drivers familiar with Trivandrum and surrounding areas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#CAE942] mt-1">✓</span>
              <span>Clean, well-maintained, GPS-enabled vehicles with sanitized interiors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#CAE942] mt-1">✓</span>
              <span>24/7 availability for early morning or late-night flights</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#CAE942] mt-1">✓</span>
              <span>Fixed rates with no surge pricing</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-4">Need a custom quote? Contact us for group bookings and long-distance trips.</p>
          <a
            href="tel:+919895519435"
            className="inline-block bg-[#CAE942] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#B8D63D] transition-colors duration-200 shadow-lg"
          >
            Call for Booking
          </a>
        </div>
      </div>
    </div>
  );
}
