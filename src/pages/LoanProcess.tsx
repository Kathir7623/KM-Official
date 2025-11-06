import { CheckCircle, Search, FileText, ClipboardCheck, Key } from 'lucide-react';

export default function LoanProcess() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Our 5-Step Mortgage Process
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We've streamlined the mortgage process to make it simple, transparent, and stress-free. Here's what you can expect when working with Karthik Mortgage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[#ED7A1C] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#ED7A1C] text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                      STEP 1
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800">Pre-Approval</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Review your financial profile and get your pre-approval letter. This is your golden ticket to house hunting with confidence.
                  </p>
                  <div className="bg-[#FFF5E6] p-4 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">What We'll Need:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Recent pay stubs and W-2s</li>
                      <li>• Bank statements (last 2 months)</li>
                      <li>• Tax returns (last 2 years)</li>
                      <li>• Photo ID and Social Security number</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Timeline: 24-48 hours for pre-approval letter
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[#ED7A1C] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <Search className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#ED7A1C] text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                      STEP 2
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800">Find Your Property</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Start searching confidently within your approved price range. Your pre-approval letter shows sellers you're a serious buyer.
                  </p>
                  <div className="bg-[#FFF5E6] p-4 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">Pro Tips:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Work with a trusted real estate agent</li>
                      <li>• Consider location, schools, and commute times</li>
                      <li>• Factor in future resale value</li>
                      <li>• Budget for maintenance and repairs</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    We're available to answer questions throughout your search
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[#ED7A1C] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#ED7A1C] text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                      STEP 3
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800">Loan Application</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Submit your official loan application with our help. We'll guide you through every document and answer all your questions.
                  </p>
                  <div className="bg-[#FFF5E6] p-4 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">What Happens Next:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• We order your home appraisal</li>
                      <li>• Title search is conducted</li>
                      <li>• Home inspection scheduled (if applicable)</li>
                      <li>• We verify all documentation</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Timeline: Application completed within 1-2 days
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[#ED7A1C] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <ClipboardCheck className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#ED7A1C] text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                      STEP 4
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800">Processing & Underwriting</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    We handle the details — from verification to approval. Our team works with underwriters to get your loan approved quickly.
                  </p>
                  <div className="bg-[#FFF5E6] p-4 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">During This Phase:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Underwriter reviews your application</li>
                      <li>• Appraisal is completed</li>
                      <li>• We may request additional documentation</li>
                      <li>• Final loan approval is issued</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Timeline: 2-3 weeks with regular status updates
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="bg-[#ED7A1C] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <Key className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED7A1C]">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#ED7A1C] text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                      STEP 5
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800">Closing & Funding</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Sign your documents and get your keys or new rate! This is the exciting final step where you officially become a homeowner or complete your refinance.
                  </p>
                  <div className="bg-[#FFF5E6] p-4 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">What to Expect:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Final walkthrough of the property (purchases)</li>
                      <li>• Review and sign closing documents</li>
                      <li>• Pay closing costs and down payment</li>
                      <li>• Receive keys to your new home!</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Timeline: Closing appointment takes 1-2 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C] text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">We're With You Every Step</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our dedicated team keeps communication open throughout the entire process, so you're never in the dark. We provide regular updates and are always available to answer your questions.
            </p>
            <p className="text-xl font-semibold text-[#ED7A1C] mb-6">
              Average closing time: 21-30 days from application to keys
            </p>
            <a
              href="/apply"
              className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-block"
            >
              Start Your Application Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
