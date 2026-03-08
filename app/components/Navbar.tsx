"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-tight">
          <span className="text-[#2391C4]">Store</span>Stride
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-gray-300">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={`group relative px-4 py-2 transition duration-300 after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2391C4] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive ? "text-[#2391C4]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="group px-6 py-2.5 bg-gradient-to-r from-white to-[#2391C4] hover:scale-105 rounded-full font-semibold text-black transition duration-300 shadow-[0_0_40px_rgba(35,145,196,0.45)] inline-flex items-center gap-2"
          >
            <span>Contact Us</span>
            <span className="relative h-4 w-4">
              <Image
                src="/arrow-black.svg"
                alt="Arrow"
                fill
                className="object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/arrow-white.svg"
                alt="Arrow"
                fill
                className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </span>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="md:hidden text-white rounded-full"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-gray-300 animate-fadeIn">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition ${
                  isActive
                    ? "text-[#2391C4]"
                    : "text-gray-300 hover:text-[#2391C4]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
