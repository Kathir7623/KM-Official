import React from "react";
import { FileText, CheckCircle } from "lucide-react";

const ClosingCost: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#ED7A1C] to-[#D66A0C] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mortgage Basics – Closing Costs
          </h1>
          <p className="text-lg text-orange-100">
            Understanding closing costs helps you prepare financially for your mortgage.  
            Learn what they include, how they’re calculated, and who pays for what.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        {/* Introduction */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Closing costs are fees and expenses you pay to finalize a home loan, beyond the property’s purchase price.  
            They typically range from <strong>2% to 5%</strong> of the loan amount and are paid when ownership of the property officially transfers.
          </p>
          <p>
            These costs cover services provided by your lender, title company, and other third parties involved in the transaction.
          </p>
        </div>

        {/* Common Closing Costs */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Common Closing Costs
          </h2>
          <ul className="space-y-3">
            {[
              "Loan Origination Fee — Charged by the lender for processing your loan application.",
              "Appraisal Fee — Covers the cost of evaluating the home’s fair market value.",
              "Credit Report Fee — Payment for obtaining your credit report from a bureau.",
              "Title Search & Insurance — Ensures the property title is free of disputes or liens.",
              "Recording Fees — Charged by local governments to record the property sale.",
              "Attorney Fees — Legal services for reviewing and preparing loan documents.",
              "Survey Fee — Verifies property boundaries and land features.",
              "Prepaid Interest — Covers mortgage interest from closing to the first payment date.",
              "Escrow Deposit — Funds set aside for property taxes and homeowner’s insurance.",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who Pays Closing Costs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Who Pays Closing Costs?
          </h2>
          <p className="mb-4">
            Both buyers and sellers may share closing costs, but in most cases, buyers pay the majority.  
            However, sellers may agree to cover part of the costs to make the deal more appealing.
          </p>
          <ul className="space-y-3">
            {[
              "Buyers typically pay for appraisal, credit report, lender fees, and escrow deposits.",
              "Sellers often cover real estate commissions and prorated property taxes.",
              "Closing cost responsibilities can vary depending on local laws and negotiations.",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reducing Closing Costs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            How to Reduce Your Closing Costs
          </h2>
          <ul className="space-y-3">
            {[
              "Shop around for lenders and compare loan estimates.",
              "Ask your lender to match or beat competitor offers.",
              "Negotiate with the seller for a closing cost credit.",
              "Check if you qualify for government or first-time buyer assistance.",
              "Review your Loan Estimate and Closing Disclosure carefully for accuracy.",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Advice */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Final Thoughts
          </h2>
          <p className="leading-relaxed">
            Understanding closing costs upfront helps you plan your budget effectively.  
            Always request a detailed estimate from your lender early in the process to avoid surprises at the closing table.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default ClosingCost;
