import React from "react";
import { CheckCircle, FileText } from "lucide-react";

const ApplicationChecklist: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#ED7A1C] to-orange-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mortgage Basics – Application Checklist
          </h1>
          <p className="text-lg text-orange-100">
            Below is a list of documents that are required when you apply for a
            mortgage. However, every situation is unique and you may be required
            to provide additional documentation. So, if you are asked for more
            information, be cooperative and provide the information requested as
            soon as possible. It will help speed up the application process.
          </p>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        {/* Sections */}
        <div className="space-y-12">
          {/* Your Property */}
          <div>
            <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
              Your Property
            </h2>
            <ul className="space-y-2">
              {[
                "Copy of signed sales contract including all riders",
                "Verification of the deposit you placed on the home",
                "Names, addresses and telephone numbers of all realtors, builders, insurance agents and attorneys involved",
                "Copy of Listing Sheet and legal description if available (if the property is a condominium please provide condominium declaration, by-laws and most recent budget)",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Your Income */}
          <div>
            <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
              Your Income
            </h2>
            <ul className="space-y-2">
              {[
                "Copies of your pay-stubs for the most recent 30-day period and year-to-date",
                "Copies of your W-2 forms for the past two years",
                "Names and addresses of all employers for the last two years",
                "Letter explaining any gaps in employment in the past 2 years",
                "Work visa or green card (copy front & back)",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-semibold text-[#ED7A1C]">
              If self-employed or receive commission, bonus, interest/dividends, or rental income:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Provide full tax returns for the last two years PLUS year-to-date Profit and Loss statement (please provide complete tax return including attached schedules and statements. If you have filed an extension, please supply a copy of the extension.)",
                "K-1's for all partnerships and S-Corporations for the last two years (please double-check your return. Most K-1's are not attached to the 1040.)",
                "Completed and signed Federal Partnership (1065) and/or Corporate Income Tax Returns (1120) including all schedules, statements and addenda for the last two years. (Required only if your ownership position is 25% or greater.)",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-semibold text-[#ED7A1C]">
              If you will use Alimony or Child Support to qualify:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Provide divorce decree/court order stating amount, as well as proof of receipt of funds for last year",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-semibold text-[#ED7A1C]">
              If you receive Social Security income, Disability or VA benefits:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Provide award letter from agency or organization",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Source of Funds */}
          <div>
            <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
              Source of Funds and Down Payment
            </h2>
            <ul className="space-y-2">
              {[
                "Sale of your existing home - provide a copy of the signed sales contract on your current residence and statement or listing agreement if unsold (at closing, you must also provide a settlement/Closing Statement)",
                "Savings, checking or money market funds - provide copies of bank statements for the last 3 months",
                "Stocks and bonds - provide copies of your statement from your broker or copies of certificates",
                "Gifts - If part of your cash to close, provide Gift Affidavit and proof of receipt of funds",
                "Based on information appearing on your application and/or your credit report, you may be required to submit additional documentation",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Debt and Obligations */}
          <div>
            <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
              Debt or Obligations
            </h2>
            <ul className="space-y-2">
              {[
                "Prepare a list of all names, addresses, account numbers, balances, and monthly payments for all current debts with copies of the last three monthly statements",
                "Include all names, addresses, account numbers, balances, and monthly payments for mortgage holders and/or landlords for the last two years",
                "If you are paying alimony or child support, include marital settlement/court order stating the terms of the obligation",
                "Check to cover Application Fee(s)",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>    
      </div>
  );
};

export default ApplicationChecklist;
