"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function Nav() {
  const [isToggle, setIsToggle] = useState(false);

  const action = () => {
    setIsToggle((prev) => !prev);
  };

  // Laptop nav links (for reuse in mobile)
  const navLinks = (
    <ul className="flex font-semibold items-center gap-6 xl:gap-10 flex-wrap">
      <li className="inline-block bg-gradient-to-r from-[#CAE942] to-[#CAE942] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px]">
        <a href="/" alt="Home page">
          Home
        </a>
      </li>
      <li className="inline-block bg-gradient-to-r from-[#CAE942] to-[#CAE942] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px]">
        <a href="/about-us">About</a>
      </li>
      <Dropdown
        title="Services"
        links={[
          {name: "Trivandrum Taxi", href: "/taxi-service-trivandrum"},
          { name: "Airport Taxi", href: "/trivandrum-airport-taxi" },
          { name: "Technopark Taxi", href: "/technopark-taxi" },
          {name: "24/7 Call Taxi Trivandrum", href: "/call-taxi-trivandrum"},
          { name: "Kochi Packages", href: "/kochi-taxi-tour-packages" },
          {
            name: "Tempo & Urbania",
            href: "/trivandrum-tempo-traveller-urbania-rentals",
          },
        ]}
      />
      <li className="inline-block bg-gradient-to-r from-[#CAE942] to-[#CAE942] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px]">
        <a href="/packages">Packages</a>
      </li>

      <li className="inline-block bg-gradient-to-r from-[#CAE942] to-[#CAE942] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px]">
        <a href="/gallery">Gallery</a>
      </li>
      <li className="inline-block bg-gradient-to-r from-[#CAE942] to-[#CAE942] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px]">
        <a href="/blogs">Blog</a>
      </li>
      <li className="inline-block bg-gradient-to-r from-[#CAE942] to-[#CAE942] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px]">
        <a href="/contact-us">Contact</a>
      </li>
    </ul>
  );

  return (
    <div>
      {/* Desktop Nav */}
      <div
        className="z-100 hidden lg:flex flex-col gap-2 fixed w-full bg-[#1B1B1B] top-0 left-0 border-b-2 border-[#2564eb3a]"
        style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.03)" }}
      >
        <header className="flex items-center justify-between w-full text-white bg-[#2D2D2D] px-10 py-2">
          <div className="flex items-center gap-10 font-semibold">
            <a href="mailto:info.carboncabs@gmail.com">
              Gmail: info.carboncabs@gmail.com
            </a>
            <a href="tel:+919895519435">Phone: +91 9895519435</a>
          </div>
          <div className="flex gap-6 text-2xl text-[#CAE942]">
            <a href="https://www.facebook.com/profile.php?id=61578971378125">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/CARBONCABS/">
              <FaInstagram />
            </a>
            <a href="#">
              <FaPinterest />
            </a>
            <a href="https://share.google/54I5l2Euy23t6PLyQ">
              <FaGoogle />
            </a>
          </div>
        </header>
        <nav className="flex items-center justify-between w-full px-10 my-2">
          <Link href="/">
            <Image
              src='/assets/logo.webp'
              alt="carbon cabs logo"
              width={160}
              height={40}
              className="w-40 h-auto"
              priority={true}
            />
          </Link>
          {navLinks}
          <a
            href="tel:+919895519435"
            className="flex bg-[#CAE942] text-black py-3 px-6 rounded-lg hover:scale-105 duration-100 ease-in"
          >
            Book Your Ride
          </a>
        </nav>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 w-full bg-[#1B1B1B] text-gray-800 px-4 py-2 flex justify-between items-center gap-2 z-40 shadow-sm border-b-2 border-[#2564eb3a] transition-transform duration-300">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <Image
                src='/assets/logo.webp'
                alt="carbon cabs logo"
                width={160}
                height={40}
                className="w-40 h-auto"
                priority={true}
              />
            </Link>
            <div
              className="hover:scale-110 duration-200 ease-in-out bg-gray-200 z-60 shadow-2xl"
              onClick={action}
            >
              <AnimatedHamburgerButton isActive={isToggle} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden">
          <nav
            className={`
              ${
                isToggle
                  ? "fixed left-0 top-0 h-full w-[80%] p-8 md:w-[60%] ease-in-out duration-600 bg-black text-white flex flex-col items-center justify-center z-40"
                  : "fixed left-[-100%] duration-1000 w-[100%] h-screen ease-in-out flex flex-col items-center justify-center z-41"
              }`}
          >
            <ul className="gap-6 text-xl md:text-3xl flex flex-col">
              <li>
                <a href="/" alt="Home page">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us">About</a>
              </li>
              <Dropdown
                title="Services"
                links={[
                   {name: "Trivandrum Taxi", href: "/taxi-service-trivandrum"},
                   {name: "24/7 Call Taxi Trivandrum", href: "/call-taxi-trivandrum"},
                   { name: "Technopark Taxi", href: "/technopark-taxi" },
                  { name: "Airport Taxi", href: "/trivandrum-airport-taxi" },
                  { name: "Kochi Packages", href: "/kochi-taxi-tour-packages" },
                  {
                    name: "Tempo & Urbania",
                    href: "/trivandrum-tempo-traveller-urbania-rentals",
                  },
                ]}
                mobile
              />
              <li>
                <a href="/packages">Packages</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
              <li>
                <a href="/contact-us">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

const AnimatedHamburgerButton = ({ isActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isActive ? "open" : "closed"}
        className="relative h-10 w-10"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-6 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "30%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-6 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-6 bg-black"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "30%",
            left: "calc(50% + 6px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const Dropdown = ({ title, links, mobile }) => {
  const [open, setOpen] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const handleMouseEnter = () => {
    if (!isMobile) setOpen(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setOpen(false);
  };
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-fit"
    >
      <button
        className="flex items-center bg-gradient-to-r from-[#CAE942] to-[#CAE942] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px]"
        onClick={handleClick}
        type="button"
      >
        {title}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className={`absolute left-1/2 top-10 bg-white/90 text-black shadow-lg p-8 w-auto md:w-[350px] rounded-md ${
              mobile ? "static" : "translate-x-[-50%]"
            }`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block bg-gradient-to-r from-blue-600 to-[#00399E] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_3px] md:px-4 py-2  md:text-xl"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const VARIANTS = {
  top: {
    open: { rotate: 45, top: "50%" },
    closed: { rotate: 0, top: "30%" },
  },
  middle: {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  },
  bottom: {
    open: { rotate: -45, bottom: "50%", left: "50%" },
    closed: { rotate: 0, bottom: "30%", left: "calc(50% + 6px)" },
  },
};
