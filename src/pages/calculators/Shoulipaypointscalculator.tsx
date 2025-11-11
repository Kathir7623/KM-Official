import { useState } from "react";

export default function PayPointsCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [interestRateWithPoints, setInterestRateWithPoints] = useState(7.5);
  const [points, setPoints] = useState(2000);
  const [loanYears, setLoanYears] = useState(30);
  const [savingRate, setSavingRate] = useState(5);

  // Monthly payment formula
  const monthlyPayment = (principal, annualRate, years) => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    return (principal * r) / (1 - Math.pow(1 + r, -n));
  };

  const paymentWithoutPoints = monthlyPayment(loanAmount, interestRate, loanYears);
  const paymentWithPoints = monthlyPayment(loanAmount, interestRateWithPoints, loanYears);
  const monthlySavings = paymentWithoutPoints - paymentWithPoints;
  const monthlyInvestmentIncome = (points * (savingRate / 100)) / 12;
  const trueMonthlySavings = monthlySavings - monthlyInvestmentIncome;

  // Breakeven calculation
  const breakevenMonths =
    trueMonthlySavings > 0 ? points / trueMonthlySavings : null;
  const years = breakevenMonths ? Math.floor(breakevenMonths / 12) : 0;
  const months = breakevenMonths ? Math.round(breakevenMonths % 12) : 0;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side Inputs */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Should I pay points for a lower interest rate?
          </h2>

          {/* Loan Amount */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">Loan Amount</label>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="text-right text-gray-700 font-semibold mt-1">
              ${loanAmount.toLocaleString()}
            </div>
          </div>

          {/* Interest Rate */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">Interest Rate</label>
            <input
              type="range"
              min="1"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="text-right text-gray-700 font-semibold mt-1">
              {interestRate.toFixed(3)}%
            </div>
          </div>

          {/* Interest Rate With Points */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">
              Interest Rate With Points
            </label>
            <input
              type="range"
              min="1"
              max="15"
              step="0.1"
              value={interestRateWithPoints}
              onChange={(e) => setInterestRateWithPoints(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="text-right text-gray-700 font-semibold mt-1">
              {interestRateWithPoints.toFixed(3)}%
            </div>
          </div>

          {/* Points */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">Points</label>
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="text-right text-gray-700 font-semibold mt-1">
              ${points.toLocaleString()}
            </div>
          </div>

          {/* Loan Length */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600">Loan Length (Yrs)</label>
            <select
              value={loanYears}
              onChange={(e) => setLoanYears(Number(e.target.value))}
              className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
              <option value={25}>25 Years</option>
              <option value={30}>30 Years</option>
            </select>
          </div>

          {/* Advanced */}
          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <span className="text-lg font-bold">＋</span>
            <span className="text-md font-medium">Advanced</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Instructions
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            This calculator figures the breakeven point for the points to be
            paid. This is the time it would take for the savings of lower
            monthly payments to make up for the upfront point(s) paid.
          </p>
        </div>

        {/* Right Side - Results */}
        <div className="flex flex-col justify-center bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3 text-center">
            Results
          </h2>
          <p className="text-lg text-gray-700 text-center mb-2">
            Breakeven Point
          </p>
          <p className="text-3xl font-bold text-gray-800 text-center mb-6">
            {breakevenMonths
              ? `${years} years, ${months} months`
              : "N/A"}
          </p>

          <div className="text-sm text-gray-700 space-y-1">
            <p className="flex justify-between">
              <span>Monthly Payment without Points</span>
              <span>${paymentWithoutPoints.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Monthly Payment with Points</span>
              <span>${paymentWithPoints.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Monthly Savings</span>
              <span>${monthlySavings.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Cost of Points</span>
              <span>${points.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Saving Rate of Return</span>
              <span>{savingRate}%</span>
            </p>
            <p className="flex justify-between">
              <span>Monthly Income from Investment</span>
              <span>${monthlyInvestmentIncome.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-semibold text-gray-800 border-t border-gray-200 pt-2">
              <span>True Monthly Savings</span>
              <span>${trueMonthlySavings.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
