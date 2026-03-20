import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "About Us | Niesh Automobile",
  description: "Learn more about Niesh Automobile Pvt. Ltd., the exclusive authorized partner for Jinpeng in Nepal.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col pt-[81px] bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* About Header */}
        <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-[#ea2e33] font-bold tracking-widest uppercase text-sm">About Us</span>
                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                  Pioneering Premium Urban Mobility
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  Niesh Automobile Pvt. Ltd. is proud to be the exclusive authorized partner for Jinpeng vehicles in Nepal. We are committed to revolutionizing modern transportation by delivering innovative, eco-friendly, and highly efficient electric vehicles to our customers.
                </p>
                <div className="pt-4 flex gap-8">
                  <div>
                    <h4 className="text-3xl font-black text-slate-900">100%</h4>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Electric</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-slate-900">#1</h4>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Customer Priority</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Lingbox-Z/lingbox_2.jpeg" 
                  alt="Jinpeng Lingbox Showcase" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-600 text-lg">
                Have questions about the Jinpeng Lingbox-Z? Our dedicated support team is ready to assist you with inquiries, test drives, and financing options.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-orange-50 p-3 rounded-full text-[#ea2e33]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">+86-18621849140</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-orange-50 p-3 rounded-full text-[#ea2e33]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">sales29@electric-tricycle.com</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-orange-50 p-3 rounded-full text-[#ea2e33]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600 text-sm">To The East of Tunshi River, West of Tunqing Road, Xuzhou Industrial Park</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-orange-50 p-3 rounded-full text-[#ea2e33]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">Sunday - Friday<br/>9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Full Name</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all" placeholder="John Doe" title="Full Name input" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                        <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all" placeholder="john@example.com" title="Email input" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Subject</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all" placeholder="How can we help?" title="Subject input" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Message</label>
                      <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all resize-none" placeholder="Write your message here..." title="Message input"></textarea>
                    </div>

                    <button type="button" className="w-full bg-[#ea2e33] hover:bg-[#d8272c] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#ea2e33]/30">
                      Send Message
                    </button>
                  </form>
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
