import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Importing the icon

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen text-gray-800 flex flex-col items-center justify-center px-6 md:px-12 py-16">
      {/* Header Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-green-700">About आयुCARE</h1>
        <p className="mt-4 text-lg">
          Welcome to <strong>आयुCARE</strong>, a platform dedicated to Ayurveda, traditional healing, and holistic wellness. We blend ancient wisdom with modern technology to create a seamless experience for those looking to improve their health naturally.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl">
        <h2 className="text-2xl font-semibold text-green-600">🌿 Our Mission</h2>
        <p className="mt-2">
          Our mission is to share Ayurveda's ancient healing wisdom while using modern technology to make health solutions easy and accessible for everyone. It’s about combining tradition with innovation to improve wellness for all.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl">
        <h2 className="text-2xl font-semibold text-green-600">💻 Technology We Use</h2>
        <p className="mt-2">
          आयुCARE is built with modern web technologies, ensuring a smooth and scalable experience:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li><strong>React.js</strong> – Dynamic and responsive front-end framework.</li>
          <li><strong>Tailwind CSS</strong> – Utility-first CSS framework for stylish designs.</li>
          <li><strong>Clerk Authentication</strong> – Seamless user authentication and account management.</li>
          <li><strong>Node.js & Express.js</strong> – Backend services ensuring fast and secure API handling.</li>
          <li><strong>MongoDB</strong> – NoSQL database for efficient storage of Ayurvedic health data.</li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl">
        <h2 className="text-2xl font-semibold text-green-600">💚 Why Choose आयुCARE?</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>Authentic Ayurvedic remedies & research.</li>
          <li>Modern user-friendly interface powered by React.</li>
          <li>Secure login & account management with Clerk.</li>
          <li>Fast backend performance with Node.js & Express.</li>
          <li>Data-driven insights using MongoDB for personalized health solutions.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-green-500 text-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold">Join the आयुCARE Journey</h2>
        <p className="mt-2">Harness the power of Ayurveda and modern technology for a healthier life.</p>

       <button
         className="mt-6 bg-white text-black px-6 py-3 rounded-lg transition flex items-center"
         onClick={() => window.location.href = "/health"}
       >
         Explore <FaArrowLeft className="ml-2" />
       </button>
      </div>
    </div>
  );
};

export default About;