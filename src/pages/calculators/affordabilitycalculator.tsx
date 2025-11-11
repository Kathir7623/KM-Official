import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Plus, Minus } from "lucide-react";

export default function AffordabilityCalculator() {
  const [loanType, setLoanType] = useState("Conventional");
  const [monthlyIncome, setMonthlyIncome] = useState(6000);
  const [monthlyDebt, setMonthlyDebt] = useState(0);
  const [cashPosition, setCashPosition] = useState(25000);
  const [frontendDTI, setFrontendDTI] = useState(50);
  const [backendDTI, setBackendDTI] = useState(55);
  const [interestRate, setInterestRate] = useState(6.25);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  // Advanced fields
  const [term, setTerm] = useState("30 Years");
  const [annualTaxes, setAnnualTaxes] = useState(6677.46);
  const [taxRate, setTaxRate] = useState(1.77);
  const [annualHazardInsurance, setAnnualHazardInsurance] = useState(1890.56);
  const [hazardRate, setHazardRate] = useState(0.5);
  const [annualMI, setAnnualMI] = useState(1341.84);
  const [miRate, setMiRate] = useState(0.35);
  const [monthlyHOA, setMonthlyHOA] = useState(0);

  // --- Calculations ---
  const maxPayment = (monthlyIncome * (backendDTI / 100)) - monthlyDebt;
  const principalInterest = maxPayment * 0.725;
  const taxesHOA = maxPayment * 0.185;
  const hazardInsurance = maxPayment * 0.052;
  const mortgageInsurance = maxPayment * 0.038;

  const monthlyRate = interestRate / 1200;
  const termMonths = term.includes("15") ? 180 : 360;
  const maxLoanAmount = (principalInterest / monthlyRate) * (1 - Math.pow(1 + monthlyRate, -termMonths));

  const COLORS = ["#00C2FF", "#FFD700", "#00C896", "#FF5E78"];
  const data = [
    { name: "Principal & Interest", value: principalInterest },
    { name: "Taxes & HOA", value: taxesHOA },
    { name: "Hazard Insurance", value: hazardInsurance },
    { name: "Mortgage Insurance", value: mortgageInsurance },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE - Scenario Builder */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Scenario Builder</h2>
          <div className="space-y-5">
            
            {/* Loan Type */}
            <div>
              <label className="block text-gray-600 mb-1">Loan Type</label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option>Conventional</option>
                <option>FHA</option>
                <option>VA</option>
                <option>Jumbo</option>
              </select>
            </div>

            {/* Income / Debt / Cash */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">Monthly Income</label>
                <input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Monthly Debt</label>
                <input
                  type="number"
                  value={monthlyDebt}
                  onChange={(e) => setMonthlyDebt(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-600 mb-1">Cash Position</label>
                <input
                  type="number"
                  value={cashPosition}
                  onChange={(e) => setCashPosition(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Frontend / Backend DTI */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">Frontend DTI (%)</label>
                <input
                  type="number"
                  value={frontendDTI}
                  onChange={(e) => setFrontendDTI(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Backend DTI (%)</label>
                <input
                  type="number"
                  value={backendDTI}
                  onChange={(e) => setBackendDTI(+e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-gray-600 mb-1">Interest Rate (%)</label>
              <input
                type="range"
                min="2"
                max="10"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(+e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="text-right text-gray-700 font-medium mt-1">
                {interestRate.toFixed(2)}%
              </div>
            </div>

            {/* Advanced Button */}
            <button
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex items-center gap-2 mt-2 px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            >
              {advancedOpen ? <Minus size={18} /> : <Plus size={18} />}
              Advanced
            </button>

            {/* Advanced Details */}
            {advancedOpen && (
              <div className="bg-gray-100 rounded-lg p-4 mt-4 shadow-inner space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">Advanced Details</h3>
                  <button onClick={() => setAdvancedOpen(false)} className="text-gray-500 hover:text-gray-700 text-sm">
                    hide
                  </button>
                </div>

                {/* Term */}
                <div>
                  <label className="block text-gray-600 mb-1">Term</label>
                  <select
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option>15 Years</option>
                    <option>30 Years</option>
                  </select>
                </div>

                {/* Annual Taxes */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-600 mb-1">Annual Taxes</label>
                    <input
                      type="number"
                      value={annualTaxes}
                      onChange={(e) => setAnnualTaxes(+e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">% Rate</label>
                    <input
                      type="number"
                      value={taxRate}
                      onChange={(e) => setTaxRate(+e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>

                {/* Hazard Insurance */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-600 mb-1">Annual Hazard Insurance</label>
                    <input
                      type="number"
                      value={annualHazardInsurance}
                      onChange={(e) => setAnnualHazardInsurance(+e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">% Rate</label>
                    <input
                      type="number"
                      value={hazardRate}
                      onChange={(e) => setHazardRate(+e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>

                {/* Mortgage Insurance */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-600 mb-1">Annual MI</label>
                    <input
                      type="number"
                      value={annualMI}
                      onChange={(e) => setAnnualMI(+e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">% Rate</label>
                    <input
                      type="number"
                      value={miRate}
                      onChange={(e) => setMiRate(+e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>

                {/* HOA */}
                <div>
                  <label className="block text-gray-600 mb-1">Monthly HOA</label>
                  <input
                    type="number"
                    value={monthlyHOA}
                    onChange={(e) => setMonthlyHOA(+e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE - Loan Details */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Loan Details</h2>
          <p className="text-gray-600">Max Pre-Approval</p>
          <p className="text-3xl font-bold text-green-600 mb-2">
            ${maxLoanAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>

          {/* Donut Chart */}
          <div className="w-64 h-64 mb-6">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Payment Text */}
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Your Payment:{" "}
            <span className="text-blue-600 text-2xl font-bold">
              ${maxPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </p>

          {/* Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-sm font-medium">
            <div className="text-blue-500">
              <p>{principalInterest.toFixed(2)}</p>
              <p className="text-gray-500">Principal & Interest</p>
            </div>
            <div className="text-yellow-500">
              <p>{taxesHOA.toFixed(2)}</p>
              <p className="text-gray-500">Taxes & HOA</p>
            </div>
            <div className="text-green-500">
              <p>{hazardInsurance.toFixed(2)}</p>
              <p className="text-gray-500">Hazard Insurance</p>
            </div>
            <div className="text-pink-500">
              <p>{mortgageInsurance.toFixed(2)}</p>
              <p className="text-gray-500">Mortgage Insurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
