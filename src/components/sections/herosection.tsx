"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AmazonVisual } from "./amazon-visual";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface HeroCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroSectionProps {
  eyebrow?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: React.ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

// ─── Defaults (Premium Amazon Agency Content) ────────────────────────────────

const defaults: Required<HeroSectionProps> = {
  eyebrow: "Goldenshiruhllc • Elite Amazon Scaling",
  headingLine1: "Scale Your Brand Beyond",
  headingLine2: "The Revenue Ceiling",
  description:
    "We turn stagnant Amazon listings into market leaders. Using proprietary algorithm research, data-backed PPC, and elite operational strategy, we architect the future of your brand's marketplace dominance.",
  primaryCta: { label: "Get Your Free Audit", href: "#contact" },
  secondaryCta: { label: "Our Growth Ecosystem", href: "#services" },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection({
  eyebrow = defaults.eyebrow,
  headingLine1 = defaults.headingLine1,
  headingLine2 = defaults.headingLine2,
  description = defaults.description,
  primaryCta = defaults.primaryCta,
  secondaryCta = defaults.secondaryCta,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CtaLink = ({
    cta,
    children,
  }: {
    cta: HeroCta;
    children: React.ReactNode;
  }) =>
    cta.external ? (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        {children}
      </a>
    ) : (
      <Link href={cta.href} className="w-full sm:w-auto">
        {children}
      </Link>
    );

  return (
    <>
      <Navbar />
      <section className="relative flex flex-col justify-center bg-white overflow-hidden min-h-[90svh] lg:min-h-[100svh]">
        
        {/* Amazon Intelligence Matrix — Reflecting business & services */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[900px] lg:h-[900px] opacity-40 sm:opacity-50 lg:opacity-70 pointer-events-none">
          <AmazonVisual />
        </div>

        {/* Architectural Grid Overlay (Subtle Blueprint feel) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
          {[...Array(10)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-brand"
              style={{ top: `${10 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-brand"
              style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
            />
          ))}
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 pt-32 pb-16 lg:py-40">
          
          {/* Animated Eyebrow */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand">
              <span className="w-12 h-px bg-brand/30" />
              {eyebrow}
            </span>
          </div>

          {/* Fluid Typographic Headline */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h1
              className={`leading-[1.02] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontSize: "clamp(2.25rem, 6.8vw, 7.5rem)" }}
            >
              <span className="block text-gray-900 font-extrabold font-heading">{headingLine1}</span>
              <span className="block mt-2 sm:mt-4">
                <span className="relative inline-block text-gray-900 font-black italic font-heading">
                  {headingLine2}
                  <span className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 left-0 right-0 h-2 sm:h-3 lg:h-6 bg-brand/10 -z-10 rounded-sm" />
                </span>
              </span>
            </h1>
          </div>

          {/* Combined Description and CTAs Layer */}
          <div className="flex flex-col gap-10 sm:gap-14 lg:grid lg:grid-cols-2 lg:gap-32 lg:items-end">
            
            {/* Description */}
            <div
              className={`text-base sm:text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {description}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <CtaLink cta={primaryCta}>
                <Button
                  size="lg"
                  className="bg-brand hover:bg-brand-hover text-white px-8 sm:px-12 h-14 sm:h-16 text-base sm:text-lg font-bold rounded-full group w-full shadow-2xl shadow-brand/20 transition-all active:scale-95"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CtaLink>

              {secondaryCta && (
                <CtaLink cta={secondaryCta}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 sm:px-12 h-14 sm:h-16 text-base sm:text-lg font-bold rounded-full border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-900 group w-full sm:w-auto transition-all active:scale-95"
                  >
                    {secondaryCta.label}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CtaLink>
              )}
            </div>
          </div>
        </div>

        {/* Visual Decoration: Bottom Gradient Blur */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </section>
    </>
  );
}

