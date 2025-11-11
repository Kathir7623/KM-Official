import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Plus, ChevronRight } from "lucide-react";

export default function MortgageCalculatorPage() {
  const [price, setPrice] = useState(500000);
  const [downPercent, setDownPercent] = useState(3);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Advanced fields
  const [annualInsurance, setAnnualInsurance] = useState(5000);
  const [annualTaxes, setAnnualTaxes] = useState(17660);
  const [monthlyHOA, setMonthlyHOA] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const COLORS = ["#26B5F7", "#F8C630", "#2BC79C", "#E66B84"];

  const loanAmount = price - (downPercent / 100) * price;

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
  }, [
    price,
    downPercent,
    interestRate,
    loanTerm,
    annualInsurance,
    annualTaxes,
    monthlyHOA,
    loanAmount,
  ]);

  const pAndI =
    monthlyPayment - (annualInsurance / 12 + annualTaxes / 12 + monthlyHOA);
  const data = [
    { name: "Principal & Interest", value: pAndI },
    { name: "Taxes & HOA", value: annualTaxes / 12 + monthlyHOA },
    { name: "Hazard Insurance", value: annualInsurance / 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-6xl border border-gray-200">
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT: Loan Details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Loan Details
            </h2>

            {/* Loan Type + Term */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">
                  Loan Type
                </label>
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

            {/* Property Price */}
            <div className="mb-6">
              <label className="block text-sm text-gray-500 mb-1">
                Property Price
              </label>
              <div className="text-gray-700 text-sm mb-1">
                ${price.toLocaleString()}
              </div>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            {/* Down Payment */}
            <div className="mb-6">
              <label className="block text-sm text-gray-500 mb-1">
                Down Payment ({downPercent}%)
              </label>
              <div className="text-gray-700 text-sm mb-1">
                ${((price * downPercent) / 100).toLocaleString()}
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={downPercent}
                onChange={(e) => setDownPercent(Number(e.target.value))}
                className="w-full accent-blue-600"
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
                className="w-full accent-blue-600"
              />
            </div>

            {/* ADVANCED SECTION */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 mb-4"
            >
              <Plus size={14} />
              Advanced
            </button>

            {showAdvanced && (
              <div className="bg-gray-100 rounded-xl p-5 mb-6 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-600">
                    Advanced Details
                  </h3>
                  <button
                    className="text-sm text-gray-500 flex items-center gap-1"
                    onClick={() => setShowAdvanced(false)}
                  >
                    hide <ChevronRight size={14} />
                  </button>
                </div>

                {/* Annual Insurance */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-500 mb-1">
                    Annual Insurance
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={annualInsurance}
                      onChange={(e) =>
                        setAnnualInsurance(Number(e.target.value))
                      }
                      className="w-1/2 border rounded-lg p-2"
                    />
                    <input
                      type="text"
                      value={`${((annualInsurance / price) * 100).toFixed(2)}%`}
                      readOnly
                      className="w-1/2 border rounded-lg p-2 text-right text-gray-500 bg-gray-50"
                    />
                  </div>
                </div>

                {/* Annual Taxes */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-500 mb-1">
                    Annual Taxes
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={annualTaxes}
                      onChange={(e) => setAnnualTaxes(Number(e.target.value))}
                      className="w-1/2 border rounded-lg p-2"
                    />
                    <input
                      type="text"
                      value={`${((annualTaxes / price) * 100).toFixed(2)}%`}
                      readOnly
                      className="w-1/2 border rounded-lg p-2 text-right text-gray-500 bg-gray-50"
                    />
                  </div>
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
          </div>

          {/* RIGHT: Chart Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Monthly Payments Breakdown
            </h2>

            <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center relative">
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
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => `$${v.toFixed(2)}`} />
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute top-[130px] text-center">
                <p className="text-3xl font-bold text-gray-800">
                  $
                  {monthlyPayment.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-sm text-gray-500">Your Payment</p>
              </div>

              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 w-full mt-6 pt-20">
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
