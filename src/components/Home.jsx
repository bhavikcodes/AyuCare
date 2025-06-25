import React from "react";
import herobg from "../assets/herobg.png"; // Ensure you have this image in the correct path
import { FaArrowRight } from "react-icons/fa"; // Importing the icon

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero & About Sections Together in One Page */}
      <div className="h-screen flex flex-col">
        {/* Hero Section - Half Screen */}
      <section
  className="flex-1 flex flex-col items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${herobg})` }}
>
  <div className="text-center text-white bg-gray-900 bg-opacity-50 p-10 rounded-lg">
    <h1 className="text-5xl font-bold">
      Welcome to    <span className="text-white">आयु</span>
          <span className="text-green-500">CARE</span>
    </h1>
    <p className="mt-4 text-lg">
      Discover holistic healing through Ayurveda and traditional practices.
    </p>
    

<button
  className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg transition flex items-center"
  onClick={() => window.location.href = "/health"}
>
  Explore <FaArrowRight className="ml-2" />
</button>
  </div>
</section>

        {/* About Section - Half Screen */}
        <section className="flex-1 py-16 px-10 text-center bg-green-100 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">About Ayurveda & Traditional Healing</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ayurveda, an ancient science, focuses on holistic healing through herbs, yoga, and meditation. Traditional healing practices harness nature’s power to restore balance and promote well-being.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;