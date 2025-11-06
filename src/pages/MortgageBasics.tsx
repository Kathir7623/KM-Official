import { BookOpen, DollarSign, Home, Shield, TrendingUp, Calendar } from 'lucide-react';

export default function MortgageBasics() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 text-[#ED7A1C] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Mortgage Terms Made Simple
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Understanding key mortgage terms and concepts helps you make smart decisions. We explain everything clearly, ensuring you're confident in your choices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Principal</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The principal is the amount of money you borrow from the lender. Your monthly payment goes toward paying down this balance over time. As you pay down principal, you build equity in your home.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Interest Rate</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The interest rate is the cost of borrowing money, expressed as a percentage. Your rate affects your monthly payment and the total amount you'll pay over the life of the loan. Lower rates mean lower payments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Amortization</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Amortization is the process of paying off your loan over time through regular payments. Early payments go mostly toward interest, while later payments pay down more principal. This is why refinancing can save you money.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Down Payment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The down payment is the amount you pay upfront when buying a home. Typically 3-20% of the purchase price. A larger down payment means a smaller loan amount and potentially better interest rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">PMI</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Private Mortgage Insurance (PMI) is required on conventional loans when your down payment is less than 20%. It protects the lender if you default. The good news? PMI can be removed once you reach 20% equity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Escrow</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                An escrow account holds funds for property taxes and homeowners insurance. Your lender collects a portion of these costs with your monthly payment and pays the bills when due. This ensures these important expenses are always paid.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">APR</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Annual Percentage Rate (APR) represents the true cost of your loan, including interest rate and fees. It's typically higher than the interest rate and provides a better comparison tool when shopping for mortgages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Equity</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Home equity is the portion of your home that you truly own — the difference between your home's market value and what you owe. Equity builds as you pay down your mortgage and as your home appreciates in value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Closing Costs</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Closing costs are fees paid at closing, typically 2-5% of the loan amount. These include appraisal fees, title insurance, origination fees, and more. We provide a detailed breakdown so there are no surprises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Fixed vs. Adjustable Rate</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Fixed-rate mortgages maintain the same interest rate for the life of the loan. Adjustable-rate mortgages (ARMs) have rates that can change after an initial fixed period. Fixed rates offer stability; ARMs may offer lower initial rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Pre-Qualification vs. Pre-Approval</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Pre-qualification is an estimate based on self-reported information. Pre-approval involves document verification and credit checks, giving you a firm commitment letter. Pre-approval is much stronger when making offers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-[#ED7A1C] mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Loan Term</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The loan term is the length of time you have to repay your mortgage. Common terms are 15, 20, or 30 years. Shorter terms mean higher monthly payments but less interest paid over time. Longer terms offer lower payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C] text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mortgage experts are here to explain any terms or concepts you don't understand. We believe informed borrowers make better decisions, so we take the time to educate you throughout the process.
            </p>
            <a
              href="/learning/faq"
              className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-block mr-4 mb-4"
            >
              Read Our FAQ
            </a>
            <a
              href="/contact"
              className="bg-white text-[#ED7A1C] border-2 border-[#ED7A1C] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#FFF5E6] transition-colors shadow-lg inline-block mb-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
