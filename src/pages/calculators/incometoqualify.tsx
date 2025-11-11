import { useState } from "react";

export default function IncomeToQualifyCalculator() {
  const [loanType, setLoanType] = useState("Conventional");
  const [propertyPrice, setPropertyPrice] = useState(500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(3);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanYears, setLoanYears] = useState(30);

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;

  const monthlyPayment = (principal, annualRate, years) => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    return (principal * r) / (1 - Math.pow(1 + r, -n));
  };

  const monthlyPrincipalInterest = monthlyPayment(loanAmount, interestRate, loanYears);
  const monthlyTaxes = propertyPrice * 0.01765 / 12; // Example 1.765% annual tax
  const monthlyInsurance = propertyPrice * 0.005 / 12; // Example 0.5% annual hazard insurance
  const monthlyPMI = (loanAmount * 0.0058) / 12; // Example 0.58% annual PMI

  const totalMortgagePayment =
    monthlyPrincipalInterest + monthlyTaxes + monthlyInsurance + monthlyPMI;

  const incomeNeeded = totalMortgagePayment * 2; // 50% front ratio
  const allowedDebtPayments = incomeNeeded * 0.05; // 5% allowance

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side Inputs */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            How much Income do I need to qualify?
          </h2>

          {/* Loan Type */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">Loan Type</label>
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="Conventional">Conventional</option>
              <option value="FHA">FHA</option>
              <option value="VA">VA</option>
              <option value="USDA">USDA</option>
            </select>
          </div>

          {/* Property Price */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">Property Price</label>
            <input
              type="range"
              min="100000"
              max="1000000"
              step="5000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="text-right text-gray-700 font-semibold mt-1">
              ${propertyPrice.toLocaleString()}
            </div>
          </div>

          {/* Down Payment */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">Down Payment</label>
            <input
              type="range"
              min="0"
              max="50"
              step="0.5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-gray-700 font-semibold mt-1">
              <span>{downPaymentPercent.toFixed(2)}%</span>
              <span>${downPaymentAmount.toLocaleString()}</span>
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

          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Instructions
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Mortgage lenders use ratios to analyze your mortgage payment and
            determine how much loan you qualify for. The front ratio used in this
            calculation is 50%, comparing your total mortgage payment to your
            monthly income.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mt-2">
            The back ratio is 55%, comparing your total monthly debt obligations
            including your total mortgage payment to your monthly income.
          </p>
        </div>

        {/* Right Side - Results */}
        <div className="flex flex-col justify-center bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3 text-center">
            Results
          </h2>
          <p className="text-lg text-gray-700 text-center mb-2">
            Needed Income (Mo)
          </p>
          <p className="text-3xl font-bold text-gray-800 text-center mb-6">
            ${incomeNeeded.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>

          <div className="text-sm text-gray-700 space-y-1">
            <p className="flex justify-between">
              <span>Property Selling Price</span>
              <span>${propertyPrice.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span>Downpayment</span>
              <span>${downPaymentAmount.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span>Loan Amount</span>
              <span>${loanAmount.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span>Monthly Principal & Interest</span>
              <span>${monthlyPrincipalInterest.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Monthly Real Estate Taxes</span>
              <span>${monthlyTaxes.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Monthly Hazard Insurance</span>
              <span>${monthlyInsurance.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Monthly PMI</span>
              <span>${monthlyPMI.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Total Mortgage Payment</span>
              <span>${totalMortgagePayment.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-semibold text-gray-800 border-t border-gray-200 pt-2">
              <span>Income Needed for Payment</span>
              <span>${incomeNeeded.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-semibold text-gray-800">
              <span>Allow Debt Payments</span>
              <span>${allowedDebtPayments.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
