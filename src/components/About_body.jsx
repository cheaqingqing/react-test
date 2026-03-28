import React from "react";
import { Footer } from "./Footer";

export const About_body = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-200 text-white text-center py-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-3 text-lg">Learn more about who we are</p>
      </div>

      {/* About Section */}
      <div className="px-10 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          We are a passionate team of developers dedicated to building modern,
          scalable, and user-friendly applications. Our goal is to help businesses
          grow by providing high-quality digital solutions.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 px-10 py-12">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To deliver innovative and reliable technology solutions that empower
            our clients to succeed in a digital world.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To become a leading tech company known for quality, creativity, and
            customer satisfaction.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-10 py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <div className="w-20 h-20 mx-auto bg-blue-300 rounded-full mb-4"></div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <div className="w-20 h-20 mx-auto bg-blue-300 rounded-full mb-4"></div>
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Backend Developer</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <div className="w-20 h-20 mx-auto bg-blue-300 rounded-full mb-4"></div>
            <h3 className="font-semibold">Mike Lee</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
};