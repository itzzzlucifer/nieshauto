"use client";

import { useState, useTransition, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, Calendar, MapPin, Star, Home as HomeIcon } from "lucide-react";
import { sendTestDriveEmail } from "../actions/emailActions";

type DayData = {
  shortName: string;
  fullName: string;
  dateNum: number;
  fullDateString: string;
};

export default function TestDrivePage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("niesh_auto");
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [nextDates, setNextDates] = useState<DayData[]>([]);

  const times = ["09:00 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

  useEffect(() => {
    const dates: DayData[] = [];
    const today = new Date();
    const dayNames = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        dates.push({
            shortName: dayNames[d.getDay()],
            fullName: fullDayNames[d.getDay()],
            dateNum: d.getDate(),
            fullDateString: `${fullDayNames[d.getDay()]}, ${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
        });
    }
    setNextDates(dates);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime || nextDates.length === 0) {
      alert("Please select a date and time for your test drive.");
      return;
    }
    
    startTransition(async () => {
      const selectedDateString = nextDates[selectedDay].fullDateString;
      
      const result = await sendTestDriveEmail({
        ...formData,
        selectedDate: selectedDateString,
        selectedTime,
        selectedLocation
      });
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("Failed to confirm booking: " + result.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col pt-[125px] bg-[#f8f9fa]">
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
            <div className={`flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start ${isSubmitted ? 'opacity-50' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-[#101c40] text-white flex items-center justify-center font-bold text-sm">1</div>
              <span className="text-xs font-bold tracking-wider text-slate-900 uppercase">Select Model</span>
            </div>
            <div className="h-px bg-gray-200 flex-1 mx-6 hidden sm:block" />
            <div className={`flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start ${isSubmitted ? 'opacity-50' : ''}`}>
              <div className={`w-8 h-8 rounded-full ${!isSubmitted ? 'bg-[#101c40] text-white' : 'bg-gray-100 text-slate-500'} flex items-center justify-center font-bold text-sm`}>2</div>
              <span className={`text-xs font-bold tracking-wider uppercase ${!isSubmitted ? 'text-slate-900' : 'text-slate-500'}`}>Time & Place</span>
            </div>
            <div className="h-px bg-gray-200 flex-1 mx-6 hidden sm:block" />
            <div className={`flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start ${!isSubmitted ? 'opacity-50' : ''}`}>
              <div className={`w-8 h-8 rounded-full ${isSubmitted ? 'bg-[#101c40] text-white border-0' : 'bg-gray-100 text-slate-500 border border-gray-200'} flex items-center justify-center font-bold text-sm`}>3</div>
              <span className={`text-xs font-bold tracking-wider uppercase ${isSubmitted ? 'text-slate-900' : 'text-slate-500'}`}>Finalize</span>
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
                  src="/Lingbox-Z/green/front_45.webp" 
                  alt="Jinpeng Lingbox-Z" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#ea2e33] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">Full Electric</div>
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Jinpeng Lingbox-Z</h3>
                  <p className="text-sm text-gray-500">Starting at NRP 31,60,000</p>
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
            <div className={`lg:col-span-2 space-y-8 ${isSubmitted ? 'opacity-50 pointer-events-none' : ''}`}>
              
              {/* Date & Time */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-6 h-6 text-[#ea2e33]" />
                  <h2 className="text-2xl font-bold text-slate-900">Choose Date & Time</h2>
                </div>

                <div className="mb-8 min-h-[80px]">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select Day</span>
                  <div className="flex justify-between">
                    {nextDates.length === 0 ? (
                      <div className="flex justify-between w-full opacity-50">
                        {/* Loading Skeleton */}
                        {[1,2,3,4,5,6,7].map(i => (
                          <div key={i} className="flex flex-col items-center gap-2">
                             <div className="h-3 w-6 bg-gray-200 rounded animate-pulse" />
                             <div className="w-10 h-10 rounded-xl bg-gray-200 animate-pulse" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      nextDates.map((dayObj, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <span className="text-[10px] font-bold text-gray-500">{dayObj.shortName}</span>
                          <button 
                            onClick={() => setSelectedDay(i)}
                            type="button"
                            className={`w-10 h-10 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
                            selectedDay === i 
                              ? "bg-[#ea2e33] text-white shadow-md shadow-[#ea2e33]/20" 
                              : "text-slate-900 border border-transparent hover:border-gray-200 hover:bg-gray-50"
                          }`}>
                            {dayObj.dateNum}
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select Time</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {times.map((time, i) => (
                      <button 
                        key={i} 
                        onClick={() => setSelectedTime(time)}
                        type="button"
                        className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                        selectedTime === time
                          ? "border-[#ea2e33] text-[#ea2e33] bg-red-50"
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
                    <button 
                      onClick={() => setSelectedLocation("niesh_auto")}
                      type="button"
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all text-slate-900 ${
                        selectedLocation === "niesh_auto" ? "border-[#ea2e33] bg-red-50/30" : "border-gray-200 hover:border-gray-300"
                      }`}>
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
              
              {/* Form or Success Box */}
              {isSubmitted ? (
                <div className="bg-[#101c40] rounded-3xl p-8 shadow-xl text-center flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your test drive is scheduled for <strong className="text-white">{nextDates[selectedDay]?.fullDateString} at {selectedTime}</strong>.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", mobile: "" });
                      setSelectedTime("");
                    }}
                    type="button"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <div className="bg-[#101c40] rounded-3xl p-8 shadow-xl">
                  <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Full Name</label>
                      <input 
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Johnathan Doe" 
                        className="w-full bg-[#1a2b5e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ea2e33] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input 
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com" 
                        className="w-full bg-[#1a2b5e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ea2e33] transition-colors" 
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Mobile Phone</label>
                      <input 
                        type="tel"
                        name="tel"
                        autoComplete="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+977-1234567890" 
                        className="w-full bg-[#1a2b5e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ea2e33] transition-colors" 
                      />
                    </div>

                    <button disabled={isPending} type="submit" className="w-full bg-white text-[#ea2e33] font-bold text-sm tracking-wider uppercase py-4 rounded-xl hover:bg-gray-100 transition-colors mt-4 disabled:opacity-50">
                      {isPending ? "Confirming..." : "Confirm Booking"}
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-4">
                      By clicking confirm, you agree to our privacy policy and VIP service terms.
                    </p>
                  </form>
                </div>
              )}

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
              <div className="bg-[#101c40] rounded-3xl p-6 flex items-center gap-4 text-white hover:bg-[#1a2b5e] transition-colors cursor-pointer" onClick={() => alert("Home Test Drive feature coming soon!")}>
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
