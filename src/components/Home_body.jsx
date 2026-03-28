import React from "react";
import { Footer } from "./Footer";

export const Home_body = () => {
  return (
    <div className="min-h-screen bg-gray-100">


      {/* Hero Section */}
      <section className="text-center py-20 bg-white shadow">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-gray-600 mb-6">
          This is a simple React + Tailwind homepage design.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-6 px-10 py-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p className="text-gray-600">
            This is a simple feature description.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p className="text-gray-600">
            Another feature you can describe here.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p className="text-gray-600">
            Add more details about your app.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 4</h3>
          <p className="text-gray-600">
            Add more details about your app.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 5</h3>
          <p className="text-gray-600">
            Add more details about your app.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 6</h3>
          <p className="text-gray-600">
            Add more details about your app.
          </p>
        </div>

      </section>

      {/* Footer */}
      
      <Footer />

    </div>
  );
};