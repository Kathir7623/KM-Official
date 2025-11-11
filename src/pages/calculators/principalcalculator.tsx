import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ArrowLeft } from "lucide-react";

export default function PrincipalCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [paymentsMade, setPaymentsMade] = useState(12);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculate remaining principal balance
  const monthlyRate = interestRate / 1200;
  const totalPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
  const remainingBalance =
    loanAmount *
    (Math.pow(1 + monthlyRate, paymentsMade) -
      Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, paymentsMade) - 1);
  const principalPaid = loanAmount - remainingBalance;

  const data = [
    { name: "Principal Balance", value: remainingBalance },
    { name: "Principal Paid", value: principalPaid },
  ];
  const COLORS = ["#00C2FF", "#FFD700"];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <a href="/calculator" className="text-orange-500 flex items-center gap-2 hover:underline">
            <ArrowLeft size={18} /> Back to Calculators
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT - Inputs */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              How much will my principal be after x months?
            </h2>

            <div className="space-y-6">
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
                  className="w-full accent-blue-600"
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
                  className="w-full accent-blue-600"
                />
                <div className="text-right font-medium text-gray-800">
                  {interestRate.toFixed(3)}%
                </div>
              </div>

              {/* Payments Made */}
              <div>
                <label className="block text-gray-600 mb-1">Payments Made (Months)</label>
                <input
                  type="range"
                  min="0"
                  max={totalPayments}
                  step="1"
                  value={paymentsMade}
                  onChange={(e) => setPaymentsMade(+e.target.value)}
                  className="w-full accent-blue-600"
                />
                <div className="text-right font-medium text-gray-800">
                  {paymentsMade} Months
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
            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Instructions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This calculator figures the principal balance remaining after a
                certain number of payments. This is useful to estimate your
                remaining balance after a specific number of months or years of
                payment, such as after the introductory period of an ARM loan.
              </p>
            </div>
          </div>

          {/* RIGHT - Results */}
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Results</h2>
            <div className="text-sm text-gray-500 mb-3">
              GRAPH <span className="text-gray-400">|</span> OVERVIEW
            </div>

            <div className="w-64 h-64 mb-4">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={75}
                    outerRadius={100}
                    paddingAngle={1}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="text-3xl font-bold text-blue-600 mb-1">
              ${remainingBalance.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            <p className="text-gray-600 mb-6">
              Principal Balance ({((remainingBalance / loanAmount) * 100).toFixed(2)}%)
            </p>

            <div className="flex justify-center gap-10 border-t pt-4 w-full text-sm font-medium">
              <div>
                <p className="text-gray-800">
                  ${remainingBalance.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
                <p className="text-gray-500">Principal Balance</p>
              </div>
              <div>
                <p className="text-gray-800">
                  ${principalPaid.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
                <p className="text-gray-500">Principal Paid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
