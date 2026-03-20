"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type SpecCategory = {
  category: string;
  items: { label: string; value: string }[];
};

const SPECIFICATIONS: SpecCategory[] = [
  {
    category: "Basic Data",
    items: [
      { label: "Length (mm)", value: "3584" },
      { label: "Width (mm)", value: "1475" },
      { label: "Height (mm)", value: "1666" },
      { label: "Wheelbase (mm)", value: "2455" },
      { label: "Front / Rear Track (mm)", value: "1300 / 1295" },
      { label: "Min. Ground Clearance (mm)", value: "170" },
      { label: "Body Structure", value: "Hatchback (5 Doors, 5 Seats)" },
      { label: "Trunk Capacity (L)", value: "180 (Expands to >400L with rear seats)" },
      { label: "Rear Seat Sliding Distance (mm)", value: "210" },
      { label: "Curb Weight (kg)", value: "970" },
      { label: "Standard Voltage (V)", value: "320" },
      { label: "Max. Climb Capacity (%)", value: "≥20" },
      { label: "Min. Turning Radius (m)", value: "9.8" },
      { label: "Vehicular Noise (db)", value: "≤73" },
      { label: "Max Speed (km/h)", value: "121" },
      { label: "0-50km/h Acceleration (s)", value: "≤7" }
    ]
  },
  {
    category: "Motor & Battery",
    items: [
      { label: "Model of Electrical Machinery", value: "PMSM" },
      { label: "Motor Power (kW, Rated/Peak)", value: "45 (Peak)" },
      { label: "Max. Torque of Motor (N.m)", value: "130" },
      { label: "Motor Site", value: "Fronting" },
      { label: "Type of Battery", value: "LFP" },
      { label: "Driving Mileage (CLTC)", value: "≥410 km" },
      { label: "Battery Capacity (kWh)", value: "40.6" },
      { label: "100km Power Consumption", value: "≤10.5 kWh/100km" },
      { label: "Capacity Density of Battery", value: "173 wh/kg" },
      { label: "Total Weight of Battery", value: "198 kg" },
      { label: "Charging Standards", value: "AC: GB / DC: GB" },
      { label: "Slower Recharge Time (h)", value: "≤12" },
      { label: "Rapid Recharge Time (30-80%)", value: "40 mins (25℃)" }
    ]
  },
  {
    category: "Gear Box & Chassis",
    items: [
      { label: "Gear Box Type", value: "Electric vehicle single speed gearbox (1 Gear)" },
      { label: "Gear Shifting Method", value: "Knobs" },
      { label: "Drive Mode", value: "FF Layout" },
      { label: "Front Suspension Type", value: "McPherson Independent" },
      { label: "Rear Suspension Type", value: "Torsion Beam Independent" },
      { label: "Boosted Control", value: "EPS" },
      { label: "Chassis Structure", value: "Monocoque Body" }
    ]
  },
  {
    category: "Wheel, Brake & Tyres",
    items: [
      { label: "Front Brake Type", value: "Disk Brake" },
      { label: "Rear Brake Type", value: "Drum Brake" },
      { label: "Parking Brake System", value: "Hand Brake" },
      { label: "Tyre Specifications", value: "Front & Rear: 165/65 R14" },
      { label: "Spare Tire", value: "165/65 R14" },
      { label: "Wheel Rim Material", value: "14-inch Steel with Wheel Disc" }
    ]
  },
  {
    category: "Safety & Assist Systems",
    items: [
      { label: "Airbags", value: "Driver (Standard) / Front Passenger (Optional)" },
      { label: "Tyre Pressure Detection", value: "Standard" },
      { label: "Seatbelt Alert", value: "Driver" },
      { label: "ISOFIX Child Seat Interface", value: "Standard" },
      { label: "Antilock Brake System (ABS)", value: "Standard" },
      { label: "Braking Force Distributor (EBD)", value: "Standard" },
      { label: "Vehicle Anti-theft Device", value: "Standard" },
      { label: "Parking Assists", value: "Rear Parking Radar, Reverse Image Camera" },
      { label: "Hill-start Assist Control (HAC)", value: "Standard" },
      { label: "Driving Mode Switch", value: "Standard / Sporty" },
      { label: "Safety Alerts", value: "Door Not Closed Prompt, Handbrake Reminder, Safety Voice Alert" }
    ]
  },
  {
    category: "External & Security",
    items: [
      { label: "Electric-locking Trunk System", value: "Standard" },
      { label: "Central Lock", value: "Standard" },
      { label: "Ignition", value: "Key Type, One-button Start" },
      { label: "Low Temp Battery Heating", value: "Standard" },
      { label: "Vehicle Tools", value: "Tow Hook, Warning Triangle, Reflective Vest" }
    ]
  },
  {
    category: "Interior & Seating",
    items: [
      { label: "Seat Material / Layout", value: "Fabric / 2+2" },
      { label: "Seat Regulation", value: "Driver & Passenger Manual 4-ways (Fore/Aft/Backrest)" },
      { label: "Rear Seat Configuration", value: "Folded down as a whole, Headrest height adjustment" },
      { label: "Steering Material", value: "Expanding Foam" },
      { label: "Instrument Panel", value: "Full LCD Instrument Panel" },
      { label: "Energy Recovery System", value: "Three-speed Adjustment" },
      { label: "Air Conditioning", value: "Manual AC (Three-speed PTC knob)" }
    ]
  },
  {
    category: "Multimedia & Connectivity",
    items: [
      { label: "Central Control Screen", value: "10.1-inch Touched LCD Color Screen" },
      { label: "System Features", value: "English Interface, Navigation, Internet Apps" },
      { label: "Smartphone Integration", value: "Carplay, Bluetooth/Car Telephone" },
      { label: "Audio", value: "Radio, Speed Dependent Volume Adjustment" },
      { label: "Connectivity & Power", value: "1x USB, 12V Power Connector" },
      { label: "Loudspeakers", value: "4 Speakers" }
    ]
  },
  {
    category: "Lighting & Mirrors",
    items: [
      { label: "Headlights", value: "LED Dipped & Full Beam, Height Tunable" },
      { label: "Convenience Lighting", value: "Follow Me Home, Door Opening Double Flash, Reading Light" },
      { label: "Exterior Rearview Mirrors", value: "Electric Adjustment" },
      { label: "Inner Rearview Mirror", value: "Manual Anti-glare" },
      { label: "Windows", value: "Front & Rear Power Windows" },
      { label: "Sun Shield / Cosmetic Mirror", value: "Driver & Passenger" }
    ]
  }
];

