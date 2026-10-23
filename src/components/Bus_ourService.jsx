'use client';
import { FaRoute, FaBuilding, FaChurch, FaPlaneArrival, FaRoad, FaClipboardList } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Bus_ourservices() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const gridRef = useRef(null);

  const Service = [
    {
      title: "Tourist Tempo Traveller Rental in Trivandrum",
      discription:
        "Ideal for sightseeing tours, pilgrimage routes, and Kerala road trips. Enjoy comfortable group travel with expert drivers.",
      icon: <FaRoute />,
    },

    {
      title: "Urbania Rental for Corporate Outings",
      discription:
        "Spacious, AC Urbania vans perfect for team travel, seminars, and office tours in and around Trivandrum.",
      icon: <FaBuilding />,
    },

    {
      title: "Wedding Group Transport in Trivandrum",
      discription:
        "Book luxury tempo travellers or Urbania vans for family or guest transport during weddings and special occasions.",
      icon: <FaChurch />,
    },

    {
      title: "Airport Transfers for Large Groups",
      discription:
        "Reliable pickup and drop-off service from Trivandrum Airport for big families or corporate teams.",
      icon: <FaPlaneArrival />,
    },

    {
      title: "Outstation Tempo Traveller Hire from Trivandrum",
      discription:
        "Travel to destinations like Kanyakumari, Munnar, or Kochi with ease using our long-distance tempo traveller rentals.",
      icon: <FaRoad />,
    },

    {
      title: "Custom Group Travel Packages",
      discription:
        "Flexible travel plans for educational tours, spiritual journeys, and weekend escapes across South India.",
      icon: <FaClipboardList />,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, paraRef.current],
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.13,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".bus-service-card"),
        { y: 60, opacity: 0 },
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
      <h2 className="heading-h2" ref={headingRef}>Our Services – Group Travel Made Easy</h2>
      <p className="paragraph-p" ref={paraRef}>
        Explore our popular services designed for large group travel across Kerala and beyond:
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        ref={gridRef}
      >
        {Service.map((service, index) => (
          <div
            key={index}
            className="bus-service-card bg-[#232526] p-6 rounded-lg shadow-lg flex flex-col border items-center gap-4 transition-transform duration-200 hover:-translate-y-2 hover:border-[#CAE942] hover:shadow-2xl"
          >
            <div className="text-4xl text-[#CAE942]">{service.icon}</div>
            <h3 className="text-xl font-semibold text-center text-[#CAE942]">
              {service.title}
            </h3>
            <p className="text-gray-200 text-center">{service.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
