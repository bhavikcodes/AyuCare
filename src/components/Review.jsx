import React from "react";
import { Star } from "lucide-react";
import photo1 from "../assets/sunita.avif";
import photo2 from "../assets/c1.jpg";
import photo3 from "../assets/c3.jpg";

// Sample customer reviews data with illnesses
const reviews = [
  {
    id: 1,
    name: "Sunita Yadav",
    illness: "Stress & Fatigue",
    image: photo1,
    review:
      "Due to my hectic work schedule, I often felt drained and anxious. Adopting Ayurvedic herbal teas and meditation techniques helped me significantly. I now feel more relaxed and energized throughout the day!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Ajay Saxena",
    illness: "Digestive Issues",
    image: photo2,
    review:
      "For years, I struggled with digestion problems, but Ayurvedic remedies like Triphala and mindful eating habits transformed my gut health. I now experience fewer stomach aches and feel lighter after meals!",
    rating: 4,
  },
  {
    id: 3,
    name: "Anand Kumar",
    illness: "Skin Allergies",
    image: photo3,
    review:
      "I had severe skin allergies that wouldn’t go away with regular medication. Ayurvedic turmeric and neem-based treatments helped cleanse my skin naturally, leaving me with healthier, clearer skin!",
    rating: 4.5,
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white flex flex-col border border-gray-300 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Profile Picture + Name */}
      <div className="flex items-center mb-3">
        <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-3" />
        <div>
          <h3 className="text-lg font-bold">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.illness}</p> {/* Illness Below Name */}
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex mb-3">
        {[...Array(5)].map((_, index) => {
          const isHalfStar = review.rating - index > 0 && review.rating - index < 1;
          return (
            <Star
              key={index}
              size={20}
              className={`${
                index < Math.floor(review.rating) ? "text-yellow-500" : isHalfStar ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          );
        })}
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-700">{review.review}</p>
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <div className="py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Stories of Lasting Health & Happiness</h2>

      {/* Reviews Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;