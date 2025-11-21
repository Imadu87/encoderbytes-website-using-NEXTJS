import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden xl:block bg-blue-500 text-white text-xs border-b border-gray-200  left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24 py-1.5">
        <div className="flex flex-row items-center justify-between flex-wrap gap-1">
          
          {/* LEFT SIDE */}
          <div className="text-left text-[11px] leading-tight">
            IT Park, PTCL Training Center, Board Bazar, Peshawar, Khyber
            Pakhtunkhwa, Pakistan
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-end space-x-4 text-[10px]">
            <Link
              href="tel:+923339921398"
              className="flex items-center space-x-1 text-white"
            >
              <Phone className="w-3 h-3" />
              <span>+92 333 9921398</span>
            </Link>

            <Link
              href="mailto:info@encoderbytes.com"
              className="flex items-center space-x-1 hover:text-gray-200"
            >
              <Mail className="w-3 h-3" />
              <span>info@encoderbytes.com</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
