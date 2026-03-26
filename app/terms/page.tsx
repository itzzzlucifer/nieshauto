import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#ea2e33] border border-gray-100 shadow-sm">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#101c40] tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 font-medium">Last updated: March 20, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">2. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content and information on this website including, but not limited to, designs, logos, text, graphics, and images, are the property of Niesh Automobile Pvt. Ltd. and are protected by applicable intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">3. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Niesh Automobile Pvt. Ltd. and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">4. User Content</h2>
            <p className="text-gray-600 leading-relaxed">
              If the site allows users to post content, you agree not to post any material that is offensive, illegal, or infringes on the rights of others. We reserve the right to remove any content for any reason at our discretion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">5. External Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or controlled by Niesh Automobile Pvt. Ltd. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">6. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">7. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#101c40]">8. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 mt-8">
            <p className="text-sm font-medium text-gray-500">
              For any questions regarding these terms, please reach out to us at <span className="text-[#ea2e33] font-bold">legal@nieshautomobile.com</span>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
