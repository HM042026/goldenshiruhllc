"use client";

import { CheckCircle2, XCircle, ChevronDown, ArrowRight, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ─── Service Overview ────────────────────────────────────────────────────────

export function ServiceOverview({ title, content }: { title: string; content: string }) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-brand text-xs font-bold tracking-widest uppercase">
              Overview
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-heading">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {content}
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand/5 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-3xl bg-gray-100 aspect-video flex items-center justify-center border-2 border-dashed border-gray-300">
               <div className="flex flex-col items-center gap-4 text-gray-400">
                  <ImageIcon size={64} />
                  <span className="font-bold text-sm uppercase tracking-widest">Image Placeholder</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase">
                {problemsTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                Market Hurdles You <span className="text-red-500">Need to Clear</span>
              </h2>
            </div>

            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-x-3 text-gray-600 font-medium text-sm sm:text-base">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-brand/5 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-3xl backdrop-blur-sm bg-brand p-8 sm:p-10 md:p-12 text-white shadow-2xl shadow-brand/20">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
                    {solutionsTitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading">
                    {solutionHeading}
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
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Service Deliverables ───────────────────────────────────────────────────

export function ServiceDeliverables({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand font-bold text-xs uppercase tracking-widest">Deliverables</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-heading">{title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-center gap-4 hover:border-brand/20 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                <CheckCircle2 size={20} />
              </div>
              <span className="font-bold text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Process ────────────────────────────────────────────────────────

export function ServiceProcess({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand font-bold text-xs uppercase tracking-widest">Execution Roadmap</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading italic">{title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black text-brand text-xl font-heading group-hover:bg-brand group-hover:text-white transition-colors border border-white/5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold">{step}</h3>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Pricing ────────────────────────────────────────────────────────

export function ServicePricing({ price, subtitle }: { price: string; subtitle?: string }) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="max-w-2xl mx-auto p-12 bg-gray-50 border border-gray-100 rounded-[3rem] text-center space-y-8 hover:shadow-2xl transition-all">
          <span className="text-brand font-bold text-xs uppercase tracking-widest">Investment</span>
          <div className="space-y-2">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 font-heading">{price}</h2>
            {subtitle && <p className="text-gray-500 font-medium">{subtitle}</p>}
          </div>
          <div className="pt-6">
            <Button size="lg" className="bg-brand hover:bg-brand-hover text-white px-12 h-16 rounded-full font-bold shadow-xl shadow-brand/20 w-full sm:w-auto" asChild>
               <Link href="/contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Service FAQ ────────────────────────────────────────────────────────────

export function ServiceFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto lg:max-w-4xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand font-bold text-xs uppercase tracking-widest">Common Questions</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-heading">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed border-t border-gray-50">
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

export function PortfolioPlaceholder() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand font-bold text-xs uppercase tracking-widest">Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-heading">Success Stories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We are constantly updating our portfolio with recent wins. Check back soon for detailed case studies.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3].map(i => (
             <div key={i} className="aspect-[4/3] bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center group overflow-hidden relative">
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-center gap-4 text-gray-400 group-hover:text-brand transition-colors relative z-10">
                   <ImageIcon size={48} />
                   <span className="font-bold text-xs uppercase tracking-widest italic">Project Case Study coming soon</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
