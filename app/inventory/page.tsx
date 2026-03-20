"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Share2, Zap, ShieldCheck, Timer, Calendar, BarChart3, Gauge, Battery, Lock, Sparkles, Navigation, Download } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SpecificationAccordion from "../components/SpecificationAccordion";
import LifestyleGallery from "../components/LifestyleGallery";

const COLOR_VARIANTS = [
  {
    name: "Mint Green",
    color: "#9CC5A1",
    images: [
      "/Lingbox-Z/green/front_45.webp",
      "/Lingbox-Z/green/front_45_alt.webp",
      "/Lingbox-Z/green/side.webp",
      "/Lingbox-Z/green/rear_45.webp",
      "/Lingbox-Z/green/rear.webp",
      "/Lingbox-Z/green/rear_45_alt.webp",
      "/Lingbox-Z/green/front.webp"
    ]
  },
  {
    name: "Space Grey",
    color: "#8E8E93",
    images: [
      "/Lingbox-Z/grey/front_45.webp",
      "/Lingbox-Z/grey/front_45_alt.webp",
      "/Lingbox-Z/grey/side.webp",
      "/Lingbox-Z/grey/rear_45.webp",
      "/Lingbox-Z/grey/rear.webp",
      "/Lingbox-Z/grey/rear_45_alt.webp",
      "/Lingbox-Z/grey/front.webp"
    ]
  },
  {
    name: "Rose Pink",
    color: "#EAB8C7",
    images: [
      "/Lingbox-Z/pink/front_45.webp",
      "/Lingbox-Z/pink/front_45_alt.webp",
      "/Lingbox-Z/pink/side.webp",
      "/Lingbox-Z/pink/rear_45.webp",
      "/Lingbox-Z/pink/rear.webp",
      "/Lingbox-Z/pink/rear_45_alt.webp",
      "/Lingbox-Z/pink/front.webp"
    ]
  },
  {
    name: "Pearl White",
    color: "#F0EDE8",
    images: [
      "/Lingbox-Z/white/front_45.webp",
      "/Lingbox-Z/white/front_45_alt.webp",
      "/Lingbox-Z/white/side.webp",
      "/Lingbox-Z/white/rear_45.webp",
      "/Lingbox-Z/white/rear.webp",
      "/Lingbox-Z/white/rear_45_alt.webp",
      "/Lingbox-Z/white/front.webp"
    ]
  },
];

// All images across all colors and angles — preloaded eagerly on mount
const ALL_IMAGES = COLOR_VARIANTS.flatMap((v) => v.images);

