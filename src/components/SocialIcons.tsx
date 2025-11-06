import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 mt-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/Karthik.Mortgage.US/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/karthikmortgage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="X"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.547l-5.123-6.7-5.861 6.7H1.661l7.73-8.832L1.5 2.25h6.711l4.624 6.045z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/karthik_mortgage/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/karthikmortgage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@KarthikMortgage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="YouTube"
      >
        <Youtube className="w-5 h-5" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/15129989242"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0a11.8 11.8 0 0 0-8.4 20.14L0 24l3.92-3.58A11.77 11.77 0 0 0 12 23.55c6.45 0 11.7-5.25 11.7-11.7 0-3.13-1.23-6.07-3.18-8.37zM12 21a9.03 9.03 0 0 1-5.14-1.6l-.37-.23-2.84 1.03 1.02-2.75-.25-.39A9.03 9.03 0 0 1 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm5.01-6.78c-.27-.13-1.59-.78-1.83-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.15.18-.31.2-.58.07-.27-.13-1.15-.42-2.18-1.33-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.11-.55.11-.11.27-.29.4-.44.13-.15.18-.25.27-.42.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.99-.21-.51-.43-.44-.6-.45h-.52c-.18 0-.46.07-.7.33-.24.27-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.18 1.82 2.78 4.41 3.9 2.6 1.11 2.6.74 3.07.69.47-.04 1.59-.64 1.82-1.25.22-.6.22-1.12.16-1.24-.07-.12-.24-.19-.51-.31z" />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@karthikmortgage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="TikTok"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.8 2h2.2c.3 2 1.8 3.7 3.8 4v2.3a6.5 6.5 0 0 1-3.9-1.2v7.7a5.7 5.7 0 1 1-5.7-5.7c.4 0 .9.1 1.3.2v2.4a3.4 3.4 0 1 0 2.4 3.3V2z" />
        </svg>
      </a>

      {/* Zillow */}
      <a
        href="https://www.zillow.com/profile/Karthik_Mortgage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#ED7A1C] transition-colors"
        title="Zillow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 32 32"
        >
          <path d="M3 20.9l10.5-9.6 7.3 4.2L13.6 23l5.6.1 9.8-8.9V11L14.5 4 3 13.6v7.3zm0 4.8L14.5 16l8.1 4.8L17.4 27H3z" />
        </svg>
      </a>
    </div>
  );
}
