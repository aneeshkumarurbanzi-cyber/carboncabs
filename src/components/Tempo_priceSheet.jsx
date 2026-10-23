'use client';
import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tempo_priceSheet(){
  const data = [
    { type: 'Tempo Traveller (Standard)', seats: '12 + 1', base: '₹8,000', extra: '₹24/km', batta: '₹500' },
    { type: 'Force Urbania (Premium)', seats: '12 + 1', base: '₹9,500', extra: '₹28/km', batta: '₹500' },
    { type: 'Tempo Traveller (Executive)', seats: '17 + 1', base: '₹11,000', extra: '₹26/km', batta: '₹600' },
    { type: 'Tempo Traveller / Urbania', seats: '26 + 1', base: '₹14,500', extra: '₹32/km', batta: '₹600' },
    { type: 'Luxury Mini Bus (AC)', seats: '35 + 1', base: '₹18,000', extra: '₹45/km', batta: '₹800' },
    { type: 'Premium Large Bus (AC)', seats: '49 + 1', base: '₹22,000', extra: '₹55/km', batta: '₹1,000' }
  ];

  const ref = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, { y: 40, opacity: 0 }, { y:0, opacity:1, duration:0.6, ease:'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 90%' } });
    }
    if (ref.current) {
      gsap.fromTo(ref.current, { y: 40, opacity: 0 }, { y:0, opacity:1, duration:0.7, ease:'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } });
    }
  }, []);

  return (
    <section className="container-padding py-12">
      <div className="max-w-5xl mx-auto">
        <h2 ref={headingRef} className="heading-h2 text-[#CAE942] text-center mb-4">Tempo & Urbania Rental Price Sheet</h2>
        <p className="text-center text-gray-400 mb-6">Estimated packages for 12 hours / 80 km. Final price will be confirmed during booking based on route, extras, and any special requests.</p>

        <div ref={ref} className="overflow-x-auto rounded-lg border border-[#CAE942]/20 shadow-lg">
          <table className="w-full text-left bg-[#232526] min-w-[800px]">
            <thead>
              <tr className="bg-[#CAE942] text-black">
                <th className="px-6 py-3">Vehicle Type</th>
                <th className="px-6 py-3">Seats</th>
                <th className="px-6 py-3 text-center">Base Fare (12 Hr / 80 Km)</th>
                <th className="px-6 py-3 text-center">Extra Km Rate</th>
                <th className="px-6 py-3 text-center">Driver Batta (Per Day)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-[#232526]' : 'bg-[#1F2021]'} border-t border-[#CAE942]/10 hover:bg-[#2D2D2D] transition-colors`}>
                  <td className="px-6 py-4 text-gray-100 font-medium">{row.type}</td>
                  <td className="px-6 py-4 text-gray-200">{row.seats}</td>
                  <td className="px-6 py-4 text-center text-[#CAE942] font-bold">{row.base}</td>
                  <td className="px-6 py-4 text-center text-gray-200">{row.extra}</td>
                  <td className="px-6 py-4 text-center text-gray-200">{row.batta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-[#1F2021] border border-[#CAE942]/30 rounded-lg p-5">
          <h3 className="text-[#CAE942] font-semibold mb-2">Notes</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Base fare covers 12 hours and up to 80 km. Additional km charged as per the Extra Km Rate.</li>
            <li>Driver Batta is payable per day and may vary for night shifts or state permits.</li>
            <li>Final price is an estimate — exact fare will be discussed and confirmed during booking.</li>
            <li>GST, tolls, parking, and permits (if any) are not included unless specified.</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">For group bookings, multi-day rentals, or custom routes, contact us for a tailored quote.</p>
          <a href="https://wa.me/919895519435?text=Hi%20Carbon%20Cabs,%20I%20want%20to%20book%20a%20group%20travel." className="inline-block bg-[#CAE942] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#B8D63D] transition-shadow shadow-md">Call for Quote</a>
        </div>
      </div>
    </section>
  );
}
