"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technoparkFaqs = [
  {
    question: "Does Carbon Cabs serve all phases of Technopark Trivandrum?",
    answer: "Yes, we provide 24/7 service to Phase 1, Phase 2 (Ganga/Yamuna/UST/Infosys), and Phase 3. Our drivers are well-versed with every campus gate and building layout."
  },
  {
    question: "Can I get a monthly cab for my daily Technopark commute?",
    answer: "Yes, we offer discounted monthly subscription plans for IT professionals. This provides a dedicated cab for your morning and evening commute at fixed, transparent rates."
  },
  {
    question: "Do you provide GST invoices for corporate reimbursements?",
    answer: "Absolutely. We provide automated, GST-compliant invoices for all Technopark bookings, making it effortless for employees to claim company travel reimbursements."
  },
  {
    question: "Is it safe to book a Carbon Cab for a late-night shift finish?",
    answer: "Safety is our priority. Our 'Night Safety Protocol' includes mandatory GPS tracking and live-location sharing for all IT employees finishing late-night project shifts."
  },
  {
    question: "What are the taxi rates from Technopark to Lulu Mall?",
    answer: "We offer a fixed-rate 'Techie Special' of ₹299 for transfers between Technopark phases and Lulu Mall or the Kochuveli area."
  },
  {
    question: "Can companies set up corporate accounts with Carbon Cabs?",
    answer: "Yes, we offer B2B corporate tie-ups with monthly billing cycles for companies located in Technopark Phases 1-3 and Kinfra Film & Video Park."
  },
  {
    question: "Do drivers know the shortcuts to avoid Kazhakkoottam traffic?",
    answer: "Our drivers are local experts in the Technopark corridor. They use 2026 GPS data and campus knowledge to bypass peak-hour bottlenecks, ensuring you reach meetings on time."
  },
  {
    question: "Can I book a large vehicle for a tech team outing?",
    answer: "Yes, we have 12-26 seater Force Urbania and Tempo Travellers available for team-building trips, office parties, and group events."
  },
  {
    question: "Are there special rates for TCS, Infosys, and UST employees?",
    answer: "Yes, we offer exclusive corporate discounts and priority dispatch for employees of major IT firms within the Technopark campus."
  },
  {
    question: "Do you provide inter-phase taxi transfers within Technopark?",
    answer: "Yes, we offer quick transfers between Phase 1 and Phase 3 for inter-office meetings at very nominal, fixed rates."
  }
];

export default function Technopark_FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqListRef = useRef(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": technoparkFaqs.map(faq => ({
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
        <h2 className="text-4xl font-black text-[#CAE942] text-center mb-12">Technopark Taxi <span className="text-white">Service FAQ</span></h2>
        <div className="space-y-4" ref={faqListRef}>
          {technoparkFaqs.map((faq, idx) => (
            <div key={idx} className="faq-item border-b border-white/10 group">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full py-6 text-left flex justify-between items-center">
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-[#CAE942]' : 'text-white group-hover:text-[#CAE942]'}`}>{faq.question}</span>
                <span className={`text-2xl transition-transform ${openIndex === idx ? 'rotate-45' : ''} text-[#CAE942]`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed border-l-2 border-[#CAE942] pl-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}