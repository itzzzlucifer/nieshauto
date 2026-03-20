import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full relative h-[450px] sm:h-[500px] overflow-hidden group">
      <Image
        src="/Lingbox-Z/lingbox_3.webp"
        alt="Lingbox Z Banner"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-1000"
        priority
      />
      {/* Dynamic Gradient: Center on mobile, Right-to-Left on desktop */}
      <div className="absolute inset-0 bg-black/50 sm:bg-transparent sm:bg-gradient-to-l sm:from-black/70 sm:via-black/40 sm:to-transparent" />
      
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-xl sm:ml-auto w-full text-center sm:text-left sm:mr-4 md:mr-12">
          <div className="inline-block sm:hidden bg-[#ea2e33] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 mx-auto">
            Experience
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Experience the Future of <span className="text-[#ea2e33] sm:text-white">Urban Mobility</span>
          </h2>
          <p className="text-gray-200 text-lg sm:text-xl mb-10 max-w-md mx-auto sm:mx-0 border-l-4 border-[#ea2e33] pl-4 sm:pl-6">
            Discover a new standard of efficiency and comfort with the all-new Jinpeng Lingbox-Z.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link href="/inventory" className="inline-block bg-[#ea2e33] hover:bg-[#d8272c] text-white px-10 py-4 rounded-xl font-bold transition-all w-fit shadow-xl shadow-[#ea2e33]/30 hover:scale-105">
              Explore Inventory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
