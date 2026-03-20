"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { sendNewsletterEmail } from "../actions/emailActions";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    startTransition(async () => {
      const result = await sendNewsletterEmail(email);
      if (result.success) {
        setIsSubscribed(true);
      } else {
        alert("Failed to subscribe: " + result.error);
      }
    });
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-100">
        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
        <span className="font-semibold">Subscribed successfully!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex">
      <input
        type="email"
        name="email"
        id="newsletter-email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="bg-gray-50 border border-gray-200 rounded-l-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#ea2e33]/20 focus:border-[#ea2e33] transition-all"
      />
      <button disabled={isPending} type="submit" className="bg-[#ea2e33] hover:bg-[#d6282d] text-white px-4 py-2.5 rounded-r-lg transition-colors flex items-center justify-center disabled:opacity-50">
        {isPending ? "..." : <Send className="w-4 h-4" />}
      </button>
    </form>
  );
}
