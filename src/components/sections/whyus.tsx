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
    description: "We focus on the metrics that matter: Contribution Margin and ROAS. If it's not and-ing to your bottom line, we don't do it.",
  },
  {
    number: "04",
    title: "Full-Funnel Integration",
    description: "We synchronize your PPC, SEO, and Brand Assets into one single growth engine where each part multiplies the other.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-brand font-bold text-[10px] tracking-widest uppercase">The Goldenshiruh Edge</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 font-heading leading-tight">
                Why Elite Sellers Partner with <span className="text-brand">Goldenshiruhllc</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                We've managed $50M+ in Amazon revenue. We know the difference between a tactic that works for a week and a strategy that scales for a decade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="space-y-3 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border border-transparent hover:border-brand/10">
                  <span className="text-brand font-black text-xl opacity-20">{reason.number}</span>
                  <h3 className="text-lg font-bold text-gray-900 font-heading leading-tight">{reason.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual element: abstract growth mesh */}
            <div className="absolute inset-0 bg-brand/5 rounded-[3rem] -rotate-3" />
            
            <div className="relative rounded-[2.5rem] bg-gray-900 p-8 sm:p-10 md:p-14 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 space-y-8 sm:space-y-10">
                <div className="space-y-4">
                  <p className="text-brand-light font-bold text-[10px] uppercase tracking-widest">Client Spotlight</p>
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold font-heading leading-tight italic">
                    "They didn't just manage our ads; they rebuilt our entire brand presence. We saw a 320% increase in revenue within the first two quarters."
                  </blockquote>
                </div>
                
                <div className="flex items-center gap-x-4 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-light/20 border border-brand-light/30 flex items-center justify-center font-bold text-brand-light text-sm sm:text-base">MT</div>
                  <div>
                    <p className="text-sm sm:text-base font-bold">Marcus Thorne</p>
                    <p className="text-[10px] sm:text-xs text-white/40 font-medium">CEO, Alpine Essentials (7-Figure Amazon Brand)</p>
                  </div>
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 backdrop-blur-xl bg-white/90 border border-gray-100 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="flex flex-col items-center">
                <p className="text-2xl sm:text-3xl font-black text-brand font-heading tracking-tight">98%</p>
                <p className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Client Retention</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
