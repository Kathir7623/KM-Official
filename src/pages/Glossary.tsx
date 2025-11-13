import React from "react";
import { FileText, CheckCircle } from "lucide-react";

/**
 * Full A–Z Mortgage Glossary page (Complete)
 * - Header/design matches the Credit.tsx design you provided
 * - Alphabet navigation anchors jump to each letter section
 * - Each entry is a short, clear definition suitable for a mortgage site
 *
 * Note: you can further trim or extend individual letters if you want more/less detail.
 */

const glossaryData: { letter: string; terms: { term: string; definition: string }[] }[] = [
  {
    letter: "A",
    terms: [
      { term: "1003", definition: "Uniform Residential Loan Application form used by lenders to collect borrower data." },
      { term: "Adjustable Rate Mortgage (ARM)", definition: "A mortgage with an interest rate that can change periodically based on an index." },
      { term: "Adjustment Interval", definition: "The frequency at which an ARM's rate/payment may change (e.g., 1, 3 or 5 years)." },
      { term: "Amortization", definition: "The process of paying off a loan over time through scheduled payments of principal and interest." },
      { term: "Annual Percentage Rate (APR)", definition: "A yearly cost of funds including interest rate and certain fees, expressed as a percentage." },
      { term: "Appraisal", definition: "A licensed professional's estimate of a property's fair market value." },
      { term: "Appraisal Retype Fee", definition: "A small administrative fee for transferring or retyping an appraisal for a different lender." },
      { term: "Assumption", definition: "When a buyer takes over the seller’s existing mortgage under the original loan terms (if allowed)." },
      { term: "Acknowledgment", definition: "A notary's certification that a person signed a document voluntarily." },
      { term: "Absorption (market)", definition: "The rate at which homes in a market sell; used to gauge demand." },
    ],
  },

  {
    letter: "B",
    terms: [
      { term: "Back End (Debt-to-Income)", definition: "Ratio of total monthly debt payments (including housing) to gross monthly income." },
      { term: "Balloon Payment", definition: "A large one-time payment due at the end of certain short-term loans." },
      { term: "Basis Point", definition: "One one-hundredth of a percentage point (0.01%)." },
      { term: "Beneficiary", definition: "In trust-deed states, the lender or entity that receives payments under a deed of trust." },
      { term: "Biweekly Mortgage", definition: "A payment plan where payments are made every two weeks, accelerating principal reduction." },
      { term: "Binder (Earnest Money)", definition: "A deposit showing buyer’s good faith when making an offer." },
      { term: "Broker", definition: "A person who arranges mortgage funding between borrower and lender." },
      { term: "Buydown", definition: "A temporary reduction in the interest rate, often paid for by seller or lender." },
      { term: "Bridge Loan", definition: "Short-term financing used to 'bridge' the gap between transactions." },
    ],
  },

  {
    letter: "C",
    terms: [
      { term: "Cap", definition: "The maximum amount an ARM interest rate can increase at each adjustment or over the life of the loan." },
      { term: "Cash-Out Refinance", definition: "Refinancing for an amount larger than the current loan balance and receiving the difference in cash." },
      { term: "Certificate of Occupancy", definition: "Official document stating a building is safe to occupy." },
      { term: "Clear-to-Close", definition: "A lender status that means the loan file is approved and ready for closing." },
      { term: "Closing (Settlement)", definition: "Final meeting where loan documents are signed and ownership transfers." },
      { term: "Closing Costs", definition: "Fees and expenses paid at closing (e.g., appraisal, title, recording, prepaid items)." },
      { term: "Comparables (Comps)", definition: "Recently sold similar properties used to evaluate value in an appraisal." },
      { term: "Conventional Loan", definition: "A mortgage not insured by the FHA or guaranteed by the VA." },
      { term: "Credit Score", definition: "A numerical representation of creditworthiness (e.g., FICO score)." },
      { term: "Credit Report", definition: "A detailed history of a consumer’s credit accounts and payment performance." },
    ],
  },

  {
    letter: "D",
    terms: [
      { term: "Debt-to-Income (DTI)", definition: "Ratio comparing monthly debt obligations to gross monthly income." },
      { term: "Deed", definition: "Legal document that transfers ownership of real property." },
      { term: "Deed of Trust", definition: "A document used in some states conveying property to a trustee as security for a loan." },
      { term: "Default", definition: "Failure to meet legal obligations of the mortgage (e.g., missed payments)." },
      { term: "Delinquency", definition: "When payments are late; prolonged delinquency can lead to foreclosure." },
      { term: "Discount Points", definition: "Prepaid interest paid at closing to reduce the loan's interest rate (1 point = 1%)." },
      { term: "Down Payment", definition: "Cash paid by buyer toward purchase price; reduces loan amount." },
      { term: "Due-on-Sale Clause", definition: "A loan provision allowing the lender to demand full repayment when property is sold." },
      { term: "Durable Power of Attorney", definition: "Legal instrument designating someone to sign/act on another's behalf if necessary." },
    ],
  },

  {
    letter: "E",
    terms: [
      { term: "Earnest Money", definition: "Deposit to show serious intent when making an offer on a property." },
      { term: "Easement", definition: "A right permitting use of someone else's land for a specified purpose." },
      { term: "Encroachment", definition: "When a structure intrudes onto neighboring property." },
      { term: "Equity", definition: "The owner's interest in property value after subtracting outstanding loan balances." },
      { term: "Escrow", definition: "Funds or documents held by a neutral third party until transaction conditions are met." },
      { term: "Escrow Account (Impound)", definition: "Account managed by lender to pay taxes, insurance, and other recurring charges." },
      { term: "Estoppel", definition: "A document verifying certain facts, often used in title or lease matters." },
      { term: "Exclusive Listing", definition: "A listing agreement giving one agent the exclusive right to sell a property." },
    ],
  },

  {
    letter: "F",
    terms: [
      { term: "FHA Loan", definition: "Mortgage insured by the Federal Housing Administration, often with lower down payments." },
      { term: "FICO Score", definition: "A widely used brand of credit score developed by Fair Isaac Corporation." },
      { term: "First Mortgage", definition: "Primary lien on a property that has priority over other liens." },
      { term: "Flood Insurance", definition: "Insurance required where property sits in a flood zone; separate from homeowners insurance." },
      { term: "Foreclosure", definition: "Legal process where lender seizes and sells property for unpaid debt." },
      { term: "FNMA (Fannie Mae)", definition: "Federal National Mortgage Association — purchases and securitizes conventional loans." },
      { term: "FHLMC (Freddie Mac)", definition: "Federal Home Loan Mortgage Corporation — buys and securitizes mortgages." },
      { term: "Fixed-Rate Mortgage", definition: "Loan whose interest rate remains constant for the life of the loan." },
      { term: "Forbearance", definition: "Lender permits temporary reduction or pause of payments under an agreed plan." },
    ],
  },

  {
    letter: "G",
    terms: [
      { term: "Grant Deed", definition: "A deed that conveys title and includes limited seller warranties." },
      { term: "Gross Monthly Income", definition: "Total monthly income before taxes and deductions." },
      { term: "Ginnie Mae (GNMA)", definition: "Government National Mortgage Association — backs securities for government-insured loans." },
      { term: "Good Faith Estimate (GFE)", definition: "Older form used to estimate closing costs (now replaced by Loan Estimate)." },
      { term: "Government Loan", definition: "Mortgage program insured/guaranteed by government (FHA, VA, USDA)." },
      { term: "Guaranty", definition: "A promise that another party will pay or perform if the borrower defaults." },
    ],
  },

  {
    letter: "H",
    terms: [
      { term: "Hazard Insurance", definition: "Homeowner's insurance covering fire, wind, and certain perils (not flood)." },
      { term: "Home Equity", definition: "Market value of home minus outstanding liens." },
      { term: "Homeowners Association (HOA)", definition: "Organization that manages common areas and enforces community rules." },
      { term: "Home Inspection", definition: "Professional review of a home's condition, typically before purchase." },
      { term: "Housing Expense Ratio (Front-End)", definition: "Percentage of gross income used to cover housing costs (PITI)." },
      { term: "HUD-1", definition: "Historic settlement statement showing actual closing costs (now replaced by Closing Disclosure)." },
    ],
  },

  {
    letter: "I",
    terms: [
      { term: "Impound Account", definition: "See Escrow account — lender holds funds to pay taxes and insurance." },
      { term: "Index (ARM)", definition: "Market rate used as a basis for ARM rate adjustments (e.g., Treasury index)." },
      { term: "Income Approach", definition: "Appraisal method that capitalizes potential income for value (used for rentals)." },
      { term: "Installment Loan", definition: "Loan repaid in regular scheduled payments over time." },
      { term: "Interest Rate", definition: "Percentage charged on borrowed money, expressed annually." },
      { term: "Interest-Only Loan", definition: "Loan where initial payments cover interest only; principal remains unchanged." },
      { term: "Intestate", definition: "Dying without a valid will; property distribution follows state law." },
    ],
  },

  {
    letter: "J",
    terms: [
      { term: "Jumbo Loan", definition: "A mortgage that exceeds conforming loan limits and typically has higher rates." },
      { term: "Judgment", definition: "Court order requiring payment that can become a lien on property." },
      { term: "Joint Tenancy", definition: "Co-ownership with rights of survivorship; when one owner dies, interest passes to others." },
      { term: "Jumbo Mortgage Limits", definition: "Regionally set threshold above which loans are considered jumbo." },
    ],
  },

  {
    letter: "K",
    terms: [
      { term: "K-1 (Schedule K-1)", definition: "Tax form reporting income/loss from partnerships, S-corps; used when verifying self-employed income." },
      { term: "Kickback", definition: "Illegal referral fee or payment in real estate or mortgage transactions." },
      { term: "Key Loan Features", definition: "Essential loan terms: rate, term, amount, monthly payment, and fees." },
    ],
  },

  {
    letter: "L",
    terms: [
      { term: "Lender", definition: "Company or institution that provides mortgage financing." },
      { term: "Loan Estimate", definition: "A required disclosure that provides estimated loan terms and closing costs within 3 business days of application." },
      { term: "Loan-to-Value (LTV)", definition: "Loan amount divided by property value, expressed as a percentage." },
      { term: "Lock (Rate Lock)", definition: "Agreement that guarantees a mortgage rate for a specific period." },
      { term: "Liquidity", definition: "Availability of cash or easily convertible assets to meet obligations." },
      { term: "Listing Agent", definition: "Agent who represents the seller in a real estate transaction." },
      { term: "Limited Warranty Deed", definition: "Deed that provides limited protection against title defects occurring during seller's ownership." },
    ],
  },

  {
    letter: "M",
    terms: [
      { term: "Mortgage", definition: "A legal instrument creating a lien on property as security for a loan." },
      { term: "Mortgage Insurance (PMI)", definition: "Insurance that protects lender when borrower puts less than 20% down on conventional loans." },
      { term: "Mortgage Note (Promissory Note)", definition: "Borrower’s written promise to repay a loan with terms listed." },
      { term: "Mortgagee", definition: "The lender in a mortgage transaction." },
      { term: "Mortgagor", definition: "The borrower/homeowner who gives the mortgage." },
      { term: "Modification", definition: "Permanent change to loan terms to help borrower avoid default." },
      { term: "Multiple Listing Service (MLS)", definition: "Database used by realtors to list and search properties." },
    ],
  },

  {
    letter: "N",
    terms: [
      { term: "Negative Amortization", definition: "When payments are too small to cover interest, causing the loan balance to increase." },
      { term: "Net Effective Income", definition: "Gross income minus federal income tax (used for certain underwriting calculations)." },
      { term: "Non-Owner Occupied", definition: "A property not occupied by the owner (investment or rental property)." },
      { term: "Notary Public", definition: "Official who verifies identity and witnesses signatures on legal documents." },
      { term: "No-Closing-Cost Loan", definition: "Loan where lender covers closing costs in exchange for a higher rate or credits." },
    ],
  },

  {
    letter: "O",
    terms: [
      { term: "Origination Fee", definition: "Fee charged by lender to process a new loan, often shown as a percentage of loan amount." },
      { term: "Owner-Occupied", definition: "Property used as the borrower’s primary residence." },
      { term: "Owner's Title Policy", definition: "Optional title insurance protecting the buyer (as opposed to lender's policy)." },
      { term: "Open-End Mortgage", definition: "Mortgage that allows additional borrowing on top of the original loan (home equity lines)." },
      { term: "Outstanding Balance", definition: "Amount still owed on the mortgage principal." },
    ],
  },

  {
    letter: "P",
    terms: [
      { term: "P&I (Principal & Interest)", definition: "Core components of a mortgage payment — the principal repayment and interest charge." },
      { term: "PITI", definition: "Principal, Interest, Taxes, and Insurance — the full monthly mortgage payment." },
      { term: "Points", definition: "Upfront fees equal to a percentage of the loan amount (1 point = 1%)." },
      { term: "Pre-Approval", definition: "Conditional approval from a lender indicating how much you may be able to borrow." },
      { term: "Prepayment Penalty", definition: "Fee charged for paying off a loan early (allowed in some loans/states)." },
      { term: "Private Mortgage Insurance (PMI)", definition: "Insurance required on many conventional loans with less than 20% down." },
      { term: "Purchase Agreement", definition: "Contract between buyer and seller that outlines terms of a property sale." },
    ],
  },

  {
    letter: "Q",
    terms: [
      { term: "Qualifying Ratios", definition: "Lender standards (front-end and back-end ratios) used to assess affordability." },
      { term: "Quiet Title", definition: "Legal action to resolve title ownership disputes and clear clouds on title." },
      { term: "Quitclaim Deed", definition: "Deed transferring any ownership interest without warranties of title." },
      { term: "Questionnaire (Underwriting)", definition: "Forms or statements lenders use to clarify facts during underwriting." },
    ],
  },

  {
    letter: "R",
    terms: [
      { term: "RESPA (Real Estate Settlement Procedures Act)", definition: "Federal law requiring disclosures of settlement costs and prohibiting kickbacks." },
      { term: "Refinance", definition: "Replacing an existing loan with a new loan, often to lower rate or access equity." },
      { term: "REIT (Real Estate Investment Trust)", definition: "Company owning or financing income-producing real estate." },
      { term: "Appraisal Review/Retype", definition: "Lender verification process when transferring or reviewing an appraisal." },
      { term: "Recording Fees", definition: "County fees to record deed and mortgage documents in public records." },
      { term: "Reconveyance", definition: "Document recorded to remove a deed of trust lien when loan is paid off." },
    ],
  },

  {
    letter: "S",
    terms: [
      { term: "Servicing", definition: "Collection of mortgage payments and administration of escrow accounts by the servicer." },
      { term: "Second Mortgage", definition: "Subordinate lien taken after the first mortgage; often a HELOC or second lien loan." },
      { term: "Shared Appreciation Mortgage (SAM)", definition: "Loan where lender receives a portion of future property appreciation." },
      { term: "Settlement Statement (Closing Disclosure)", definition: "Final loan and closing costs disclosure provided before closing." },
      { term: "Survey", definition: "A measurement showing property boundaries and improvements." },
      { term: "Securitization", definition: "Pooling loans and selling them as mortgage-backed securities." },
    ],
  },

  {
    letter: "T",
    terms: [
      { term: "Title", definition: "Legal evidence of property ownership." },
      { term: "Title Insurance", definition: "Insurance protecting against title defects or claims against ownership." },
      { term: "Truth-in-Lending (TIL)", definition: "Federal disclosure of APR and loan terms (integrated into RESPA disclosures now)." },
      { term: "Trust Deed", definition: "Alternative to mortgage in some states; involves borrower, trustee, and beneficiary." },
      { term: "Tax Proration", definition: "Division of property taxes between buyer and seller based on closing date." },
      { term: "Third-Party Origination", definition: "When a broker or correspondent originates a loan sold to another lender." },
    ],
  },

  {
    letter: "U",
    terms: [
      { term: "Underwriting", definition: "Lender's process of evaluating credit, income, assets, and property to approve a loan." },
      { term: "Uniform Residential Loan Application (Form 1003)", definition: "Standard mortgage application form used by most lenders." },
      { term: "Upfront Mortgage Insurance Premium (UFMIP)", definition: "One-time fee charged on some government loans (e.g., FHA)." },
      { term: "Unitary Property", definition: "A property used as a single economic unit (often in commercial lending)." },
    ],
  },

  {
    letter: "V",
    terms: [
      { term: "VA Loan", definition: "Mortgage program guaranteed by the Department of Veterans Affairs for eligible veterans." },
      { term: "Verification of Employment (VOE)", definition: "Lender's confirmation of borrower’s employment and income." },
      { term: "Verification of Deposit (VOD)", definition: "Document from bank verifying account balances used for qualification." },
      { term: "Variable Rate Mortgage (VRM)", definition: "Loan with an interest rate that can change (similar to ARM)." },
      { term: "Voidable Title", definition: "A title that may be invalidated due to fraud or other defects." },
    ],
  },

  {
    letter: "W",
    terms: [
      { term: "Walk-Through", definition: "Final inspection by buyer before closing to confirm condition and repairs." },
      { term: "Warehousing", definition: "Short-term funding of loans by banks before pooling and selling to investors." },
      { term: "Warranty Deed", definition: "Deed that transfers property and guarantees clear title from seller to buyer." },
      { term: "Wraparound Mortgage", definition: "A secondary loan that 'wraps' around an existing mortgage allowing the seller to finance the buyer." },
    ],
  },

  {
    letter: "X",
    terms: [
      { term: "X-Data (Taxing)", definition: "Local tax codes and assessments that affect property taxes and proration calculations." },
      { term: "X-Ref (Cross-Reference)", definition: "Reference used in title or closing documents pointing to related records or exhibits." },
      { term: "X-Rule (Underwriting)", definition: "Internal underwriting exception rules used by some lenders (internal jargon)." },
    ],
  },

  {
    letter: "Y",
    terms: [
      { term: "Yield", definition: "Return on investment for a mortgage-backed security or loan, usually annualized." },
      { term: "Yield Spread Premium (YSP)", definition: "Compensation to a broker when borrower accepts a higher-rate loan (now regulated/disclosed)." },
      { term: "Year-to-Date (YTD)", definition: "Financial information covering the current calendar year to date (used in income verification)." },
    ],
  },

  {
    letter: "Z",
    terms: [
      { term: "Zoning", definition: "Local land-use rules that define how property may be used (residential, commercial, etc.)." },
      { term: "Zero Balance", definition: "Loan balance reduced to zero typically when paid off or charged off." },
      { term: "Zero-Point Loan", definition: "Loan where borrower pays no discount points up front (may carry a higher rate)." },
      { term: "ZBA (Zero Balance Account)", definition: "Accounting method used to clear out escrow advances or special accounts." },
    ],
  },
];

export default function Glossary(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section — matches Credit.tsx design */}
      <section className="bg-gradient-to-r from-[#ED7A1C] to-[#D66A0C] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Glossary</h1>
          <p className="text-lg text-orange-100">
            Learn key mortgage terms to help you navigate your home financing journey with confidence.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <p className="text-center text-gray-600 mb-8">
          Click a letter to jump to that section.
        </p>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="text-[#ED7A1C] hover:underline font-semibold"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Glossary Sections */}
        {glossaryData.map((section) => (
          <div key={section.letter} id={section.letter} className="mb-12">
            <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">{section.letter}</h2>

            <div className="space-y-4">
              {section.terms.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-start bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition"
                >
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800">{item.term}</h3>
                    <p className="text-gray-600 mt-1">{item.definition}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right mt-4">
              <a href="#top" className="text-sm text-blue-600 hover:underline font-medium">
                Return to Top ↑
              </a>
            </div>
          </div>
        ))}

        {/* Footer CTA (optional) */}
        <div className="text-center mt-12">
          <a
            href="/apply"
            className="inline-block bg-[#ED7A1C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D66A0C] transition"
          >
            Ready to apply? Start here
          </a>
        </div>
      </section>
    </div>
  );
}