export default function InventoryPage() {
  const [activeColor, setActiveColor] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState({ x: 50, y: 50, bgX: 50, bgY: 50 });
  const [isZooming, setIsZooming] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImages = COLOR_VARIANTS[activeColor].images;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    let x = ((e.clientX - left) / width) * 100;
    let y = ((e.clientY - top) / height) * 100;

    // The zoom pane acts essentially as a 2.5x scale.
    // Box dimensions: 20% width (10% half), 40% height (20% half)
    x = Math.max(10, Math.min(90, x));
    y = Math.max(20, Math.min(80, y));

    const bgX = ((x - 10) / 80) * 100;
    const bgY = ((y - 20) / 60) * 100;

    setZoom({ x, y, bgX, bgY });
  };

  return (
    <div className="min-h-screen flex flex-col pt-[88px] bg-[#f8f9fa]">
      {/* Hidden preload: eagerly fetch every color+angle combo so color switching is instant */}
      <div aria-hidden="true" className="hidden">
        {ALL_IMAGES.map((src) => (
          <Image key={src} src={src} alt="" fill priority sizes="1px" />
        ))}
      </div>

      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-4 sm:mb-8 font-medium uppercase tracking-wider">
          <Link href="/" className="hover:text-[#ea2e33] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="#" className="hover:text-[#ea2e33] transition-colors">Electric Hatchbacks</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700 font-bold">JINPENG LINGBOX-Z 410km</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-2 space-y-6 relative">
            {/* Mobile-only Title */}
            <div className="sm:hidden mb-2">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">JINPENG LINGBOX-Z 410km</h1>
              <p className="text-gray-500 font-medium tracking-wide text-sm mt-1">The Smart Urban Companion</p>
            </div>

            {/* Color Picker Swatches */}
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Color</span>
              <div className="flex items-center gap-3">
                {COLOR_VARIANTS.map((variant, idx) => (
                  <button
                    key={variant.name}
                    onClick={() => { setActiveColor(idx); setActiveIndex(0); }}
                    className={`group relative flex flex-col items-center gap-1`}
                    title={variant.name}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 transition-all shadow-sm ${activeColor === idx
                        ? 'border-[#ea2e33] scale-110 ring-2 ring-[#ea2e33]/30'
                        : 'border-gray-200 hover:border-gray-400 hover:scale-105'
                      }`} style={{ backgroundColor: variant.color }} />
                    <span className={`text-[10px] font-bold transition-colors ${activeColor === idx ? 'text-[#ea2e33]' : 'text-slate-400'
                      }`}>{variant.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Main Featured Image */}
            <div
              className="relative aspect-video sm:aspect-auto sm:h-[500px] w-full rounded-3xl overflow-hidden bg-slate-100 shadow-lg cursor-zoom-in"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={currentImages[activeIndex]}
                alt="JINPENG LINGBOX-Z 410km"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              {/* Dark Overlay - Hidden on Mobile */}
              <div className={`hidden sm:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none ${isZooming ? 'opacity-0' : 'opacity-100'}`} />

              {/* Tap to Zoom Indicator for Mobile */}
              <div className="sm:hidden absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white p-2 rounded-full pointer-events-none">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className={`hidden sm:block absolute bottom-8 left-8 transition-opacity duration-300 pointer-events-none ${isZooming ? 'opacity-0' : 'opacity-100'}`}>
                <h1 className="text-5xl font-black text-white mb-2 tracking-tight">JINPENG LINGBOX-Z 410km</h1>
                <p className="text-gray-300 font-medium tracking-wide">The Smart Urban Companion</p>
              </div>

              {/* Daraz-style Zoom Box Indicator */}
              {isZooming && (
                <div
                  className="hidden lg:block absolute pointer-events-none bg-white/20 border border-white/50 shadow-sm transition-opacity duration-150"
                  style={{
                    width: '20%',
                    height: '40%',
                    left: `${zoom.x}%`,
                    top: `${zoom.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              )}
            </div>

            {/* Render Daraz-style Zoom Pane */}
            {isZooming && (
              <div className="hidden lg:block absolute top-0 left-full ml-8 w-[calc(50%-1rem)] h-[500px] bg-white rounded-3xl shadow-2xl z-50 pointer-events-none border border-gray-100 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={currentImages[activeIndex]}
                    alt="Zoomed Detail"
                    fill
                    className="object-cover"
                    style={{
                      transformOrigin: `${zoom.bgX}% ${zoom.bgY}%`,
                      transform: 'scale(2.5)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {currentImages.map((img: string, idx: number) => (
                <div
                  key={idx}
                  className={`relative h-24 sm:h-32 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeIndex === idx ? 'border-[#ea2e33]' : 'border-transparent'
                    }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className={`object-cover transition-transform duration-500 ${activeIndex !== idx && 'hover:scale-110'}`}
                    sizes="(max-width: 640px) 25vw, 15vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-[120px] bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">

              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="relative w-20 h-8 mb-4">
                    <Image
                      src="/jinpeng_logo.jpg"
                      alt="Jinpeng Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="inline-block bg-orange-50 text-[#ea2e33] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">Available Now</span>
                  <h2 className="text-2xl font-black text-[#101c40]">Standard Edition</h2>
                </div>
                <button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-slate-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Starting from</p>
                <div className="text-5xl font-black text-[#ea2e33] mb-2 tracking-tight">NRP 31,60,000</div>
                <p className="text-gray-500 text-sm">Estimated monthly: <span className="font-bold text-slate-800">NRP 45,030/mo</span></p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#ea2e33]" />
                  <span className="text-sm font-semibold text-slate-700">Rapid DC Charging (30-80% in 40 min) & 11h AC</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#ea2e33]" />
                  <span className="text-sm font-semibold text-slate-700">Cage-type high-strength steel body & IP67 rating</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#ea2e33]" />
                  <span className="text-sm font-semibold text-slate-700">10.5 kWh/100km Energy Efficiency</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/test-drive" className="w-full flex items-center justify-center gap-2 bg-[#ea2e33] hover:bg-[#d6282d] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#ea2e33]/20">
                  <Calendar className="w-5 h-5" />
                  Book a Test Drive
                </Link>
                <a href="/BOX-Z.pdf" download className="w-full bg-white hover:bg-gray-50 text-[#ea2e33] font-bold py-4 rounded-xl border-2 border-[#ea2e33] transition-colors flex items-center justify-center">
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Section */}
        <section id="specifications" className="py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-1 sm:px-0">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#ea2e33] font-bold text-xs uppercase tracking-[0.2em] mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Performance</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[#101c40] tracking-tight">Technical <span className="text-[#ea2e33]">Specifications</span></h2>
                <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">Precision engineering meets electric power in every detail.</p>
              </div>
              <div className="flex items-center bg-white border border-gray-100 p-1 rounded-xl shadow-sm text-sm font-bold w-fit">
                <button className="px-6 py-2 bg-slate-900 text-white rounded-lg shadow-sm">Metric</button>
                <button className="px-6 py-2 text-slate-500 hover:text-slate-900">Imperial</button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
                <Navigation className="w-6 h-6 sm:w-8 sm:h-8 text-[#ea2e33] mb-2 sm:mb-4" />
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">CLTC Range</span>
                <span className="text-xl sm:text-3xl font-black text-[#101c40]">410 km</span>
              </div>
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
                <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-[#ea2e33] mb-2 sm:mb-4" />
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">0-50 KM/H</span>
                <span className="text-xl sm:text-3xl font-black text-[#101c40]">7.0s</span>
              </div>
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
                <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-[#ea2e33] mb-2 sm:mb-4" />
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Top Speed</span>
                <span className="text-xl sm:text-3xl font-black text-[#101c40]">121 km/h</span>
              </div>
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
                <Battery className="w-6 h-6 sm:w-8 sm:h-8 text-[#ea2e33] mb-2 sm:mb-4" />
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Battery Capacity</span>
                <span className="text-xl sm:text-3xl font-black text-[#101c40]">40.6 kWh</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-20 lg:py-24 bg-slate-50/50 lg:bg-transparent -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#ea2e33] font-bold text-xs uppercase tracking-[0.2em]">
                    <Sparkles className="w-4 h-4" />
                    <span>Technology</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#101c40] tracking-tight">Smart Cockpit & <span className="text-[#ea2e33]">Safety Suite</span></h2>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">Intelligence that looks out for you and keeps you connected on every journey.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-[#ea2e33]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">10.1-inch floating high-definition LCD</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">Central control screen providing access to media, vehicle settings, and built-in connectivity.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-[#ea2e33]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Safety Suite</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">Includes Driver/Passenger Airbags, ABS, EBD, Tire Pressure Monitoring System (TPMS), and Hill-start Assist Control.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-[#ea2e33]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Connected Features</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">Stay connected with CarPlay integration, Bluetooth, Voice Control for multimedia, and APP Remote Control.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden relative shadow-2xl">
                <Image
                  src="/car_interior.png"
                  alt="Interior Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Gallery Section */}
        <LifestyleGallery />

        {/* Specifications Accordion Table Section */}
        <section className="py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-2 text-[#ea2e33] font-bold text-xs uppercase tracking-[0.2em]">
                <BarChart3 className="w-4 h-4" />
                <span>Documentation</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#101c40] tracking-tight">Full <span className="text-[#ea2e33]">Specifications</span></h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium leading-relaxed">Comprehensive data for the discerning owner.</p>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:px-0">
              <SpecificationAccordion />

              <div className="mt-8 flex justify-center">
                <a href="/Specification.pdf" download className="inline-flex items-center gap-2 bg-white text-[#ea2e33] border-2 border-[#ea2e33] hover:bg-gray-50 font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#ea2e33]/10">
                  <Download className="w-5 h-5" />
                  Download Specifications (.pdf)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Section Box - HIDDEN FOR NOW
        <section className="bg-orange-50/50 rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Financing Calculator</h2>
            <p className="text-gray-600">Tailor your payments to fit your lifestyle.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-transparent flex flex-col md:flex-row gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-slate-900">Down Payment</span>
                  <span className="text-lg font-black text-[#ea2e33]">NRP 7,90,000</span>
                </div>
                <div className="h-2 w-full bg-blue-100 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-1/4 bg-[#101c40] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-slate-900">Loan Term</span>
                  <span className="text-lg font-black text-[#ea2e33]">60 Months</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-slate-600">24m</button>
                  <button className="py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-slate-600">36m</button>
                  <button className="py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-slate-600">48m</button>
                  <button className="py-2.5 bg-[#ea2e33] rounded-lg text-sm font-semibold text-white shadow-md">60m</button>
                </div>
              </div>

              <div>
                <span className="text-sm font-bold text-gray-500 block mb-3">Interest Rate (%)</span>
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg flex items-center">
                  <input suppressHydrationWarning type="text" value="4.99" readOnly className="w-full text-slate-900 font-semibold focus:outline-none" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[350px] bg-white rounded-3xl p-8 shadow-xl text-center flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Monthly Payment</span>
              <div className="text-4xl font-black text-[#101c40] tracking-tight mb-4">NRP 45,030</div>
              <p className="text-[10px] text-gray-400 leading-relaxed max-w-[200px] mb-8">
                Price excludes tax, title, and registration fees. Subject to credit approval.
              </p>
              <button className="w-full bg-[#101c40] hover:bg-[#1a2b5e] text-white font-bold py-4 rounded-xl transition-all shadow-lg">
                Get Pre-Approved
              </button>
            </div>
          </div>
        </section>
        */}

      </main>

      <Footer />

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-4 text-white hover:text-gray-300 transition-colors z-[110]"
          >
            <ChevronRight className="w-8 h-8 rotate-180" /> {/* Using Chevron as a quick back button */}
            <span className="sr-only">Close</span>
          </button>

          <div className="relative w-full h-full flex items-center justify-center overflow-auto px-2">
            <div className="relative w-full aspect-video sm:aspect-auto sm:h-[80vh] max-w-7xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 mt-12 sm:mt-0">
              <Image
                src={currentImages[activeIndex]}
                alt="Full Size View"
                fill
                className="object-contain" // Contain so car never gets cropped in lightbox
                priority
              />
            </div>
            {/* Hint for mobile users */}
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold uppercase tracking-widest sm:hidden">Pinch to Zoom</p>
          </div>
        </div>
      )}
    </div>
  );
}
