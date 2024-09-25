"use client";

export default function About() {
  return (
    <main className="relative min-h-screen flex items-start pt-24 md:pt-48 bg-home-background bg-cover bg-center pb-8">
      <section id="about" className="about w-full">
        <div className="container mx-auto text-center bg-[#fdf7e3] p-4 md:p-8 rounded-lg shadow-md">
          {/* First Row: About Us */}
          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Image 1 */}
            <div className="relative">
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/about_restaurant.jpg')",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <div className="call-us absolute inset-0 flex justify-center items-center bg-white bg-opacity-40">
                <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
              </div>
            </div>

            {/* Text Section 1 */}
            <div className="flex justify-center items-center px-4 md:px-8">
              <div className="content">
                <p className="text-base md:text-lg mb-4">
                  The Gilded Plate was established in 1995 by renowned chef and
                  restaurateur John Willard, who envisioned creating a dining
                  experience that marries culinary excellence with an atmosphere
                  of refined elegance.
                </p>
                <p className="text-base md:text-lg mb-4">
                  The restaurant's commitment to quality and innovation earned
                  it numerous accolades, including a Michelin star just three
                  years after opening.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row: Our History */}
          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mt-16 md:mt-24">
            {/* Image 2 (desktop first) */}
            <div className="relative lg:order-last order-first">
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/table_setting.jpg')",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <div className="call-us absolute inset-0 flex justify-center items-center bg-white bg-opacity-40">
                <h2 className="text-3xl md:text-4xl font-bold">Our History</h2>
              </div>
            </div>

            {/* Text Section 2 */}
            <div className="flex justify-center items-center px-4 md:px-8 order-none">
              <div className="content">
                <p className="text-base md:text-lg mb-4">
                  Over the years, The Gilded Plate has evolved, expanding its
                  menu to include a diverse array of gourmet dishes that cater
                  to both traditional palates and adventurous food enthusiasts.
                </p>
                <p className="text-base md:text-lg mb-4">
                  Today, The Gilded Plate continues to be a beacon of culinary
                  excellence, attracting diners from around the world.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row: Exquisite Delicacies */}
          <div className="row grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 mt-16 md:mt-24">
            {/* Image 3 */}
            <div className="relative">
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/steak.jpg')",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <div className="call-us absolute inset-0 flex justify-center items-center bg-white bg-opacity-40">
                {/* Concatenated Header for Mobile */}
                <h2 className="text-3xl md:text-4xl font-bold block lg:hidden">
                  Exquisite Delicacies
                </h2>

                {/* Separate Headers for Desktop */}
                <h2 className="text-3xl md:text-4xl font-bold hidden lg:block">
                  Exquisite
                </h2>
              </div>
            </div>

            {/* Text Section 3 */}
            <div className="flex justify-center items-center px-4 md:px-8">
              <div className="content">
                <p className="text-base md:text-lg mb-4">
                  At The Gilded Plate, we pride ourselves on offering an
                  exquisite selection of delicacies that delight the senses and
                  elevate the dining experience.
                </p>
                <p className="text-base md:text-lg">
                  Join us for a unique experience and savor the delicacies that
                  define the essence of fine dining.
                </p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative">
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/delicacy.jpg')",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <div className="call-us absolute inset-0 flex justify-center items-center bg-white bg-opacity-40">
                {/* Separate Headers for Desktop */}
                <h2 className="text-3xl md:text-4xl font-bold hidden lg:block">
                  Delicacies
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
