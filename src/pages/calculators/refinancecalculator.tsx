import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Plus } from "lucide-react";

export default function RefinanceCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Advanced fields
  const [annualInsurance, setAnnualInsurance] = useState(2500);
  const [annualTaxes, setAnnualTaxes] = useState(9000);
  const [monthlyHOA, setMonthlyHOA] = useState(0);

  const COLORS = ["#26B5F7", "#F8C630", "#2BC79C", "#E66B84"];

  // Core calculation
  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const n = loanTerm * 12;

    const pAndI =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const totalMonthly =
      pAndI + annualInsurance / 12 + annualTaxes / 12 + monthlyHOA;

    setMonthlyPayment(totalMonthly);
  }, [loanAmount, interestRate, loanTerm, annualInsurance, annualTaxes, monthlyHOA]);

  const pAndI = monthlyPayment - (annualInsurance / 12 + annualTaxes / 12 + monthlyHOA);

  const data = [
    { name: "Principal & Interest", value: pAndI },
    { name: "Taxes & HOA", value: annualTaxes / 12 + monthlyHOA },
    { name: "Hazard Insurance", value: annualInsurance / 12 },
    { name: "Mortgage Insurance", value: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-6xl border border-gray-200">
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT PANEL */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Loan Details
            </h2>

            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">Loan Type</label>
                <select className="w-full border rounded-lg p-2">
                  <option>Conventional</option>
                  <option>FHA</option>
                  <option>VA</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">Term</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full border rounded-lg p-2"
                >
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={25}>25 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="mb-6">
              <label className="block text-sm text-gray-500 mb-1">Loan Amount</label>
              <div className="text-gray-700 text-sm mb-1">
                ${loanAmount.toLocaleString()}
              </div>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-gray-600"
              />
            </div>

            {/* Interest Rate */}
            <div className="mb-4">
              <label className="block text-sm text-gray-500 mb-1">
                Interest Rate ({interestRate}%)
              </label>
              <input
                type="range"
                min="2"
                max="10"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-gray-600"
              />
            </div>

            {/* Advanced Button */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 mb-4"
            >
              <Plus size={14} />
              Advanced
            </button>

            {showAdvanced && (
              <div className="bg-gray-100 rounded-xl p-5 mb-6 shadow-sm">
                <h3 className="font-semibold text-gray-600 mb-3">Advanced Details</h3>

                {/* Annual Insurance */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-500 mb-1">
                    Annual Insurance
                  </label>
                  <input
                    type="number"
                    value={annualInsurance}
                    onChange={(e) => setAnnualInsurance(Number(e.target.value))}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                {/* Annual Taxes */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-500 mb-1">
                    Annual Taxes
                  </label>
                  <input
                    type="number"
                    value={annualTaxes}
                    onChange={(e) => setAnnualTaxes(Number(e.target.value))}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                {/* Monthly HOA */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Monthly HOA
                  </label>
                  <input
                    type="number"
                    value={monthlyHOA}
                    onChange={(e) => setMonthlyHOA(Number(e.target.value))}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
            )}

            {/* See Details Button */}
            <button className="bg-gray-800 text-white font-medium rounded-full py-2 px-6 mt-6 hover:bg-gray-700 shadow-md transition">
              See Details
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Monthly Payments Breakdown
            </h2>

            <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => `$${Number(value || 0).toFixed(2)}`}
                  />
                </PieChart>
              </ResponsiveContainer>

              <p className="text-center mt-[-150px] text-3xl font-bold text-gray-800">
                ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-gray-500 mb-4">Your Payment</p>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 w-full mt-6">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2 rounded-full bg-[#26B5F7]" />
                  Principal & Interest: ${pAndI.toFixed(2)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2 rounded-full bg-[#F8C630]" />
                  Taxes & HOA: ${(annualTaxes / 12 + monthlyHOA).toFixed(2)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2 rounded-full bg-[#2BC79C]" />
                  Hazard Insurance: ${(annualInsurance / 12).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
