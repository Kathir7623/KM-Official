import { CheckCircle } from "lucide-react";

export default function Foreclosure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#ED7A1C] mb-4">Foreclosure</h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Foreclosure occurs when a borrower fails to make mortgage payments,
            and the lender takes legal action to recover the outstanding debt by
            selling the property.
          </p>
        </div>

        {/* Process Overview */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#ED7A1C] mb-4">
            The Foreclosure Process
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Missed payments trigger late notices and potential default warnings.",
              "After repeated nonpayment, the lender files a foreclosure notice.",
              "A redemption period may allow the borrower to repay and reclaim ownership.",
              "If unresolved, the property is sold at a public auction.",
              "Proceeds from the sale are applied to the mortgage balance and costs.",
            ].map((step, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Avoiding Foreclosure */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#ED7A1C] mb-4">
            How to Avoid Foreclosure
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Communicate with your lender at the first sign of financial trouble.",
              "Consider loan modification or refinancing options.",
              "Request a forbearance plan to temporarily reduce payments.",
              "Explore selling the home before foreclosure occurs.",
            ].map((tip, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Foreclosure */}
        <div>
          <h2 className="text-2xl font-semibold text-[#ED7A1C] mb-4">
            Life After Foreclosure
          </h2>
          <p className="text-gray-700 mb-4">
            A foreclosure can impact your credit and ability to purchase a home
            in the future, but recovery is possible with time and responsible
            financial management.
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              "Review your credit report and correct any errors.",
              "Rebuild credit through consistent on-time payments.",
              "Consider credit counseling or budgeting assistance.",
              "Plan for future homeownership after financial recovery.",
            ].map((advice, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{advice}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
