"use client";

import { CheckCircle2, XCircle, ChevronDown, ArrowRight, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ─── Service Overview ────────────────────────────────────────────────────────

export function ServiceOverview({ title, content }: { title: string; content: string }) {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-white overflow-hidden">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase">
              <span className="w-8 sm:w-12 h-px bg-brand/30" />
              Strategic Overview
            </div>
            <h2 
              className="text-gray-900 font-heading tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
            >
              {title.split(' ').map((word, i) => i === 1 ? <span key={i} className="italic text-brand">{word} </span> : word + ' ')}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              {content}
            </p>
          </div>
          <div className="relative group mt-12 lg:mt-0">
            <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative rounded-[2.5rem] bg-gray-50 aspect-[16/10] flex items-center justify-center border border-gray-200 overflow-hidden shadow-2xl">
               <div className="flex flex-col items-center gap-4 text-gray-300">
                  <div className="p-8 rounded-full bg-white shadow-inner">
                    <ImageIcon size={48} className="text-brand/20" />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-[0.3em]">Marketplace Asset Visualization</span>
               </div>
               {/* Architectural lines on placeholder */}
               <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                  <div className="absolute top-1/4 left-0 w-full h-px bg-brand" />
                  <div className="absolute top-2/4 left-0 w-full h-px bg-brand" />
                  <div className="absolute left-1/4 top-0 w-px h-full bg-brand" />
                  <div className="absolute left-2/4 top-0 w-px h-full bg-brand" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Service Problem & Solution ──────────────────────────────────────────────

// ─── Service Problem & Solution ──────────────────────────────────────────────

export function ServiceProblemSolution({ 
  problemsTitle = "Common Challenges",
  problems, 
  solutionsTitle = "Our Solution",
  solutions,
  solutionHeading = "The Goldenshiruh Advantage"
}: { 
  problemsTitle?: string;
  problems: string[]; 
  solutionsTitle?: string;
  solutions: string[];
  solutionHeading?: string;
}) {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-gray-50/50 overflow-hidden">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
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
          
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-x-3 text-red-500 text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase">
                <span className="w-8 sm:w-12 h-px bg-red-500/30" />
                {problemsTitle}
              </div>
              <h2 
                className="text-gray-900 font-heading tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)", lineHeight: "1.1", fontWeight: 600 }}
              >
                Market Hurdles You <span className="italic text-red-500">Need to Clear</span>
              </h2>
            </div>

            <ul className="grid sm:grid-cols-1 gap-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-x-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md group">
                  <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                    <XCircle className="w-4 h-4 text-red-400 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative rounded-[3rem] backdrop-blur-xl bg-gray-900 p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-white/5">
              <div className="space-y-10">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase">
                    <span className="w-8 sm:w-12 h-px bg-brand/30" />
                    {solutionsTitle}
                  </div>
                  <h2 
                    className="font-heading tracking-tight leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)", fontWeight: 600 }}
                  >
                    The Goldenshiruh <span className="italic text-brand">Advantage</span>
                  </h2>
                </div>

                <ul className="space-y-6">
                  {solutions.map((item, i) => (
                    <li key={i} className="flex items-start gap-x-5 group/item">
                      <div className="w-7 h-7 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-light" />
                      </div>
                      <span className="font-medium text-sm sm:text-base lg:text-lg text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Grid in Solution Box */}
              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "16px 16px" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Service Deliverables ───────────────────────────────────────────────────

// ─── Service Deliverables ───────────────────────────────────────────────────

export function ServiceDeliverables({ title, items }: { title: string; items: string[] }) {
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
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
            Deliverables
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
          </div>
          <h2 
            className="text-gray-900 font-heading tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
          >
            What We <span className="italic">Handle</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className="group p-6 sm:p-8 bg-gray-50/50 border border-gray-100 rounded-[2rem] flex items-center gap-5 hover:border-brand/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-inner">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-bold text-gray-700 text-xs sm:text-sm lg:text-base tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Process ────────────────────────────────────────────────────────

// ─── Service Process ────────────────────────────────────────────────────────

export function ServiceProcess({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-[#0a0f1a] text-white overflow-hidden">
      {/* Background visuals */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-brand/20 blur-[160px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-60" />
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand/15 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 mx-auto lg:max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
            Execution Roadmap
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
          </div>
          <h2 
            className="text-white font-heading tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
          >
            Our Management <span className="italic text-brand">Roadmap</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center font-black text-brand text-2xl font-heading group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-2xl group-hover:shadow-brand/20">
                  {i + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold font-heading tracking-tight">{step}</h3>
                <div className="w-12 h-0.5 bg-brand/20 group-hover:w-full transition-all duration-700" />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 right-0 h-px bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Pricing ────────────────────────────────────────────────────────

// ─── Service Pricing ────────────────────────────────────────────────────────

export function ServicePricing({ price, subtitle }: { price: string; subtitle?: string }) {
  return (
    <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${10 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="max-w-3xl mx-auto p-10 sm:p-16 lg:p-20 bg-gray-50/50 border border-gray-100 rounded-[3rem] text-center space-y-10 hover:shadow-2xl transition-all duration-700 hover:bg-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand/10 transition-colors" />
          
          <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
            Investment
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
          </div>
          
          <div className="space-y-4">
            <h2 
              className="text-gray-900 font-heading tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: "1", fontWeight: 600 }}
            >
              {price.split(' ')[0]} <span className="italic text-brand">{price.split(' ').slice(1).join(' ')}</span>
            </h2>
            {subtitle && <p className="text-gray-500 font-medium text-sm sm:text-base lg:text-lg">{subtitle}</p>}
          </div>

          <div className="pt-8">
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="bg-brand hover:bg-brand-hover text-white px-12 h-14 sm:h-16 rounded-full font-semibold text-base sm:text-lg shadow-2xl shadow-brand/20 w-full transition-all active:scale-95 group">
                Initialize Partner Onboarding
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <p className="text-[9px] sm:text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
            Custom Enterprise Quotes available for Brand Aggregators
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Service FAQ ────────────────────────────────────────────────────────────

// ─── Service FAQ ────────────────────────────────────────────────────────────

export function ServiceFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-gray-50/30 overflow-hidden">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-brand h-full"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto lg:max-w-4xl px-6 sm:px-10 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
            Common Questions
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
          </div>
          <h2 
            className="text-gray-900 font-heading tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", lineHeight: "1.1", fontWeight: 600 }}
          >
            Frequently Asked <span className="italic">Questions</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden ${openIndex === i ? "border-brand/30 shadow-2xl" : "border-gray-100 shadow-sm"}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
              >
                <span className="text-sm sm:text-lg font-semibold text-gray-900 pr-8 leading-snug">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-500 ${openIndex === i ? "bg-brand text-white rotate-180" : "bg-white text-gray-400"}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <div className="p-6 sm:p-8 pt-0 text-gray-500 font-medium text-xs sm:text-sm lg:text-base leading-relaxed border-t border-gray-50/50">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Placeholder ──────────────────────────────────────────────────

// ─── Portfolio Placeholder ──────────────────────────────────────────────────

export function PortfolioPlaceholder() {
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
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
            Showcase
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
          </div>
          <h2 
            className="text-gray-900 font-heading tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
          >
            Success <span className="italic">Stories</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            We are constantly updating our portfolio with recent high-velocity wins. Check back soon for detailed case studies and ACOS performance breakdowns.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
           {[1, 2, 3].map(i => (
             <div key={i} className="aspect-[4/3] bg-gray-50/50 border border-gray-100 rounded-[2.5rem] flex items-center justify-center group overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex flex-col items-center gap-5 text-gray-300 group-hover:text-brand transition-all duration-500 relative z-10">
                   <div className="p-6 rounded-full bg-white shadow-sm border border-gray-50 group-hover:scale-110 transition-transform duration-700">
                    <ImageIcon size={32} />
                   </div>
                   <span className="font-bold text-[10px] uppercase tracking-[0.3em] italic">Project Case Study Pending</span>
                </div>
                {/* Architectural decorative line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand/5 group-hover:bg-brand/40 transition-all duration-700" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
