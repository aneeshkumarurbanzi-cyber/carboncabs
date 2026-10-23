"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaUsers } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cars = [
    {
        name: "Innova",
        capacity: "6 passengers + 1 driver",
        image: '/assets/innova.webp',
        features: [
            "Spacious with captain seats",
            "Comfortable for long-distance travel",
            "Rear AC for all passengers",
            "Ideal for families and small groups",
        ],
    },
    {
        name: "Innova Crysta",
        capacity: "7 passengers + 1 driver",
        image: '/assets/innova-crysta.webp',
        features: [
            "Bench seating in middle row",
            "Smooth and stable ride",
            "Suitable for weddings, tours, and airport drops",
            "Great for city and outstation travel",
        ],
    },
    {
        name: "Toyota Etios",
        image: '/assets/toyota-etios.webp',
        capacity: "4 passengers + 1 driver",
        features: [
            "Comfortable sedan for daily use",
            "Smooth ride quality",
            "Ideal for airport pickup and city rides",
            "Good for solo travelers or small families",
        ],
    },
    {
        name: "Swift Dzire",
        capacity: "4 passengers + 1 driver",
        image: '/assets/maruti-desire.webp',
        features: [
            "Compact and fuel-efficient",
            "Easy city navigation",
            "Best for short-distance and office travel",
            "Budget-friendly option",
        ],
    },
    {
        name: "Maruti Ertiga",
        capacity: "6 passengers + 1 driver",
        image: '/assets/ertiga.webp',
        features: [
            "Flexible seating with foldable rear seats",
            "Dual AC vents for better cooling",
            "Perfect for family outings and group travel",
            "Comfortable for both city and outstation trips",
        ],
    },
    {
        name: "Tempo Traveller 12-Seater",
        capacity: "12 passengers + 1 driver",
        image: '/assets/tempo-traveller-12-seat.webp',
        features: [
            "Spacious cabin with high roof",
            "Comfortable seating with pushback seats",
            "AC and non-AC options",
            "Ideal for small group tours and family trips",
        ],
    },
    {
        name: "Tempo Traveller 17-Seater",
        capacity: "17 passengers + 1 driver",
        image: '/assets/17-seat-Tempo-travaller.webp',
        features: [
            "Ample legroom and luggage space",
            "AC cooling for all rows",
            "Perfect for pilgrimages, tourist groups, and team outings",
            "Smooth suspension for long-distance comfort",
        ],
    },
    {
        name: "Tempo Traveller 26-Seater",
        capacity: "26 passengers + 1 driver",
        image: '/assets/26-seat-Tempo-travaller.webp',
        features: [
            "High-capacity group travel solution",
            "Comfortable seats with headrests",
            "Spacious aisle and overhead storage",
            "Best for school trips, corporate events, and functions",
        ],
    },
    {
        name: "Force Urbania",
        capacity: "12/19/26 passengers + 1 driver",
        image: '/assets/urbania.webp',
        features: [
            "Modern premium interiors with reclining seats",
            "AC vents for every seat",
            "USB charging ports and reading lights",
            "Available in 12, 19, and 26-seater configurations",
        ],
    },
];

export default function Bus_fleetOfCars() {
    const [start, setStart] = useState(0);
    const [visible, setVisible] = useState(1);
    const gridRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setVisible(3);
            } else if (window.innerWidth >= 768) {
                setVisible(2);
            } else {
                setVisible(1);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (gridRef.current) {
            gsap.fromTo(
                gridRef.current.querySelectorAll(".bus-fleet-card"),
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.18,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, [visible]);

    const maxStart = cars.length - visible;
    const handlePrev = () => setStart((s) => Math.max(0, s - 1));
    const handleNext = () => setStart((s) => Math.min(maxStart, s + 1));

    return (
        <div className="w-full py-5">
            <div className="container-padding flex flex-col items-center gap-5">
                <h2 className="heading-h2 text-center text-[#CAE942]">
                    Check our fleet of Vehicles
                </h2>
            </div>

            <div className="relative px-4 md:px-12 max-w-9xl mx-auto">
                <div className="overflow-hidden" ref={gridRef}>
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${start * (100 / visible)}%)` }}
                    >
                        {cars.map((car, idx) => (
                            <div
                                key={idx}
                                className="bus-fleet-card px-3 md:px-4 flex-shrink-0"
                                style={{ width: `${100 / visible}%` }}
                            >
                                <div className="bg-[#2D2D2D] rounded-2xl shadow-xl overflow-hidden h-full border border-[#CAE942]/20 hover:border-[#CAE942] hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                                    <div className="relative w-full h-48 md:h-56 xl:h-64">
                                        <div className="absolute top-0 right-0 bg-[#CAE942] text-[#232526] px-3 py-1 rounded-bl-lg font-semibold z-10">
                                            {car.name}
                                        </div>
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3 text-[#CAE942]">
                                            <FaUsers className="text-xl" />
                                            <span className="font-semibold">{car.capacity}</span>
                                        </div>
                                        <ul className="space-y-2 text-gray-200">
                                            {car.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-[#CAE942] mt-1">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handlePrev}
                    disabled={start === 0}
                    className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#CAE942] text-[#232526] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition duration-300 ${start === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"}`}
                    aria-label="Previous car"
                >
                    <span className="text-xl font-bold">←</span>
                </button>
                <button
                    onClick={handleNext}
                    disabled={start >= maxStart}
                    className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#CAE942] text-[#232526] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition duration-300 ${start >= maxStart ? "opacity-50 cursor-not-allowed" : "hover:bg-white"}`}
                    aria-label="Next car"
                >
                    <span className="text-xl font-bold">→</span>
                </button>
            </div>

            <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                    {[...Array(cars.length - visible + 1)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setStart(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === start ? "bg-[#CAE942]" : "bg-gray-400"}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            <p className="paragraph-p text-gray-200 pt-5 container-padding">
                More options available on request. All vehicles are regularly sanitized and maintained for maximum safety.
            </p>
        </div>
    );
}
