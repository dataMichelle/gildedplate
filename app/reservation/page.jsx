"use client";

import ReservationForm from "@/components/ReservationForm";

export default function ReservationPage() {
  return (
    <main className="min-h-screen flex items-start pt-48 pb-8 bg-home-background bg-cover bg-center">
      <section id="reservation" className="w-full">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
          {/* Left Side - Text Information */}
          <div className="bg-[#fdf7e3] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Reservation Guidelines</h2>
            <p className=" mb-4">
              At The Gilded Plate, we want your dining experience to be as
              smooth as possible. We can accommodate parties of up to 10 guests.
              For larger parties, please contact us directly for special
              arrangements.
            </p>
            <p className="text-lg mb-4">
              Interested in renting out the entire restaurant for a private
              event? Please give us a call at +1 (555) 123-4567 to discuss
              availability, pricing, and menu customization options.
            </p>
            <p className="text-lg mb-4">
              We recommend making reservations at least one week in advance to
              ensure availability. We look forward to serving you!
            </p>
            <p className="text-lg font-bold">Call Us: +1 (555) 123-4567</p>
          </div>

          {/* Right Side - Reservation Form */}
          <div className="bg-[#fdf7e3] p-6 rounded-lg shadow-md">
            <ReservationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
