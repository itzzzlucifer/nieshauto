import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
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
        <Link href="#" className="hover:text-[#ea2e33] transition-colors">Services</Link>
        <Link href="#" className="hover:text-[#ea2e33] transition-colors">Blog</Link>
        <Link href="#" className="hover:text-[#ea2e33] transition-colors">About</Link>
        <Link href="#" className="text-sm font-semibold hover:text-[#ea2e33] transition-colors">Contact</Link>
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
        <Link href="/test-drive" className="bg-[#ea2e33] hover:bg-[#d6282d] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-[#ea2e33]/20">
          Book Test Drive
        </Link>
      </div>
    </nav>
  );
}
