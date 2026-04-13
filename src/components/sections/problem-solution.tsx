import { CheckCircle2, XCircle } from "lucide-react";

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
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── Left Side: The Problem ── */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase">
                The Problem
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                Most Amazon Brands Hit a <span className="text-red-500">Revenue Ceiling</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                You've built a great product, but the marketplace is getting noisier. Manual optimizations and "autopilot" PPC are no longer enough to win in 2024.
              </p>
            </div>

            <ul className="space-y-4">
              {pitfalls.map((item, i) => (
                <li key={i} className="flex items-start gap-x-3 text-gray-600 font-medium text-sm sm:text-base">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Side: The Solution ── */}
          <div className="relative group order-1 lg:order-2">
            {/* Background design elements */}
            <div className="absolute -inset-4 bg-brand/5 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            
            <div className="relative rounded-3xl backdrop-blur-sm bg-brand p-8 sm:p-10 md:p-12 text-white shadow-2xl shadow-brand/20">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
                    The Solution
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading">
                    The Goldenshiruh <span className="text-brand-light">Growth Engine</span>
                  </h2>
                </div>

                <ul className="space-y-5">
                  {solutions.map((item, i) => (
                    <li key={i} className="flex items-center gap-x-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-brand-light" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <div className="inline-flex items-center gap-x-2 text-brand-light font-bold text-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
                    Guaranteed Growth Strategy
                  </div>
                </div>
              </div>

              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
            
            {/* Floating glass card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="backdrop-blur-xl bg-white/90 border border-gray-100 p-5 rounded-2xl shadow-xl space-y-2">
                <p className="text-[10px] font-bold text-brand uppercase tracking-tighter">Avg. Conversion Increase</p>
                <p className="text-3xl font-extrabold text-gray-900 font-heading">+42%</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
