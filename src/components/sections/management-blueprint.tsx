"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, BarChart4, ClipboardList, Zap, Bell, Target } from "lucide-react";

const details = [
  {
    icon: ClipboardList,
    title: "Daily Operational Management",
    description: "Our team monitors your Seller Central account 24/7. We handle case log management, brand registry issues, and buy box suppression alerts before they impact your revenue.",
    delay: 100,
  },
  {
    icon: BarChart4,
    title: "Aggressive PPC Scaling",
    description: "PPC isn't just about ads; it's about share of voice. We execute advanced bidding strategies across Sponsored Products, Brands, and Video to dominate your category's prime real estate.",
    delay: 200,
  },
  {
    icon: Zap,
    title: "Algorithm-First SEO Indexing",
    description: "Amazon's A10 algorithm is constantly evolving. We perform weekly indexing audits to ensure your products are appearing for high-intent, long-tail keywords that competitors miss.",
    delay: 300,
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Brand Integrity",
    description: "Multiple layers of verification ensure your listings are 100% compliant with Amazon TOS. We protect you from malicious competitor attacks and shadow-bans.",
    delay: 400,
  },
];

export default function ManagementBlueprint() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--brand)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20 items-end">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-x-2 text-brand text-[10px] font-bold tracking-[0.3em] uppercase">
              <span className="w-8 h-px bg-brand" />
              The Scaling Blueprint
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 font-heading leading-tight italic">
              Elite Management. <br />
              <span className="text-brand">Zero Compromise.</span>
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              We take over every tactical lever of your Amazon account. Our mission is To turn your marketplace presence into a highly-tuned, predictable growth engine.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {details.map((detail, i) => (
            <div 
              key={detail.title}
              className={`group p-10 bg-gray-50 border border-gray-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:border-brand/20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${detail.delay}ms` }}
            >
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <detail.icon size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 font-heading">{detail.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {detail.description}
                  </p>
                </div>
                
                {/* Secondary detail list */}
                <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
                   <div className="flex items-center gap-2">
                      <Bell size={16} className="text-brand/40" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Real-time alerts</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Target size={16} className="text-brand/40" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">KPI Driven</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Detailed Insight */}
        <div className="mt-20 p-12 bg-gray-900 rounded-[3rem] text-white overflow-hidden relative group">
           <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3" />
           
           <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                 <h4 className="text-3xl font-black font-heading leading-tight">
                   "We manage the logic, <br />
                   <span className="text-brand italic">You own the scale.</span>"
                 </h4>
                 <p className="text-white/60 text-lg max-w-lg leading-relaxed font-medium">
                   Our account management service removes the friction of daily marketplace operations, allowing you to focus on product development and overall brand vision.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Active Nodes", val: "2,400+" },
                   { label: "Alert Latency", val: "< 5ms" },
                   { label: "TOS Integrity", val: "100%" },
                   { label: "Scaling Factor", val: "3.2x" },
                 ].map(s => (
                   <div key={s.label} className="p-6 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-black font-heading text-brand">{s.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">{s.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
