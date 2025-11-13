import React from "react";
import { FileText, CheckCircle } from "lucide-react";

const Appraisals: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#ED7A1C] to-[#D66A0C] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mortgage Basics – Appraisals
          </h1>
          <p className="text-lg text-orange-100">
            An appraisal determines a property’s fair market value and ensures
            that the mortgage amount aligns with the actual worth of the home.
            Learn how appraisals work and why they matter in your loan process.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        {/* Introduction */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            The appraisal is performed by a licensed professional trained to
            evaluate property value, location, amenities, and condition. While
            loans are the most common reason for an appraisal, they can also be
            used for a variety of other financial and legal purposes.
          </p>
        </div>

        {/* Other Reasons Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Other Reasons for an Appraisal
          </h2>
          <ul className="space-y-3">
            {[
              "Contesting high property taxes",
              "Establishing replacement cost for insurance purposes",
              "Divorce or estate settlement",
              "Determining fair value for selling real estate",
              "Negotiating tool in real estate transactions",
              "Protecting rights in an eminent domain case",
              "Meeting government agency requirements",
              "Supporting a lawsuit involving property value",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Appraisal Methods */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Common Appraisal Methods
          </h2>
          <p className="mb-4">
            Appraisers typically use three main approaches to determine a
            property’s value. The <strong>Sales Comparison Approach</strong> is
            most common for single-family homes.
          </p>
          <ul className="space-y-3">
            <li>
              <strong>Cost Approach:</strong> Calculates value by combining the
              land’s value and the estimated reconstruction cost, minus
              depreciation.
            </li>
            <li>
              <strong>Sales Comparison Approach:</strong> Compares similar
              recently sold properties in the area, adjusting for size, age, and
              features.
            </li>
            <li>
              <strong>Income Approach:</strong> Used for income-producing
              properties, converting potential net income into current value.
            </li>
          </ul>
        </div>

        {/* Ownership of Appraisal */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Who Owns the Appraisal?
          </h2>
          <p>
            Even though the borrower pays for the appraisal, it legally belongs
            to the lender who ordered it. Borrowers can request a copy, but
            whether they receive the original depends on the lender’s policies.
          </p>
        </div>

        {/* Transfer Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Transferring Appraisals
          </h2>
          <p>
            If you switch lenders, you may not need a new appraisal. However,
            the original lender may charge a small administrative fee called an{" "}
            <strong>Appraisal Retype Fee</strong> to update and transfer the
            report.
          </p>
        </div>

        {/* Seller & Agent Roles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            Seller & Agent Roles in Appraisal
          </h2>
          <p className="mb-4">
            The seller sets the listing price—not the appraiser. Real estate
            agents assist sellers by performing a{" "}
            <strong>Comparative Market Analysis (CMA)</strong>, which estimates
            fair market value based on recent local sales.
          </p>
        </div>

        {/* Helping the Appraiser */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
            How You Can Help the Appraiser
          </h2>
          <p className="mb-4">
            You can help the appraiser by providing accurate and relevant
            details about your property, such as:
          </p>
          <ul className="space-y-3">
            {[
              "Purpose of the appraisal",
              "Sale status and current listing price (if applicable)",
              "Mortgage details: lender, amount, rate, and loan type",
              "Included personal property or home appliances",
              "Income and expense info (for rental or investment properties)",
              "Copies of documents such as deeds, surveys, or tax bills",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

     
    </div>
  );
};

export default Appraisals;
