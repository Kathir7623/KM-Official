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
              We've streamlined the mortgage process to make it simple, transparent, and stress-free.
              Here's what you can expect when working with Karthik Mortgage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">

            {/* STEP 1 */}
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
                    <h2 className="text-3xl font-bold text-gray-800">
                      Determine Your Borrowing Capacity
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    The initial phase of securing a loan involves assessing your borrowing capacity.
                    If you're planning to purchase a home, it’s imperative to understand your affordability
                    before beginning your property search. By answering a few straightforward questions,
                    we can estimate your purchasing power based on industry-standard lending criteria.
                  </p>

                  <div className="bg-[#FFF5E6] p-4 rounded-lg mb-4">
                    <h3 className="font-bold text-gray-800 mb-2">Why It Matters:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Understand what price range fits your budget</li>
                      <li>• Prevent surprises during the approval process</li>
                      <li>• Position yourself as a serious buyer when making offers</li>
                    </ul>
                  </div>

                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    You may also consider obtaining a loan pre-approval, which verifies your income,
                    credit, assets, and liabilities. Being pre-approved prior to house hunting enables you to:
                  </p>

                  <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                    <li>Focus on homes within your financial reach</li>
                    <li>Strengthen your negotiating position with sellers</li>
                    <li>Expedite the closing process</li>
                  </ul>

                  <a
                    href="https://karthikmortgage.my1003app.com/2507848/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-[#ED7A1C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#D66A0C] transition-colors"
                  >
                    Click Here to Pre-Qualify
                  </a>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
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
                    <h2 className="text-3xl font-bold text-gray-800">
                      Choose the Optimal Loan Product
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Home financing options are diverse. Selecting the most suitable mortgage depends on your
                    current financial landscape and future objectives. Whether you're purchasing a property or
                    refinancing, loans generally fall into two primary categories:
                  </p>

                  <div className="bg-[#FFF5E6] p-4 rounded-lg mb-6">
                    <h3 className="font-bold text-gray-800 mb-2">1) Fixed-Rate Mortgage</h3>
                    <p className="text-gray-700 mb-2">
                      Fixed-rate loans, commonly structured over 15 or 30 years, maintain the same interest rate
                      and monthly payment throughout the term. Choose this option if you:
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                      <li>Intend to stay in your home for the long term (7+ years)</li>
                      <li>Prefer consistent monthly payments</li>
                      <li>Wish to avoid fluctuations in future payment amounts</li>
                      <li>Expect stable income and expenses over time</li>
                    </ul>
                  </div>

                  <div className="bg-[#FFF5E6] p-4 rounded-lg mb-6">
                    <h3 className="font-bold text-gray-800 mb-2">2) Adjustable-Rate Mortgage (ARM)</h3>
                    <p className="text-gray-700 mb-2">
                      ARMs offer interest rates that may vary periodically, affecting your monthly payments accordingly.
                      Choose this type if you:
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                      <li>Plan to relocate within a few years (typically under 5)</li>
                      <li>Are comfortable with occasional changes in monthly payments</li>
                      <li>Are financially prepared for potential payment increases</li>
                      <li>Anticipate future income growth</li>
                    </ul>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    By thoroughly evaluating these options and consulting with our experts, you’ll be
                    well-positioned to select a mortgage product aligned with both your present needs and
                    long-term goals.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
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
                    <h2 className="text-3xl font-bold text-gray-800">
                      Submit Your Loan Application
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Once you've selected your preferred loan product, it’s time to submit your application.
                    This step officially begins the mortgage process, allowing our team to verify your
                    financial information and move your loan toward approval.
                  </p>

                  <a
                    href="/apply"
                    className="text-[#ED7A1C] font-semibold text-lg hover:underline transition-colors"
                  >
                    Click To Apply For A Loan
                  </a>
                </div>
              </div>
            </div>

            {/* STEP 4 */}
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
                    <h2 className="text-3xl font-bold text-gray-800">
                      Loan Processing Begins
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    While all lenders follow standardized federal lending criteria, their internal policies can differ.
                    Loan approval is primarily based on two criteria: your financial capacity and the appraised value
                    of the property.
                  </p>

                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Upon receipt of your application, our team will begin the approval process. A dedicated loan
                    processor will review and verify the information provided, resolving any inconsistencies with your
                    assistance. Key verification steps include:
                  </p>

                  <div className="bg-[#FFF5E6] p-4 rounded-lg mb-6">
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                      <li><strong>Income & Employment Verification:</strong> Ensures your income supports the loan’s obligations.</li>
                      <li><strong>Credit History Review:</strong> Reviews your credit report for consistency and reliability.</li>
                      <li><strong>Asset Documentation:</strong> Confirms you can provide the required down payment and cover closing costs.</li>
                      <li><strong>Property Appraisal:</strong> Determines fair market value and compliance with lending criteria.</li>
                      <li><strong>Additional Documents:</strong> Supplementary items may be requested to finalize approval.</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-gray-800 mb-2">To Facilitate a Smooth Approval Process:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                    <li>Complete your loan application with accuracy and thoroughness</li>
                    <li>Promptly provide any requested information or documentation</li>
                    <li>Ensure all financial transactions are documented and traceable</li>
                    <li>Avoid major purchases that may impact your debt-to-income ratio</li>
                    <li>Remain available near your scheduled closing date, or arrange a Power of Attorney if needed</li>
                  </ul>

                  <p className="text-sm text-gray-600 italic">
                    Timeline: Typically 2–3 weeks depending on document submission and appraisal completion
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 5 */}
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
                    <h2 className="text-3xl font-bold text-gray-800">
                      Finalize and Close Your Loan
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Once your loan is approved, the final step is the formal signing of documents. Carefully review all
                    details to ensure the interest rate, terms, and your personal information are correct. Signing
                    typically occurs in the presence of a notary public.
                  </p>

                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    You’ll also be required to cover various costs related to the loan and the transfer of property
                    ownership. Bring a cashier’s check for any due amounts, as personal checks are generally not
                    accepted. Additionally, be prepared to present proof of homeowner’s insurance, flood insurance (if
                    applicable), and evidence of premium payment.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    After the documents are signed, your loan will usually close shortly thereafter. Please note that
                    federally regulated refinance loans for primary residences include a mandatory three-day review
                    period before final closing.
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
              Our dedicated team keeps communication open throughout the entire process, so you're never in the dark. We
              provide regular updates and are always available to answer your questions.
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
