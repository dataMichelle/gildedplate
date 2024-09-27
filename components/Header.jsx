"use client";

import { useState } from "react";
import { Allura } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";

import Link from "next/link";

const allura = Allura({
  subsets: ["latin"],
  weight: "400", // Specify the available weight
});

export default function Header() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="header"
      className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-60"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href="/"
          className={`${allura.className} text-gold text-3xl tracking-wide leading-none`}
        >
          The Gilded Plate
        </Link>

        {/* Desktop Navigation */}
        <nav id="navbar" className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="nav-link text-white hover:text-gold transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="nav-link text-white hover:text-gold transition"
          >
            About
          </Link>
          <Link
            href="/menu"
            className="nav-link text-white hover:text-gold transition"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="nav-link text-white hover:text-gold transition"
          >
            Contact
          </Link>

          {/* Book a Table Button for Desktop */}
          <Link
            href="/reservation"
            className="border-2 border-gold text-white rounded-full py-2 px-4 uppercase font-medium tracking-wide hover:bg-gold hover:text-black transition duration-300"
          >
            Book a Table
          </Link>
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <FaTimes /> // Close icon
          ) : (
            <FaBars /> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 p-6 absolute top-16 left-0 w-full h-screen flex flex-col items-center justify-center">
          <Link
            href="/"
            className="block text-white hover:text-gold transition py-4 text-2xl"
            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-gold transition py-4 text-2xl"
            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
          >
            About
          </Link>
          <Link
            href="/menu"
            className="block text-white hover:text-gold transition py-4 text-2xl"
            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gold transition py-4 text-2xl"
            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
          >
            Contact
          </Link>

          {/* Book a Table Button for Mobile */}
          <Link
            href="/reservation"
            className="mt-8 border-2 border-gold text-white rounded-full py-3 px-6 text-lg uppercase font-medium tracking-wider hover:bg-gold transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Table
          </Link>
        </nav>
      )}
    </header>
  );
}
