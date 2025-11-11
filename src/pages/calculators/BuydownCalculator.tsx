import { useState } from "react";

export default function BuydownCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [buydownType, setBuydownType] = useState("2/1 Buydown");

  const calculateMonthlyPayment = (rate, amount, years) => {
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  };

  const generateBuydownData = () => {
    const basePayment = calculateMonthlyPayment(interestRate, loanAmount, loanTerm);
    let buydownRates = [];

    if (buydownType === "1/0 Buydown") {
      buydownRates = [interestRate - 1];
    } else if (buydownType === "2/1 Buydown") {
      buydownRates = [interestRate - 2, interestRate - 1];
    } else if (buydownType === "3/2/1 Buydown") {
      buydownRates = [interestRate - 3, interestRate - 2, interestRate - 1];
    }

    return buydownRates.map((rate) => {
      const newPayment = calculateMonthlyPayment(rate, loanAmount, loanTerm);
      const monthlySavings = basePayment - newPayment;
      const annualSavings = monthlySavings * 12;
      return { rate, newPayment, monthlySavings, annualSavings };
    });
  };

  const buydownData = generateBuydownData();
  const totalBuydownCost = buydownData.reduce((sum, d) => sum + d.annualSavings, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] to-white p-6 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-5xl">
        <h1 className="text-2xl font-semibold text-center mb-6">
          How a temporary rate buydown would affect your next home purchase?
        </h1>

        {/* Inputs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Loan Amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Loan Length (Years)</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
              <option value={25}>25 Years</option>
              <option value={30}>30 Years</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Buydown Type</label>
            <select
              value={buydownType}
              onChange={(e) => setBuydownType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="1/0 Buydown">1/0 Buydown</option>
              <option value="2/1 Buydown">2/1 Buydown</option>
              <option value="3/2/1 Buydown">3/2/1 Buydown</option>
            </select>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-gray-700">
          <h2 className="text-lg font-semibold mb-2 text-center">Instructions</h2>
          <p className="text-sm text-center">
            This calculator helps you understand how a temporary rate buydown could affect your mortgage payments.
            By selecting your buydown type, loan amount, interest rate, and loan term, you'll see how much you can save
            each month during the buydown period.
          </p>
        </div>

        {/* Results */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-center mb-4">Buydown Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2">Interest Rate</th>
                  <th>New Payment</th>
                  <th>Monthly Savings</th>
                  <th>Payments at Rate</th>
                  <th>Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                {buydownData.map((d, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{d.rate.toFixed(2)}%</td>
                    <td>${d.newPayment.toFixed(2)}</td>
                    <td>${d.monthlySavings.toFixed(2)}</td>
                    <td>12</td>
                    <td>${d.annualSavings.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right mt-4 font-semibold text-lg">
            Total Buydown Cost: ${totalBuydownCost.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
