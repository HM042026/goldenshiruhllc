"use client";

import { useEffect, useState } from "react";

export function StatsMarquee() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-6 sm:py-8 lg:py-10 border-b border-gray-100 overflow-hidden w-full relative bg-white">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${20 * (i + 1)}%` }}
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

      {/* Stats marquee */}
      <div
        className={`w-full transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex gap-10 sm:gap-12 lg:gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                {
                  value: "3x",
                  label: "faster Amazon scaling",
                  company: "GOLDENSHIRUHLLC",
                },
                {
                  value: "99%",
                  label: "client satisfaction rate",
                  company: "OUR CLIENTS",
                },
                {
                  value: "35%",
                  label: "avg. ACoS reduction",
                  company: "ADS OPTIMIZATION",
                },
                {
                  value: "300%",
                  label: "avg. organic rank growth",
                  company: "SEO RESULTS",
                },
                {
                  value: "500+",
                  label: "brands managed",
                  company: "GOLDENSHIRUHLLC",
                },
                {
                  value: "24/7",
                  label: "account health monitoring",
                  company: "OUR PROMISE",
                },
              ].map((stat) => (
                <div
                  key={`${stat.company}-${stat.value}-${i}`}
                  className="flex items-baseline gap-2 sm:gap-3 lg:gap-4"
                >
                  <span className="text-xl sm:text-3xl lg:text-5xl font-heading font-black text-gray-900 tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-sm text-gray-500 font-medium">
                    {stat.label}
                    <span className="block text-brand font-bold text-[8px] sm:text-xs mt-0.5 sm:mt-1 tracking-widest uppercase">
                      {stat.company}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
