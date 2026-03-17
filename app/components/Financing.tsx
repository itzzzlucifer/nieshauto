import { Landmark, Clock, ShieldCheck } from "lucide-react";

export default function Financing() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-[#181a25] rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden shadow-2xl">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e2338] to-transparent pointer-events-none" />

        {/* Left Content */}
        <div className="flex-1 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1]">
            Flexible Financing
            <br />
            for Your Dream Car
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Own your next Jinpeng with competitive rates starting from 2.9% APR. Quick approval and tailored monthly plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white hover:bg-gray-100 text-[#ea2e33] px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-white/5">
              Calculate Payments
            </button>
            <button className="bg-[#2a2e41] hover:bg-[#34384d] text-white px-8 py-4 rounded-xl font-semibold transition-colors border border-white/5">
              Get Pre-Approved
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="w-full lg:w-[450px] bg-white/5 border border-white/10 rounded-3xl p-8 relative z-10 backdrop-blur-xl">
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Interest Rate</p>
                <p className="text-xl font-bold text-white">2.9% Fixed APR</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Terms Up To</p>
                <p className="text-xl font-bold text-white">84 Months</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Protection</p>
                <p className="text-xl font-bold text-white">Full GAP Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
