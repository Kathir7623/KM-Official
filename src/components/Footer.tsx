import { MapPin, Phone, Mail } from "lucide-react";
import SocialIcons from "./SocialIcons";
import FloatingWhatsApp from "./Floatingwhats"; // ✅ fixed import path

export default function Footer() {
  return (
    <>
      <footer className="bg-[#B84E0F] text-white relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-100">
              Your trusted partner in home loans. We simplify the mortgage process with personalized
              solutions for purchase and refinance.
            </p>

            <p className="text-xs text-gray-200 mt-4">NMLS #2707715</p>
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-sm underline hover:text-gray-200"
            >
              NMLS Consumer Access
            </a>

            {/* ✅ Equal Housing Opportunity Logo */}
            <div className="mt-4 flex flex-col items-start">
              <img
                src="https://d2vfmc14ehtaht.cloudfront.net/images/eoh-logo.svg?format=webp"
                alt="Equal Housing Opportunity"
                className="w-[80px] h-auto object-contain mb-2"
              />
              <p className="text-xs text-gray-200">
                Equal Housing Opportunity
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gray-300 transition">Buy a Home</a></li>
              <li><a href="/calculator" className="hover:text-gray-300 transition">Mortgage Calculator</a></li>
              <li><a href="/learning/loan-programs" className="hover:text-gray-300 transition">Learning Center</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition">About Us</a></li>
              <li><a href="/apply" className="hover:text-gray-300 transition">Apply Now</a></li>
            </ul>
          </div>

          {/* Learning Center */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/30 pb-2">
              Learning Center
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/learning/loan-programs" className="hover:text-gray-300 transition">Loan Programs</a></li>
              <li><a href="/learning/loan-process" className="hover:text-gray-300 transition">Loan Process</a></li>
              <li><a href="/learning/mortgage-basics" className="hover:text-gray-300 transition">Mortgage Basics</a></li>
              <li><a href="/learning/faq" className="hover:text-gray-300 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/30 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span>5900 Balcones Dr #17422 Austin, TX 78731</span>
              </li>

              {/* ✅ Clickable Phone Number */}
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+14707065858"
                  className="hover:text-gray-300 transition"
                >
                  (470) 706-5858
                </a>
              </li>

              {/* ✅ Clickable Email */}
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="mailto:karthik@karthikmortgage.com"
                  className="hover:text-gray-300 transition"
                >
                  karthik@karthikmortgage.com
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#9E3F0D] py-4 text-center text-sm text-gray-100">
          © 2025 Karthik Mortgage. All rights reserved. NMLS #2707715. Licensed in TX.
        </div>
      </footer>

      {/* ✅ Floating WhatsApp Icon */}
      <FloatingWhatsApp />
    </>
  );
}