export default function SpecificationAccordion() {
  const [openCategory, setOpenCategory] = useState<number | null>(0); // Open first one by default

  const toggleCategory = (index: number) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
      // Wait for the CSS transition (300ms) to finish collapsing the previous item
      setTimeout(() => {
        const element = document.getElementById(`accordion-${index}`);
        if (element) {
          // Calculate position with 120px offset to account for the fixed navbar
          const y = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 310);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-slate-200/50 overflow-hidden text-sm">
      {SPECIFICATIONS.map((group, index) => {
        const isOpen = openCategory === index;
        
        return (
          <div id={`accordion-${index}`} key={group.category} className="border-b border-gray-100 last:border-0">
            {/* Header */}
            <button
              onClick={() => toggleCategory(index)}
              className="w-full flex items-center justify-between px-6 lg:px-10 py-5 bg-white hover:bg-slate-50 transition-colors focus:outline-none group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#ea2e33] transition-colors">
                {group.category}
              </h3>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-[#ea2e33]/10 group-hover:text-[#ea2e33] transition-colors">
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>

            {/* Expanded Content */}
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 lg:px-10 pb-6">
                <table className="w-full text-left">
                  <tbody>
                    {group.items.map((item, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 pr-4 font-semibold text-slate-700 w-1/2 md:w-1/3">
                          {item.label}
                        </td>
                        <td className="py-3 text-slate-600">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
