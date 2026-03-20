"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

const CAROUSEL_IMAGES = [
  { src: "/Lingbox-Z/lingbox_5.webp", title: "Smart Engineering", subtitle: "CLTC 410KM Range" },
  { src: "/Lingbox-Z/lingbox_1.webp", title: "Urban Masterpiece", subtitle: "Compact & Powerful" },
  { src: "/Lingbox-Z/lingbox_2.webp", title: "Premium Interior", subtitle: "Smart Tech Cockpit" },
  { src: "/Lingbox-Z/lingbox_6.webp", title: "Safety First", subtitle: "IP67 Rated Battery" },
  { src: "/Lingbox-Z/lingbox_8.webp", title: "Eco Mobility", subtitle: "10.5 kWh/100km" },
];

export default function LifestyleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-[#101c40]">Featured <span className="text-[#ea2e33]">Highlights</span></h2>
            <p className="text-gray-500 font-medium">Experience the urban future in every detail.</p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={prev} className="p-3 rounded-full border border-gray-200 hover:bg-[#ea2e33] hover:text-white transition-all bg-white text-slate-700 shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-gray-200 hover:bg-[#ea2e33] hover:text-white transition-all bg-white text-slate-700 shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[400px] md:h-[600px]">
          {CAROUSEL_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 text-white">
                <div className="inline-flex items-center gap-2 bg-[#ea2e33] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 w-fit animate-bounce">
                  <Zap className="w-3 h-3 fill-white" />
                  Premium Electric
                </div>
                <h3 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter max-w-2xl leading-[0.9]">
                  {img.title}
                </h3>
                <p className="text-gray-300 text-lg md:text-2xl font-medium tracking-wide max-w-xl">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-10 right-10 flex gap-2">
            {CAROUSEL_IMAGES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  idx === currentIndex ? 'w-10 bg-[#ea2e33]' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
