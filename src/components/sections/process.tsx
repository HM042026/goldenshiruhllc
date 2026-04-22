import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "Deep-dive analysis of your account health, organic ranking, and competitor positioning.",
  },
  {
    number: "02",
    title: "The Growth Blueprint",
    description: "Tailored category-specific roadmap for SEO, PPC, and inventory optimization.",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description: "Full execution of brand assets, keyword indexing, and high-performance ad campaigns.",
  },
  {
    number: "04",
    title: "Scale to 7+ Figures",
    description: "Weekly recursive optimization, reporting, and revenue-focused scaling strategy.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-20 sm:py-32 lg:py-40 bg-gray-50/50 overflow-hidden">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${10 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-brand h-full"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>
      
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-6 sm:px-10 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-6">
          <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
            Our Method
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
          </div>
          <h2 
            className="text-gray-900 font-heading tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
          >
            The Roadmap to <span className="italic">Market Dominance</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            We've refined a repeatable four-stage blueprint that turns stagnant Amazon listings into revenue-generating assets.
          </p>
        </div>

        {/* Roadmap Visual */}
        <div className="relative mb-20 sm:mb-32">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-0.5 bg-gradient-to-r from-brand/5 via-brand/30 to-brand/5" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Visual indicator */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-[2rem] bg-white shadow-xl flex items-center justify-center mb-10 border border-gray-100 group-hover:border-brand/50 transition-all duration-500 group-hover:shadow-brand/5">
                  <span className="text-2xl sm:text-3xl font-black text-brand font-heading tracking-tighter">{step.number}</span>
                  
                  {/* Ripple effect */}
                  <div className="absolute -inset-4 bg-brand/5 rounded-[2.5rem] scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading tracking-tight">{step.title}</h3>
                    {idx < steps.length - 1 && (
                      <ChevronRight className="w-5 h-5 text-brand/20 hidden lg:block group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed md:max-w-[240px]">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet indicator */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 sm:left-10 top-20 h-16 w-px bg-brand/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Proofing */}
        <div className="backdrop-blur-xl bg-white/60 border border-white p-8 sm:p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid md:grid-cols-12 gap-10 lg:gap-20 items-center relative z-10">
            <div className="md:col-span-8 space-y-8">
              <h3 
                className="text-gray-900 font-heading tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 600 }}
              >
                Data-Driven Precision at <span className="italic text-brand">Every Step</span>
              </h3>
              <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
                Most agencies guess. We analyze. Our process is backed by real-time Amazon market data, ensuring every bid, every keyword, and every design choice is optimized for maximum conversion and contribution margin.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-center justify-center p-8 sm:p-10 rounded-[2.5rem] bg-[#1a2131] text-white shadow-2xl group transition-transform hover:scale-[1.02] duration-500">
              <p className="text-4xl sm:text-5xl font-black font-heading tracking-tighter text-brand">90 Days</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mt-3 text-center">Average Velocity Turnaround</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
