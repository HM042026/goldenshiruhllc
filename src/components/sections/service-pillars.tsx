"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Layout, Megaphone, Search, Settings } from "lucide-react";

const pillars = [
  {
    icon: Layout,
    title: "Marketplace Launch & Strategy",
    summary: "Establish a bulletproof foundation for your brand.",
    included: [
      "Competitive Gap Analysis",
      "Brand Registry Onboarding",
      "Global Category Strategy",
      "Initial Store Architecture",
    ],
  },
  {
    icon: Search,
    title: "Algorithm-First Optimization",
    summary: "Rank where high-intent shoppers are searching.",
    included: [
      "Proprietary Keyword Indexing",
      "A+ Content Design & Strategy",
      "Mobile-First Copywriting",
      "Image/Video Asset Direction",
    ],
  },
  {
    icon: Megaphone,
    title: "Performance Advertising",
    summary: "Aggressive growth without wasting budget.",
    included: [
      "Full PPC Account Restructuring",
      "Bid Management & Dayparting",
      "Share of Voice (SOV) Strategy",
      "Dsp & Video Ad Integration",
    ],
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    summary: "Total account safety and logic.",
    included: [
      "Case Management & Escalation",
      "Inventory Forecasting (FBA/FBM)",
      "Account Health Monitoring",
      "Compliance Audit (TOS Safety)",
    ],
  },
];

export default function ServicePillars() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Detailed Content */}
          <div className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-4">
              <h2 className="text-brand font-bold uppercase tracking-widest text-sm">The 360° Flywheel</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-heading leading-tight">
                Our Four Pillars of <br />
                <span className="text-brand">Account Dominance.</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We don't pick and choose. Successful Amazon scaling requires simultaneous excellence across these four domains. Our team manages the entire ecosystem so you can focus on building your brand.
              </p>
            </div>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <div key={pillar.title} className="group p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all">
                       <pillar.icon size={28} />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{pillar.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{pillar.summary}</p>
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {pillar.included.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs font-medium text-gray-600">
                             <CheckCircle2 className="text-brand w-4 h-4 shrink-0" />
                             {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Illustration / Data Card */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="sticky top-40 p-12 bg-gray-900 rounded-[3rem] text-white shadow-2xl overflow-hidden group">
               {/* Background Blur accent */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
               
               <div className="relative z-10 space-y-10">
                  <div className="space-y-2">
                    <span className="text-brand font-bold text-xs uppercase tracking-[0.2em]">Service Standard</span>
                    <h4 className="text-3xl font-black font-heading leading-tight italic">
                      "We manage the logic, <br />
                      You own the growth."
                    </h4>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                       <h5 className="font-bold text-sm mb-2">Weekly Performance Audits</h5>
                       <p className="text-xs text-white/60 leading-relaxed">Comprehensive reporting across TACOS, ROAS, and Organic Ranking velocity.</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                       <h5 className="font-bold text-sm mb-2">Strategic FBA Forecasting</h5>
                       <p className="text-xs text-white/60 leading-relaxed">Advanced inventory modeling to prevent stockouts and protect prime-badge status.</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                       <h5 className="font-bold text-sm mb-2">24/7 Global Monitoring</h5>
                       <p className="text-xs text-white/60 leading-relaxed">Constant account health monitoring and rapid case resolution.</p>
                    </div>
                  </div>

                  <div className="pt-8 flex items-center gap-4">
                    <div className="w-12 h-px bg-white/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Elite Amazon Partnership</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
