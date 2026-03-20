import Image from "next/image";

export default function Brands() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          Exclusive Authorized Partner
        </span>
        <div className="h-8 w-px bg-gray-200 hidden md:block" />
        <div className="relative w-64 h-24 grayscale hover:grayscale-0 transition-all duration-500">
          <Image 
            src="/jinpeng_logo.jpg" 
            alt="Jinpeng Motors" 
            fill 
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
