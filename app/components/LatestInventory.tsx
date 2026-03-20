"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import CarCard, { CarProp } from "./CarCard";
import SearchFilter from "./SearchFilter";

const inventory: CarProp[] = [
  {
    id: "1",
    badge: { type: "Electric" },
    price: "NRP 20,00,000",
    title: "Jinpeng Lingbox-Z",
    subtitle: "2024 • 410km Range (CLTC)",
    image: "/Lingbox-Z/green/front_45.webp",
    features: [
      { label: "Range", value: "410 km", iconType: "range" },
      { label: "Battery", value: "40.6 kWh", iconType: "battery" },
      { label: "Charge", value: "40 min", iconType: "charge" },
    ]
  }
];

export default function LatestInventory() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [bodyType, setBodyType] = useState("");

  const filteredInventory = inventory.filter(car => {
    const matchesSearch = car.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          car.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = brand ? car.title.toLowerCase().includes(brand.toLowerCase()) : true;
    const matchesType = bodyType ? car.badge.type.toLowerCase().includes(bodyType.toLowerCase()) || car.subtitle.toLowerCase().includes(bodyType.toLowerCase()) : true; // Simplified checking for type
    
    return matchesSearch && matchesBrand && matchesType;
  });

  return (
    <>
      <SearchFilter 
        searchQuery={searchQuery} setSearchQuery={setSearchQuery} 
        brand={brand} setBrand={setBrand} 
        bodyType={bodyType} setBodyType={setBodyType} 
      />
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Latest Inventory</h2>
            <p className="text-gray-500 font-medium">{filteredInventory.length} model{filteredInventory.length !== 1 ? 's' : ''} found</p>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
            <button 
              type="button"
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md shadow-sm border transition-colors ${viewMode === "grid" ? "bg-white text-slate-900 border-gray-200" : "bg-transparent text-gray-400 border-transparent hover:text-slate-900"}`}>
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              type="button"
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md shadow-sm border transition-colors ${viewMode === "list" ? "bg-white text-slate-900 border-gray-200" : "bg-transparent text-gray-400 border-transparent hover:text-slate-900"}`}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid or List Container */}
        {filteredInventory.length > 0 ? (
          <div className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"}`}>
            {filteredInventory.map((car) => (
              <CarCard key={car.id} car={car} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No vehicles found</h3>
            <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setBrand(""); setBodyType(""); }}
              className="mt-6 font-bold text-[#ea2e33] hover:underline"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Footer CTA */}
        {filteredInventory.length > 0 && (
          <div className="mt-16 text-center">
            <button className="bg-orange-50 hover:bg-orange-100 text-[#ea2e33] px-8 py-3.5 rounded-full font-bold transition-colors">
              View Detail Specifications
            </button>
          </div>
        )}
      </section>
    </>
  );
}
