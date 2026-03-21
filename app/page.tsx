import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Banner from "./components/Banner";
import LifestyleCarousel from "./components/LifestyleCarousel";
import LatestInventory from "./components/LatestInventory";
import Financing from "./components/Financing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col pt-[125px] relative bg-[#fcfcfc]">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Banner />
        <LifestyleCarousel />
        <LatestInventory />
        {/* <Financing /> */}
      </main>

      <Footer />
    </div>
  );
}
