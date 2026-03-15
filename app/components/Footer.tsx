"use client";

import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

/**
 * Footer - Global footer component with branding and social links
 *
 * Features:
 * - StoreStride logo/branding
 * - Social media links (Facebook, WhatsApp, LinkedIn)
 * - Dynamic copyright year
 * - Responsive layout with centered content
 */
export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          <span className="text-[#2391C4]">Store</span>Stride
        </Link>

        {/* Social Media Links  */}
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">Connect with us</span>

          {/* Facebook Link */}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#2391C4] hover:border-[#2391C4]/50 transition-all"
          >
            <Facebook size={18} />
          </Link>

          {/* WhatsApp Link */}
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#2391C4] hover:border-[#2391C4]/50 transition-all"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </Link>

          {/* LinkedIn Link */}
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#2391C4] hover:border-[#2391C4]/50 transition-all"
          >
            <Linkedin size={18} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} StoreStride. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
