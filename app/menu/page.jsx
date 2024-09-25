import { Allura } from "next/font/google";
import menuData from "@/data/menu.json";

// Load the Allura font with the specified weight
const allura = Allura({
  subsets: ["latin"],
  weight: "400", // Specify the available weight
});

export default function MenuPage() {
  const { beverages, lunch, dinner, cocktails } = menuData;

  return (
    <main className="relative min-h-screen flex items-start pt-24 md:pt-48 bg-home-background bg-cover bg-center pb-8">
      <section id="menu" className="menu w-full">
        <div className="container mx-auto text-center bg-[#fdf7e3] p-4 md:p-8 rounded-lg shadow-md">
          {/* Section Title */}
          <div className="section-title mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">Menu</h3>
          </div>

          {/* Anchor Links for Sections */}
          <ul className="flex flex-wrap justify-center py-4 space-x-2 md:space-x-4 text-lg">
            <li>
              <a
                href="#beverages-section"
                className="inline-block px-2 md:px-4 py-2 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
              >
                Beverages
              </a>
            </li>
            <li>
              <a
                href="#lunch-section"
                className="inline-block px-2 md:px-4 py-2 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
              >
                Lunch
              </a>
            </li>
            <li>
              <a
                href="#dinner-section"
                className="inline-block px-2 md:px-4 py-2 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
              >
                Dinner
              </a>
            </li>
            <li>
              <a
                href="#cocktails-section"
                className="inline-block px-2 md:px-4 py-2 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
              >
                Cocktails
              </a>
            </li>
          </ul>

          {/* Beverages Section */}
          <div id="beverages-section" className="mt-8 md:mt-12">
            <h4
              className={`text-3xl md:text-4xl font-bold text-gold mb-4 md:mb-6 ${allura.className}`}
            >
              Beverages
            </h4>
            <ul className="list-none space-y-6 md:space-y-10 text-base md:text-lg">
              {beverages.map((item, index) => (
                <li key={index} className="text-center">
                  <div className="font-semibold text-lg md:text-xl">
                    {item.name}
                  </div>
                  <div className="italic text-gray-600">{item.description}</div>
                  <div className="font-medium mt-1 md:mt-2">{item.price}</div>
                </li>
              ))}
            </ul>
            <a
              href="#menu"
              className="inline-block px-2 md:px-4 py-2 mt-4 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
            >
              Return to Top
            </a>
          </div>

          {/* Lunch Section */}
          <div id="lunch-section" className="mt-8 md:mt-12">
            <h4
              className={`text-3xl md:text-4xl font-bold text-gold mb-4 md:mb-6 ${allura.className}`}
            >
              Lunch
            </h4>
            <ul className="list-none space-y-6 md:space-y-10 text-base md:text-lg">
              {lunch.map((item, index) => (
                <li key={index} className="text-center">
                  <div className="font-semibold text-lg md:text-xl">
                    {item.name}
                  </div>
                  <div className="italic text-gray-600">{item.description}</div>
                  <div className="font-medium mt-1 md:mt-2">{item.price}</div>
                </li>
              ))}
            </ul>
            <a
              href="#menu"
              className="inline-block px-2 md:px-4 py-2 mt-4 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
            >
              Return to Top
            </a>
          </div>

          {/* Dinner Section */}
          <div id="dinner-section" className="mt-8 md:mt-12">
            <h4
              className={`text-3xl md:text-4xl font-bold text-gold mb-4 md:mb-6 ${allura.className}`}
            >
              Dinner
            </h4>
            <ul className="list-none space-y-6 md:space-y-10 text-base md:text-lg">
              {dinner.map((item, index) => (
                <li key={index} className="text-center">
                  <div className="font-semibold text-lg md:text-xl">
                    {item.name}
                  </div>
                  <div className="italic text-gray-600">{item.description}</div>
                  <div className="font-medium mt-1 md:mt-2">{item.price}</div>
                </li>
              ))}
            </ul>
            <a
              href="#menu"
              className="inline-block px-2 md:px-4 py-2 mt-4 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
            >
              Return to Top
            </a>
          </div>

          {/* Cocktails Section */}
          <div id="cocktails-section" className="mt-8 md:mt-12">
            <h4
              className={`text-3xl md:text-4xl font-bold text-gold mb-4 md:mb-6 ${allura.className}`}
            >
              Cocktails
            </h4>
            <ul className="list-none space-y-6 md:space-y-10 text-base md:text-lg">
              {cocktails.map((item, index) => (
                <li key={index} className="text-center">
                  <div className="font-semibold text-lg md:text-xl">
                    {item.name}
                  </div>
                  <div className="italic text-gray-600">{item.description}</div>
                  <div className="font-medium mt-1 md:mt-2">{item.price}</div>
                </li>
              ))}
            </ul>
            <a
              href="#menu"
              className="inline-block px-2 md:px-4 py-2 mt-4 border-2 border-[#cda45e] text-black bg-transparent rounded-full hover:bg-[#cda45e] hover:text-white transition duration-300 text-xs uppercase font-medium tracking-wider"
            >
              Return to Top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
