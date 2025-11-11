import { useState } from "react";

export default function InterestOnlyCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.2);

  // Interest-only payment formula
  const interestOnlyPayment = (loanAmount * (interestRate / 100)) / 12;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Inputs */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Interest Only Loan
          </h2>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600">
              Loan Amount
            </label>
            <div className="flex items-center justify-between">
              <input
                type="range"
                min="10000"
                max="1000000"
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="text-right text-gray-700 font-semibold mt-1">
              ${loanAmount.toLocaleString()}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600">
              Interest Rate
            </label>
            <div className="flex items-center justify-between">
              <input
                type="range"
                min="1"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="text-right text-gray-700 font-semibold mt-1">
              {interestRate.toFixed(3)}%
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mt-8 mb-2">
            Instructions
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            This calculator shows the monthly interest-only payment amount based on your loan parameters.
          </p>
        </div>

        {/* Right Side - Results */}
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Results</h2>
          <p className="text-md text-gray-600 mb-1">Interest Only Payment</p>
          <p className="text-4xl font-bold text-gray-800">
            ${interestOnlyPayment.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
