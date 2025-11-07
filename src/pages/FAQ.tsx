import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "When should I refinance?",
    answer: `Refinancing often becomes advantageous when prevailing mortgage rates dip by at least 2% compared to your current loan's rate. Even a rate reduction of 1% or less might present a worthwhile opportunity. Any decrease in rate can lead to lower monthly mortgage payments. For instance, a $100,000 loan at 8.5% interest would have a principal and interest payment around $770; if the rate drops to 7.5%, this payment would decrease to approximately $700, resulting in a $70 monthly saving. The actual savings you realize will depend on factors such as your income, budget, loan principal, and the extent of interest rate changes. Consulting with your trusted lender can provide personalized calculations of your refinancing options.`,
  },
  {
    question: "What are points?",
    answer: `A point represents one percent of the total loan amount. Therefore, on a $100,000 loan, one point equals $1,000. Borrowers often pay these points to lenders to secure mortgage financing under specific conditions. Discount points are upfront fees paid to reduce the interest rate on a mortgage loan. Lenders might express these costs as basic points (hundredths of a percent), where 100 basis points equal one point, or 1% of the loan principal.`,
  },
  {
    question: "Should I pay points to lower my interest rate?",
    answer: `Indeed, paying points to achieve a lower interest rate is advisable if you anticipate remaining in the property for several years. This strategy effectively reduces your required monthly loan payment and could potentially increase the amount you qualify to borrow. However, if your occupancy is projected to be only a year or two, the cumulative monthly savings might not offset the initial cost of purchasing discount points.`,
  },
  {
    question: "What is an APR?",
    answer: `The annual percentage rate (APR) represents the total cost of a mortgage expressed as an annual rate. Typically, the APR will be higher than the stated or advertised interest rate on the mortgage because it incorporates points and other associated credit costs. The APR serves as a valuable tool for homebuyers, enabling them to compare different mortgage products based on their total annual expense. It is designed to reflect the "true cost of a loan," thereby fostering transparency and preventing lenders from masking fees behind deceptively low interest rates.

It’s important to note that the APR does not directly influence your monthly mortgage payments. These payments are solely determined by the interest rate and the loan's repayment term.

Given that the APR calculation is influenced by various lender fees, a loan with a lower APR does not automatically equate to a better deal. The most effective way to compare loan offers is to request a good-faith estimate of all costs from different lenders for the same type of loan program (e.g., a 30-year fixed-rate mortgage) at the same interest rate.`,
  },
  {
    question: "What does it mean to lock the interest rate?",
    answer: `Interest rates on mortgages can fluctuate between the time of loan application and the final closing. A sharp increase in rates during this period could unexpectedly raise the borrower's monthly payments. To mitigate this risk, lenders may offer borrowers the option to "lock-in" the agreed-upon interest rate for a specified duration, often ranging from 30 to 60 days, sometimes for an associated fee. This lock-in provides a guarantee against rate increases during the processing of the loan.`,
  },
  {
    question: "What documents do I need to prepare for my loan application?",
    answer: `Below is a compilation of standard documents required when applying for a mortgage. However, since each financial situation is unique, you might be asked to provide additional documentation. 

Your Property:
- Signed sales contract and riders  
- Verification of earnest money deposit  
- Contact details of agents and attorneys  
- Property listing sheet and legal description  

Your Income:
- Last 30 days of pay stubs  
- W-2s for previous two years  
- Employer contact info  
- Explanation of employment gaps  
- Work visa or green card if applicable  
- Full tax returns (if self-employed)  

Source of Funds:
- Proof of down payment and bank statements  
- Stock/bond account statements  
- Gift Affidavit (if applicable)  

Debts & Obligations:
- List of all current debts  
- Mortgage or rent payment history  
- Alimony/child support documents (if applicable)  
- Check for application fees`,
  },
  {
    question: "How is my credit judged by lenders?",
    answer: `Credit scoring evaluates your creditworthiness based on your credit report and history — payment timeliness, credit utilization, account age, and inquiries. Scores like FICO range from 350 (high risk) to 850 (low risk). Before applying, review your credit report for accuracy via the three major bureaus (Equifax, Experian, TransUnion). You’re entitled to one free credit report per year through https://www.annualcreditreport.com.`,
  },
  {
    question: "What can I do to improve my credit score?",
    answer: `Pay bills on time, reduce outstanding debts, avoid unnecessary new credit, and maintain older accounts. Length of credit history and consistent payment behavior significantly affect your score. Gradual improvement comes with disciplined financial habits.`,
  },
  {
    question: "What is an appraisal?",
    answer: `An appraisal is a professional estimate of a property's fair market value conducted by a licensed appraiser. Lenders require this to ensure the loan amount doesn’t exceed the property’s value.`,
  },
  {
    question: "What is PMI (Private Mortgage Insurance)?",
    answer: `PMI protects lenders when borrowers put down less than 20%. It adds to your cost of borrowing, often requiring upfront premiums at closing. To avoid PMI, aim for a 20% down payment or consider special financing programs.`,
  },
  {
    question: "What is 80-10-10 financing?",
    answer: `An 80-10-10 loan splits financing into: 80% first mortgage, 10% second mortgage, and 10% down payment — allowing borrowers to avoid PMI. A similar structure, 80-15-5, allows for a smaller down payment but comes with higher rates.`,
  },
  {
    question: "What happens at closing?",
    answer: `Closing is the final step of the mortgage process where property ownership transfers to you. It involves signing all required documents, paying closing costs, and final inspections. After settlement, funds are disbursed, and you receive the keys to your new home.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Refinance FAQs
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Explore answers to the most common questions about refinancing, loan documents, credit scores, and mortgage processes.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md transition-all duration-300 border border-gray-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-4"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-orange-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-base leading-relaxed border-t border-gray-100 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
