import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        
        <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-gray-900 p-8 sm:p-12 md:p-20 overflow-hidden text-center">
          {/* Background visuals */}
          <div className="absolute inset-0 bg-brand/10 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/20 text-brand-light text-[10px] font-bold tracking-widest uppercase">
                Limited Monthly Slots
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight">
                Ready to Build Your <span className="text-brand-light">Amazon Empire?</span>
              </h2>
              <p className="text-white/60 text-base md:text-xl leading-relaxed">
                Don't guess. Get a data-backed growth blueprint. Our experts will analyze your account, expose revenue leaks, and show you exactly how to double your current momentum.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:support@goldenshiruhllc.com"
                className="h-14 px-10 rounded-full bg-brand hover:bg-brand-hover text-white font-bold flex items-center justify-center transition-all duration-300 shadow-xl shadow-brand/20 w-full sm:w-auto"
              >
                Get Your Free Audit
              </Link>
              <div className="flex -space-x-3 items-center px-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800" />
                ))}
                <span className="text-xs font-bold text-white/40 ml-6 uppercase tracking-widest">
                  Joined by 500+ Sellers
                </span>
              </div>
            </div>

            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              100% Free • No Obligation • High Impact
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
