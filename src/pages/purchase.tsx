import { ArrowRight, CheckCircle, Home, Users } from "lucide-react";
import purchaseImg from "../images/purchase.jpeg";


export default function Purchase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Home Purchase Loans
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Buying a home is one of life’s most exciting milestones — and we’re
            here to make it seamless. At{" "}
            <span className="text-[#ED7A1C] font-semibold">
              Karthik Mortgage
            </span>
            , we specialize in guiding homebuyers through every step of the loan
            process with transparency, speed, and trust.
          </p>
        </div>

        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          <img src={purchaseImg} alt="Purchase" className="rounded-2xl shadow-lg w-[600px] h-auto" />


          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Make Your Dream Home a Reality
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're a first-time homebuyer or upgrading to your next
              dream home, our experienced team will help you find the best
              financing options tailored to your budget and goals. We simplify
              everything — from pre-approval to closing — so you can focus on
              what really matters: finding your perfect home.
            </p>
            <a
              href="/apply"
              className="inline-flex items-center bg-[#ED7A1C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#D66A0C] transition-colors"
            >
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#ED7A1C] mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Why Choose Karthik Mortgage for Your Home Purchase Loan?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Fast Pre-Approval:</span> Get
                pre-qualified quickly and shop for homes with confidence.
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Low Down Payment Options:</span>{" "}
                Choose flexible programs designed for first-time buyers.
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Competitive Interest Rates:</span>{" "}
                Access exclusive loan products and savings opportunities.
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#ED7A1C] mr-3 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Personalized Guidance:</span>{" "}
                Get direct support from experts who understand your needs.
              </p>
            </li>
          </ul>
        </div>

        {/* Loan Programs Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Loan Programs We Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#FFF5E6] p-6 rounded-lg shadow-md">
              <Home className="w-10 h-10 text-[#ED7A1C] mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Conventional Loans
              </h4>
              <p className="text-gray-600">
                Flexible financing for buyers with good credit and stable
                income.
              </p>
            </div>

            <div className="bg-[#FFF5E6] p-6 rounded-lg shadow-md">
              <Users className="w-10 h-10 text-[#ED7A1C] mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">FHA Loans</h4>
              <p className="text-gray-600">
                Ideal for first-time buyers — low down payments and relaxed
                credit requirements.
              </p>
            </div>

            <div className="bg-[#FFF5E6] p-6 rounded-lg shadow-md">
              <Home className="w-10 h-10 text-[#ED7A1C] mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">VA Loans</h4>
              <p className="text-gray-600">
                Exclusive benefits for veterans and active-duty service members.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Homeownership Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team will help you every step of the way — from pre-approval to
            closing. Let’s make it happen!
          </p>
          <a
            href="/apply"
            className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors inline-flex items-center"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
