import { ArrowRight, CheckCircle, TrendingDown, PiggyBank } from "lucide-react";
import purchaseImg from "../images/refinance.jpeg";

export default function Refinance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Home Refinance Loans
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Refinancing your home can open doors to financial freedom — lower
            monthly payments, pay off your loan faster, or access cash when you
            need it most. At{" "}
            <span className="text-[#ED7A1C] font-semibold">
              Karthik Mortgage
            </span>
            , we make refinancing simple, transparent, and tailored to your
            financial goals.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img src={purchaseImg} alt="Purchase" className="rounded-2x1 shadow-lg w-[600px] h-auto" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Save More, Stress Less
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Interest rates and financial goals change over time — and your
              mortgage should keep up. Refinancing helps you reduce your rate,
              consolidate debt, or tap into your home’s equity for renovations,
              education, or emergencies.
            </p>
            <a
              href="/apply"
              className="inline-flex items-center bg-[#ED7A1C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#D66A0C] transition-colors"
            >
              Start Refinance Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#ED7A1C] mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Why Refinance with Karthik Mortgage?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Lower Your Monthly Payment:</span>{" "}
                Take advantage of current low interest rates to reduce expenses.
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Shorten Your Loan Term:</span>{" "}
                Pay off your mortgage faster and save thousands in interest.
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Cash-Out Option:</span> Use your
                home equity for home improvements, college tuition, or
                debt consolidation.
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">No Hidden Fees:</span> Transparent
                rates and clear communication throughout the entire process.
              </p>
            </li>
          </ul>
        </div>

        {/* Refinance Options Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Refinance Options We Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#FFF5E6] p-6 rounded-lg shadow-md">
              <TrendingDown className="w-10 h-10 text-[#ED7A1C] mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Rate-and-Term Refinance
              </h4>
              <p className="text-gray-600">
                Replace your current mortgage with one that offers a better rate
                or shorter term.
              </p>
            </div>

            <div className="bg-[#FFF5E6] p-6 rounded-lg shadow-md">
              <PiggyBank className="w-10 h-10 text-[#ED7A1C] mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Cash-Out Refinance
              </h4>
              <p className="text-gray-600">
                Tap into your home’s equity and get funds for major life goals or
                unexpected expenses.
              </p>
            </div>

            <div className="bg-[#FFF5E6] p-6 rounded-lg shadow-md">
              <TrendingDown className="w-10 h-10 text-[#ED7A1C] mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                FHA Streamline Refinance
              </h4>
              <p className="text-gray-600">
                Simplified process for homeowners with existing FHA loans —
                minimal paperwork and no appraisal needed.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Take Control of Your Mortgage Today
          </h3>
          <p className="text-gray-600 mb-6">
            Whether you're looking to lower your rate, reduce your term, or get
            cash out — we’re here to make it happen.
          </p>
          <a
            href="/apply"
            className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors inline-flex items-center"
          >
            Apply to Refinance <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
