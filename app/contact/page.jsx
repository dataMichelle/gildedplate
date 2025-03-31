"use client";
import { useState, useRef } from "react";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null); // Reference to the form

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic here
    setIsModalOpen(true); // Open the modal after submission
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    if (formRef.current) {
      formRef.current.reset(); // Reset the form fields
    }
  };

  return (
    <main className="relative h-screen flex mt-24 items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        {/* Contact Information */}
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        {/* Additional Contact Information */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium">1234 Gilded Plate Lane</p>
          <p className="text-lg font-medium">Cityville, ST 56789</p>
          <p className="text-lg font-medium">Phone: (555) 123-4567</p>
          <p className="text-sm text-gray-600 mt-5">
            For any inquiries, please use the form below to get in touch with
            us.
          </p>
        </div>

        <form
          ref={formRef} // Attach the form reference
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Name Field */}
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="border p-2 rounded-md w-full"
            required
            minLength="2"
          />
          <p className="text-red-500 hidden" id="nameError">
            Name must be at least 2 characters long.
          </p>

          {/* Email Field */}
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            className="border p-2 rounded-md w-full"
            required
          />
          <p className="text-red-500 hidden" id="emailError">
            Please enter a valid email address.
          </p>

          {/* Phone Field */}
          <label htmlFor="phone" className="text-lg font-semibold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            className="border p-2 rounded-md w-full"
            required
            pattern="\+?[0-9\s-]{10,15}"
          />
          <p className="text-red-500 hidden" id="phoneError">
            Please enter a valid phone number.
          </p>

          {/* Comments Field */}
          <label htmlFor="comments" className="text-lg font-semibold">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Your message here..."
            className="border p-2 rounded-md w-full h-32"
            required
            minLength="10"
          ></textarea>
          <p className="text-red-500 hidden" id="commentsError">
            Comments must be at least 10 characters long.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gold text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 mt-4 text-xs uppercase font-medium tracking-wider"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-4">
              Thank you for contacting us. We will be in touch shortly! Please
              check your email for a copy of this form information.
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
    </main>
  );
}
