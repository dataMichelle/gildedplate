"use client";

import { useState } from "react";
import { roundToNearest15Minutes } from "../lib/timeUtils"; // Import the utility function

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    date: "",
    time: "",
    guests: 4,
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "guests") {
      // Ensure guests are between 2 and 10
      const guests = Math.max(2, Math.min(10, value));
      setFormData({ ...formData, guests });
    } else if (name === "time") {
      // Round time to the nearest 15-minute increment
      const roundedTime = roundToNearest15Minutes(value);
      setFormData({ ...formData, [name]: roundedTime });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book a Reservation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-left mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-left mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Email and Confirm Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-left mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="confirmEmail"
              className="block text-sm font-semibold text-left mb-1"
            >
              Confirm Email
            </label>
            <input
              type="email"
              name="confirmEmail"
              id="confirmEmail"
              placeholder="Confirm Email"
              value={formData.confirmEmail}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-left mb-1"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-semibold text-left mb-1"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
              step="900" // 15-minute increments (900 seconds)
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Guests (inline label and input) */}
        <div className="flex justify-center items-center">
          <label
            htmlFor="guests"
            className="block text-sm font-semibold text-left mr-2"
          >
            Guests
          </label>
          <input
            type="number"
            name="guests"
            id="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="border p-2 rounded w-24"
            min="2"
            max="10"
          />
        </div>

        {/* Special Requests */}
        <div>
          <label
            htmlFor="requests"
            className="block text-sm font-semibold text-left mb-1"
          >
            Special Requests
          </label>
          <textarea
            name="requests"
            id="requests"
            placeholder="Any special requests?"
            value={formData.requests}
            onChange={handleChange}
            className="border p-2 rounded w-full h-32"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gold text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 mt-4 text-xs uppercase font-medium tracking-wider"
          >
            Submit Reservation
          </button>
        </div>
      </form>
    </div>
  );
}
