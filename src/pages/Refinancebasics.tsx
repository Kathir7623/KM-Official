import React from "react";
import { FileText, CheckCircle } from "lucide-react";

const RefinanceBasics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#ED7A1C] to-[#D66A0C] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mortgage Basics – Refinance
          </h1>
          <p className="text-lg text-orange-100">
            Refinancing can help you lower your interest rate, change loan terms, or access your home equity. 
            Learn how it works and whether it’s right for you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        {/* Introduction */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Refinancing your mortgage means replacing your existing loan with a new one, typically to secure a lower 
            interest rate, reduce monthly payments, or shorten your loan term.
          </p>
          <p>
            Many homeowners also refinance to convert from an adjustable-rate mortgage (ARM) to a fixed-rate loan, 
            or to access home equity for expenses such as renovations or debt consolidation.
          </p>
        </div>

        {/* Types of Refinancing */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Common Types of Refinancing
          </h2>
          <ul className="space-y-3">
            {[
              "Rate-and-Term Refinance — Change your loan’s interest rate or term to improve affordability.",
              "Cash-Out Refinance — Tap into your home’s equity by replacing your loan with a larger one.",
              "Cash-In Refinance — Pay down your balance to qualify for better terms.",
              "Streamline Refinance — A simplified process for certain government-backed loans like FHA or VA.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">Benefits of Refinancing</h2>
          <ul className="space-y-3">
            {[
              "Lower your interest rate and monthly payment.",
              "Pay off your mortgage faster by choosing a shorter term.",
              "Switch from an adjustable to a fixed rate for stability.",
              "Access cash for major expenses or investments.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Considerations */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">What to Consider Before Refinancing</h2>
          <ul className="space-y-3">
            {[
              "Refinancing costs may include appraisal, title, and closing fees.",
              "Ensure you’ll stay in the home long enough to benefit from the savings.",
              "Compare rates and terms from multiple lenders before committing.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RefinanceBasics;
