const performanceIndicators = [
  { label: "Account Management", value: "Hands-Off", icon: "🤝" },
  { label: "Average ACoS Reduction", value: "35%", icon: "📉" },
  { label: "Brand Registry Success", value: "100%", icon: "🛡️" },
  { label: "Inventory Stockout Rate", value: "<1%", icon: "📦" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-gray-950 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-brand/20 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {performanceIndicators.map((item, idx) => (
            <div key={idx} className="space-y-4 group">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-white group-hover:text-brand-light transition-colors">
                  {item.value}
                </p>
                <div className="h-0.5 w-12 bg-brand group-hover:w-full transition-all duration-500" />
              </div>
              <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Floating Confidence Bar */}
        <div className="mt-20 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          <div className="flex items-center gap-x-3">
            <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
              <span className="text-brand-light text-xs font-bold">✓</span>
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">No Long-Term Contracts</span>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
              <span className="text-brand-light text-xs font-bold">✓</span>
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Weekly Performance Status</span>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
              <span className="text-brand-light text-xs font-bold">✓</span>
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Exclusive Amazon Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
