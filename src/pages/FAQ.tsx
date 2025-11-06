import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 hover:border-[#ED7A1C] transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold text-gray-800 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#ED7A1C] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#ED7A1C] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: 'How do I know which loan is right for me?',
      answer:
        'We assess your credit, income, and goals to recommend the most suitable loan options. Every situation is unique, so we take the time to understand your specific needs and present you with options that align with your financial objectives.',
    },
    {
      question: 'What credit score do I need to qualify for a mortgage?',
      answer:
        'Credit score requirements vary by loan type. Conventional loans typically require a 620+ score, FHA loans accept scores as low as 580, and VA loans are more flexible. We work with borrowers across the credit spectrum and can help you understand your options.',
    },
    {
      question: 'How much of a down payment do I need?',
      answer:
        'Down payment requirements vary by loan type. Conventional loans can require as little as 3%, FHA loans require 3.5%, VA and USDA loans offer 0% down options. The more you put down, the better your rate and the lower your monthly payment.',
    },
    {
      question: 'Can I refinance with bad credit?',
      answer:
        'Possibly — we\'ll explore programs that fit your profile and help you improve your eligibility. Refinancing with lower credit may limit your options, but there are still programs available. We can also provide guidance on improving your credit before refinancing.',
    },
    {
      question: 'What\'s the average closing time?',
      answer:
        'Most loans close within 21-30 days depending on the complexity and documentation. Purchase loans typically take longer than refinances. We work efficiently to close on time and keep you informed throughout the process.',
    },
    {
      question: 'What documents will I need to apply?',
      answer:
        'You\'ll need recent pay stubs, W-2s, tax returns (last 2 years), bank statements (last 2 months), photo ID, and Social Security number. Self-employed borrowers may need additional documentation. We provide a complete checklist during pre-approval.',
    },
    {
      question: 'Should I get pre-qualified or pre-approved?',
      answer:
        'Pre-approval is much stronger than pre-qualification. Pre-qualification is an estimate based on self-reported information, while pre-approval involves verification of documents and credit checks, giving you a firm commitment letter that sellers take seriously.',
    },
    {
      question: 'What are closing costs and how much should I expect?',
      answer:
        'Closing costs typically range from 2-5% of the loan amount and include fees for appraisal, title insurance, origination, and more. We provide a detailed Loan Estimate within 3 days of application so you know exactly what to expect.',
    },
    {
      question: 'Can I buy a home with no money down?',
      answer:
        'Yes! VA loans and USDA loans offer 0% down payment options for eligible borrowers. VA loans are available to veterans and active-duty service members, while USDA loans are for properties in qualifying rural and suburban areas.',
    },
    {
      question: 'What\'s the difference between interest rate and APR?',
      answer:
        'The interest rate is the cost of borrowing, while APR (Annual Percentage Rate) includes both the interest rate and fees, giving you a more complete picture of the loan\'s true cost. Use APR when comparing loans from different lenders.',
    },
    {
      question: 'How long does a pre-approval last?',
      answer:
        'Pre-approvals typically last 60-90 days. If you haven\'t found a home by then, we can update your pre-approval with current documentation. Your financial situation should remain stable during this time to maintain approval.',
    },
    {
      question: 'Can I lock my interest rate?',
      answer:
        'Yes! Once you\'re under contract, you can lock your interest rate for a specified period (typically 30-60 days). This protects you from rate increases during the loan process. We\'ll help you decide the best time to lock based on market conditions.',
    },
    {
      question: 'What happens if the appraisal comes in low?',
      answer:
        'If the appraisal is lower than the purchase price, you have options: negotiate a lower price with the seller, increase your down payment to cover the difference, or challenge the appraisal if you have evidence of comparable sales.',
    },
    {
      question: 'Can I pay off my mortgage early?',
      answer:
        'Most mortgages today do not have prepayment penalties, so you can pay extra toward principal or pay off the loan early without fees. Check your specific loan terms, and we can confirm whether yours has any restrictions.',
    },
    {
      question: 'Should I choose a 15-year or 30-year mortgage?',
      answer:
        'It depends on your financial situation and goals. 30-year mortgages offer lower monthly payments and more flexibility. 15-year mortgages have higher payments but save significantly on interest over time. We can help you compare options based on your budget.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <HelpCircle className="w-16 h-16 text-[#ED7A1C] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Common Questions, Clear Answers
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Find answers to the most frequently asked questions about mortgages, the loan process, and working with Karthik Mortgage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Can't find the answer you're looking for? Our team is here to help. Contact us and we'll get back to you promptly with the information you need.
          </p>
          <a
            href="/contact"
            className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
