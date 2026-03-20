import Image from "next/image";
import Link from "next/link";
import { Gauge, Settings, Fuel, Zap, BatteryCharging, BatteryFull, Baseline, Navigation } from "lucide-react";

export type CarProp = {
  id: string;
  badge: { type: "New" | "Electric" | "None", text?: string };
  price: string;
  title: string;
  subtitle: string;
  image: string;
  features: {
    label: string;
    value: string;
    iconType: "mileage" | "transmission" | "fuel" | "range" | "charge" | "battery" | "drivetrain";
  }[];
};

export default function CarCard({ car }: { car: CarProp }) {
  const getIcon = (type: string) => {
    switch(type) {
      case "mileage": return <Gauge className="w-5 h-5 text-[#ea2e33]" />;
      case "transmission": return <Settings className="w-5 h-5 text-[#ea2e33]" />;
      case "fuel": return <Fuel className="w-5 h-5 text-[#ea2e33]" />;
      case "range": return <Zap className="w-5 h-5 text-[#ea2e33]" />;
      case "charge": return <BatteryCharging className="w-5 h-5 text-[#ea2e33]" />;
      case "battery": return <BatteryFull className="w-5 h-5 text-[#ea2e33]" />;
      case "drivetrain": return <Navigation className="w-5 h-5 text-[#ea2e33]" />;
      default: return <Baseline className="w-5 h-5 text-[#ea2e33]" />;
    }
  };

  return (
    <Link href="/inventory" className="block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-[220px] w-full bg-slate-100 overflow-hidden">
        <Image 
          src={car.image} 
          alt={car.title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="bg-white/20 backdrop-blur-md border border-white/50 text-white font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2">
            <span>View</span>
          </div>
        </div>
        
        {/* Top Badge */}
        {car.badge.type !== "None" && (
          <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm
            ${car.badge.type === 'New' ? 'bg-[#ea2e33]' : 'bg-emerald-500'}
          `}>
            {car.badge.text || car.badge.type}
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-[#ea2e33] text-white font-bold px-4 py-1.5 rounded-lg shadow-sm">
          {car.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{car.title}</h3>
          <p className="text-sm text-gray-500">{car.subtitle}</p>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-3 gap-2 mb-8 mt-auto">
          {car.features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <div className="mb-2">
                {getIcon(feature.iconType)}
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{feature.label}</span>
              <span className="text-sm font-bold text-slate-800">{feature.value}</span>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="block w-full">
          <div className="w-full bg-slate-50 group-hover:bg-slate-100 text-slate-900 font-semibold py-3.5 rounded-xl transition-colors mt-auto border border-gray-100 text-center">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
}
