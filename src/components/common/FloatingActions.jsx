import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex  justify-end gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919616350866?text=Hello%20RahKirana%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
        target="_blank"
        rel="noreferrer"
        className="
          group flex h-12 w-12 items-center justify-center
          overflow-hidden rounded-full
          bg-[#25D366] text-white
          shadow-lg transition-all duration-300
          hover:w-36
        "
      >
        {/* Icon */}
        <FaWhatsapp
          size={26}
          className="
            absolute transition-all duration-300
            group-hover:opacity-0 group-hover:scale-75
          "
        />

        {/* Text */}
        <span
          className="
            whitespace-nowrap text-sm font-medium
            opacity-0 transition-all duration-300
            group-hover:opacity-100
          "
        >
          WhatsApp Chat
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+919616350866"
        className="
          group flex h-12 w-12 items-center justify-center
          overflow-hidden rounded-full
          bg-slate-800 text-white
          shadow-lg transition-all duration-300
          hover:w-28
        "
      >
        {/* Icon */}
        <Phone
          size={22}
          className="
            absolute transition-all duration-300
            group-hover:opacity-0 group-hover:scale-75
          "
        />

        {/* Text */}
        <span
          className="
            whitespace-nowrap text-sm font-medium
            opacity-0 transition-all duration-300
            group-hover:opacity-100
          "
        >
          Call Now
        </span>
      </a>

    </div>
  );
}
