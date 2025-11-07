import { CheckCircle, Users, TrendingDown, Shield, ArrowRight } from 'lucide-react';
import heroImg from "../images/home-background.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none">
            <img
              src={heroImg}
              alt="Mortgage Illustration"
              className="
                w-[95%]
                sm:w-[90%] 
                md:w-full 
                max-w-xl 
                rounded-2xl 
                shadow-xl 
                transition-transform 
                duration-300 
                hover:scale-105
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Your Trusted Partner in Mortgages
              <br className="hidden sm:block" />
              <span className="text-[#ED7A1C]"> Purchase or Refinance </span> with Confidence
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              At <span className="font-semibold text-[#ED7A1C]">Karthik Mortgage</span>, we don’t just process applications — we build relationships. 
              Our mission is to simplify the mortgage process, offering tailored solutions that make homeownership 
              and refinancing smoother, faster, and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/apply"
                className="bg-[#ED7A1C] text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-[#D66A0C] transition-all duration-300 shadow-md inline-flex items-center justify-center"
              >
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/calculator"
                className="bg-white text-[#ED7A1C] border-2 border-[#ED7A1C] px-8 py-3 rounded-md font-semibold text-base hover:bg-[#FFF5E6] transition-all duration-300 shadow-md"
              >
                Get Pre-Approved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-[#ED7A1C] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded on the belief that everyone deserves a clear and empowering mortgage experience, <span className="font-semibold text-[#ED7A1C]">Karthik Mortgage</span> brings expertise, transparency, and genuine care to every client we serve.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We understand that buying or refinancing a home is one of life's biggest financial steps. That's why our approach is centered around <span className="font-semibold">education</span>, <span className="font-semibold">communication</span>, and <span className="font-semibold">results</span> — not sales.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With years of industry experience, we've helped countless clients secure the right mortgage — from first-time homebuyers to homeowners seeking smarter refinance options.
            </p>

            <div className="bg-[#FFF5E6] border-l-4 border-[#ED7A1C] p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Promise:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Honest advice, every time.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Competitive rates and flexible mortgage programs.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">A personal touch — you're never just an application number.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION SECTION */}
      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">We Specialize In</h2>
            <div className="w-24 h-1 bg-[#ED7A1C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PURCHASE CARD */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <div className="bg-[#ED7A1C] p-3 rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Home Purchase Mortgages</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Whether you're buying your first home or your forever home, we'll help you find the best mortgage solution that fits your lifestyle and long-term goals.
              </p>
              <a href="/purchase" className="inline-flex items-center mt-4 text-[#ED7A1C] font-semibold hover:text-[#D66A0C]">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* REFINANCE CARD */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <div className="bg-[#ED7A1C] p-3 rounded-full">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Home Refinance Mortgages</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Refinancing can help you lower your interest rate, reduce monthly payments, or access equity for renovations or investments. We make the process quick, transparent, and stress-free.
              </p>
              <a href="/refinance" className="inline-flex items-center mt-4 text-[#ED7A1C] font-semibold hover:text-[#D66A0C]">
                Calculate Savings <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Advantage with Karthik Mortgage</h2>
            <div className="w-24 h-1 bg-[#ED7A1C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Guidance</h3>
              <p className="text-gray-600">We tailor every mortgage solution to fit your unique financial situation.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Pre-Approvals</h3>
              <p className="text-gray-600">Get pre-approved quickly with our efficient online process.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Local Expertise</h3>
              <p className="text-gray-600">We understand your market and provide insights that help you make the best decisions.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">From application to closing, we're with you every step — and beyond.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-flex items-center"
            >
              Talk to a Mortgage Expert <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
