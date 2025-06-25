import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import './footer.css'; // Import the CSS file

const Footer = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between bg-gray-900 text-white p-6 md:p-12 items-center"
      data-aos="fade-up" // Animation applied to the entire Footer
      data-aos-anchor-placement="top-bottom" // Anchor placement configuration
    >
     
      <div
        className="text-center md:text-left mb-6 md:mb-0"
        data-aos="fade-up" // Animation applied to the Contact Section
        data-aos-anchor-placement="top-bottom"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Contact Me</h1>
        <h3 className="text-sm md:text-xl font-normal flex justify-center md:justify-start items-center gap-2">
          <CiMail />
          sakshamjain881@gmail.com
        </h3>
      </div>

      {/* Message Section */}
      <div
        className="text-center mb-6 md:mb-0"
        data-aos="fade-up" // Animation applied to the Message Section
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="text-sm md:text-xl font-normal">Feel Free To Reach Out!</h3>
        <h3 className="text-sm md:text-xl font-normal">
          Developed and Designed by Saksham Jain
        </h3>
      </div>

      {/* Icons Section */}
      <div
        className="flex gap-4"
        data-aos="fade-up" // Animation applied to the Icons Section
        data-aos-anchor-placement="top-bottom"
      >
        <a
          href="mailto:saksham70676@gmail.com"
          className="icon-container text-white hover:text-green-500"
        >
          <MdOutlineEmail size={30} />
        </a>
        <a
          href="https://github.com/Saksham-glitch"
          className="icon-container text-white hover:text-green-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-jain-75baa8319/"
          className="icon-container text-white hover:text-green-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;