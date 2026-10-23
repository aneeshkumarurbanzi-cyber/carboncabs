'use client';
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact_form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString('en-US', { hour12: true });
    const timestamp = `${date} ${time}`;

    const dataWithTimestamp = {
      ...formData,
      Timestamp: timestamp,
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbzqy0L9ZFbYpxEdxcLtE9SKnoDU394fFV-tNhLIy1KdEIL34L8X9uXgSNNLBVk_ArVFfQ/exec";
    const formParams = new URLSearchParams(dataWithTimestamp).toString();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formParams,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (response.ok) {
        setStatus({ message: "✅ Form submitted successfully!", type: "success" });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to submit. Try again!");
      }
    } catch (error) {
      setStatus({ message: "❌ Submission failed. Please try again.", type: "error" });
    }

    setTimeout(() => setStatus({ message: "", type: "" }), 5000);
  };

  return (
    <div className="container-padding bg-[#2D2D2D] rounded-2xl">
      <div>
        <h2 className="heading-h2 text-center mb-10">Send Us a Message</h2>
        {status.message && (
          <div
            className={`p-3 mb-4 rounded-md text-center text-lg font-semibold ${
              status.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            {status.message}
          </div>
        )}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border w-full bg-transparent border-b border-gray-600 focus:border-[#CAE942] py-2 px-1 text-white outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-gray-300 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border w-full bg-transparent border-b border-gray-600 focus:border-[#CAE942] py-2 px-1 text-white outline-none transition-colors"
                placeholder="Your phone number"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full bg-transparent border-b border-gray-600 focus:border-[#CAE942] py-2 px-1 text-white outline-none transition-colors"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-gray-300 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border w-full bg-transparent border-b border-gray-600 focus:border-[#CAE942] py-2 px-1 text-white outline-none transition-colors"
              placeholder="Subject of your message"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-300 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="border w-full bg-transparent border-b border-gray-600 focus:border-[#CAE942] py-2 px-1 text-white outline-none resize-none transition-colors"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#CAE942] text-[#232526] font-bold px-8 py-3 rounded-lg mx-auto hover:bg-[#b5d534] transition-colors"
            >
              <FaPaperPlane /> Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
