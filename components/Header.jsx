"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({ alluraClassName }) {
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
          className={`text-gold text-3xl tracking-wide leading-none ${alluraClassName}`}
        >
          The Gilded Plate
        </Link>

        {/* Desktop Navigation */}
        <nav id="navbar" className="hidden md:flex space-x-8">
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
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <i className="bi bi-x"></i> // Close icon
          ) : (
            <i className="bi bi-list"></i> // Hamburger icon
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

          {/* Book a Table Button */}
          <Link
            href="/reservation"
            className="mt-8 border-2 border-gold text-white rounded-full py-3 px-6 text-lg uppercase font-medium tracking-wider
             hover:bg-gold transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Table
          </Link>
        </nav>
      )}
    </header>
  );
}
