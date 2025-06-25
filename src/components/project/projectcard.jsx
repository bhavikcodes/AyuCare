import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projectcard.css"; // Import your CSS file for custom styles

const ProjectCard = ({ title, main, price, image, link , discription }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
  <div
  className="project-card p-3 md:p-6 flex flex-col w-80 bg-[#3a3e3b] rounded-2xl shadow-lg  transition-transform duration-300 ease-in-out"
  data-aos="zoom-out" // Added animation for the entire card
>
  

      <img
        className="p-4 object-cover rounded-t-2xl"
        src={image}
        alt={`${title} project preview`}
        data-aos="zoom-out" // Animation for the image
      />
      <h3
        className="px-4 text-xl md:text-2xl font-bold leading-normal"
        data-aos="zoom-out" // Animation for the title
      >
        {title}
      </h3>
      <p
        className="px-4 text-sm md:text-md leading-tight py-2"
        data-aos="zoom-out" // Animation for the technology text
      >
        {price}
      </p>
      <p
        className="px-4 text-sm md:text-md leading-tight py-2"
        data-aos="zoom-out" // Animation for the main description
      >
        {main}
      </p>
      <div
        className="mt-2 p-2 md:p-4 flex justify-center"
        data-aos="zoom-out" // Animation for the button container
      >
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Source code for ${title}`}
          >
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-[#465697] hover:bg-[#37437c] transition-colors duration-300">
         {discription}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;