import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, Calendar, MapPin, Star, Home as HomeIcon } from "lucide-react";

export default function TestDrivePage() {
  return (
    <div className="min-h-screen flex flex-col pt-[88px] bg-[#f8f9fa]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image 
            src="/car_interior.png" 
            alt="Luxury Car Interior" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-start justify-center px-12 lg:px-24">
            <span className="text-[#ea2e33] font-bold text-xs tracking-widest uppercase mb-4">The Experience</span>
            <h1 className="text-white text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-4">
              Experience<br />Absolute Power
            </h1>
            <p className="text-gray-300 max-w-md text-sm font-medium">
              Book your exclusive test drive today. Feel the precision engineering and unparalleled comfort that defines the Elite standard.
            </p>
          </div>
        </section>

        {/* Step Indicator */}
        <div className="max-w-4xl mx-auto -mt-10 relative z-10 px-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row items-center justify-between border border-gray-100 gap-4 sm:gap-0">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-full bg-[#101c40] text-white flex items-center justify-center font-bold text-sm">1</div>
              <span className="text-xs font-bold tracking-wider text-slate-900 uppercase">Select Model</span>
            </div>
            <div className="h-px bg-gray-200 flex-1 mx-6 hidden sm:block" />
            <div className="flex items-center gap-3 opacity-50 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-full bg-gray-100 text-slate-500 flex items-center justify-center font-bold text-sm border border-gray-200">2</div>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">Time & Place</span>
            </div>
            <div className="h-px bg-gray-200 flex-1 mx-6 hidden sm:block" />
            <div className="flex items-center gap-3 opacity-50 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-full bg-gray-100 text-slate-500 flex items-center justify-center font-bold text-sm border border-gray-200">3</div>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">Finalize</span>
            </div>
          </div>
        </div>

        {/* Vehicle Selection */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Select Your Vehicle</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Experience the future of smart urban mobility. Book your test drive for the Jinpeng Lingbox-Z today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left justify-center">
            {/* Vehicle 1 (Selected) */}
            <div className="group cursor-pointer">
              <div className="relative h-56 rounded-2xl overflow-hidden border-2 border-[#ea2e33] transition-all mb-4 shadow-lg shadow-[#ea2e33]/10">
                <Image 
                  src="/Lingbox-Z/lingbox1.webp" 
                  alt="Jinpeng Lingbox-Z" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#ea2e33] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">Full Electric</div>
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Jinpeng Lingbox-Z</h3>
                  <p className="text-sm text-gray-500">Starting at NRP 20,00,000</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#ea2e33] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details and Form Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column (Date & Location) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Date & Time */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-6 h-6 text-[#ea2e33]" />
                  <h2 className="text-2xl font-bold text-slate-900">Choose Date & Time</h2>
                </div>

                <div className="mb-8">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select Day</span>
                  <div className="flex justify-between">
                    {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((day, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <span className="text-xs font-bold text-gray-400">{day}</span>
                        <button className={`w-10 h-10 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
                          i === 2 
                            ? "bg-[#ea2e33] text-white shadow-md shadow-[#ea2e33]/20" 
                            : i > 3 
                              ? "text-gray-300 cursor-not-allowed" 
                              : "text-slate-900 hover:bg-gray-50"
                        }`}>
                          {12 + i}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select Time</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["09:00 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"].map((time, i) => (
                      <button key={i} className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                        time === "10:30 AM"
                          ? "border-[#ea2e33] text-[#ea2e33] bg-red-50"
                          : i === 5
                            ? "border-gray-100 text-gray-300 cursor-not-allowed"
                            : "border-gray-200 text-slate-900 hover:border-gray-300"
                      }`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-[#ea2e33]" />
                  <h2 className="text-2xl font-bold text-slate-900">Preferred Location</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <button className="w-full text-left p-6 rounded-2xl border-2 border-[#ea2e33] bg-red-50/30 transition-all text-slate-900">
                      <h4 className="font-bold mb-1">Niesh Automobile</h4>
                      <p className="text-sm text-gray-500 mb-3">Baneshwor, Kathmandu<br/>Nepal</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Open until 6:00 PM</span>
                      </div>
                    </button>
                  </div>
                  
                  <div className="w-full md:w-1/2 h-48 md:h-auto relative rounded-2xl overflow-hidden bg-gray-100">
                    <Image 
                      src="/map_location.png" 
                      alt="Map location" 
                      fill 
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-[#ea2e33] drop-shadow-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="space-y-6">
              
              {/* Form Box */}
              <div className="bg-[#101c40] rounded-3xl p-8 shadow-xl">
                <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Full Name</label>
                    <input type="text" placeholder="Johnathan Doe" className="w-full bg-[#1a2b5e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ea2e33] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-[#1a2b5e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ea2e33] transition-colors" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Mobile Phone</label>
                    <input type="tel" placeholder="+977-1234567890" className="w-full bg-[#1a2b5e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ea2e33] transition-colors" />
                  </div>

                  <button type="button" className="w-full bg-white text-[#ea2e33] font-bold text-sm tracking-wider uppercase py-4 rounded-xl hover:bg-gray-100 transition-colors mt-4">
                    Confirm Booking
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-4">
                    By clicking confirm, you agree to our privacy policy and VIP service terms.
                  </p>
                </form>
              </div>

              {/* VIP Box */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-[#ea2e33]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Elite VIP Treatment</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Every test drive includes a personalized walkthrough with a product specialist and complimentary artisan refreshments.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
                     <span className="text-gray-500 font-bold text-sm">MS</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 italic font-medium mb-0.5">"The most refined booking experience I've ever had."</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mark S., Elite Member</p>
                  </div>
                </div>
              </div>

              {/* Home Test Drive Banner */}
              <div className="bg-[#101c40] rounded-3xl p-6 flex items-center gap-4 text-white">
                <HomeIcon className="w-8 h-8 text-[#ea2e33]" />
                <div>
                  <h4 className="font-bold text-sm mb-0.5">Home Test Drive</h4>
                  <p className="text-xs text-gray-400">We bring the vehicle to your doorstep. <span className="text-[#ea2e33] underline cursor-pointer">Learn more</span></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
