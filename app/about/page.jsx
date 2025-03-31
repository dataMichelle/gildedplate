"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative min-h-screen flex items-start pt-24 md:pt-48 bg-home-background bg-cover bg-center pb-8 overflow-hidden">
      <section id="about" className="w-full">
        <div className="container mx-auto text-center bg-[#fdf7e3] p-6 md:p-12 rounded-xl shadow-2xl max-w-5xl">
          {/* First Row: About Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Image 1 */}
            <motion.div
              className="relative h-64 md:h-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl rounded-lg border border-gold/20"
                style={{
                  backgroundImage: "url('/about_restaurant.jpg')",
                  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
            </motion.div>

            {/* Text Section 1 with Left-Justified Header */}
            <motion.div
              className="flex flex-col justify-center items-start px-4 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-gold tracking-wide font-cinzel drop-shadow-md mb-4">
                About Us
              </h2>
              <div className="content text-left">
                <p className="text-lg md:text-xl font-light text-gray-800 font-cinzel leading-relaxed mb-4">
                  Founded in 1995 by visionary chef John Willard, The Gilded
                  Plate melds culinary artistry with timeless sophistication.
                </p>
                <p className="text-lg md:text-xl font-light text-gray-800 font-cinzel leading-relaxed">
                  Our relentless pursuit of perfection has earned us prestigious
                  accolades.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second Row: Our History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-24">
            {/* Image 2 */}
            <motion.div
              className="relative h-64 md:h-80 lg:order-last"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl rounded-lg border border-gold/20"
                style={{
                  backgroundImage: "url('/table_setting.jpg')",
                  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
            </motion.div>

            {/* Text Section 2 with Left-Justified Header */}
            <motion.div
              className="flex flex-col justify-center items-start px-4 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-gold tracking-wide font-cinzel drop-shadow-md mb-4">
                Our History
              </h2>
              <div className="content text-left">
                <p className="text-lg md:text-xl font-light text-gray-800 font-cinzel leading-relaxed mb-4">
                  Over decades, our menu has flourished, offering gourmet
                  creations for discerning and bold diners alike.
                </p>
                <p className="text-lg md:text-xl font-light text-gray-800 font-cinzel leading-relaxed">
                  Today, The Gilded Plate shines as a global pinnacle of
                  culinary mastery.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Third Row: Exquisite Delicacies */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24">
            {/* Image 3 */}
            <motion.div
              className="relative h-64 md:h-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl rounded-lg border border-gold/20"
                style={{
                  backgroundImage: "url('/steak.jpg')",
                  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
            </motion.div>

            {/* Text Section 3 with Left-Justified Header */}
            <motion.div
              className="flex flex-col justify-center items-start px-4 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-gold tracking-wide font-cinzel drop-shadow-md mb-4">
                Exquisite Delicacies
              </h2>
              <div className="content text-left">
                <p className="text-lg md:text-xl font-light text-gray-800 font-cinzel leading-relaxed mb-4">
                  Our exquisite delicacies captivate the senses, redefining the
                  art of fine dining.
                </p>
                <p className="text-lg md:text-xl font-light text-gray-800 font-cinzel leading-relaxed">
                  Indulge in a dining experience that transcends the ordinary.
                </p>
              </div>
            </motion.div>

            {/* Image 4 */}
            <motion.div
              className="relative h-64 md:h-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center shadow-xl rounded-lg border border-gold/20"
                style={{
                  backgroundImage: "url('/delicacy.jpg')",
                  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
