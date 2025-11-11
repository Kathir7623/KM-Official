import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../images/logo.png";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dropdown states
  const [learningCenterOpen, setLearningCenterOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Mobile dropdowns
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const learningRef = useRef(null);
  const aboutRef = useRef(null);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (learningRef.current && !learningRef.current.contains(e.target))
        setLearningCenterOpen(false);
      if (aboutRef.current && !aboutRef.current.contains(e.target))
        setAboutOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Karthik Mortgage Logo"
              className="h-10 w-auto object-contain lg:h-12 cursor-pointer"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/buy-home" className="text-gray-700 hover:text-[#ED7A1C] font-medium">
              Buy a Home
            </a>

            {/* 🔸 Single Calculators Link */}
            <a href="/calculator" className="text-gray-700 hover:text-[#ED7A1C] font-medium">
              Calculators
            </a>

            {/* 🔸 Learning Center Dropdown */}
            <div className="relative" ref={learningRef}>
              <button
                onClick={() => setLearningCenterOpen(!learningCenterOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#ED7A1C] font-medium"
              >
                <span>Learning Center</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    learningCenterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {learningCenterOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 border z-50 transition-all duration-300">
                  <a href="/learning/loan-programs" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    Loan Programs
                  </a>
                  <a href="/learning/loan-process" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    Loan Process
                  </a>
                  <a href="/learning/mortgage-basics" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    Mortgage Basics
                  </a>
                  <a href="/learning/faq" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    FAQ
                  </a>
                </div>
              )}
            </div>

            {/* 🔸 About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#ED7A1C] font-medium"
              >
                <span>About</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border z-50 transition-all duration-300">
                  <a href="/about" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    About
                  </a>
                  <a href="/testimonials" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    Testimonials
                  </a>
                  <a href="/contact" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    Contact
                  </a>
                  <a href="/reviews" className="block px-4 py-2 hover:text-[#ED7A1C] hover:bg-[#FFF5E6]">
                    Reviews
                  </a>
                </div>
              )}
            </div>

            {/* Apply Now */}
            <a
              href="/apply"
              className="bg-[#ED7A1C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#D66A0C] transition"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#ED7A1C] transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 🔸 Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
            <div className="flex flex-col items-start px-6 py-4 space-y-3 text-gray-700">
              <a href="/buy-home" className="hover:text-[#ED7A1C]">Buy a Home</a>
              <a href="/calculator" className="hover:text-[#ED7A1C]">Calculators</a>

              {/* Mobile Learning */}
              <div>
                <button
                  onClick={() => setMobileLearningOpen(!mobileLearningOpen)}
                  className="flex items-center justify-between w-full hover:text-[#ED7A1C]"
                >
                  Learning Center <ChevronDown className={`w-4 h-4 ${mobileLearningOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLearningOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <a href="/learning/loan-programs" className="block hover:text-[#ED7A1C]">Loan Programs</a>
                    <a href="/learning/loan-process" className="block hover:text-[#ED7A1C]">Loan Process</a>
                    <a href="/learning/mortgage-basics" className="block hover:text-[#ED7A1C]">Mortgage Basics</a>
                    <a href="/learning/faq" className="block hover:text-[#ED7A1C]">FAQ</a>
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between w-full hover:text-[#ED7A1C]"
                >
                  About <ChevronDown className={`w-4 h-4 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <a href="/about" className="block hover:text-[#ED7A1C]">About</a>
                    <a href="/testimonials" className="block hover:text-[#ED7A1C]">Testimonials</a>
                    <a href="/contact" className="block hover:text-[#ED7A1C]">Contact</a>
                    <a href="/reviews" className="block hover:text-[#ED7A1C]">Reviews</a>
                  </div>
                )}
              </div>

              <a
                href="/apply"
                className="w-full bg-[#ED7A1C] text-white text-center py-2 rounded-md font-semibold hover:bg-[#D66A0C] transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
