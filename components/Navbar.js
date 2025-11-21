"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Images/logo.webp";
import { Menu, X } from "lucide-react";
import navItems from "./navbar-items";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) setScrolled(true);
  //     else setScrolled(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {/* <nav
        className={`bg-[#1a1a1a] text-white h-16 w-full fixed left-0 z-50 transition-all duration-500
          ${scrolled ? "top-0 shadow-md" : "top-0 lg:top-6"}
        `}
      > */}
      <nav className="bg-[#1a1a1a] text-white h-16 w-full sticky top-0 left-0 z-50 transition-all duration-500">
        <div className="max-w-8xl mx-auto flex items-center justify-between h-full px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={200}
              height={200}
              className="object-contain cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-blue-500 font-semibold"
                      : "text-white"
                  } hover:text-blue-500`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Us Button */}
          <div className="hidden lg:block">
            <button className="px-3 py-1.5 text-sm rounded-md border font-medium hover:bg-blue-500 transition">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile + Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900/90 backdrop:blur-md text-white w-full fixed top-16 left-0 z-40 px-6 py-4 shadow-lg">
          <ul className="flex flex-col space-y-3 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    pathname === item.href
                      ? "text-blue-500 font-semibold"
                      : "text-white"
                  } hover:text-blue-500`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-3 w-full px-4 py-2 rounded-md border text-sm font-medium hover:bg-transparent bg-blue-500 transition"
          >
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}
