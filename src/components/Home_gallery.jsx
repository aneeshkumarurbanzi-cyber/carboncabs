"use client";
import Image from "next/image";
// The 'import' statements for Photo1, photo2, and photo3 have been deleted.

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home_gallery() {
    const headingRef = useRef(null);
    const btnRef = useRef(null);
    const paraRef = useRef(null);
    const gridRef = useRef(null);


    const photos = [
        {
            src: '/assets/Gallery_etios.webp', // Path fixed
            alt: "Gallery Image 1"
        },
        {
            src: '/assets/Gallery_guna_cave.webp',
            alt: "Gallery Image 2"
        },
        {
            src: '/assets/Gallery_Munnar_travel.webp',
            alt: "Gallery Image 3"
        }
    ];

    // Your GSAP animation logic is perfect and has not been changed.
    useEffect(() => {
        gsap.fromTo(
            [headingRef.current, btnRef.current, paraRef.current],
            { y: 90, opacity: 0 },
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
        if (gridRef.current) {
            gsap.fromTo(
                gridRef.current.querySelectorAll(".gallery-image-container"),
                { y: 90, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.13,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <div className="container-padding flex flex-col gap-5">
            <div className="flex justify-between items-center gap-5">
                <div className="flex flex-col gap-4">
                    <h2 className="heading-h2" ref={headingRef}>Gallery</h2>
                </div>
                <a
                    href="/gallery"
                    className="bg-[#CAE942] text-black px-4 py-2 rounded"
                    ref={btnRef}
                >
                    View More
                </a>
            </div>
            <p className='paragraph-p' ref={paraRef}>
                See our drivers in action and our modern fleet ready to serve you.
            </p>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                ref={gridRef}
            >
                {photos.map((photo, index) => (
                    // FIX: This parent div now correctly controls the image size.
                    // It has position: relative, a defined height, and overflow: hidden.
                    <div 
                      key={index} 
                      className="gallery-image-container relative h-80 lg:h-96 w-full overflow-hidden rounded-lg"
                    >
                        {/* FIX: The Image component uses 'fill' to be responsive. */}
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            className="transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
