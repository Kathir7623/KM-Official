import { useState, useEffect } from "react";

// Import all pages
import Home from "../pages/Home";
import BuyHome from "../pages/BuyHome";
import Calculator from "../pages/Calculator";
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
import Refinance from "../pages/refinane"; // double-check your file name

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

  // 🔗 All your defined routes
  const routes: { [key: string]: JSX.Element } = {
    "/": <Home />,
    "/calculator": <Calculator />,
    "/learning/loan-programs": <LoanPrograms />,
    "/learning/loan-process": <LoanProcess />,
    "/learning/mortgage-basics": <MortgageBasics />,
    "/learning/faq": <FAQ />,
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
