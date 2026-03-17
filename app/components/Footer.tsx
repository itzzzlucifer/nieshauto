import Link from "next/link";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <Link href="/" className="md:col-span-1 block group">
            <div className="text-2xl font-black tracking-tighter text-slate-900 mb-6 uppercase group-hover:text-[#ea2e33] transition-colors">
              LOGOXYZ
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
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-50 border border-gray-200 rounded-l-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all"
              />
              <button className="bg-[#ea2e33] hover:bg-[#d6282d] text-white px-4 py-2.5 rounded-r-lg transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Niesh Automobile. All rights reserved.</p>
          <div className="flex gap-6 border-gray-100">
            <Link href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
