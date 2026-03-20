import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <Link href="/" className="md:col-span-1 block group">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 overflow-hidden rounded-full ring-2 ring-gray-100">
                <Image 
                  src="/logo.jpeg" 
                  alt="Niesh Automobile Logo" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black italic tracking-tighter text-[#ea2e33] leading-none">NIESH</span>
                <span className="text-[10px] font-bold tracking-widest text-[#101c40] leading-none uppercase">Automobile Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Experience the pinnacle of automotive excellence. We provide curated premium vehicles for enthusiasts and families alike.
            </p>
          </Link>

          {/* Links - Inventory */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Inventory</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-[#ea2e33] transition-colors">New Vehicles</Link></li>
              <li><Link href="#" className="hover:text-[#ea2e33] transition-colors">Electric Fleet</Link></li>
              <li><Link href="#" className="hover:text-[#ea2e33] transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* Links - Support */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-[#ea2e33] transition-colors">Service Center</Link></li>
              <li><Link href="#" className="hover:text-[#ea2e33] transition-colors">Finance Options</Link></li>
              <li><Link href="#" className="hover:text-[#ea2e33] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Stay updated with new stock arrivals.</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <p>© {new Date().getFullYear()} Niesh Automobile Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gray-600 transition-colors tracking-tight uppercase font-bold text-[10px]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-600 transition-colors tracking-tight uppercase font-bold text-[10px]">Terms of Service</Link>
            </div>
          </div>
          
          <a 
            href="https://www.kritimtechnologies.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#ea2e33] transition-colors opacity-80 hover:opacity-100 group"
          >
            <span className="font-medium">Designed & Developed by Kritim Technologies Pvt. Ltd.</span>
            <Image 
              src="/KritimTechLogo.svg" 
              alt="Kritim Technologies" 
              width={20} 
              height={20} 
              className="object-contain w-5 h-5 group-hover:brightness-110 grayscale-0 sm:grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
