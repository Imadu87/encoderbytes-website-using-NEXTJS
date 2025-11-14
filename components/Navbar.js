"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Images/logo.webp"
import { Menu, X } from "lucide-react";
import navItems from "./navbar-items";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`bg-[#1a1a1a] h-20 flex items-center justify-between px-6 md:px-16 text-white fixed left-0 w-full z-50 transition-all duration-500 top-0
        ${scrolled ? "lg:top-0 shadow-md" : "lg:top-8.5"}`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Logo"
            width={190}
            height={190}
            className="object-contain"
          />
        </div>

        {/* Desktop Navbar (lg and above) */}
        <ul className="hidden lg:flex space-x-10 text-lg font-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-gray-300 transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <button className="px-4 py-2 rounded-lg border font-semibold hover:bg-blue-500 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile + Tablet Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile + Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-700 text-white w-full fixed top-20 left-0 z-40 px-6 py-4 shadow-lg">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-gray-300 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full px-4 py-2 rounded-lg border font-semibold hover:bg-blue-500 transition"
          >
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}
