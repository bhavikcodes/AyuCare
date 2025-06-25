import React from "react";
import { Star } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import photo1 from "../assets/OIP.jpg";
import photo2 from "../assets/OIP (1).jpg";
import photo3 from "../assets/amith-1596100358085.jpg";

// Sample consultant data
const consultants = [
  {
    id: 1,
    name: "Dr. Vikash Patel",
    image: photo1,
    review: "Dr. Vikash is an exceptional consultant with 10+ years of experience.",
    rating: 4.0,
  },
  {
    id: 2,
    name: "Dr. Ramesh Patidar",
    image: photo2,
    review: "Dr. Ramesh has helped numerous clients with his deep expertise.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Dr. Yashwant Singh",
    image: photo3,
    review: "Dr. Yashwant is known for his strategic insights and problem-solving skills.",
    rating: 4.14,
  },
];

const ConsultantCard = ({ consultant, onBookConsultant }) => {
  const { isSignedIn, isLoaded } = useAuth();

  const handleChatClick = () => {
    if (!isLoaded) {
      alert("Authentication is loading. Please try again in a moment.");
      return;
    }
    if (isSignedIn) {
      window.location.href = "https://baatolebaazi.onrender.com/";
    } else {
      alert("Please sign in to chat with the consultant.");
    }
  };

  return (
    <div className="p-4 shadow-lg rounded-lg w-72 text-center bg-white hover:scale-105 transition-transform">
      {/* Consultant Image */}
      <img
        src={consultant.image}
        alt={consultant.name}
        className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-green-600 mx-auto"
      />
      <h3 className="text-lg font-bold mb-2">{consultant.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{consultant.review}</p>

      {/* Star Ratings */}
      <div className="flex justify-center items-center gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className={index + 1 <= Math.floor(consultant.rating) ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-400"}
          />
        ))}
      </div>

      {/* Chat Button */}
      <button
        className="bg-green-600 text-white px-4 py-2 rounded-md font-bold hover:bg-green-700 transition"
        onClick={handleChatClick}
      >
        Chat with {consultant.name}
      </button>
    </div>
  );
};

export const ConsultantList = ({ onBookConsultant }) => {
  if (typeof onBookConsultant !== "function") {
    onBookConsultant = () => alert("Booking feature is currently unavailable. Please try again later.");
  }

  return (
    <div className="p-10 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Expert Consultants</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
        {consultants.map((consultant) => (
          <ConsultantCard key={consultant.id} consultant={consultant} onBookConsultant={onBookConsultant} />
        ))}
      </div>
    </div>
  );
};