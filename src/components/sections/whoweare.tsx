"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Globe, TrendingUp, Users } from "lucide-react";

const principles = [
  {
    icon: Globe,
    title: "Global Marketplace Mastery",
    description: "We navigate the complexities of international Amazon marketplaces, from North America to UAE and Europe.",
  },
  {
    icon: TrendingUp,
    title: "Algorithm-First Growth",
    description: "Our strategies are built on deep understanding of the Amazon A10 algorithm and shopper psychology.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance & Safety",
    description: "We protect your brand with 100% adherence to Amazon TOS, ensuring long-term account sustainability.",
  },
  {
    icon: Users,
    title: "Partner-Centric Model",
    description: "We don't work for you; we work with you. Your success is our singular metric for performance.",
  },
];

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-4">
              <h2 className="text-brand font-bold uppercase tracking-widest text-sm">Who We Are</h2>
              <h3 
                className="font-black text-gray-900 font-heading leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                Architects of the <br />
                <span className="text-brand italic font-black">Amazon Future.</span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Goldenshiruhllc isn't just a management agency; we are a specialized ecosystem of data scientists, creative designers, and marketplace strategists. We founded our firm on the principle that Amazon growth shouldn't be a gamble—it should be a calculated, predictable outcome of elite research and execution.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {principles.map((p, i) => (
                <div key={p.title} className="space-y-2 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <p.icon size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900 group-hover:text-brand transition-colors">{p.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pl-13">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Accent */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="aspect-square rounded-3xl bg-gray-50 border border-gray-100 shadow-inner overflow-hidden flex items-center justify-center p-12">
              <div className="relative w-full h-full border-2 border-dashed border-brand/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                 {/* Decorative architectural circle */}
                 <div className="absolute inset-4 border border-brand/10 rounded-full" />
                 <div className="absolute inset-12 border-2 border-brand/5 rounded-full" />
                 <div className="w-24 h-24 bg-brand rounded-full blur-[80px] opacity-20" />
              </div>
              
              {/* Central high-impact stat */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-5xl sm:text-7xl font-black text-gray-900 font-heading tracking-tighter">10+</div>
                <div className="text-brand font-bold uppercase tracking-widest text-xs sm:text-sm mt-2">Years of Market Dominance</div>
                <p className="mt-6 text-sm text-gray-400 font-medium max-w-xs italic">
                  "Scaling brands is an art, but performance is a science. We master both."
                </p>
              </div>
            </div>

            {/* Floating glass cards */}
            <div className="absolute -bottom-6 -right-6 p-6 backdrop-blur-xl bg-white/90 border border-gray-100 shadow-2xl rounded-2xl max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Scale</span>
              </div>
              <p className="text-xs font-medium text-gray-600">Executing algorithm-first strategies for 500+ global partners.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
