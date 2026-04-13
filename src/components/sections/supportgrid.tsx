"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, Calendar, MessageSquare, HelpCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

const supportChannels = [
  {
    icon: Mail,
    title: "Email Support",
    detail: "support@goldenshiruhllc.com",
    action: "Send an Email",
    href: "mailto:support@goldenshiruhllc.com",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Phone,
    title: "Consultation Call",
    detail: "+1 213-816-2229",
    action: "Call for Audit",
    href: "tel:+12138162229",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Calendar,
    title: "Booking Desk",
    detail: "Available 24/7",
    action: "Schedule Meeting",
    href: "#", // Placeholder for Calendly
    color: "bg-amber-50 text-amber-600",
  },
];

const faqItems = [
  {
    q: "What is your typical onboarding time?",
    a: "Most global brands are fully onboarded and optimized within 10-14 business days.",
  },
  {
    q: "Do you handle UAE and UK marketplaces?",
    a: "Yes, we handle worldwide Amazon marketplaces including NA, EU, and MENA regions.",
  },
  {
    q: "What metrics do you prioritize?",
    a: "While ROAS is important, we prioritize Total Sales Growth (TACOS) and Account Health.",
  },
];

export default function SupportGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Quick Support Channels */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-4">
              <h2 className="text-brand font-bold uppercase tracking-widest text-sm">Direct Access</h2>
              <h3 className="text-3xl font-black text-gray-900 font-heading">Global Support Network.</h3>
              <p className="text-gray-500 max-w-md">
                Our team is strategically distributed to ensure your brand receives 24/7 marketplace monitoring and support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {supportChannels.map((channel, i) => (
                <Link 
                  key={channel.title} 
                  href={channel.href}
                  className="group flex items-center justify-between p-6 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl hover:border-brand/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${channel.color} flex items-center justify-center`}>
                      <channel.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{channel.title}</h4>
                      <p className="text-sm text-gray-500">{channel.detail}</p>
                    </div>
                  </div>
                  <div className="text-brand font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    {channel.action}
                    <MessageSquare size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick FAQ / Intelligence Grid */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-4">
              <h2 className="text-brand font-bold uppercase tracking-widest text-sm">Instant Intelligence</h2>
              <h3 className="text-3xl font-black text-gray-900 font-heading">Common Queries.</h3>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors rounded-2xl group">
                  <div className="flex gap-4">
                    <HelpCircle className="text-brand shrink-0 mt-1" size={20} />
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 group-hover:text-brand transition-colors">{item.q}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Architectural decoration (Small) */}
            <div className="p-8 border-2 border-dashed border-brand/10 rounded-3xl relative">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white shrink-0">
                    <TrendingUp size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900 leading-none">Instant Performance Review</h4>
                    <p className="text-xs text-gray-500 mt-2 font-medium">Schedule your technical Amazon performance review in less than 60 seconds.</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
