import React from "react";
import { Footer } from "./Footer";

export const Service_body = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-200 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-3 text-lg">What we offer to our customers</p>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-3 gap-8 px-10 py-12">

        {/* Service Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Web Development</h2>
          <p className="text-gray-600">
            We build modern and responsive websites using the latest technologies.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Mobile Apps</h2>
          <p className="text-gray-600">
            Create high-quality mobile applications for Android and iOS platforms.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">UI/UX Design</h2>
          <p className="text-gray-600">
            We design beautiful and user-friendly interfaces for better experience.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Backend Development</h2>
          <p className="text-gray-600">
            Build secure and scalable APIs using Spring Boot and Node.js.
          </p>
        </div>

        {/* Service Card 5 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Database Design</h2>
          <p className="text-gray-600">
            Efficient database structures using MySQL, PostgreSQL, and MongoDB.
          </p>
        </div>

        {/* Service Card 6 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Maintenance</h2>
          <p className="text-gray-600">
            Ongoing support and updates to keep your system running smoothly.
          </p>
        </div>

      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-white">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
};