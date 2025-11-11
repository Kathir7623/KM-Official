import { useState } from "react";

export default function TaxBenefitCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [points, setPoints] = useState(2);
  const [stateTaxRate, setStateTaxRate] = useState(5);
  const [realEstateTaxes, setRealEstateTaxes] = useState(1800);
  const [otherDeductions, setOtherDeductions] = useState(1350);
  const [filingStatus, setFilingStatus] = useState("single");
  const [taxRate, setTaxRate] = useState(32);
  const [month, setMonth] = useState("January");

  // Constants
  const standardDeductions = {
    single: 12400,
    married: 24800,
    head: 18650,
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Loan calculations
  const monthlyRate = interestRate / 1200;
  const totalPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));

  const loanPoints = (loanAmount * points) / 100;
  const annualInterestPaid = loanAmount * (interestRate / 100);
  const itemizedDeductions =
    loanPoints + annualInterestPaid + realEstateTaxes + otherDeductions;

  const standardDeduction = standardDeductions[filingStatus];
  const additionalDeductions = itemizedDeductions - standardDeduction;

  const taxBenefit = additionalDeductions * (taxRate / 100);
  const afterTaxPayment = monthlyPayment - taxBenefit / 12;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left side: Inputs */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Tax Benefits of Buying a Home
            </h2>

            <div className="space-y-5">

              {/* Loan Amount */}
              <div>
                <label className="block text-gray-600 mb-1">Loan Amount</label>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(+e.target.value)}
                  className="w-full accent-orange-500"
                />
                <div className="text-right font-medium text-gray-800">
                  ${loanAmount.toLocaleString()}
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-gray-600 mb-1">Interest Rate</label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(+e.target.value)}
                  className="w-full accent-orange-500"
                />
                <div className="text-right font-medium text-gray-800">
                  {interestRate.toFixed(3)}%
                </div>
              </div>

              {/* Loan Length */}
              <div>
                <label className="block text-gray-600 mb-1">Loan Length (Yrs)</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                  <option>30</option>
                </select>
              </div>

              {/* Month of Purchase */}
              <div>
                <label className="block text-gray-600 mb-1">Month of Purchase</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  {months.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Filing Status */}
              <div>
                <label className="block text-gray-600 mb-1">Filing Status</label>
                <select
                  value={filingStatus}
                  onChange={(e) => setFilingStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="single">Single, Standard Deduction</option>
                  <option value="married">Married Filing Jointly</option>
                  <option value="head">Head of Household</option>
                </select>
              </div>

              {/* Tax Rate */}
              <div>
                <label className="block text-gray-600 mb-1">Tax Rate</label>
                <select
                  value={taxRate}
                  onChange={(e) => setTaxRate(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  {[10, 12, 22, 24, 32, 35, 37].map((rate) => (
                    <option key={rate} value={rate}>{rate}%</option>
                  ))}
                </select>
              </div>

              {/* Points */}
              <div>
                <label className="block text-gray-600 mb-1">Points</label>
                <input
                  type="number"
                  value={points}
                  min="0"
                  max="5"
                  step="0.1"
                  onChange={(e) => setPoints(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* State Tax Rate */}
              <div>
                <label className="block text-gray-600 mb-1">State Tax Rate (%)</label>
                <input
                  type="number"
                  value={stateTaxRate}
                  onChange={(e) => setStateTaxRate(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Real Estate Taxes */}
              <div>
                <label className="block text-gray-600 mb-1">Real Estate Taxes ($)</label>
                <input
                  type="number"
                  value={realEstateTaxes}
                  onChange={(e) => setRealEstateTaxes(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Other Deductions */}
              <div>
                <label className="block text-gray-600 mb-1">Other Deductions ($)</label>
                <input
                  type="number"
                  value={otherDeductions}
                  onChange={(e) => setOtherDeductions(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Instructions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This calculator estimates the tax benefit of buying a home.
                Please enter your loan details and deductions. Mortgage interest,
                points, and real estate taxes are itemized deductions used to
                calculate your tax savings compared to the standard deduction.
              </p>
            </div>
          </div>

          {/* Right side: Results */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Results</h2>
            <p className="text-gray-600">Tax Benefit</p>
            <h1
              className={`text-3xl font-bold ${
                taxBenefit >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {taxBenefit >= 0 ? "+" : ""}${taxBenefit.toFixed(2)}
            </h1>

            <div className="mt-6 text-left text-sm text-gray-700 space-y-1">
              <div className="flex justify-between w-80">
                <span>Mortgage Payment:</span>
                <span>${monthlyPayment.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Loan Points:</span>
                <span>${loanPoints.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Interest Paid:</span>
                <span>${annualInterestPaid.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Real Estate Taxes:</span>
                <span>${realEstateTaxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Other Deductions:</span>
                <span>${otherDeductions.toFixed(2)}</span>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex justify-between w-80 font-semibold">
                <span>After Tax Payment:</span>
                <span>${afterTaxPayment.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
