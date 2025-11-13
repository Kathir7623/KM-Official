import { useState, useCallback, ReactNode, ChangeEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// --- Helper Constants (Unchanged) ---
const propertyTypes = [
  { id: "single", label: "Single Family", icon: "🏡" },
  { id: "condo", label: "Condo", icon: "🏢" },
  { id: "multi", label: "Multi-Family (2-4 units)", icon: "🏘️" },
];

const propertyUseOptions = [
  { id: "primary", label: "Primary Residence", icon: "🏠" },
  { id: "secondary", label: "Second Home", icon: "🏖️" },
  { id: "investment", label: "Investment Property", icon: "💰" },
];

const creditScores = [
  { id: "excellent", label: "Excellent (740+)", icon: "🌟" },
  { id: "good", label: "Good (680-739)", icon: "👍" },
  { id: "fair", label: "Fair (620-679)", icon: "😐" },
  { id: "poor", label: "Poor (<620)", icon: "⚠️" },
];

const employmentOptions = [
  "Employed (W-2)",
  "Self-Employed",
  "Unemployed/Retired",
  "Other",
];

const loanPurposeOptionsRefinance = [
  "Lower Interest Rate",
  "Lower Monthly Payment",
  "Debt Consolidation",
  "Change Rate / Term",
  "Home Improvement",
  "Take Cash Out",
];

const generateInterestRates = () => {
  const rates = [];
  for (let i = 13000; i >= 1000; i -= 125) {
    rates.push((i / 1000).toFixed(3).replace(/\.000$/, ".0"));
  }
  return rates;
};
const interestRates = generateInterestRates();


// --- CIRCULAR BUTTON COMPONENT (UPDATED for 'lg' size) ---
interface CircularButtonProps {
    id: string;
    label: string;
    icon: ReactNode;
    selected: boolean;
    onClick: () => void;
    size?: 'sm' | 'md' | 'lg'; // 'lg' added
}

const CircularSelectionButton = ({ id, label, icon, selected, onClick, size = 'sm' }: CircularButtonProps) => {
    let circleClasses = "border-4 w-32 h-32 text-center";
    let iconSize = "text-4xl";
    let labelSize = "text-sm font-medium";
    
    if (size === 'md') {
        circleClasses = "border-4 w-40 h-40 text-center";
        iconSize = "text-5xl";
        labelSize = "font-semibold";
    } else if (size === 'lg') { // New 'lg' size for 14rem x 14rem (using a custom style)
        // Tailwind classes do not easily support 14rem, so use inline style and larger classes
        circleClasses = "border-4 text-center";
        iconSize = "text-8xl"; // Increased icon size
        labelSize = "text-xl font-bold mt-2"; // Increased label size
    }


    return (
        <div
            key={id}
            onClick={onClick}
            className={`cursor-pointer flex flex-col items-center p-4 rounded-full justify-center shadow-md transition ${circleClasses} ${
                selected
                  ? "border-[#ED7A1C] bg-orange-50"
                  : "border-gray-200 hover:border-[#ED7A1C]"
            } flex-shrink-0`} 
            style={{ 
                margin: '0 10px', 
                width: size === 'lg' ? '12rem' : undefined, 
                height: size === 'lg' ? '12rem' : undefined 
            }}
        >
            <div className={`${iconSize} mb-1`}>{icon}</div>
            <p className={`text-gray-700 ${labelSize}`}>{label}</p>
        </div>
    );
};

// --- NEW FLOW SUMMARY COMPONENT (Unchanged) ---
interface FlowSummaryProps {
    loanType: string | null;
    step: number;
}

const FlowSummary = ({ loanType, step }: FlowSummaryProps) => {
    if (step === 0 || !loanType) return null;

    const flowTitleMap: Record<string, string> = {
        purchase: "Purchase Loan Application",
        refinance: "Refinance Loan Application",
    };

//     // Calculate progress: steps 1-12 for purchase, 1-18 for others.
//     const totalSteps = loanType === 'purchase' ? 12 : 18;
//     const currentStepIndex = step <= totalSteps ? step : totalSteps; // Cap at totalSteps
//     const progressPercent = Math.round((currentStepIndex / totalSteps) * 100);

//     return (
//         <div className="w-full max-w-4xl mx-auto mb-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
//             <div className="flex justify-between items-center mb-3">
//                 <h2 className="text-xl font-bold text-gray-800">
//                     {flowTitleMap[loanType] || 'Loan Application'}
//                 </h2>
//                 <span className="text-sm font-medium text-[#ED7A1C]">
//                     Step {currentStepIndex} of {totalSteps}
//                 </span>
//             </div>
//             
//             <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div 
//                     className="bg-[#ED7A1C] h-2.5 rounded-full transition-all duration-500 ease-out" 
//                     style={{ width: `${progressPercent}%` }}
//                 ></div>
//             </div>
//             <p className="text-right text-xs text-gray-500 mt-1">{progressPercent}% Complete</p>
//         </div>
//     );
}

// --- Main Flow Component (Updated step 0 rendering) ---
export default function MortgageFlow() {
  const [step, setStep] = useState(0);
  const [loanType, setLoanType] = useState<string | null>(null);

  // Common state
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [propertyUse, setPropertyUse] = useState<string | null>(null);
  const [credit, setCredit] = useState<string | null>(null);
  const [foundProperty, setFoundProperty] = useState<string | null>(null);
  const [price, setPrice] = useState(500000);
  const [bankruptcy, setBankruptcy] = useState<string | null>(null);
  const [income, setIncome] = useState(80000);
  const [debt, setDebt] = useState(1000);
  const [employment, setEmployment] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Refinance-specific state
  const [militaryService, setMilitaryService] = useState<string | null>(null);
  const [foreclosure, setForeclosure] = useState<string | null>(null);
  const [loanPurpose, setLoanPurpose] = useState("");
  const [homeValue, setHomeValue] = useState(500000);
  const [currentMortgageBalance, setCurrentMortgageBalance] = useState(300000);
  const [currentMortgageRate, setCurrentMortgageRate] = useState("");
  const [secondMortgage, setSecondMortgage] = useState<string | null>(null);
  const [latePayment, setLatePayment] = useState<string | null>(null);
  const [fhaLoan, setFhaLoan] = useState<string | null>(null);

  const currentBalance = currentMortgageBalance;
  const setCurrentBalance = setCurrentMortgageBalance;

  const loanOptions = [
    { id: "purchase", label: "Purchase", icon: "🔑" },
    { id: "refinance", label: "Refinance", icon: "🏠" },

  ];

  const yesNoOptions = [
    { id: "Yes", label: "Yes", icon: "✅" },
    { id: "No", label: "No", icon: "❌" },
  ];

  // --- AUTO-ADVANCE HELPERS ---
  const advanceStep = () => {
    const maxPurchaseStep = 13; 
    const maxRefiStep = 20;

    if (loanType === "purchase" && step < maxPurchaseStep) setStep(step + 1);
    else if ((loanType === "refinance" || loanType === "homeEquity") && step < maxRefiStep) setStep(step + 1);
  };

  const handleSetLoanType = (type: string) => {
    setLoanType(type);
    setStep(1); 
  };
  
  const createAutoAdvanceSetter = (setter: (value: any) => void) => (value: string) => {
    setter(value);
    advanceStep();
  };

  // Custom setter for dropdowns that also advances the step, but only if an option is selected
  const handleDropdownChange = (setter: (value: string) => void) => (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setter(value);
    if (value && value !== 'Select an option') {
        advanceStep();
    }
  };

  // Custom setter for sliders/text fields.
  const handleSliderChange = (setter: (value: number) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value));
  };


  const handleContinue = () => {
     advanceStep();
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else if (step === 1 && loanType) {
      setLoanType(null);
      setStep(0);
    }
  };

  const renderOptionButtons = (options: { id: string; label: string; icon?: string; }[], selected: string | null, setter: (value: string) => void) => {
    const autoAdvanceSetter = createAutoAdvanceSetter(setter);
    return (
      <div className="flex flex-row flex-wrap justify-center gap-4 max-w-4xl">
        {options.map((opt) => (
          <CircularSelectionButton
            key={opt.id}
            id={opt.id}
            label={opt.label}
            icon={opt.icon || (opt.label === "Yes" ? "✅" : opt.label === "No" ? "❌" : "")}
            selected={selected === opt.id}
            onClick={() => autoAdvanceSetter(opt.id)}
            size={'sm'}
          />
        ))}
      </div>
    );
  };

  // UPDATED: Now uses createAutoAdvanceSetter
  const renderYesNoButtons = (state: string | null, setter: (value: string) => void) => {
    const autoAdvanceSetter = createAutoAdvanceSetter(setter);
    return (
      <div className="flex justify-center gap-10">
        {yesNoOptions.map((opt) => (
          <CircularSelectionButton
            key={opt.id}
            id={opt.id}
            label={opt.label}
            icon={opt.icon}
            selected={state === opt.id}
            onClick={() => autoAdvanceSetter(opt.id)}
            size={'md'}
          />
        ))}
      </div>
    );
  };

  // Validation logic simplified, as selection steps automatically advance
  const isContinueEnabled = useCallback(() => {
    if (step === 0 && !loanType) return false;

    // Only text/slider/multi-input steps require the button to be strictly enabled
    if (loanType === "purchase") {
      switch (step) {
        case 5: // Price Slider
        case 7: // Income Slider
        case 8: // Debt Slider
        case 9: // Employment Dropdown (if value is needed)
        case 10: // Zip (Optional)
        case 11: // Address (Optional)
            return true;
        case 12: return first && last && email && phone;
        case 13: return false; // Already submitted
        default: return true; // Selection steps are always ready to advance
      }
    } else if (loanType === "refinance" || loanType === "homeEquity") {
      switch(step) {
        case 6: // Income
        case 7: // Debt
        case 8: // Employment
        case 10: // Value
        case 11: // Balance
        case 12: // Rate
        case 17: // Zip
        case 18: // Address
            return true;
        case 19: return first && last && email && phone;
        case 20: return false; // Already submitted
        default: return true;
      }
    }
    return true;
  }, [step, loanType, first, last, email, phone]);

  // --- STEP RENDERING (Modified handlers) ---

  const renderStepTitle = () => {
    if (step === 0) return "SELECT A LOAN TYPE TO BEGIN";

    const titlesPurchase: Record<number, string> = {
      1: "SELECT PROPERTY TYPE", 2: "WHAT IS THE PROPERTY USE?", 3: "HOW IS YOUR CREDIT?", 4: "ALREADY FOUND A PROPERTY?",
      5: "ESTIMATED PURCHASE PRICE RANGE", 6: "BANKRUPTCY IN LAST 7 YEARS?", 7: "ANNUAL HOUSEHOLD INCOME",
      8: "MONTHLY DEBT PAYMENTS", 9: "EMPLOYMENT STATUS", 10: "PROPERTY ZIP (OPTIONAL)",
      11: "PROPERTY ADDRESS DETAILS", 12: "TELL US ABOUT YOURSELF (CONTACT)", 13: "SUBMISSION COMPLETE",
    };

    const titlesRefinance: Record<number, string> = {
      1: "SELECT PROPERTY TYPE", 2: "WHAT IS THE PROPERTY USE?", 3: "HOW IS YOUR CREDIT?",
      4: "MILITARY SERVICE?", 5: "BANKRUPTCY IN LAST 7 YEARS?", 6: "ANNUAL HOUSEHOLD INCOME", 7: "MONTHLY DEBT PAYMENTS",
      8: "EMPLOYMENT STATUS", 9: "LOAN PURPOSE", 10: "PROPERTY VALUE ESTIMATE", 11: "1ST MORTGAGE BALANCE",
      12: "1ST MORTGAGE INTEREST RATE", 13: "DO YOU HAVE A 2ND MORTGAGE?", 14: "ANY LATE MORTGAGE PAYMENTS?",
      15: "ANY FORECLOSURE IN LAST 7 YEARS?", 16: "DO YOU CURRENTLY HAVE AN FHA LOAN?", 17: "PROPERTY ZIP (OPTIONAL)",
      18: "PROPERTY ADDRESS DETAILS (OPTIONAL)", 19: "TELL US ABOUT YOURSELF (CONTACT)", 20: "SUBMISSION COMPLETE",
    };

    return loanType === "purchase"
      ? titlesPurchase[step] || `PURCHASE - STEP ${step}`
      : titlesRefinance[step] || `REFINANCE - STEP ${step}`;
  };


  const renderStepContent = () => {
    if (step === 0) {
      // Loan Type Screen (UPDATED to use 'lg' size)
      return (
        <div className="flex flex-wrap justify-center gap-10">
          {loanOptions.map((opt) => (    
            <CircularSelectionButton
              key={opt.id}
              id={opt.id}
              label={opt.label}
              icon={opt.icon}
              selected={loanType === opt.id}
              onClick={() => handleSetLoanType(opt.id)} // Uses specific handleSetLoanType
              size={'lg'} // <--- MODIFIED TO 'lg'
            />
          ))}
        </div>
      );
    }

    // Purchase Flow Content (Steps 1-13)
    if (loanType === "purchase") {
      switch (step) {
        case 1: // Property Type (Auto-advance)
          return renderOptionButtons(propertyTypes, propertyType, setPropertyType);
        case 2: // Property Use (Auto-advance)
          return renderOptionButtons(propertyUseOptions, propertyUse, setPropertyUse);
        case 3: // Credit (Auto-advance)
          return renderOptionButtons(creditScores, credit, setCredit);
        case 4: // Already Found Property? (Auto-advance)
          return renderYesNoButtons(foundProperty, setFoundProperty);
        case 6: // Bankruptcy (Auto-advance)
          return renderYesNoButtons(bankruptcy, setBankruptcy);
        case 5: // Price (Slider - NO Auto-advance)
        case 7: // Income (Slider - NO Auto-advance)
        case 8: // Debt (Slider - NO Auto-advance)
          const sliderValueP = step === 5 ? price : step === 7 ? income : debt;
          const minP = step === 5 ? 100000 : step === 7 ? 20000 : 0;
          const maxP = step === 5 ? 2000000 : step === 7 ? 500000 : 10000;
          const stepValP = step === 5 || step === 7 ? 5000 : 100;
          const labelP = step === 8 ? `${sliderValueP.toLocaleString()} / month` : sliderValueP.toLocaleString();
          return (
            <div className="w-full max-w-md">
                <p className="text-gray-700 mb-4 text-lg">**${labelP}**</p>
                <input type="range" min={minP} max={maxP} step={stepValP} value={sliderValueP} 
                    onChange={handleSliderChange(step === 5 ? setPrice : step === 7 ? setIncome : setDebt)} 
                    className="w-full accent-[#ED7A1C]" 
                />
            </div>
          );
        case 9: // Employment (Dropdown - Auto-advance)
          return (
            <select className="border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-[#ED7A1C]" value={employment} onChange={handleDropdownChange(setEmployment)}>
              <option value="">Select one...</option>
              {employmentOptions.map((e) => (<option key={e}>{e}</option>))}
            </select>
          );
        case 10:
        case 11:
        case 12:
          // Text Inputs (NO Auto-advance)
          return (
            <div className="grid gap-4 max-w-md w-full">
                {step === 10 && <input type="text" placeholder="Enter ZIP (optional)" value={zip} onChange={(e) => setZip(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" />}
                {step === 11 && (<><input type="text" placeholder="Property Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /></>)}
                {step === 12 && (<><input type="text" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="text" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="tel" placeholder="Home Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /></>)}
            </div>
          );
        case 13:
          return (
            <div className="text-center p-6 bg-green-50 rounded-lg">
                <h2 className="text-xl font-bold text-green-700">Application Complete!</h2>
                <p className="mt-2 text-green-600">Thank you for submitting your purchase loan details. We'll be in touch soon.</p>
            </div>
          );
        default:
          return null;
      }
    }

    // REFINANCE / HOME EQUITY FLOW (Steps 1-20)
    if (loanType === "refinance" || loanType === "homeEquity") {
        switch (step) {
            case 1: // Property Type (Auto-advance)
                return renderOptionButtons(propertyTypes, propertyType, setPropertyType);
            case 2: // Property Use (Auto-advance)
                return renderOptionButtons(propertyUseOptions, propertyUse, setPropertyUse);
            case 3: // Credit (Auto-advance)
                return renderOptionButtons(creditScores, credit, setCredit);
            case 4: // Military Service (Auto-advance)
                return renderYesNoButtons(militaryService, setMilitaryService);
            case 5: // Bankruptcy (Auto-advance)
                return renderYesNoButtons(bankruptcy, setBankruptcy);
            case 6: // Annual Income (Slider - NO Auto-advance)
            case 7: // Monthly Debt (Slider - NO Auto-advance)
            case 10: // Property Value (Slider - NO Auto-advance)
            case 11: // 1st Mortgage Balance (Slider - NO Auto-advance)
                const sliderValueR = step === 6 ? income : step === 7 ? debt : step === 10 ? homeValue : currentBalance;
                const minR = step === 6 ? 20000 : step === 7 ? 0 : 50000;
                const maxR = step === 6 ? 500000 : step === 7 ? 10000 : step === 10 ? 3000000 : 2000000;
                const stepValR = step === 6 || step === 10 || step === 11 ? 5000 : 100;
                const labelR = step === 7 ? `${sliderValueR.toLocaleString()} / month` : sliderValueR.toLocaleString();

                const sliderSetter = (val: number) => {
                    if (step === 6) setIncome(val);
                    else if (step === 7) setDebt(val);
                    else if (step === 10) setHomeValue(val);
                    else setCurrentBalance(val);
                };

                return (
                    <div className="w-full max-w-md">
                        <p className="text-gray-700 mb-4 text-lg">**${labelR}**</p>
                        <input type="range" 
                            min={minR} max={maxR} step={stepValR} value={sliderValueR} 
                            onChange={handleSliderChange(sliderSetter)} 
                            className="w-full accent-[#ED7A1C]" 
                        />
                    </div>
                );
            case 8: // Employment Status (Dropdown - Auto-advance)
                return (
                    <select className="border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-[#ED7A1C]" value={employment} onChange={handleDropdownChange(setEmployment)}>
                        <option value="">Select one...</option>
                        {employmentOptions.map((e) => (<option key={e}>{e}</option>))}
                    </select>
                );
            case 9: // Loan Purpose (Dropdown - Auto-advance)
                return (
                    <select className="border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-[#ED7A1C]" value={loanPurpose} onChange={handleDropdownChange(setLoanPurpose)}>
                        <option value="">Select an option</option>
                        {loanPurposeOptionsRefinance.map((p) => (<option key={p}>{p}</option>))}
                    </select>
                );
            case 12: // 1st Mortgage Interest Rate (Dropdown - Auto-advance)
                return (
                    <select className="border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-[#ED7A1C]" value={currentMortgageRate} onChange={handleDropdownChange(setCurrentMortgageRate)}>
                        <option value="">Select a rate</option>
                        {interestRates.map((rate) => (<option key={rate}>{rate}%</option>))}
                    </select>
                );
            case 13: // 2nd mortgage? (Auto-advance)
                return renderYesNoButtons(secondMortgage, setSecondMortgage);
            case 14: // Late mortgage payment? (Auto-advance)
                return renderYesNoButtons(latePayment, setLatePayment);
            case 15: // Foreclosure? (Auto-advance)
                return renderYesNoButtons(foreclosure, setForeclosure);
            case 16: // FHA loan? (Auto-advance)
                return renderYesNoButtons(fhaLoan, setFhaLoan);
            case 17: 
            case 18: 
            case 19: 
                // Text Inputs (NO Auto-advance)
                return (
                    <div className="grid gap-4 max-w-md w-full">
                        {step === 17 && <input type="text" placeholder="Enter ZIP (optional)" value={zip} onChange={(e) => setZip(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" />}
                        {step === 18 && (<><input type="text" placeholder="Property Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /></>)}
                        {step === 19 && (<><input type="text" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="text" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" /><input type="tel" placeholder="Home Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ED7A1C]" />
                          <div className="text-center p-6 bg-green-50 rounded-lg mt-4"><h2 className="text-xl font-bold text-green-700">Application Review</h2><p className="mt-2 text-green-600">Please click continue to submit your refinance details.</p></div></>)}
                    </div>
                );
            case 20:
                return (
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                        <h2 className="text-xl font-bold text-green-700">Application Complete!</h2>
                        <p className="mt-2 text-green-600">Thank you for submitting your refinance details. We'll be in touch soon.</p>
                    </div>
                );
            default:
                return null;
        }
    }
    return null;
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-start pt-8 p-4 bg-gray-50">

      
      {/* NEW: Flow Summary Component */}
      <FlowSummary loanType={loanType} step={step} />

      <div className="w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">{renderStepTitle()}</h1>
        {/* Scrollable container for horizontal alignment */}
        <div className="overflow-x-auto w-full flex justify-center pb-4">
          {renderStepContent()}
        </div>
      </div>

      <div className="flex justify-between w-full max-w-md mt-10">
        <button onClick={handleBack} disabled={step === 0 || (loanType === "purchase" && step === 13) || ((loanType !== "purchase" && step === 20))} className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition">
          <ArrowLeft size={20} /> <span className="font-medium">Back</span>
        </button>
        {/* The Continue button is now only necessary for steps with text inputs or sliders */}
        <button
          onClick={handleContinue}
          disabled={!isContinueEnabled() || (loanType === "purchase" && step >= 13) || ((loanType !== "purchase" && step >= 19))}
          className="flex items-center space-x-2 px-4 py-2 bg-[#ED7A1C] text-white rounded-lg disabled:opacity-50 hover:bg-orange-600 transition"
        >
          <span className="font-medium">{loanType === "purchase" && step === 12 || (loanType !== "purchase" && step === 19) ? "Submit" : "Continue"}</span> <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}