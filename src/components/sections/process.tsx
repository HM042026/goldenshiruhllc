import { ChevronRight } from "lucide-react";

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
    <section id="process" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
      
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[10px] font-bold tracking-widest uppercase border border-brand/20">
            Our Method
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 font-heading">
            The Roadmap to <span className="text-brand">Market Dominance</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            We've refined a repeatable four-stage blueprint that turns stagnant Amazon listings into revenue-generating assets.
          </p>
        </div>

        {/* Roadmap Visual */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-0.5 bg-gradient-to-r from-brand/5 via-brand/40 to-brand/5" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Visual indicator */}
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 border border-gray-100 group-hover:border-brand transition-colors duration-300">
                  <span className="text-xl sm:text-2xl font-black text-brand font-heading">{step.number}</span>
                  
                  {/* Ripple effect */}
                  <div className="absolute -inset-2 bg-brand/5 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-x-2">
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{step.title}</h3>
                    {idx < steps.length - 1 && (
                      <ChevronRight className="w-5 h-5 text-brand/20 hidden lg:block" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed md:max-w-[220px]">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet indicator */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 h-12 w-px bg-brand/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Proofing */}
        <div className="mt-24 backdrop-blur-md bg-white/40 border border-white/60 rounded-[2.5rem] p-10 md:p-12 overflow-hidden relative shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                Data-Driven Precision at Every Step
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Most agencies guess. We analyze. Our process is backed by real-time Amazon market data, ensuring every bid, every keyword, and every design choice is optimized for maximum conversion.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-brand text-white shadow-xl shadow-brand/20">
              <p className="text-4xl font-black font-heading tracking-tighter">90 Days</p>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-light mt-1">Average Turnaround</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
