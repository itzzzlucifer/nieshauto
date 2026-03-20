"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 flex flex-col">
      <div className="w-full px-6 py-4 flex items-center justify-between bg-white z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-gray-100 group-hover:scale-105 transition-transform">
          <Image 
            src="/logo.jpeg" 
            alt="Niesh Automobile Logo" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black italic tracking-tighter text-[#ea2e33] leading-none">NIESH</span>
          <span className="text-xs font-bold tracking-widest text-[#101c40] leading-none uppercase">Automobile</span>
        </div>
      </Link>

      {/* Primary Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <Link href="/inventory" className="hover:text-[#ea2e33] transition-colors">Inventory</Link>
        <Link href="#" className="hover:text-[#ea2e33] transition-colors">Blog</Link>
        <Link href="/about" className="hover:text-[#ea2e33] transition-colors">About</Link>
        <Link href="/about#contact" className="text-sm font-semibold hover:text-[#ea2e33] transition-colors">Contact</Link>
      </div>

      {/* Search and CTA */}
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            suppressHydrationWarning
            type="text" 
            placeholder="Search insights..." 
            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all w-64"
          />
        </div>
          <Link href="/test-drive" className="hidden sm:block bg-[#ea2e33] hover:bg-[#d6282d] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-[#ea2e33]/20">
            Book Test Drive
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:text-[#ea2e33] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold text-slate-700">
          <Link href="/inventory" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ea2e33] transition-colors py-2 border-b border-gray-50">Inventory</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ea2e33] transition-colors py-2 border-b border-gray-50">Blog</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ea2e33] transition-colors py-2 border-b border-gray-50">About</Link>
          <Link href="/about#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ea2e33] transition-colors py-2 border-b border-gray-50">Contact</Link>
          <Link href="/test-drive" onClick={() => setIsMobileMenuOpen(false)} className="sm:hidden text-center bg-[#ea2e33] hover:bg-[#d6282d] text-white px-6 py-3 mt-2 rounded-lg font-bold transition-all shadow-md">
            Book Test Drive
          </Link>
        </div>
      </div>
    </nav>
  );
}
