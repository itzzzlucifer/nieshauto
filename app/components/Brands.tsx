import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "Lingbox", logo: "LOGO" },
  ];

  return (
    <section className="bg-[#fcfcfc] py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-black text-slate-900 mb-12">
          Authorized Partner For
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="w-40 sm:w-48 bg-white border border-gray-100 hover:border-gray-200 transition-colors rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xs ring-4 ring-gray-50">
                {brand.logo === "LOGO" ? "LI" : brand.name.substring(0, 2).toUpperCase()}
              </div>
              <span className="font-semibold text-slate-800 text-sm">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
