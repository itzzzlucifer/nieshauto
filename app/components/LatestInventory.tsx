import { LayoutGrid, List } from "lucide-react";
import CarCard, { CarProp } from "./CarCard";

const inventory: CarProp[] = [
  {
    id: "1",
    badge: { type: "New" },
    price: "$20,000",
    title: "Lingbox Z Standard",
    subtitle: "2024 • 1.6L Hybrid Executive",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    features: [
      { label: "Mileage", value: "120 km", iconType: "mileage" },
      { label: "Transmission", value: "Automatic", iconType: "transmission" },
      { label: "Fuel", value: "Hybrid", iconType: "fuel" },
    ]
  },
  {
    id: "2",
    badge: { type: "Electric" },
    price: "$25,000",
    title: "Lingbox Z Extended",
    subtitle: "2024 • Extended Range 60kWh",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop",
    features: [
      { label: "Range", value: "480 km", iconType: "range" },
      { label: "Charge", value: "45 min", iconType: "charge" },
      { label: "Battery", value: "100%", iconType: "battery" },
    ]
  },
  {
    id: "3",
    badge: { type: "None" },
    price: "$30,000",
    title: "Lingbox Z Pro",
    subtitle: "2024 • 1.5 GLX 4WD",
    image: "https://images.unsplash.com/photo-1532581133568-3d16ee7bcd8a?q=80&w=2070&auto=format&fit=crop",
    features: [
      { label: "Drivetrain", value: "4x4", iconType: "drivetrain" },
      { label: "Transmission", value: "Manual", iconType: "transmission" },
      { label: "Fuel", value: "Petrol", iconType: "fuel" },
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
          <p className="text-gray-500 font-medium">Found 42 matching vehicles</p>
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
          View Entire Inventory (42+)
        </button>
      </div>
    </section>
  );
}
