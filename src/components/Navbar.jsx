import React, { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { FaHome, FaHeartbeat, FaUserMd, FaShoppingCart, FaInfoCircle } from "react-icons/fa"; // Importing icons
import logo from "../assets/sssss.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-white">आयु</span>
          <span className="text-green-500">CARE</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-green-500 flex items-center"><FaHome className="mr-2" /> Home</Link></li>
          <li><Link to="/health" className="hover:text-green-500 flex items-center"><FaHeartbeat className="mr-2" /> Health</Link></li>
          <li><Link to="/doctors" className="hover:text-green-500 flex items-center"><FaUserMd className="mr-2" /> Doctors</Link></li>
          <li><Link to="/shop" className="hover:text-green-500 flex items-center"><FaShoppingCart className="mr-2" /> Shop</Link></li>
          <li><Link to="/about" className="hover:text-green-500 flex items-center"><FaInfoCircle className="mr-2" /> About</Link></li>
        </ul>

        {/* Authentication Buttons */}
        <div className="hidden md:block">
          <SignedOut>
            <div className="hover:text-green-500">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} mt-4`}>
        <ul className="space-y-4 text-center">
          <li><Link to="/" className="hover:text-green-500 flex items-center"><FaHome className="mr-2" /> Home</Link></li>
          <li><Link to="/health" className="hover:text-green-500 flex items-center"><FaHeartbeat className="mr-2" /> Health</Link></li>
          <li><Link to="/doctors" className="hover:text-green-500 flex items-center"><FaUserMd className="mr-2" /> Doctors</Link></li>
          <li><Link to="/shop" className="hover:text-green-500 flex items-center"><FaShoppingCart className="mr-2" /> Shop</Link></li>
          <li><Link to="/about" className="hover:text-green-500 flex items-center"><FaInfoCircle className="mr-2" /> About</Link></li>
        </ul>

        {/* Authentication for Mobile */}
        <div className="mt-4 text-center">
          <SignedOut>
            <div className="hover:text-green-500">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;