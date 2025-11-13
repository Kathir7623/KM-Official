import { BookOpen } from "lucide-react";

// Import updated images
import Application from "../images/Application.png";
import credit from "../images/credit.png";
import closing from "../images/closing-costs.png";
import Appraisal from "../images/appraisals.png";
import pmi from "../images/pmi.png";
import Refinance from "../images/refinance.png";
import glossary from "../images/glossary.png";
import Foreclose from "../images/foreclosure.png";

export default function MortgageBasics() {
  const topics = [
    {
      title: "Application Checklist",
      description:
        "Applying for a mortgage can feel overwhelming, but we’re here to make it easier. We’ve put together a helpful checklist of documents and steps to guide you through the process.",
      image: Application,
      link: "/application-checklist",
    },
    {
      title: "Credit",
      description:
        "Your credit history is a record of your past and current credit activity. Learn how credit works, how your score is calculated, and tips for improving it.",
      image: credit,
      link: "/credit",
    },
    {
      title: "Closing Costs",
      description:
        "Closing costs are fees paid at the final stage of securing a home loan and are separate from your down payment. Learn what closing costs are, how they’re paid, and what to expect.",
      image: closing,
      link: "/closingcost",
    },
    {
      title: "Appraisals",
      description:
        "An appraisal is an evaluation of a property’s fair market value, required by lenders to ensure the loan amount aligns with the property’s worth. Learn how appraisals work and what they mean for ownership.",
      image: Appraisal,
      link: "/appraisal",
    },
    {
      title: "Private Mortgage Insurance (PMI)",
      description:
        "Private Mortgage Insurance (PMI) protects lenders when borrowers put down less than 20% on a home. Learn how PMI works, what it costs, and when it can be removed.",
      image: pmi,
      link: "/pmi",
    },
    {
      title: "Refinance",
      description:
        "Refinancing your mortgage is a popular way to lower monthly payments, secure better rates, or access home equity. Learn about refinance options and when it makes sense.",
      image: Refinance,
      link: "/refinancebasics",
    },
    {
      title: "Glossary of Terms",
      description:
        "Click below to view a complete list of mortgage terms and their meanings to stay informed throughout your mortgage journey.",
      image: glossary,
      link: "/glossary",
    },
    {
      title: "Foreclosure",
      description:
        "Foreclosure is when a lender takes control of a property if mortgage payments are missed. Learn more about how foreclosure works and how to prevent it.",
      image: Foreclose,
      link: "/foreclosure",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 text-[#ED7A1C] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get started with a simple overview of key mortgage terms and what they mean.
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Understanding key mortgage terms helps you make smart decisions. Here’s a quick guide to help you through your mortgage journey.
          </p>
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {/* ✅ Correct lowercase link paths */}
                <a
                  href={item.link}
                  className="text-[#ED7A1C] font-semibold text-sm hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/learning/loan-programs"
            className="bg-[#ED7A1C] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-block"
          >
            Learn about our Loan Programs
          </a>
        </div>
      </section>
    </div>
  );
}
