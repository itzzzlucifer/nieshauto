import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#ea2e33] border border-gray-100 shadow-sm">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#101c40] tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 font-medium">Last updated: March 20, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At Niesh Automobile Pvt. Ltd., we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">2. Data Collection</h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">3. How We Use Your Data</h2>
            <p className="text-gray-600 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To provide you with information about our vehicles.</li>
              <li>To answer your inquiries via the contact forms.</li>
              <li>To improve our website performance and user experience.</li>
              <li>To send you our newsletter (if you have opted in).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">5. Your Legal Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or object to processing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">6. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 mt-4">
              <p className="font-bold text-[#101c40]">Niesh Automobile Pvt. Ltd.</p>
              <p className="text-gray-600">Email: info@nieshauto.com</p>
              <p className="text-gray-600">Nepal</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
