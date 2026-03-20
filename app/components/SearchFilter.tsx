"use client";

import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

type SearchFilterProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  brand: string;
  setBrand: (brand: string) => void;
  bodyType: string;
  setBodyType: (type: string) => void;
};

export default function SearchFilter({ 
  searchQuery, 
  setSearchQuery, 
  brand, 
  setBrand, 
  bodyType, 
  setBodyType 
}: SearchFilterProps) {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  return (
    <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10 mb-12">
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-4 flex flex-col md:flex-row gap-4 items-center">
        
        {/* Search Input */}
        <div className="flex-1 w-full bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-transparent focus-within:border-gray-200 transition-colors">
          <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by model or keyword..." 
            className="bg-transparent border-none outline-none w-full text-sm text-slate-700 placeholder:text-gray-400"
          />
        </div>

        {/* Dividers & Dropdowns */}
        <div className="flex w-full md:w-auto gap-4 items-center relative">
          <div className="hidden md:block w-px h-10 bg-gray-100" />
          
          {/* Brand */}
          <div className="flex-1 md:w-40 flex flex-col relative">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">Brand</span>
            <button 
              onClick={() => setIsBrandOpen(!isBrandOpen)}
              className="flex items-center justify-between text-sm font-semibold text-slate-800 bg-gray-50 md:bg-transparent px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="truncate">{brand || "All Brands"}</span>
              <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </button>
            {isBrandOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-xl rounded-xl z-50 overflow-hidden">
                <button onClick={() => { setBrand(""); setIsBrandOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">All Brands</button>
                <button onClick={() => { setBrand("Jinpeng"); setIsBrandOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">Jinpeng</button>
              </div>
            )}
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-100" />

          {/* Body Type */}
          <div className="flex-1 md:w-40 flex flex-col relative">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">Body Type</span>
            <button 
              onClick={() => setIsTypeOpen(!isTypeOpen)}
              className="flex items-center justify-between text-sm font-semibold text-slate-800 bg-gray-50 md:bg-transparent px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="truncate">{bodyType || "All Types"}</span>
              <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </button>
            {isTypeOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-xl rounded-xl z-50 overflow-hidden">
                <button onClick={() => { setBodyType(""); setIsTypeOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">All Types</button>
                <button onClick={() => { setBodyType("Hatchback"); setIsTypeOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">Hatchback</button>
                <button onClick={() => { setBodyType("SUV"); setIsTypeOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors">SUV</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
