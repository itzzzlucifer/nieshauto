"use client";

import { useState, useTransition } from "react";
import { CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "../actions/emailActions";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    
    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send message: " + result.error);
      }
    });
  };

  if (isSubmitted) {
    return (
      <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100 overflow-hidden flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 mb-8 max-w-md">
          Thank you for reaching out, {formData.name}. Our team will get back to you at {formData.email} shortly.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          type="button"
          className="bg-gray-100 hover:bg-gray-200 text-slate-800 font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100 overflow-hidden">
      <div className="p-8 lg:p-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <input 
                type="text"
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all" 
                placeholder="John Doe" 
                title="Full Name input" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input 
                type="email"
                name="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all" 
                placeholder="john@example.com" 
                title="Email input" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Subject</label>
            <input 
              type="text"
              name="subject"
              autoComplete="off" 
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all" 
              placeholder="How can we help?" 
              title="Subject input" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Message</label>
            <textarea 
              rows={5} 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all resize-none" 
              placeholder="Write your message here..." 
              title="Message input"
            ></textarea>
          </div>

          <button disabled={isPending} type="submit" className="w-full bg-[#ea2e33] hover:bg-[#d8272c] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#ea2e33]/30 disabled:opacity-50">
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
