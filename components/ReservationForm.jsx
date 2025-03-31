"use client";

import { useState } from "react";
import { simulatedReservations } from "../data/reservations"; // Adjust path as needed

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

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Define available hours for a fine-dining restaurant (5:00 PM to 10:45 PM)
  const availableHours = {
    startHour: 17, // 5:00 PM
    endHour: 22, // 10:00 PM (last option will be 10:45 PM)
  };

  // Generate 15-minute increment options in 12-hour format with AM/PM
  const generateTimeOptions = () => {
    const options = [];
    for (
      let hour = availableHours.startHour;
      hour <= availableHours.endHour;
      hour++
    ) {
      for (let minute = 0; minute < 60; minute += 15) {
        const militaryHour = hour;
        const isPM = militaryHour >= 12;
        const displayHour =
          militaryHour > 12
            ? militaryHour - 12
            : militaryHour === 0
            ? 12
            : militaryHour;
        const formattedHour = displayHour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const time = `${formattedHour}:${formattedMinute} ${
          isPM ? "PM" : "AM"
        }`;
        if (
          hour < availableHours.endHour ||
          (hour === availableHours.endHour && minute <= 45)
        ) {
          options.push(time);
        }
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  // Filter unavailable times based on selected date
  const getAvailableTimes = () => {
    if (!formData.date)
      return timeOptions.map((time) => ({ value: time, isAvailable: true }));

    const bookedTimes = simulatedReservations
      .filter((reservation) => reservation.date === formData.date)
      .map((reservation) => {
        // Convert military time from reservations to 12-hour format
        const [hour, minute] = reservation.time.split(":").map(Number);
        const isPM = hour >= 12;
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")} ${isPM ? "PM" : "AM"}`;
      });

    return timeOptions.map((time) => ({
      value: time,
      isAvailable: !bookedTimes.includes(time),
    }));
  };

  const availableTimes = getAvailableTimes();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "guests") {
      const guests = Math.max(2, Math.min(10, value));
      setFormData({ ...formData, guests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!availableTimes.find((t) => t.value === formData.time)?.isAvailable) {
      alert("Selected time is not available. Please choose another.");
      return;
    }
    setIsModalOpen(true); // Open the modal after successful submission
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setFormData({
      name: "",
      email: "",
      confirmEmail: "",
      phone: "",
      date: "",
      time: "",
      guests: 4,
      requests: "",
    }); // Reset the form fields
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
            <select
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full text-gray-800 disabled:text-gray-400"
            >
              <option value="">Select a time</option>
              {availableTimes.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={!option.isAvailable}
                  className={
                    !option.isAvailable ? "text-gray-400" : "text-gray-800"
                  }
                >
                  {option.value} {!option.isAvailable && "(Booked)"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Guests */}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Reservation Confirmed!</h2>
            <p className="text-gray-700 mb-4">
              Thank you for your reservation! We look forward to serving you. A
              confirmation email has been sent to your provided email address.
            </p>
            <button
              onClick={closeModal}
              className="bg-gold text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
