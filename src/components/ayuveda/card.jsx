import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Card = ({ title,   image, main }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
  <div
  className="project-card p-3 md:p-6 flex flex-col w-80 bg-[#ffffff] rounded-2xl shadow-lg  transition-transform duration-300 ease-in-out"
  // Added animation for the entire card
>
  

      <img
        className="p-4 object-cover rounded-t-2xl"
        src={image}
        alt={`${title} project preview`}
       // Animation for the image
      />
      <h3
        className="px-4 text-xl md:text-2xl font-bold leading-normal"
        // Animation for the title
      >
        {title}
      </h3>
      
      <p
        className="px-4 text-sm md:text-md leading-tight py-2"
         // Animation for the main description
      >
        {main}
      </p>
     
    </div>
  );
};

export default Card;