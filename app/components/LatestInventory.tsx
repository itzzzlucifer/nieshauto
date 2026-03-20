"use client";

import { useState } from "react";
import Link from "next/link";
import CarCard, { CarProp } from "./CarCard";

const inventory: CarProp[] = [
  {
    id: "1",
    badge: { type: "Electric" },
    price: "NRP 31,60,000",
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
  const filteredInventory = inventory;

  return (
    <>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Latest Inventory</h2>
          </div>
        </div>

        {/* Grid or List Container */}
        {filteredInventory.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInventory.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No vehicles found</h3>
            <p className="text-gray-500">Try adjusting your filters or search criteria.</p>

          </div>
        )}

        {/* Footer CTA */}
        {filteredInventory.length > 0 && (
          <div className="mt-16 text-center">
            <Link href="/inventory#specifications" className="inline-block bg-orange-50 hover:bg-orange-100 text-[#ea2e33] px-8 py-3.5 rounded-full font-bold transition-colors">
              View Detail Specifications
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
