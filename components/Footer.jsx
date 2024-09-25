import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-[#cda45e] text-lg pt-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-4 py-6 md:px-0 md:py-8">
        {" "}
        {/* Add padding for mobile, remove for desktop */}
        {/* Footer Info */}
        <div className="footer-info">
          <h3 className="text-2xl font-poppins text-[#cda45e]">
            The Gilded Plate
          </h3>
          <div className="mt-3 flex space-x-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#28251f] p-2 rounded-full text-[#cda45e]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#28251f] p-2 rounded-full text-[#cda45e]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#28251f] p-2 rounded-full text-[#cda45e]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#28251f] p-2 rounded-full text-[#cda45e]"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Footer Links */}
        <div className="footer-links">
          <h5 className="text-xl font-semibold text-[#cda45e] mb-4">
            Useful Links
          </h5>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-white hover:text-[#cda45e] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white hover:text-[#cda45e] transition"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-[#cda45e] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Copyright */}
        <div className="footer-copyright text-right self-end">
          <p className="mb-2 text-sm">
            © 2024 The Gilded Plate. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
