interface Reason {
  number: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    number: "01",
    title: "Amazon-Exclusive Pedigree",
    description: "We are not a generalist agency. We live and breathe the A10 algorithm, Seller Central, and FBA logistics every single day.",
  },
  {
    number: "02",
    title: "Proprietary Data Systems",
    description: "Our decisions are backed by deep-market analytics and competitive gap tools that generic agencies simple don't have access to.",
  },
  {
    number: "03",
    title: "ROI-First Methodology",
    description: "We focus on the metrics that matter: Contribution Margin and ROAS. If it's not adding to your bottom line, we don't do it.",
  },
  {
    number: "04",
    title: "Full-Funnel Integration",
    description: "We synchronize your PPC, SEO, and Brand Assets into one single growth engine where each part multiplies the other.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-20 sm:py-32 lg:py-40 bg-white overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase">
                <span className="w-8 sm:w-12 h-px bg-brand/30" />
                The Goldenshiruh Edge
              </div>
              <h2 
                className="text-gray-900 font-heading tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
              >
                Why Elite Sellers Partner with <span className="italic">Goldenshiruhllc</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                We've managed $50M+ in Amazon revenue. We know the difference between a tactic that works for a week and a strategy that scales for a decade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="group space-y-4 p-6 sm:p-8 rounded-[2rem] bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-brand/10">
                  <span className="text-brand font-black text-2xl sm:text-3xl opacity-10 group-hover:opacity-30 transition-opacity">{reason.number}</span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-heading leading-tight">{reason.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            {/* Visual element: architectural background */}
            <div className="absolute inset-0 bg-brand/5 rounded-[3rem] -rotate-3 scale-105" />
            
            <div className="relative rounded-[2.5rem] bg-[#1a2131] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border border-white/5">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 space-y-10 sm:space-y-14">
                <div className="space-y-6">
                  <p className="text-brand-light font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.3em]">Client Spotlight</p>
                  <blockquote 
                    className="font-semibold font-heading leading-[1.2] italic text-white"
                    style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
                  >
                    "They didn't just manage our ads; they rebuilt our entire brand presence. We saw a 320% increase in revenue within the first two quarters."
                  </blockquote>
                </div>
                
                <div className="flex items-center gap-x-5 pt-8 border-t border-white/10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-light/10 border border-brand-light/20 flex items-center justify-center font-bold text-brand-light text-base sm:text-lg shadow-inner">MT</div>
                  <div>
                    <p className="text-sm sm:text-lg font-semibold text-white">Marcus Thorne</p>
                    <p className="text-[9px] sm:text-xs text-white/40 font-bold uppercase tracking-widest">CEO, Alpine Essentials (7-Figure Amazon Brand)</p>
                  </div>
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }} />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 backdrop-blur-2xl bg-white/95 border border-gray-100 p-6 sm:p-8 rounded-[2rem] shadow-2xl">
              <div className="flex flex-col items-center">
                <p className="text-3xl sm:text-4xl font-black text-brand font-heading tracking-tight leading-none">98%</p>
                <p className="mt-2 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">Client Retention Rate</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
