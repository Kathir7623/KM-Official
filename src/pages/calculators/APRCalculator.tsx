import { useState } from "react";

export default function APRCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [originationFee, setOriginationFee] = useState(1);
  const [points, setPoints] = useState(2);
  const [otherFees, setOtherFees] = useState(0);

  // Constants
  const prepaidDays = 15; // assume 15 days prepaid interest

  // Monthly interest and payments
  const monthlyRate = interestRate / 1200;
  const totalPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));

  // Loan fee calculations
  const originationCost = (loanAmount * originationFee) / 100;
  const discountPoints = (loanAmount * points) / 100;
  const prepaidInterest = (loanAmount * (interestRate / 100) * prepaidDays) / 365;
  const totalLoanFees = originationCost + discountPoints + prepaidInterest + otherFees;

  // APR calculation (approximation)
  const financedAmount = loanAmount - totalLoanFees;
  const aprMonthlyRate =
    Math.pow(
      monthlyPayment / financedAmount * (1 - Math.pow(1 + monthlyRate, -totalPayments)),
      1 / totalPayments
    ) - 1;
  const apr = aprMonthlyRate * 12 * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT: Inputs */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              What is the APR for this loan?
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
                  className="w-full accent-blue-500"
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
                  className="w-full accent-blue-500"
                />
                <div className="text-right font-medium text-gray-800">
                  {interestRate.toFixed(3)}%
                </div>
              </div>

              {/* Loan Term */}
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

              {/* Origination Fee */}
              <div>
                <label className="block text-gray-600 mb-1">Origination Fee</label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={originationFee}
                  onChange={(e) => setOriginationFee(+e.target.value)}
                  className="w-full accent-blue-500"
                />
                <div className="text-right font-medium text-gray-800">
                  {originationFee.toFixed(2)}%
                </div>
              </div>

              {/* Points */}
              <div>
                <label className="block text-gray-600 mb-1">Points</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={points}
                  onChange={(e) => setPoints(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Other Loan Fees */}
              <div>
                <label className="block text-gray-600 mb-1">Other Loan Fees ($)</label>
                <input
                  type="number"
                  value={otherFees}
                  onChange={(e) => setOtherFees(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Instructions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This calculator estimates the Annual Percentage Rate (APR) for a given
                loan based on its parameters. In addition to its interest rate, we must
                also include the loan’s origination fee, discount points, and other loan
                fees to calculate the APR. This assumes 15 days of prepaid interest.
              </p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Results</h2>
            <p className="text-gray-600">APR</p>
            <h1 className="text-4xl font-bold text-blue-600">{apr.toFixed(2)}%</h1>

            <div className="mt-6 text-left text-sm text-gray-700 space-y-1">
              <div className="flex justify-between w-80">
                <span>Loan Amount:</span>
                <span>${loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Interest Rate:</span>
                <span>{interestRate.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Origination Fee:</span>
                <span>${originationCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Discount Points:</span>
                <span>${discountPoints.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Prepaid Interest:</span>
                <span>${prepaidInterest.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Other Loan Fees:</span>
                <span>${otherFees.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80 border-t pt-2 font-semibold">
                <span>Total Loan Fees:</span>
                <span>${totalLoanFees.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80">
                <span>Monthly Payment:</span>
                <span>${monthlyPayment.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-80 font-bold border-t pt-2">
                <span>Annual Percentage Rate (APR):</span>
                <span>{apr.toFixed(2)}%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
