import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full relative h-[300px] sm:h-[400px] overflow-hidden group">
      <Image
        src="/Lingbox-Z/lingbox_3.jpeg"
        alt="Lingbox Z Banner"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-1000"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-lg ml-auto w-full mr-4 md:mr-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight text-left">
            Experience the Future of Urban Mobility
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-md border-l-4 border-[#ea2e33] pl-4 text-left">
            Discover a new standard of efficiency and comfort with the all-new Jinpeng Lingbox-Z.
          </p>
          <div className="text-left">
              <Link href="/inventory" className="inline-block bg-[#ea2e33] hover:bg-[#d8272c] text-white px-8 py-4 rounded-xl font-bold transition-all w-fit shadow-lg shadow-[#ea2e33]/30">
                Explore Inventory
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
