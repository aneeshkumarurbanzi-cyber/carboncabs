import React from 'react'
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Whastapp() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919895519435"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-5 bottom-40 md:right-8 md:bottom-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition group animate-whatsapp-blink"
        style={{ animation: "whatsapp-blink 1.2s infinite alternate" }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl md:text-4xl" />
      </a>
      {/* Phone Floating Button - only on mobile */}
      <a
        href="tel:+919895519435"
        className="fixed z-50 right-5 bottom-20 md:hidden flex items-center justify-center w-14 h-14 bg-[#232526] rounded-full shadow-lg hover:bg-[#434BD2] transition animate-whatsapp-blink"
        style={{ animation: "whatsapp-blink 1.2s infinite alternate" }}
        aria-label="Call WheelsOnGo"
      >
        <FaPhone className="text-[#CAE942] text-2xl rotate-90" />
      </a>
      {/* Blinking animation */}
      <style>{`
        @keyframes whatsapp-blink {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          100% { box-shadow: 0 0 18px 8px rgba(37, 211, 102, 0.25); }
        }
        .animate-whatsapp-blink {
          animation: whatsapp-blink 1.2s infinite alternate;
        }
      `}</style>
    </>
  )
}
