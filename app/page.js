import Link from "next/link";

export default function Home() {
  return (
    <>
      <main id="main" className="h-screen flex items-center ">
        <section id="hero" className="text-left w-full">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="max-w-3xl font-poppins">
              {/* Keep the h1 on one line, using span for gold text */}
              <h1 className="text-5xl text-white mb-4">
                Welcome to <span className="text-gold">The Gilded Plate</span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl mt-4 text-white font-poppins mb-6">
                &quot;Indulge in Culinary Delights: Where Every Bite is a
                Passport to Flavors of Amore!&quot;
              </h2>

              {/* Buttons */}
              <div className="mt-8 space-y-4 uppercase">
                <Link
                  href="/menu"
                  className="inline-block border-2 border-gold text-white py-2 px-6 mx-4  rounded-full transition-all hover:bg-gold hover:text-black font-semibold"
                >
                  Our Menu
                </Link>
                <Link
                  href="/reservation"
                  className="inline-block border-2 border-gold text-white py-2 px-6 rounded-full transition-all hover:bg-gold hover:text-black font-semibold"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
