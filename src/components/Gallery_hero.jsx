'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";



export default function Photos_hero() {

    const photos = [
        { id: 1, src: '/assets/gallery_innova_image.webp', alt: "Innova on a Kerala road trip" },
        { id: 2, src: '/assets/Galery_bus2.webp', alt: "Bus parked at tourist spot" },
        { id: 3, src: '/assets/Gallery_bus.webp', alt: "Luxury bus for group travel" },
        { id: 4, src: '/assets/Gallery_crysta.webp', alt: "Toyota Crysta for family travel" },
        { id: 5, src: '/assets/Gallery_etios.webp', alt: "Toyota Etios sedan for city rides" },
        { id: 7, src: '/assets/Gallery_guna_cave.webp', alt: "Guna Cave sightseeing" },
        { id: 8, src: '/assets/Gallery_mattupetty_dam_travel.webp', alt: "Mattupetty Dam travel memories" },
        { id: 9, src: '/assets/Gallery_Munnar_travel.webp', alt: "Munnar hill station trip" },
        { id: 10, src: '/assets/Gallery_On_the_way_kodaikanal_travel.webp', alt: "On the way to Kodaikanal" },
        { id: 11, src: '/assets/Gallery_tempo_backgroud.webp', alt: "Tempo Traveller at tourist spot" },
        { id: 12, src: '/assets/Gallery_tempo.webp', alt: "Tempo Traveller with scenic background" },
        { id: 13, src: '/assets/Gallery_tempo_interior.webp', alt: "Tempo Traveller interior view" },
        { id: 14, src: '/assets/Gallery_tempo1.webp', alt: "Tempo Traveller parked" },
        { id: 15, src: '/assets/Gallery_maruthi_dzire.webp', alt: "Maruthi Dzire for city travel" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const openModal = (idx) => {
        setCurrentIdx(idx);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    const prevPhoto = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const nextPhoto = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") prevPhoto(e);
            if (e.key === "ArrowRight") nextPhoto(e);
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIdx]);

    return (
        <div className="pt-30 lg:pt-40 min-h-screen">
            <div className="container-padding flex flex-col gap-10">
                <h1 className="Oranienbaum-font text-4xl font-bold text-center md:text-6xl text-white">
                    Gallery
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, idx) => (
                        <div
                            key={photo.id}
                            className="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative h-64 w-full"
                            onClick={() => openModal(idx)}
                        >
                            {/* FIX: Using the 'fill' prop for responsive grid images */}
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                                <span className="text-white text-lg font-semibold">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed pt-30 lg:pt-40 inset-0 z-50 bg-black/90 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-5 right-8 text-white text-4xl font-bold hover:text-red-400 transition"
                        onClick={closeModal}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-2 py-1 hover:bg-white/20 rounded transition"
                        onClick={prevPhoto}
                        aria-label="Previous"
                    >
                        &#8592;
                    </button>
                    <div
                        className="relative flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* FIX: Using width/height for the modal image for explicit sizing */}
                        <Image
                            src={photos[currentIdx].src}
                            alt={photos[currentIdx].alt}
                            width={1200}
                            height={800}
                            className="max-h-[70vh] w-auto max-w-[90vw] rounded-lg shadow-2xl object-contain"
                            priority
                        />
                        <div className="mt-4 text-white text-lg bg-black/60 px-4 py-2 rounded">
                            {photos[currentIdx].alt}
                        </div>
                    </div>
                    <button
                        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-2 py-1 hover:bg-white/20 rounded transition"
                        onClick={nextPhoto}
                        aria-label="Next"
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </div>
    );
}
