import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">

          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            <span className="text-[#101c40] block">Experience</span>
            <span className="text-[#101c40] block">Premium</span>
            <span className="text-[#ea2e33] block mt-1">Mobility</span>
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
            Discover the finest selection of Lingbox vehicles tailored to your lifestyle and future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="/inventory" className="w-full sm:w-auto bg-[#101c40] hover:bg-[#1a2b5e] text-center text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-[#101c40]/20">
              Explore Inventory
            </Link>
            <button className="w-full sm:w-auto bg-white border-2 border-gray-100 hover:border-gray-200 text-slate-800 px-8 py-4 rounded-xl font-semibold transition-all hover:bg-gray-50">
              View Offers
            </button>
          </div>
        </div>

        {/* Right Content / Image */}
        <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden bg-gradient-to-tr from-slate-200 to-slate-100 p-2 shadow-2xl">
          {/* We'll use a placeholder image for the BYD given we don't have the exact cutout */}
          <div className="absolute inset-0 w-full h-full object-cover">
            <Image 
              src="/Lingbox-Z/lingbox1.webp" 
              alt="Lingbox Z" 
              fill 
              className="object-cover rounded-[1.5rem]"
              priority
            />
            {/* Added a subtle overlay for better reading of the glass widget */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-[1.5rem]" />
          </div>

          {/* Featured Car Widget */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-10 lg:left-10 lg:right-10 glass-panel rounded-xl sm:rounded-2xl p-4 flex flex-row items-end justify-between gap-2">
            <div>
              <p className="text-gray-300 text-[10px] sm:text-sm font-medium mb-0.5 sm:mb-1 uppercase tracking-wider">Featured</p>
              <h3 className="text-white text-base sm:text-2xl font-bold leading-tight">Lingbox Z</h3>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-[10px] sm:text-sm font-medium mb-0.5 sm:mb-1 uppercase tracking-wider">Starting at</p>
              <p className="text-white text-base sm:text-2xl font-bold leading-tight">NRP20,00,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
