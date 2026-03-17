import { LayoutGrid, List } from "lucide-react";
import CarCard, { CarProp } from "./CarCard";

const inventory: CarProp[] = [
  {
    id: "1",
    badge: { type: "Electric" },
    price: "NRP 20,00,000",
    title: "Jinpeng Lingbox-Z",
    subtitle: "2024 • 410km Range (CLTC)",
    image: "/Lingbox-Z/lingbox1.webp",
    features: [
      { label: "Range", value: "410 km", iconType: "range" },
      { label: "Battery", value: "40.6 kWh", iconType: "battery" },
      { label: "Charge", value: "40 min", iconType: "charge" },
    ]
  }
];

export default function LatestInventory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Latest Inventory</h2>
          <p className="text-gray-500 font-medium">1 exclusive model available</p>
        </div>
        
        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
          <button className="p-2 bg-white rounded-md shadow-sm text-slate-900 border border-gray-200">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-slate-900 transition-colors">
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {inventory.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <button className="bg-orange-50 hover:bg-orange-100 text-[#ea2e33] px-8 py-3.5 rounded-full font-bold transition-colors">
          View Detail Specifications
        </button>
      </div>
    </section>
  );
}
