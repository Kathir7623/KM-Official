import { Calculator, TrendingUp, DollarSign, PieChart, Percent, HelpCircle, BarChart3, PiggyBank, Coins, Briefcase, ArrowDownCircle } from "lucide-react";

export default function CalculatorPage() {
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const calculators = [
    {
      name: "Mortgage Calculator",
      description: "Estimate your monthly home loan payment.",
      icon: <Calculator size={32} className="text-blue-500" />,
      path: "/calculator/mortgage",
    },
    {
      name: "Refinance Calculator",
      description: "See if refinancing can save you money.",
      icon: <TrendingUp size={32} className="text-green-500" />,
      path: "/calculator/refinance",
    },
    {
      name: "Extra Payment Calculator",
      description: "Find out how extra payments shorten your loan term.",
      icon: <DollarSign size={32} className="text-yellow-500" />,
      path: "/calculator/extrapaymentcalculator",
    },
    {
      name: "How much home can I afford?",
      description: "Determine how much home you can afford.",
      icon: <PieChart size={32} className="text-pink-500" />,
      path: "/calculator/affordabilitycalculator",
    },
    {
      name: "Principal Calculator",
      description: "Calculate your principal and remaining balance.",
      icon: <BarChart3 size={32} className="text-purple-500" />,
      path: "/calculator/principalcalculator",
    },
    {
      name: "Tax Benefits of Buying",
      description: "Understand how much you could save in taxes.",
      icon: <Coins size={32} className="text-red-500" />,
      path: "/calculator/taxbenefitcalculator",
    },
    {
      name: "What's my APR?",
      description: "Understand your annual percentage rate cost.",
      icon: <Percent size={32} className="text-indigo-500" />,
      path: "/calculator/aprcalculator",
    },
    {
      name: "Interest-Only Calculator",
      description: "See your monthly payment for an interest-only loan.",
      icon: <PiggyBank size={32} className="text-teal-500" />,
      path: "/calculator/interestonlycalculator",
    },
    {
      name: "Should I pay Points?",
      description: "Find out if paying points makes sense for your loan.",
      icon: <HelpCircle size={32} className="text-orange-500" />,
      path: "/calculator/shouldipaypointscalculator",
    },
    {
      name: "How much income to qualify?",
      description: "Estimate income needed to qualify for a mortgage.",
      icon: <Briefcase size={32} className="text-gray-500" />,
      path: "/calculator/incometoqualify",
    },
    {
      name: "Buydown Calculator",
      description: "Understand how a rate buydown could affect your payments.",
      icon: <ArrowDownCircle size={32} className="text-blue-600" />,
      path: "/calculator/buydowncalculator",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">
        Choose a Calculator
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {calculators.map((calc, index) => (
          <div
            key={index}
            onClick={() => navigate(calc.path)}
            className="cursor-pointer bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center"
          >
            <div className="p-4 bg-gray-100 rounded-full mb-4">{calc.icon}</div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {calc.name}
            </h2>
            <p className="text-sm text-gray-500 text-center mb-4">
              {calc.description}
            </p>
            <button className="mt-auto bg-[#ED7A1C] hover:bg-[#ED7A1C] text-white text-sm font-medium py-2 px-6 rounded-full shadow-sm transition">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
