"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const groupRentalFaqs = [
  {
    question: "What are the seating capacities available for group rentals in Trivandrum?",
    answer: "We offer a versatile 2026 fleet including 12-seater, 17-seater, and 26-seater Force Urbania and Tempo Travellers, as well as 35-seater to 50-seater luxury tourist buses for larger groups."
  },
  {
    question: "Which is more luxury: Force Urbania or Tempo Traveller?",
    answer: "The Force Urbania is our premium 2026 offering, featuring superior air suspension, increased legroom, larger panoramic windows, and modern aesthetics compared to the standard Tempo Traveller models."
  },
  {
    question: "Is a driver included in the rental price for Tempo Travellers and buses?",
    answer: "Yes, all our group vehicles come with professional, background-verified drivers experienced in long-distance travel. We do not offer self-drive rentals for these vehicle categories."
  },
  {
    question: "Can I book a Force Urbania or Bus for outstation trips like Munnar or Kanyakumari?",
    answer: "Absolutely. Our entire group fleet is perfect for multi-day tours. They are equipped with high-cool AC and comfortable push-back seats designed for Kerala's hill stations and long highway journeys."
  },
  {
    question: "Are your rental buses and vans air-conditioned?",
    answer: "We offer premium AC vehicles across all sizes. For large 50-seater buses, we also provide cost-effective Non-AC options to fit specific budget requirements for local events or pilgrimages."
  },
  {
    question: "Do you provide specialized support for Sabarimala pilgrimages?",
    answer: "Yes, we offer specialized Sabarimala packages for groups. Our drivers are well-versed in the forest routes, mandatory stopovers, and specific pilgrimage protocols."
  },
  {
    question: "Do your buses have permits for travel to other states like Tamil Nadu?",
    answer: "Yes, all our large vehicles have valid All-India Tourist Permits. We handle all state-tax and permit formalities for trips to destinations like Kanyakumari, Madurai, or Mysore."
  },
  {
    question: "Are there onboard washrooms or entertainment systems available?",
    answer: "Select premium models in our 2026 fleet include onboard washrooms. All our Urbania, Tempo Traveller, and luxury buses come equipped with LED TVs and high-quality audio systems."
  },
  {
    question: "How far in advance should I book a 26-seater or 50-seater for a wedding?",
    answer: "For peak wedding dates and large vehicles, we recommend booking at least 2–4 weeks in advance to ensure the availability of your preferred vehicle model."
  },
  {
    question: "Can I brand or decorate the bus for a corporate event or wedding?",
    answer: "Yes, we allow external decorations for weddings or corporate branding for events, provided the materials used do not damage the vehicle's finish or block the driver's visibility."
  }
];

export default function GroupRental_FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqListRef = useRef(null);

  // SEO Schema for Group Rental Page (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": groupRentalFaqs.map(faq => ({
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
    <section className="bg-[#1B1B1B] py-20 border-t border-white/5">
      {/* Injecting SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#CAE942] mb-4">
            Group Vehicle Rental <span className="text-white">FAQs</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about Urbania, Tempo Traveller, and Bus rentals in Trivandrum.
          </p>
        </div>

        <div className="space-y-4" ref={faqListRef}>
          {groupRentalFaqs.map((faq, idx) => (
            <div key={idx} className="faq-item border-b border-white/10 group">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-[#CAE942]' : 'text-white group-hover:text-[#CAE942]'}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform ${openIndex === idx ? 'rotate-45 text-white' : 'text-[#CAE942]'}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed border-l-2 border-[#CAE942] pl-6">
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