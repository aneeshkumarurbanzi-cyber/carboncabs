"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaGoogle, FaStar } from "react-icons/fa";
import Whastapp from "./Whastapp";

export default function Footer() {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState({ message: "", type: "" });

  const footerNavs = [
    {
      label: "Pages",
      items: [
        { href: "/", name: "Home", alt: "Home Page" },
        { href: "/about-us", name: "About Us", alt: "About Carbon Cabs" },
        { href: "/gallery", name: "Gallery", alt: "Fleet Gallery" },
        { href: "/contact-us", name: "Contact Us", alt: "Contact Us" },
        { href: "/blogs", name: "Blog", alt: "Travel Blog" },
      ],
    },
    {
      label: "Services",
      items: [
        { href: "/taxi-service-trivandrum", name: "Trivandrum Taxi Service", alt: "Taxi Service in Trivandrum" },
        { href: "/trivandrum-airport-taxi", name: "Airport Taxi Service", alt: "Airport Taxi Trivandrum" },
        { href: "/trivandrum-tempo-traveller-urbania-rentals", name: "Urbania & Bus Rentals", alt: "Urbania Rental Trivandrum" },
        { href: "/packages", name: "Kerala Tour Packages", alt: "Taxi Tour Packages" },
        { href: "/technopark-taxi-trivandrum", name: "Technopark Taxi Service", alt: "Technopark Taxi" },
        { href: "/call-taxi-trivandrum", name: "24/7 Call Taxi Trivandrum", alt: "Call Taxi Trivandrum" },
      ],
    },
    {
      label: "Contact",
      items: [
        { href: "tel:+919895519435", name: "+91 9895519435", alt: "Primary Phone" },
        { href: "tel:+918547339435", name: "+91 8547339435", alt: "Secondary Phone" },
        { href: "mailto:info.carboncabs@gmail.com", name: "info.carboncabs@gmail.com", alt: "Email Us" },
        { href: "https://wa.me/919895519435", name: "WhatsApp Support", alt: "WhatsApp Chat" },
        { href: "#", name: "Trivandrum, Kochi, Kerala", alt: "Location" },
      ],
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribeEmail) return;

    const now = new Date();
    const date = now.toLocaleDateString('en-IN');
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const timestamp = `${date} ${time}`;

    const scriptURL = "https://script.google.com/macros/s/AKfycbzfA2n7_fl2U2sFzNaCpoDv8otRTnvOnaYdagRvvwE7gDgrkI-OkoAgh5-ff3RY_tA7/exec";
    const formParams = new URLSearchParams({ email: subscribeEmail, Timestamp: timestamp }).toString();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formParams,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (response.ok) {
        setSubscribeStatus({ message: "Subscribed successfully!", type: "success" });
        setSubscribeEmail("");
      } else {
        throw new Error("Failed to subscribe.");
      }
    } catch (error) {
      setSubscribeStatus({ message: "Subscription failed. Try again.", type: "error" });
    }
    setTimeout(() => setSubscribeStatus({ message: "", type: "" }), 4000);
  };

  return (
    <footer className="pt-10 bg-[#1B1B1B] p-5 md:px-0 border-t border-gray-700 text-white">
      <Whastapp />
      <div className="px-2 md:px-20">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-md">
            <h3 className="text-xl xl:text-2xl font-semibold tracking-wide">
              Affordable Taxi and Car Rentals all Over Trivandrum
            </h3>
            <div className="flex items-center gap-2 mt-2 text-[#CAE942]">
              <div className="flex text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-sm font-medium text-gray-300">5.0/5 Rating</span>
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form onSubmit={handleSubscribe} className="flex items-center gap-x-3 md:justify-end">
              <div className="relative">
                <svg
                  className="w-6 h-6 absolute text-gray-700 left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 bg-white text-gray-800 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={subscribeEmail}
                  onChange={e => setSubscribeEmail(e.target.value)}
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow">
                Subscribe
              </button>
            </form>
            {subscribeStatus.message && (
              <div className={`mt-2 text-sm font-semibold ${subscribeStatus.type === "success" ? "text-green-500" : "text-red-500"}`}>
                {subscribeStatus.message}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 space-y-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          <a href="/" className="hidden lg:flex flex-col gap-3 md:col-span-1 text-lg justify-center">
            <Image 
                src='/assets/logo.webp' 
                alt="Carbon Cabs Logo" 
                width={240} 
                height={60} 
                className="w-60 h-auto" 
            />
          </a>

          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="font-semibold sm:pb-2 pt-5 sm:pt-0 text-2xl text-[#CAE942]">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    alt={el.alt}
                    href={el.href}
                    className="duration-150 hover:text-[#CAE942] text-lg text-gray-300"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-5 py-5 border-t border-gray-700 items-center justify-between sm:flex">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Carbon Cabs. Built by <a href="https://urbanzi.in" className="hover:text-white underline">Urbanzi Solutions LLP</a>.
          </p>
          <div className="flex items-center gap-x-6 mt-6 sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61578971378125" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} className="hover:text-[#CAE942] transition-all" />
            </a>
            <a href="https://share.google/54I5l2Euy23t6PLyQ" target="_blank" rel="noopener noreferrer">
              <FaGoogle size={25} className="hover:text-[#CAE942] transition-all" />
            </a>
            <a href="https://www.instagram.com/CARBONCABS/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} className="hover:text-[#CAE942] transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}