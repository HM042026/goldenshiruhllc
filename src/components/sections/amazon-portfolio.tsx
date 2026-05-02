"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col mb-16 pt-10",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
        <span className="w-8 sm:w-12 h-px bg-brand/30" />
        {eyebrow}
      </div>
      <h2
        className="text-white font-heading tracking-tight leading-[1.1] mb-6"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", fontWeight: 600 }}
      >
        {title.split(" ").map((word, i) => (
          <span
            key={i}
            className={cn(
              i === title.split(" ").length - 1 && "italic text-brand",
            )}
          >
            {word}{" "}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export function AmazonPortfolio() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const totalSlides = 6;

  const minSwipeDistance = 50;

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [productTouchStart, setProductTouchStart] = useState<number | null>(
    null,
  );
  const [productTouchEnd, setProductTouchEnd] = useState<number | null>(null);

  const productImages = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/1.webp", // Placeholder for 5th if not found
  ];

  const onProductTouchStart = (e: React.TouchEvent) => {
    setProductTouchEnd(null);
    setProductTouchStart(e.targetTouches[0].clientX);
  };

  const onProductTouchMove = (e: React.TouchEvent) => {
    setProductTouchEnd(e.targetTouches[0].clientX);
  };

  const onProductTouchEnd = () => {
    if (!productTouchStart || !productTouchEnd) return;
    const distance = productTouchStart - productTouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveProductIndex((prev) => (prev + 1) % productImages.length);
    } else if (isRightSwipe) {
      setActiveProductIndex(
        (prev) => (prev - 1 + productImages.length) % productImages.length,
      );
    }
  };

  return (
    <section className="w-full bg-[#0a0f1a] min-h-screen overflow-hidden relative font-sans">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${10 * (i + 1)}%` }}
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

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* --- 1. STORE FRONT PORTFOLIO --- */}
      <div className="container mx-auto px-4 mb-32 relative z-10">
        <SectionHeading
          eyebrow="Marketplace Presence"
          title="Premium Store Fronts"
          subtitle="We design high-converting Amazon Storefronts that reflect your brand's unique identity and drive cross-selling."
        />

        <div
          className="relative w-full max-w-6xl mx-auto h-[450px] sm:h-[550px] md:h-[650px] flex items-center justify-center perspective-[1200px]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Slides */}
          <div className="relative w-full h-full flex justify-center items-center">
            {[
              "/images/amazonstoreimage.png",
              "/images/amazonstoreimag2.png",
              "/images/amazonstoreimag3.png",
              "/images/amazonstoreimag4.png",
              "/images/amazonstoreimag5.png",
              "/images/amazonstoreimag6.png",
              "/images/amazonstoreimage.png",
            ].map((imgSrc, i) => {
              const total = 7;
              let offset = i - activeIndex;
              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              let translateX = 0;
              let scale = 1;
              let zIndex = 30;
              let opacity = 1;

              if (offset === 0) {
                translateX = 0;
                scale = 1;
                zIndex = 30;
                opacity = 1;
              } else {
                translateX = offset * 60;
                if (Math.abs(offset) === 1) {
                  scale = 0.85;
                  zIndex = 20;
                  opacity = 0.7;
                } else {
                  translateX = offset * 70;
                  scale = 0.7;
                  zIndex = 10;
                  opacity = 0.4;
                }
              }

              return (
                <div
                  key={i}
                  className="absolute w-[200px] sm:w-[260px] md:w-[300px] h-[400px] sm:h-[520px] md:h-[600px] transition-all duration-700 ease-out rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0F172A] border-[8px] border-black/90 cursor-pointer group"
                  style={{
                    transform: `translateX(${translateX}%) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="w-full h-full relative overflow-hidden bg-slate-900">
                    <Image
                      src={imgSrc}
                      alt={`Amazon Storefront ${i + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 200px, 300px"
                    />
                    {/* Phone Notch/Speaker */}
                    <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                      <div className="w-1/3 h-2 bg-black rounded-b-xl"></div>
                    </div>
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- 2. PRODUCT IMAGES --- */}
      <div className="container mx-auto px-4 mb-16 sm:mb-24 relative z-10 ">
        <SectionHeading
          eyebrow="Visual Excellence"
          title="Product Imagery"
          subtitle="Stop the scroll with professional, high-fidelity product photography designed to highlight every USP."
        />

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 sm:gap-10">
          {/* Main Image Slider */}
          <div
            className="w-full aspect-square sm:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] border-none overflow-hidden relative cursor-grab active:cursor-grabbing group p-1 sm:p-2"
            onTouchStart={onProductTouchStart}
            onTouchMove={onProductTouchMove}
            onTouchEnd={onProductTouchEnd}
          >
            <div className="absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center">
              <Image
                src={productImages[activeProductIndex]}
                alt={`Product View ${activeProductIndex + 1}`}
                width={1400}
                height={1050}
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="w-full flex justify-center gap-3 sm:gap-5 overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {productImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveProductIndex(i)}
                className={cn(
                  "relative flex-shrink-0 w-16 sm:w-28 md:w-36 aspect-square rounded-xl sm:rounded-2xl overflow-hidden border-[3px] sm:border-[4px] transition-all duration-300",
                  i === activeProductIndex
                    ? "border-brand scale-110 shadow-xl shadow-brand/20"
                    : "border-white/5 hover:border-brand/30 opacity-40 hover:opacity-100",
                )}
              >
                <Image
                  src={src}
                  alt={`Thumb ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 3. A+ CONTENT --- */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          eyebrow="Conversion Engine"
          title="A+ Content & EBC"
          subtitle="Our A+ content strategies are built on consumer psychology to turn browsers into loyal brand advocates."
          className="mb-0 sm:mb-2"
        />

        {/* Coded Mockup - Commented out as per request */}
        {/* 
        <div className="max-w-6xl mx-auto min-h-[400px] sm:h-[600px] flex items-center justify-center perspective-[3000px] overflow-hidden py-10">
          <div
            className="flex items-center justify-center w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[140px] sm:w-[220px] md:w-[240px] h-[300px] sm:h-[480px] md:h-[520px] rounded-[1.5rem] sm:rounded-[2rem] bg-[#0F172A] border-[4px] sm:border-[6px] border-black shadow-[20px_20px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:-translate-y-4"
                  style={{
                    transform: `
                      rotateX(20deg) 
                      rotateY(-20deg) 
                      rotateZ(10deg)
                      translateX(${i * 10}px)
                      translateY(${i * 10}px)
                    `,
                    zIndex: 5 - i,
                    marginLeft: i === 0 ? "0" : "10px",
                  }}
                >
                  <div className="w-full h-full bg-slate-900 relative">
                    <div className="absolute top-0 inset-x-0 h-4 sm:h-6 flex justify-center z-10">
                      <div className="w-1/3 h-full bg-black rounded-b-xl sm:rounded-b-2xl"></div>
                    </div>
                    <div className="absolute inset-0 pt-6 sm:pt-10 px-3 sm:px-4 pb-3 sm:pb-4 flex flex-col gap-2 sm:gap-3">
                      <div className="h-16 sm:h-24 bg-slate-800 rounded-lg w-full relative overflow-hidden border border-white/5">
                        <div
                          className="absolute inset-0 bg-brand/5 animate-pulse"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      </div>
                      <div className="h-5 sm:h-8 bg-slate-800 rounded w-3/4 border border-white/5"></div>
                      <div className="flex-1 grid grid-cols-2 gap-2">
                        <div className="bg-slate-800/50 rounded-lg border border-white/5"></div>
                        <div className="bg-slate-800/50 rounded-lg border border-white/5"></div>
                        <div className="bg-slate-800/50 rounded-lg border border-white/5"></div>
                        <div className="bg-slate-800/50 rounded-lg border border-white/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        */}

        {/* Static Image Alternative */}
        <div className="max-w-[1400px] mx-auto relative group">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-brand/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-brand/10 transition-colors" />
          <div className="relative z-10 w-full flex justify-center">
            <Image
              src="/images/a+content.png"
              alt="A+ Content Showcase"
              width={1400}
              height={800}
              className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,103,79,0.25)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
