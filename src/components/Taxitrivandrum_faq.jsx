"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trivandrumTaxiFaqs = [
  {
    question: "Which is the most reliable taxi service in Trivandrum city?",
    answer: "Carbon Cabs is consistently rated as the most reliable taxi service in Trivandrum, known for professional drivers, clean vehicles, and on-time performance for city and outstation travel."
  },
  {
    question: "Can I book a taxi for a half-day Trivandrum city tour?",
    answer: "Yes, we offer flexible 4-hour and 8-hour city tour packages to visit iconic spots like Padmanabhaswamy Temple, the Zoo, and the Museum."
  },
  {
    question: "Do you provide outstation taxi services from Trivandrum?",
    answer: "Yes, we provide long-distance outstation taxi services to Kanyakumari, Kochi, Munnar, and other major tourist destinations in South India."
  },
  {
    question: "Can I book a taxi for a group of 6 or more people?",
    answer: "Absolutely. We offer premium SUVs like the Innova Crysta and Ertiga for groups of 6, and Tempo Travellers for larger groups of up to 26 people."
  },
  {
    question: "Does Carbon Cabs cover suburban areas like Attingal or Neyyattinkara?",
    answer: "Yes, our taxi service extends beyond the city to all major suburbs including Attingal, Neyyattinkara, Nedumangad, and Vizhinjam."
  },
  {
    question: "Can I pre-schedule a taxi for an early morning pickup?",
    answer: "Yes, we encourage pre-scheduling for early morning trips. We guarantee that your assigned driver will be at your doorstep at the requested time."
  },
  {
    question: "Are your taxi drivers familiar with local sightseeing spots?",
    answer: "Our drivers are local experts who know all the major tourist landmarks, shopping hubs, and hidden gems in and around Trivandrum."
  },
  {
    question: "What types of vehicles are available in your fleet?",
    answer: "Our diverse fleet includes budget sedans (Dzire/Etios), premium SUVs (Innova), and luxury group vans like the Force Urbania."
  },
  {
    question: "Do you offer taxi services for weddings and events?",
    answer: "Yes, we provide fleet management for weddings, including luxury car rentals and guest transport solutions."
  },
  {
    question: "How do I pay for my Trivandrum taxi ride?",
    answer: "You can pay conveniently via Cash, Google Pay, PhonePe, or Bank Transfer at the end of your trip."
  }
];

export default function TrivandrumTaxi_FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqListRef = useRef(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": trivandrumTaxiFaqs.map(faq => ({
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
    <section className="py-20 bg-[#1B1B1B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-padding max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-[#CAE942] text-center mb-12">Trivandrum Taxi <span className="text-white">Service FAQs</span></h2>
        <div className="space-y-4" ref={faqListRef}>
          {trivandrumTaxiFaqs.map((faq, idx) => (
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