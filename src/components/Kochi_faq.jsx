'use client';
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const kochiFaqs = [
	{
		question: "What is included in the Kochi taxi tour package fare?",
		answer: "Our pricing includes vehicle charges, fuel, driver allowance, and tolls (if mentioned). Parking, entrance tickets, and personal expenses like food or boating fees are not included unless stated."
	},
	{
		question: "Can I customize my Kochi taxi tour itinerary?",
		answer: "Absolutely! You can personalize your pickup point, destinations, halts, and return plan. Just call or WhatsApp us at 91 9895519435 and we’ll tailor your trip."
	},
	{
		question: "Are your drivers familiar with tourist spots and local languages?",
		answer: "Yes, our local drivers are trained, experienced, and fluent in Malayalam, English, and Hindi. They also act as basic guides during sightseeing."
	},
	{
		question: "Is it safe to travel with Carbon Cabs for solo or family trips?",
		answer: "Definitely. Our cabs are GPS-enabled, regularly sanitized, and our drivers are verified and courteous. We also offer 24/7 customer support for your peace of mind."
	},
	{
		question: "How do I book a Kochi to Munnar or Alleppey taxi?",
		answer: (
			<span>
				Booking is simple:
				<ul className="list-disc ml-5 mt-1 space-y-1">
					<li>Choose your preferred vehicle</li>
					<li>Call or WhatsApp us at +91 9895519435</li>
					<li>Confirm your pickup, destination, and timing</li>
					<li>Enjoy a comfortable ride with Carbon Cabs!</li>
				</ul>
			</span>
		)
	},
	{
		question: "What if I need airport pickup in Kochi?",
		answer: "We provide prompt airport taxi service from Cochin International Airport to anywhere in Kerala. Just share your flight number and arrival time during booking."
	},
	{
		question: "Can I get a round-trip package or multiple stops in one booking?",
		answer: "Yes! We offer round trips, multiple-stop tours, and return-on-different-day options. You can also club places like Munnar + Thekkady + Alleppey in one trip."
	},
	{
		question: "What types of vehicles are available for Kochi taxi tours?",
		answer: (
			<span>
				We have a wide fleet:
				<ul className="list-disc ml-5 mt-1 space-y-1">
					<li>Sedan: For 2–4 travelers (budget-friendly)</li>
					<li>SUV: For families or hill station tours</li>
					<li>Tempo Traveller & Urbania: For 9–17 people, ideal for groups</li>
				</ul>
			</span>
		)
	},
	{
		question: "What if my plan changes last minute?",
		answer: "We understand travel plans can shift. Just inform us at the earliest for a reschedule or cancellation. Flexible options available depending on the notice period."
	},
	{
		question: "Do you offer special rates for senior citizens or group tours?",
		answer: "Yes, we provide discounted rates for senior citizens, group bookings, and repeat customers. Feel free to inquire while booking!"
	}
];

export default function Kochi_faq() {
	const [openIndex, setOpenIndex] = useState(null);

	const headingRef = useRef(null);
	const paraRef = useRef(null);
	const faqListRef = useRef(null);

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
					stagger: 0.12,
					delay: 0.2,
					scrollTrigger: {
						trigger: faqListRef.current,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				}
			);
		}
	}, []);

	return (
		<div className="container-padding w-full">
			<h2 className="heading-h2 text-center mb-2" ref={headingRef}>Kochi Taxi Tour Packages – FAQs</h2>
			<p className="paragraph-p text-center mb-8 text-gray-300" ref={paraRef}>
				Answers to the most common questions about Kochi taxi packages, booking, vehicles, and safety.
			</p>
			<div className="divide-y divide-[#373737]" ref={faqListRef}>
				{kochiFaqs.map((faq, idx) => (
					<div key={idx} className="faq-item">
						<button
							className="w-full flex justify-between items-center px-0 py-4 text-left focus:outline-none"
							onClick={() => setOpenIndex(idx)}
							aria-expanded={openIndex === idx}
							aria-controls={`faq-answer-${idx}`}
						>
							<span className="text-lg font-semibold text-[#CAE942]">{faq.question}</span>
							<span
								className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full transition bg-[#CAE942] text-[#232526] text-xl ${
									openIndex === idx ? 'rotate-45' : ''
								}`}
							>
								+
							</span>
						</button>
						{openIndex === idx && (
							<div
								id={`faq-answer-${idx}`}
								className="pb-4 text-gray-200 animate-fade-in"
							>
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}