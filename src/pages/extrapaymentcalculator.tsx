import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Plus } from "lucide-react";

export default function ExtraPaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Extra payment fields
  const [extraMonthlyPayment, setExtraMonthlyPayment] = useState(200);
  const [oneTimePayment, setOneTimePayment] = useState(5000);
  const [oneTimeMonth, setOneTimeMonth] = useState(12);

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [results, setResults] = useState({
    monthlyPayment: 0,
    newTermMonths: 0,
    interestSaved: 0,
    newTotalInterest: 0,
  });

  const COLORS = ["#26B5F7", "#F8C630", "#2BC79C", "#E66B84"];

  useEffect(() => {
    // Standard monthly payment
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const standardMonthly =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    // Simulate amortization with extra payments
    let balance = principal;
    let totalInterest = 0;
    let month = 0;

    while (balance > 0 && month < n) {
      const interest = balance * monthlyRate;
      let principalPayment = standardMonthly - interest + extraMonthlyPayment;

      // Apply one-time payment
      if (month + 1 === oneTimeMonth) {
        principalPayment += oneTimePayment;
      }

      if (principalPayment > balance) principalPayment = balance;
      balance -= principalPayment;
      totalInterest += interest;
      month++;
    }

    const newTermMonths = month;
    const newTotalInterest = totalInterest;
    const oldTotalInterest = standardMonthly * n - principal;
    const interestSaved = oldTotalInterest - newTotalInterest;

    setResults({
      monthlyPayment: standardMonthly + extraMonthlyPayment,
      newTermMonths,
      interestSaved,
      newTotalInterest,
    });
  }, [
    loanAmount,
    interestRate,
    loanTerm,
    extraMonthlyPayment,
    oneTimePayment,
    oneTimeMonth,
  ]);

  const data = [
    { name: "Total Interest", value: results.newTotalInterest },
    { name: "Principal", value: loanAmount },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-6xl border border-gray-200">
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Extra Payment Calculator
            </h2>

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
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-gray-600"
              />
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
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

            {/* Term */}
            <div className="mb-6">
              <label className="block text-sm text-gray-500 mb-1">Term (Years)</label>
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

            {/* Extra Monthly Payment */}
            <div className="mb-4">
              <label className="block text-sm text-gray-500 mb-1">
                Extra Monthly Payment
              </label>
              <input
                type="number"
                value={extraMonthlyPayment}
                onChange={(e) => setExtraMonthlyPayment(Number(e.target.value))}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Advanced */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 mb-4"
            >
              <Plus size={14} />
              Advanced
            </button>

            {showAdvanced && (
              <div className="bg-gray-100 rounded-xl p-5 mb-6 shadow-sm">
                <h3 className="font-semibold text-gray-600 mb-3">
                  One-Time Extra Payment
                </h3>

                <div className="mb-3">
                  <label className="block text-sm text-gray-500 mb-1">
                    One-Time Payment Amount
                  </label>
                  <input
                    type="number"
                    value={oneTimePayment}
                    onChange={(e) => setOneTimePayment(Number(e.target.value))}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Month to Apply
                  </label>
                  <input
                    type="number"
                    value={oneTimeMonth}
                    onChange={(e) => setOneTimeMonth(Number(e.target.value))}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
            )}

            {/* See Details */}
            <button className="bg-gray-800 text-white font-medium rounded-full py-2 px-6 mt-4 hover:bg-gray-700 shadow-md transition">
              See Details
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Loan Summary
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
                  <Tooltip formatter={(v) => `$${v.toFixed(2)}`} />
                </PieChart>
              </ResponsiveContainer>

              <p className="text-center mt-[-150px] text-3xl font-bold text-gray-800">
                ${(results.monthlyPayment).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 mb-4">New Monthly Payment</p>

              <div className="text-center space-y-2 text-gray-700 text-sm">
                <p>
                  <strong>Loan Paid Off In:</strong>{" "}
                  {(results.newTermMonths / 12).toFixed(1)} years
                </p>
                <p>
                  <strong>Total Interest Saved:</strong>{" "}
                  ${results.interestSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
