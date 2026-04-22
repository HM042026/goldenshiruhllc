import { ShieldCheck, BarChart4, Package, Handshake, Check } from "lucide-react";

const performanceIndicators = [
  { label: "Account Management", value: "Hands-Off", icon: <Handshake className="w-6 h-6" /> },
  { label: "Average ACoS Reduction", value: "35%", icon: <BarChart4 className="w-6 h-6" /> },
  { label: "Brand Registry Success", value: "100%", icon: <ShieldCheck className="w-6 h-6" /> },
  { label: "Inventory Stockout Rate", value: "<1%", icon: <Package className="w-6 h-6" /> },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-[#0a0f1a] text-white overflow-hidden">
      {/* Architectural Grid Overlay (Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white w-full"
            style={{ top: `${10 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white h-full"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      {/* Background Glow Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-96 bg-brand/30 blur-[160px] pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand/10 blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-6 sm:px-10 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-16">
          {performanceIndicators.map((item, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-light group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-2xl">
                {item.icon}
              </div>
              <div className="space-y-2">
                <p 
                  className="font-black font-heading tracking-tighter text-white group-hover:text-brand transition-colors duration-500"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1" }}
                >
                  {item.value}
                </p>
                <div className="h-0.5 w-8 bg-brand/30 group-hover:w-full transition-all duration-700" />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-[0.2em] leading-relaxed max-w-[140px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Floating Confidence Bar */}
        <div className="mt-20 sm:mt-32 p-8 backdrop-blur-xl bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex flex-wrap justify-center items-center gap-x-10 gap-y-6 sm:gap-x-16">
          <div className="flex items-center gap-x-4 group">
            <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand transition-colors duration-500">
              <Check className="w-4 h-4 text-brand-light group-hover:text-white" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">No Long-Term Contracts</span>
          </div>
          <div className="flex items-center gap-x-4 group">
            <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand transition-colors duration-500">
              <Check className="w-4 h-4 text-brand-light group-hover:text-white" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">Weekly Performance Status</span>
          </div>
          <div className="flex items-center gap-x-4 group">
            <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand transition-colors duration-500">
              <Check className="w-4 h-4 text-brand-light group-hover:text-white" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">Exclusive Amazon Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
