"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const callTaxiFaqs = [
  {
    question: "Is there a call taxi near me in Trivandrum right now?",
    answer: "Yes, Carbon Cabs offers the fastest 'near me' response time in Trivandrum. With drivers stationed at major hubs, we typically reach your location in under 15 minutes."
  },
  {
    question: "Can I book a call taxi for Thampanoor Railway Station?",
    answer: "Absolutely. We have a dedicated standby point at Thampanoor (Trivandrum Central) to ensure quick pickups from both the North and South exits at any hour."
  },
  {
    question: "What is the minimum fare for a local call taxi in Trivandrum?",
    answer: "Our local city rides start at a budget-friendly ₹150, providing an affordable option for short commutes to offices, malls, or residences."
  },
  {
    question: "Do you provide call taxis for hospital emergencies?",
    answer: "Yes, we prioritize medical runs to KIMS, Cosmo, and the Medical College 24/7 with immediate vehicle dispatch."
  },
  {
    question: "How do I track my call taxi once it is booked?",
    answer: "Once booked, you will receive a WhatsApp or SMS with a live GPS tracking link so you can see your driver's arrival in real-time."
  },
  {
    question: "Are your call taxis available on Sundays and Public Holidays?",
    answer: "Yes, Carbon Cabs is fully operational 365 days a year, including Sundays and major festivals like Onam and Christmas."
  },
  {
    question: "Do you have female-friendly call taxi services?",
    answer: "Safety is our priority. We assign only top-rated, background-verified professional drivers for solo female travelers and late-night rides."
  },
  {
    question: "Do you charge surge pricing during peak hours or rain?",
    answer: "No, Carbon Cabs follows a 2026 fixed-price guarantee. We do not charge surge pricing during heavy rain or peak traffic hours."
  },
  {
    question: "What if I forget an item in the taxi?",
    answer: "Every ride is logged in our 2026 digital system. If you lose an item, contact our support immediately, and we will help you retrieve it quickly."
  },
  {
    question: "Can I book a call taxi without an app?",
    answer: "Yes, you can book instantly by calling us or sending a WhatsApp message. No app download is required for a fast pickup."
  }
];

export default function CallTaxi_FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqListRef = useRef(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": callTaxiFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  useEffect(() => {
    if (faqListRef.current) {
      gsap.fromTo(faqListRef.current.querySelectorAll(".faq-item"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: faqListRef.current, start: "top 85%" }
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#1B1B1B] py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-padding max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-[#CAE942] text-center mb-12">Call Taxi Trivandrum <span className="text-white">FAQs</span></h2>
        <div className="space-y-4" ref={faqListRef}>
          {callTaxiFaqs.map((faq, idx) => (
            <div key={idx} className="faq-item border-b border-white/10 group">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full py-6 text-left flex justify-between items-center">
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-[#CAE942]' : 'text-white group-hover:text-[#CAE942]'}`}>{faq.question}</span>
                <span className={`text-2xl transition-transform ${openIndex === idx ? 'rotate-45' : ''} text-[#CAE942]`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}