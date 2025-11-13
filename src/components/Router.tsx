import { useState, useEffect } from "react";

// Main pages
import Home from "../pages/Home";
import BuyHome from "../pages/BuyHome";
import Calculator from "../pages/calculator";
import LoanPrograms from "../pages/LoanPrograms";
import LoanProcess from "../pages/LoanProcess";
import MortgageBasics from "../pages/MortgageBasics";
import FAQ from "../pages/FAQ";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Reviews from "../pages/Reviews";
import Apply from "../pages/Apply";
import Purchase from "../pages/purchase";
import Refinance from "../pages/refinance";
import ApplicationChecklist from "../pages/ApplicationChecklist";
import Credit from "../pages/Credit";
import Closingcost from "../pages/Closingcost";
import Appraisal from "../pages/Appraisal";
import PMI from "../pages/PMI";
import Refinancebasics from "../pages/Refinancebasics";
import Glossary from "../pages/Glossary";
import Foreclosure from "../pages/Foreclosure";

// Calculators (must match EXACT names in folder)
import MortgageCalculator from "../pages/calculators/mortgagecalculator";
import RefinanceCalculator from "../pages/calculators/refinancecalculator";
import ExtraPaymentCalculator from "../pages/calculators/extrapaymentcalculator";
import AffordabilityCalculator from "../pages/calculators/affordabilitycalculator";
import PrincipalCalculator from "../pages/calculators/principalcalculator";
import TaxBenefitCalculator from "../pages/calculators/TaxBenefitCalculator";
import APRCalculator from "../pages/calculators/APRCalculator";
import InterestOnlyCalculator from "../pages/calculators/IntrestonlyCalculator";
import ShouldIPayPointsCalculator from "../pages/calculators/Shoulipaypointscalculator";
import IncomeToQualifyCalculator from "../pages/calculators/incometoqualify";
import BuydownCalculator from "../pages/calculators/BuydownCalculator";

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handleLocationChange);

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args as any);
      handleLocationChange();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args as any);
      handleLocationChange();
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        if (url.pathname !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, "", url.pathname);
          handleLocationChange();
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const routes: { [key: string]: JSX.Element } = {
    "/": <Home />,
    "/buy-home": <BuyHome />,
    "/calculator": <Calculator />,

    // Calculators
    "/calculator/mortgage": <MortgageCalculator />,
    "/calculator/refinance": <RefinanceCalculator />,
    "/calculator/extrapaymentcalculator": <ExtraPaymentCalculator />,
    "/calculator/affordabilitycalculator": <AffordabilityCalculator />,
    "/calculator/principalcalculator": <PrincipalCalculator />,
    "/calculator/taxbenefitcalculator": <TaxBenefitCalculator />,
    "/calculator/aprcalculator": <APRCalculator />,
    "/calculator/interestonlycalculator": <InterestOnlyCalculator />,
    "/calculator/shouldipaypointscalculator": <ShouldIPayPointsCalculator />,
    "/calculator/incometoqualify": <IncomeToQualifyCalculator />,
    "/calculator/buydowncalculator": <BuydownCalculator />,

    // Application & credit pages
    "/application-checklist": <ApplicationChecklist />,
    "/credit": <Credit />,
    "/closingcost": <Closingcost />,
    "/appraisal": <Appraisal />,
    "/pmi": <PMI />,
    "/refinancebasics": <Refinancebasics />,
    "/glossary": <Glossary />,
    "/foreclosure": <Foreclosure />,

    // Learning
    "/learning/loan-programs": <LoanPrograms />,
    "/learning/loan-process": <LoanProcess />,
    "/learning/mortgage-basics": <MortgageBasics />,
    "/learning/faq": <FAQ />,

    // More pages
    "/about": <About />,
    "/testimonials": <Testimonials />,
    "/contact": <Contact />,
    "/reviews": <Reviews />,
    "/apply": <Apply />,
    "/purchase": <Purchase />,
    "/refinance": <Refinance />,
  };

  return routes[currentPath] || <Home />;
}
