"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

const LIFESTYLE_IMAGES = [
  { src: "/Lingbox-Z/lingbox_1.webp", alt: "Lingbox Z City Drive", span: "md:col-span-2 md:row-span-2" },
  { src: "/Lingbox-Z/lingbox_2.webp", alt: "Lingbox Z Detail", span: "md:col-span-1 md:row-span-1" },
  { src: "/Lingbox-Z/lingbox_3.webp", alt: "Lingbox Z Lifestyle", span: "md:col-span-1 md:row-span-1" },
  { src: "/Lingbox-Z/lingbox_4.webp", alt: "Lingbox Z Urban", span: "md:col-span-1 md:row-span-1" },
  { src: "/Lingbox-Z/lingbox_5.webp", alt: "Lingbox Z Branding", span: "md:col-span-2 md:row-span-1" },
  { src: "/Lingbox-Z/lingbox_8.webp", alt: "Lingbox Z Modern", span: "md:col-span-1 md:row-span-1" },
];

export default function LifestyleGallery() {
  return (
    <section className="mb-24 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#ea2e33] font-bold text-xs uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4" />
              <span>Lifestyle</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#101c40] tracking-tight">
              Designed for the <span className="text-[#ea2e33]">Contemporary</span> World
            </h2>
            <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
              Explore how the Lingbox-Z blends seamlessly into urban life, combining high-end aesthetics with practical utility.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {LIFESTYLE_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-[2rem] shadow-lg group ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-bold text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
