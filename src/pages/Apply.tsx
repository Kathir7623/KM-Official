import { useEffect } from "react";

export default function Apply() {
  useEffect(() => {
    // Use replace() for a direct, same-tab redirect without popup
    window.location.replace("https://karthikmortgage.my1003app.com/2507848/register");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFF5E6]">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Redirecting to Application Form...
      </h1>
      <p className="text-gray-600">Please wait, you’ll be redirected shortly.</p>
    </div>
  );
}
