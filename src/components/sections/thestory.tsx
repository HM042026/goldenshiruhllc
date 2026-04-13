"use client";

import { useEffect, useState } from "react";

export default function TheStory() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden border-y border-gray-100">
      {/* Background Architectural Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute h-px bg-brand w-full" style={{ top: `${(i + 1) * 16}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-px bg-brand h-full" style={{ left: `${(i + 1) * 12.5}%` }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto lg:max-w-4xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-brand font-bold uppercase tracking-widest text-sm">Our Genesis</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-heading leading-[1.1]">
              From a Passion for Excellence to <br />
              <span className="text-brand">Marketplace Dominance.</span>
            </h3>
          </div>

          <div className="prose prose-lg lg:prose-xl text-gray-600 max-w-none space-y-8 font-medium leading-relaxed">
            <p>
              The Goldenshiruhllc story began over a decade ago when the Amazon marketplace was still in its relative infancy. Back then, brands succeeded by chance. We saw a different path—one where **data, design, and engineering** converged to create untouchable marketplace leaders.
            </p>
            
            <div className="pl-6 border-l-4 border-brand/20 italic text-gray-900 font-bold py-2">
              "We didn't set out to build another agency. We set out to build a growth engine that would redefine what it means to be a category leader on Amazon."
            </div>

            <p>
              Over the years, we've navigated the evolution of Amazon's algorithms, from the early days of keyword stuffing to the modern era of sophisticated data-driven A10 ranking factors. Every shift in the marketplace became an opportunity for us to refine our proprietary scaling methodology.
            </p>

            <p>
              Today, Goldenshiruhllc represents the pinnacle of Amazon strategic consultancy. We have helped over 500 brands—from specialized boutique labels to global conglomerates—navigate the complexities of scaling revenue while maintaining peak account health and compliance.
            </p>

            <p>
              Our vision for the future remains unchanged: to remain the premier partner for brands who are bored with mediocrity and ready to architect their own category dominance.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
            <div>
              <div className="text-3xl font-black text-gray-900 font-heading">$50M+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Managed Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gray-900 font-heading">500+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gray-900 font-heading">10Y+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Expertise Duration</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
