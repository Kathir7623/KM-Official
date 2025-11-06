import { useState, useEffect } from 'react';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';

export default function Calculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal > 0 && monthlyRate > 0) {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(0);
    }
  }, [homePrice, downPayment, loanTerm, interestRate]);

  const downPaymentPercent = ((downPayment / homePrice) * 100).toFixed(1);
  const loanAmount = homePrice - downPayment;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <CalcIcon className="w-16 h-16 text-[#ED7A1C] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Calculate Your Mortgage with Ease
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Use our mortgage calculator to estimate your monthly payments, compare scenarios, and plan your budget with confidence. It's a simple tool to help you understand how factors like loan amount, interest rate, and term affect your payment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Details</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Home Price
                  </label>
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none text-lg"
                  />
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="10000"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full mt-2"
                    style={{
                      accentColor: '#ED7A1C',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Down Payment ({downPaymentPercent}%)
                  </label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none text-lg"
                  />
                  <input
                    type="range"
                    min="0"
                    max={homePrice}
                    step="5000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full mt-2"
                    style={{
                      accentColor: '#ED7A1C',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Loan Term (Years)
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none text-lg"
                  >
                    <option value="10">10 Years</option>
                    <option value="15">15 Years</option>
                    <option value="20">20 Years</option>
                    <option value="30">30 Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none text-lg"
                  />
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-2"
                    style={{
                      accentColor: '#ED7A1C',
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#ED7A1C] to-[#D66A0C] text-white p-8 rounded-lg shadow-xl mb-6">
                <h2 className="text-2xl font-bold mb-6">Your Estimated Monthly Payment</h2>
                <div className="text-6xl font-bold mb-4">
                  ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <p className="text-lg opacity-90">per month (principal & interest)</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Loan Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Home Price</span>
                    <span className="font-semibold text-gray-800">
                      ${homePrice.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Down Payment</span>
                    <span className="font-semibold text-gray-800">
                      ${downPayment.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-semibold text-gray-800">
                      ${loanAmount.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold text-gray-800">{interestRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Term</span>
                    <span className="font-semibold text-gray-800">{loanTerm} Years</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[#FFF5E6] p-6 rounded-lg border-l-4 border-[#ED7A1C]">
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Note:</span> These estimates are for informational purposes only and do not include property taxes, homeowners insurance, HOA fees, or PMI. Contact us for a personalized rate quote and complete payment breakdown.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-[#ED7A1C] font-semibold hover:text-[#D66A0C]"
                >
                  Talk to an Expert About Your Estimate <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our mortgage experts are here to help you find the best loan solution for your unique situation. Get a personalized quote and pre-approval today.
          </p>
          <a
            href="/apply"
            className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-flex items-center"
          >
            Apply for Pre-Approval <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
