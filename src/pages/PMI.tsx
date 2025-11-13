import React from "react";
import { FileText, CheckCircle } from "lucide-react";

const PMI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#ED7A1C] to-[#D66A0C] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mortgage Basics – Private Mortgage Insurance (PMI)
          </h1>
          <p className="text-lg text-orange-100">
            Learn what Private Mortgage Insurance (PMI) is, why it’s required,
            how it affects your monthly payment, and how to remove it.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        {/* Introduction */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Private Mortgage Insurance (PMI) is a policy that protects the
            lender in case you stop making payments on your loan. It’s typically
            required when your down payment is less than 20% of the home’s
            purchase price.
          </p>
          <p>
            While PMI increases your monthly payment, it also allows you to
            qualify for a mortgage sooner instead of waiting to save a full
            20% down payment.
          </p>
        </div>

        {/* When PMI Is Required */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            When PMI Is Required
          </h2>
          <ul className="space-y-3">
            {[
              "Conventional loans with less than 20% down payment.",
              "Lenders require PMI to reduce their risk of loss.",
              "PMI applies only to conventional loans — FHA and VA loans have their own insurance systems.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How PMI Is Calculated */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            How PMI Is Calculated
          </h2>
          <p className="mb-4">
            PMI cost depends on several factors, such as:
          </p>
          <ul className="space-y-3">
            {[
              "Loan-to-Value (LTV) ratio — higher LTV means higher PMI.",
              "Credit score — borrowers with lower scores pay more.",
              "Loan type and term — fixed vs. adjustable-rate loans affect PMI cost.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How to Remove PMI */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            How to Remove PMI
          </h2>
          <ul className="space-y-3">
            {[
              "Once your loan balance reaches 80% of the home’s original value, you can request PMI removal.",
              "PMI is automatically canceled when your balance reaches 78% of the original value.",
              "You can also remove PMI by refinancing if your home has appreciated significantly.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Takeaway */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Key Takeaway
          </h2>
          <p className="text-lg leading-relaxed">
            PMI can make homeownership possible with a smaller down payment, but
            it’s important to understand how it affects your costs and how you
            can remove it when eligible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PMI;
