import { Search, ChevronDown } from "lucide-react";

export default function SearchFilter() {
  return (
    <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-4 flex flex-col md:flex-row gap-4 items-center">
        
        {/* Search Input */}
        <div className="flex-1 w-full bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-transparent focus-within:border-gray-200 transition-colors">
          <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Search by model or keyword..." 
            className="bg-transparent border-none outline-none w-full text-sm text-slate-700 placeholder:text-gray-400"
          />
        </div>

        {/* Dividers & Dropdowns */}
        <div className="flex w-full md:w-auto gap-4 items-center">
          <div className="hidden md:block w-px h-10 bg-gray-100" />
          
          {/* Brand */}
          <div className="flex-1 md:w-40 flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">Brand</span>
            <button className="flex items-center justify-between text-sm font-semibold text-slate-800 bg-gray-50 md:bg-transparent px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span>All Brands</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-100" />

          {/* Body Type */}
          <div className="flex-1 md:w-40 flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">Body Type</span>
            <button className="flex items-center justify-between text-sm font-semibold text-slate-800 bg-gray-50 md:bg-transparent px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span>All Types</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-100" />

          {/* Budget */}
          <div className="flex-1 md:w-40 flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">Budget</span>
            <button className="flex items-center justify-between text-sm font-semibold text-slate-800 bg-gray-50 md:bg-transparent px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span>Any Price</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
