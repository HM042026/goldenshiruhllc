import { CheckCircle2, XCircle, TrendingDown, Zap } from "lucide-react";

const pitfalls = [
  "Stagnant organic rankings despite high spend",
  "Skyrocketing ACoS eating into your margins",
  "Poor listing conversion and bounce rates",
  "Overwhelming Seller Central management",
];

const solutions = [
  "Precision A10 algorithm optimization",
  "Data-driven PPC with performance-first ROAS",
  "Conversion-first A+ content & Brand Stores",
  "Full-service, hands-off account management",
];

export default function ProblemSolution() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-white overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-24 items-start">
          
          {/* ── Left Side: The Problem ── */}
          <div className="space-y-10 sm:space-y-14 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-x-3 text-red-500 text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase">
                <span className="w-8 sm:w-12 h-px bg-red-200" />
                The Market Reality
              </div>
              <h2 
                className="text-gray-900 font-heading tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)", fontWeight: 600 }}
              >
                Most Amazon Brands Hit a <span className="italic text-red-500 underline decoration-red-200 underline-offset-8">Revenue Ceiling</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                You've built a great product, but the marketplace is getting noisier. Manual optimizations and "autopilot" PPC are no longer enough to win in today's cutthroat Amazon environment.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-red-500/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <ul className="space-y-6 relative z-10">
                {pitfalls.map((item, i) => (
                  <li key={i} className="flex items-start gap-x-5 group/item">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-red-500 group-hover/item:text-white transition-colors duration-300">
                      <XCircle className="w-4 h-4 text-red-500 group-hover/item:text-white" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 flex items-center gap-x-4 text-red-500/40">
                <TrendingDown className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Decreasing Efficiency & ROI</span>
              </div>
            </div>
          </div>

          {/* ── Right Side: The Solution ── */}
          <div className="relative group order-1 lg:order-2">
            {/* Background design elements */}
            <div className="absolute -inset-6 bg-brand/5 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
            
            <div className="relative rounded-[3rem] bg-[#0a0f1a] p-10 sm:p-14 lg:p-16 text-white shadow-2xl border border-white/5 overflow-hidden">
              {/* Green Glow Layer */}
              <div className="absolute inset-0 bg-brand/10 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10 space-y-10 sm:space-y-14">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-x-3 text-brand-light text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase">
                    <Zap className="w-4 h-4 fill-brand text-brand" />
                    The Goldenshiruh Solution
                  </div>
                  <h2 
                    className="font-heading tracking-tight leading-[1.1]"
                    style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)", fontWeight: 600 }}
                  >
                    The Strategic <span className="italic text-brand">Growth Engine</span>
                  </h2>
                </div>

                <ul className="space-y-8">
                  {solutions.map((item, i) => (
                    <li key={i} className="flex items-start gap-x-5 group/item">
                      <div className="w-7 h-7 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand transition-colors duration-300 shadow-lg shadow-brand/10">
                        <CheckCircle2 className="w-4 h-4 text-brand-light group-hover/item:text-white" />
                      </div>
                      <span className="font-semibold text-sm sm:text-base lg:text-lg text-white/90 group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/10">
                  <div className="inline-flex items-center gap-x-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1a] bg-gray-800" />
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white uppercase tracking-widest">A10 Algorithm Research</p>
                      <p className="text-xs text-white/40">Powering 500+ successful listings</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }} />
            </div>
            
            {/* Floating metrics badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block animate-bounce-slow">
              <div className="backdrop-blur-2xl bg-white/95 border border-gray-100 p-6 sm:p-8 rounded-[2rem] shadow-2xl space-y-2">
                <p className="text-[10px] font-bold text-brand uppercase tracking-[0.2em]">Performance Index</p>
                <div className="flex items-baseline gap-x-1">
                  <p className="text-4xl font-black text-gray-900 font-heading tracking-tighter">+42%</p>
                  <p className="text-sm font-bold text-gray-400">Avg</p>
                </div>
                <p className="text-[10px] text-gray-400 font-medium leading-none">CVR Increase Post-Launch</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
