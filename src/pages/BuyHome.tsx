import { CheckCircle, FileText, Home, ArrowRight } from 'lucide-react';

export default function BuyHome() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Let's Make Your Homeownership Dream a Reality
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Buying a home can feel overwhelming — but with Karthik Mortgage, it doesn't have to be. Our goal is to turn your dream into a confident, well-guided experience backed by trust and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#FFF5E6] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#ED7A1C]">
                <CheckCircle className="w-12 h-12 text-[#ED7A1C]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Start with Confidence</h2>
              <p className="text-gray-700 leading-relaxed">
                We begin by helping you understand your buying power through a <span className="font-semibold text-[#ED7A1C]">fast pre-approval process</span>. This not only gives you clarity on your budget but also strengthens your offer when you find the right property.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFF5E6] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#ED7A1C]">
                <FileText className="w-12 h-12 text-[#ED7A1C]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tailored Loan Options</h2>
              <p className="text-gray-700 leading-relaxed">
                Every borrower is different — and so are our mortgage solutions. We'll help you compare <span className="font-semibold">Conventional, FHA, VA, and USDA loans</span>, explaining the pros and cons of each so you can make an informed choice.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFF5E6] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#ED7A1C]">
                <Home className="w-12 h-12 text-[#ED7A1C]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Smooth Closings</h2>
              <p className="text-gray-700 leading-relaxed">
                We coordinate directly with your realtor, title company, and underwriters to ensure a <span className="font-semibold text-[#ED7A1C]">seamless closing</span> process. Our team is proactive, transparent, and dedicated to keeping you informed from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C]">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Ready to Take the First Step?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Getting pre-approved is the best way to start your home buying journey. It shows sellers you're a serious buyer and helps you understand exactly what you can afford.
            </p>
            <div className="text-center">
              <a
                href="/apply"
                className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-flex items-center"
              >
                Get Pre-Approved for a Purchase Loan <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What to Expect When Buying a Home</h2>
            <div className="w-24 h-1 bg-[#ED7A1C] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start">
              <div className="bg-[#ED7A1C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pre-Approval</h3>
                <p className="text-gray-700 leading-relaxed">
                  Submit your financial information and receive a pre-approval letter that shows sellers you're ready to buy. This typically takes 24-48 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#ED7A1C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">House Hunting</h3>
                <p className="text-gray-700 leading-relaxed">
                  Work with your realtor to find the perfect property within your approved price range. We're here to answer questions along the way.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#ED7A1C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Make an Offer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once you find your dream home, your realtor will help you craft a competitive offer. Your pre-approval letter strengthens your position.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#ED7A1C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Loan Processing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We'll handle all the paperwork, order the appraisal, and work with underwriting to get your loan approved. Expect regular updates throughout.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#ED7A1C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Closing Day</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sign your final documents, get your keys, and celebrate becoming a homeowner! Most closings take 21-30 days from offer acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
