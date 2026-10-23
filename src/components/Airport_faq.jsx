"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const airportFaqs = [
  {
    question: "Which terminal does Carbon Cabs serve at Trivandrum Airport?",
    answer: "We provide 24/7 pickup and drop services for both Terminal 1 (Domestic/Chakkai) and Terminal 2 (International/Shangumugham) at Trivandrum International Airport (TRV)."
  },
  {
    question: "How do I find my taxi at TRV Airport after landing?",
    answer: "Your driver will be waiting at the arrival gate with a name placard. You will also receive the driver’s contact details via WhatsApp before you land to ensure a smooth connection."
  },
  {
    question: "Does Carbon Cabs charge extra for flight delays?",
    answer: "No. We track your flight status in real-time. If your flight is delayed, we adjust the pickup time automatically at no extra cost to you."
  },
  {
    question: "What is the taxi fare from Trivandrum Airport to Technopark?",
    answer: "We offer a fixed corporate rate of ₹499 for transfers between TRV Airport and any phase of Technopark, including Phase 1, Phase 2 (Ganga/Yamuna), and Phase 3."
  },
  {
    question: "Do you have large vehicles for airport groups with heavy luggage?",
    answer: "Yes, we have spacious SUVs like the Ertiga and Innova Crysta, as well as 12-seater Force Urbania vans specifically for large families with multiple suitcases."
  },
  {
    question: "Can I pre-book an airport taxi for a 3 AM flight?",
    answer: "Yes, pre-booking is highly recommended for early morning flights. We guarantee on-time arrival for all scheduled airport drops, ensuring you never miss a flight."
  },
  {
    question: "Is there a dedicated airport taxi service to Kovalam?",
    answer: "Yes, Carbon Cabs is the preferred choice for airport-to-Kovalam transfers, offering fixed rates for all beach resorts, hotels, and homestays."
  },
  {
    question: "Are tolls and parking included in the airport taxi fare?",
    answer: "Standard fares usually exclude tolls and airport parking; these are charged at actuals based on the official receipt provided by the driver at the end of the trip."
  },
  {
    question: "Can I book an airport cab via WhatsApp?",
    answer: "Yes, WhatsApp booking is the fastest way to secure your airport ride. Simply share your flight details and terminal number with us for instant confirmation."
  },
  {
    question: "Do you provide airport taxi services to outstation cities like Kochi or Kollam?",
    answer: "Yes, we provide long-distance airport transfers from Trivandrum to any city in Kerala or Tamil Nadu with fixed-rate transparency and professional drivers."
  }
];

export default function Airport_faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const headingRef = useRef(null);
  const faqListRef = useRef(null);

  // SEO Schema for Airport Page (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": airportFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      }
    );

    if (faqListRef.current) {
      gsap.fromTo(
        faqListRef.current.querySelectorAll(".faq-item"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqListRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#1B1B1B] py-24 border-t border-white/5">
      {/* FAQ Schema Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-padding max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#CAE942] leading-tight" ref={headingRef}>
            TRV Airport Taxi <br /> 
            <span className="text-white">Frequently Asked Questions</span>
          </h2>
          <div className="w-20 h-1 bg-[#CAE942] mt-6"></div>
        </div>

        <div className="space-y-2" ref={faqListRef}>
          {airportFaqs.map((faq, idx) => (
            <div key={idx} className="faq-item group">
              <button
                className={`w-full flex justify-between items-center p-6 text-left transition-all duration-300 rounded-2xl ${
                  openIndex === idx ? 'bg-[#232526] border border-[#CAE942]/30' : 'bg-transparent border border-white/5 hover:border-white/20'
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-[#CAE942]' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-45 text-white' : 'text-[#CAE942]'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100 p-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}