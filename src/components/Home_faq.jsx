"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const homeFaqs = [
  {
    question: "Which is the best 24/7 taxi service in Trivandrum for 2026?",
    answer: "Carbon Cabs is the highest-rated 24/7 taxi service in Trivandrum, offering local rides, airport transfers, and outstation rentals with a 15-minute pickup guarantee."
  },
  {
    question: "What areas in Trivandrum does Carbon Cabs cover?",
    answer: "We cover the entire city including East Fort, Thampanoor, Technopark, Kovalam, Vattiyoorkavu, Peroorkada, and suburban areas like Neyyattinkara and Attingal."
  },
  {
    question: "How can I book a cab in Trivandrum right now?",
    answer: "You can book instantly by calling our 24/7 helpline or sending a WhatsApp message to +91 9895519435 for immediate dispatch."
  },
  {
    question: "Are Carbon Cabs drivers background-verified?",
    answer: "Yes, all our drivers are strictly background-verified professionals with clean records and expert knowledge of Kerala’s routes."
  },
  {
    question: "Does Carbon Cabs provide luxury car rentals for weddings?",
    answer: "Yes, we offer a range of luxury sedans and premium SUVs like the Innova Crysta for weddings and special corporate events."
  },
  {
    question: "Can I share my live location with family during a Carbon Cabs ride?",
    answer: "Absolutely. Every 2026-standard ride with us includes a live GPS tracking link that you can share via WhatsApp for total security."
  },
  {
    question: "What are the payment options for taxi booking?",
    answer: "We accept all major payment methods including Cash, UPI (GPay/PhonePe)."
  },
  {
    question: "Does Carbon Cabs offer tour packages from Trivandrum?",
    answer: "Yes, we specialize in customized tour packages to Munnar, Kanyakumari, Varkala, and Alleppey with dedicated tourist-friendly drivers."
  },
  {
    question: "Are your vehicles sanitized for 2026 safety standards?",
    answer: "Yes, we follow rigorous hygiene protocols. Every vehicle undergoes daily deep cleaning and sanitization to ensure passenger safety."
  },
  {
    question: "Is Carbon Cabs cheaper than app-based aggregators?",
    answer: "Unlike app-based services, we offer transparent fixed rates with no surge pricing during rain or peak hours, often making us more affordable and reliable."
  }
];

export default function Home_faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const faqListRef = useRef(null);

  // FAQ Schema for SEO (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
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
      [headingRef.current, paraRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    if (faqListRef.current) {
      gsap.fromTo(
        faqListRef.current.querySelectorAll(".faq-item"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqListRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#1B1B1B] py-20">
      {/* Injecting SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#CAE942] mb-4" ref={headingRef}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg" ref={paraRef}>
            Everything you need to know about Trivandrum's #1 Taxi Service.
          </p>
        </div>

        <div className="space-y-4" ref={faqListRef}>
          {homeFaqs.map((faq, idx) => (
            <div key={idx} className="faq-item border-b border-white/10 group">
              <button
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === idx ? 'text-[#CAE942]' : 'text-white group-hover:text-[#CAE942]'}`}>
                  {faq.question}
                </span>
                <span
                  className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    openIndex === idx ? 'bg-white text-black rotate-45' : 'bg-[#CAE942] text-black'
                  }`}
                >
                  <span className="text-2xl font-light">+</span>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-[#CAE942] pl-6 ml-1">
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