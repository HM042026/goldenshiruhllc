import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 lg:py-40 bg-white overflow-hidden">
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
        
        <div className="relative rounded-[3rem] bg-[#0d121f] p-8 sm:p-16 md:p-24 overflow-hidden text-center border border-white/5 shadow-2xl">
          {/* Background visuals */}
          <div className="absolute inset-0 bg-brand/25 blur-[160px] rounded-full translate-y-1/2 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/15 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/10 blur-[130px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-10 sm:space-y-14">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-x-3 text-brand-light text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
                <span className="w-8 sm:w-12 h-px bg-brand/30" />
                Limited Monthly Slots
                <span className="w-8 sm:w-12 h-px bg-brand/30" />
              </div>
              <h2 
                className="text-white font-heading tracking-tight"
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: "1.1", fontWeight: 600 }}
              >
                Ready to Build Your <span className="italic text-brand">Amazon Empire?</span>
              </h2>
              <p className="text-white/50 text-sm sm:text-base lg:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
                Don't guess. Get a data-backed growth blueprint. Our experts will analyze your account, expose revenue leaks, and show you exactly how to double your current momentum.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="mailto:support@goldenshiruhllc.com"
                className="h-12 sm:h-14 px-10 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold text-sm sm:text-base flex items-center justify-center transition-all duration-300 shadow-xl shadow-brand/20 w-full sm:w-auto group active:scale-95"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-x-4">
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-900 bg-gray-800" />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] text-left leading-tight">
                  Joined by<br/>500+ Sellers
                </span>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-[9px] sm:text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
                100% Free • No Obligation • High Impact
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
