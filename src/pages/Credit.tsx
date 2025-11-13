import React from "react";
import { FileText, CheckCircle } from "lucide-react";

const Credit: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-[#ED7A1C] to-[#D66A0C] text-white py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <FileText className="w-16 h-16 text-white mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Mortgage Basics – Credit
                    </h1>
                    <p className="text-lg text-orange-100">
                        Credit history is a recorded file of past and current credit that is
                        used to compile a credit score. Learn how credit works, how to
                        improve your score, and how it affects your mortgage eligibility.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="max-w-6xl mx-auto py-16 px-6">


                {/* Introduction */}
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Your credit payment history is recorded in a file or report maintained
                        by "consumer reporting agencies" (CRAs), also known as credit bureaus.
                        If you’ve ever applied for a loan, insurance, or job, you likely have
                        a credit record that contains details about your income, debts, and
                        payment history.
                    </p>
                    <p>
                        You can request your credit report from these agencies, which must
                        include all the information in your file, including sources and a list
                        of those who have accessed your report within the past year (or two
                        years for employment purposes).
                    </p>
                </div>

                {/* Credit Bureau Information */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
                        Major Credit Bureaus
                    </h2>
                    <ul className="space-y-2">
                        {[
                            "Equifax: (800) 685-1111",
                            "Experian (formerly TRW): (888) 397-3742",
                            "TransUnion: (800) 916-8800",
                            "Request a free credit report at https://www.annualcreditreport.com",
                        ].map((item, index) => (
                            <li key={index} className="flex gap-3 items-start">
                                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                                <span>
                                    {item.includes("https://") ? (
                                        <>
                                            {item.split("https://")[0]}
                                            <a
                                                href="https://www.annualcreditreport.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                https://www.annualcreditreport.com
                                            </a>
                                        </>
                                    ) : (
                                        item
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Credit Scoring */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
                        Understanding Credit Scoring
                    </h2>
                    <p className="mb-4">
                        Credit scoring helps lenders determine your creditworthiness. It uses
                        statistical analysis of your financial data—payment history, debt
                        levels, credit age, and more—to generate a score. The most commonly
                        used scores are FICO scores, ranging from <b>350 (high risk)</b> to{" "}
                        <b>850 (low risk)</b>.
                    </p>
                    <p>
                        Since credit scoring is data-driven, it treats applicants objectively
                        and consistently. However, each creditor may use different scoring
                        models for various loan types.
                    </p>
                </div>

                {/* Factors Affecting Credit Score */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
                        Factors That Affect Your Credit Score
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "Payment history — Timely payments help maintain a healthy score.",
                            "Outstanding debt — High balances close to credit limits may reduce your score.",
                            "Credit history length — Longer histories often improve your score.",
                            "Recent credit inquiries — Too many new applications can hurt your score.",
                            "Types of credit — A mix of loans and credit cards can be beneficial.",
                        ].map((item, index) => (
                            <li key={index} className="flex gap-3 items-start">
                                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Improving Credit */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
                        How to Improve Your Credit
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "Pay your bills on time — Late payments impact your score the most.",
                            "Reduce outstanding balances — Try to keep credit utilization below 30%.",
                            "Avoid applying for too much new credit in a short time.",
                            "Check your reports regularly and dispute any inaccuracies.",
                            "Keep older accounts open to build a longer credit history.",
                        ].map((item, index) => (
                            <li key={index} className="flex gap-3 items-start">
                                <CheckCircle className="text-[#ED7A1C] w-5 h-5 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Your Rights */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#ED7A1C] mb-4">
                        Your Rights Under the Fair Credit Reporting Act (FCRA)
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "You have the right to receive a copy of your credit report.",
                            "You can know who accessed your report in the last year (or two for employment).",
                            "You must be told if information in your report led to denial of credit.",
                            "You are entitled to a free report within 60 days of being denied credit.",
                            "You can dispute inaccurate information and have it re-investigated.",
                            "You can add a summary statement if disputes aren’t resolved to your satisfaction.",
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

export default Credit;
