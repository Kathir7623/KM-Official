import { Building2, Home, Shield, Landmark, TrendingUp, ArrowRight } from 'lucide-react';

export default function LoanPrograms() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Find the Right Loan for Your Goals
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Every borrower has unique needs and financial situations. We offer a comprehensive range of loan programs designed to help you achieve homeownership or refinance successfully.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-[#ED7A1C] mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Conventional Loans</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Conventional loans are the most popular mortgage option, offering flexible terms and competitive rates for buyers with strong credit. These loans are not backed by the government and typically require a higher credit score and down payment.
              </p>
              <div className="bg-[#FFF5E6] p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Competitive interest rates for qualified borrowers</li>
                  <li>• Flexible loan amounts and terms (15, 20, or 30 years)</li>
                  <li>• No upfront mortgage insurance premium</li>
                  <li>• Can be used for primary homes, second homes, or investment properties</li>
                  <li>• PMI can be removed once you reach 20% equity</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Home className="w-12 h-12 text-[#ED7A1C] mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">FHA Loans</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                FHA loans are insured by the Federal Housing Administration and are great for first-time buyers with lower down payment needs. These loans are more forgiving of lower credit scores and offer competitive rates.
              </p>
              <div className="bg-[#FFF5E6] p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Down payments as low as 3.5%</li>
                  <li>• More flexible credit requirements</li>
                  <li>• Lower closing costs compared to conventional loans</li>
                  <li>• Gift funds allowed for down payment</li>
                  <li>• Ideal for first-time homebuyers</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-[#ED7A1C] mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">VA Loans</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                VA loans are guaranteed by the Department of Veterans Affairs and offer zero down payment options for eligible veterans, active-duty service members, and qualifying surviving spouses. These are some of the most favorable loan terms available.
              </p>
              <div className="bg-[#FFF5E6] p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 0% down payment required</li>
                  <li>• No private mortgage insurance (PMI)</li>
                  <li>• Competitive interest rates</li>
                  <li>• More lenient credit requirements</li>
                  <li>• Limited closing costs and seller concessions allowed</li>
                  <li>• Can be used multiple times</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <Landmark className="w-12 h-12 text-[#ED7A1C] mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">USDA Loans</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                USDA loans are backed by the U.S. Department of Agriculture and provide affordable solutions for qualifying rural and suburban properties. These loans are designed to promote homeownership in less densely populated areas.
              </p>
              <div className="bg-[#FFF5E6] p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 0% down payment required</li>
                  <li>• Competitive interest rates</li>
                  <li>• Lower mortgage insurance compared to FHA</li>
                  <li>• Income limits apply based on location</li>
                  <li>• Property must be in eligible rural or suburban area</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#ED7A1C]">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-12 h-12 text-[#ED7A1C] mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Jumbo Loans</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Jumbo loans are for luxury or high-value properties that exceed conventional loan limits. These loans require stronger credit and larger down payments but provide financing for premium real estate.
              </p>
              <div className="bg-[#FFF5E6] p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Financing for high-value properties</li>
                  <li>• Competitive rates for qualified borrowers</li>
                  <li>• Flexible terms available</li>
                  <li>• Can be used for primary, secondary, or investment properties</li>
                  <li>• Larger loan amounts beyond conventional limits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Not Sure Which Loan is Right for You?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our mortgage experts will assess your credit, income, and goals to recommend the most suitable loan options for your unique situation.
          </p>
          <a
            href="/contact"
            className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-flex items-center"
          >
            Explore Loan Options <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
