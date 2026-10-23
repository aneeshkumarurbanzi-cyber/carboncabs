"use client";
import React, { useRef, useEffect } from "react";
import { FaFileInvoice, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technoparkRates = [
  { route: "Inter-Phase Transfer (P1 to P3)", sedan: "₹150", suv: "₹250" },
  { route: "Technopark to Trivandrum Airport", sedan: "₹499", suv: "₹749" },
  { route: "Technopark to Central Railway Stn", sedan: "₹450", suv: "₹699" },
  { route: "Technopark to Lulu Mall / Kochuveli", sedan: "₹299", suv: "₹450" },
  { route: "Technopark to Kovalam / Vizhinjam", sedan: "₹650", suv: "₹950" },
];

export default function Technopark_pricing() {
  const tableRef = useRef(null);
  const monthlyCardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      tableRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      monthlyCardRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: monthlyCardRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="container-padding py-20 bg-[#1B1B1B]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#CAE942] mb-4">
            Transparent Corporate Pricing 2026
          </h2>
          <p className="text-gray-300 text-lg">
            No surge pricing. No hidden costs. GST Invoices provided for all corporate rides.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Detailed Pricing Table */}
          <div className="lg:col-span-2 overflow-hidden" ref={tableRef}>
            <div className="bg-[#232526] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2D2D2D] text-[#CAE942] uppercase text-sm tracking-widest">
                    <th className="p-6">Popular Routes</th>
                    <th className="p-6">Sedan</th>
                    <th className="p-6">SUV</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  {technoparkRates.map((rate, idx) => (
                    <tr key={idx} className="border-t border-gray-800 hover:bg-[#2d2d2d] transition-colors">
                      <td className="p-6 font-medium">{rate.route}</td>
                      <td className="p-6 font-bold text-white">{rate.sedan}</td>
                      <td className="p-6 font-bold text-white">{rate.suv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 bg-[#2d2d2d]/50 flex items-center gap-2 text-gray-400 text-xs italic">
                <FaInfoCircle className="text-[#CAE942]" />
                *Toll and Parking charges extra as per actuals. Rates are inclusive of GST.
              </div>
            </div>
          </div>

          {/* Monthly Subscription Card */}
          <div ref={monthlyCardRef} className="h-full">
            <div className="bg-gradient-to-b from-[#CAE942] to-[#b5d534] p-8 rounded-3xl shadow-2xl flex flex-col h-full border-4 border-white/10">
              <div className="flex items-center gap-3 mb-6 text-[#1B1B1B]">
                <FaFileInvoice className="text-3xl" />
                <h3 className="text-2xl font-black uppercase tracking-tight">Monthly Plans</h3>
              </div>
              
              <p className="text-[#1B1B1B] font-bold text-lg mb-6">
                Starting from <span className="text-3xl">₹5,999</span> / month
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Dedicated driver & vehicle",
                  "Priority peak-hour pickup",
                  "Single monthly GST invoice",
                  "Flexible rescheduling",
                  "Emergency backup vehicle"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#1B1B1B] font-medium text-sm">
                    <FaCheckCircle className="mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/919895519435?text=I%20am%20interested%20in%20Technopark%20Monthly%20Subscription"
                className="mt-auto block text-center bg-[#1B1B1B] text-white py-4 rounded-xl font-black hover:bg-gray-800 transition-all shadow-xl"
              >
                Inquire for Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}