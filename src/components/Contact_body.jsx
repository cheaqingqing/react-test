import React from "react";
import { Footer } from "./Footer";

export const Contact_body = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-200 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg">We’d love to hear from you</p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 px-10 py-12">

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to us for any questions or project ideas.
          </p>

          <p className="mb-2"><strong>Email:</strong> contact@mywebsite.com</p>
          <p className="mb-2"><strong>Phone:</strong> +855 123 456 789</p>
          <p className="mb-2"><strong>Address:</strong> Phnom Penh, Cambodia</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Send Message</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Map Section (optional) */}
      <div className="px-10 pb-12">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold mb-3">Our Location</h2>
          <p className="text-gray-600">
            Phnom Penh, Cambodia (You can embed Google Maps here later)
          </p>
        </div>
      </div>

      <Footer />
      
    </div>
  );
};