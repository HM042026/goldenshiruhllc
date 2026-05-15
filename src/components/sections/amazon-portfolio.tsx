"use client";

import React, { useState, useRef } from "react";
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

  const [activeCollectionIndex, setActiveCollectionIndex] = useState(0);
  const [collectionTouchStart, setCollectionTouchStart] = useState<
    number | null
  >(null);
  const [collectionTouchEnd, setCollectionTouchEnd] = useState<number | null>(
    null,
  );

  const productCollections = [
    [
      // Product 1
      "/productimages/pd1img1.jpg",
      "/productimages/pd1img2.png",
      "/productimages/pd1img3.jpg",
      "/productimages/pd1img4.jpg",
      "/productimages/pd1img5.jpg",
      "/productimages/pd1img6.jpg",
    ],
    [
      // Product 2
      "/productimages/pd2img1.jpg",
      "/productimages/pd2img2.jpg",
      "/productimages/pd2img3.jpg",
      "/productimages/pd2img4.jpg",
      "/productimages/pd2img5.jpg",
      "/productimages/pd2img6.jpg",
      "/productimages/pd2img7.jpg",
    ],
    [
      // Product 3
      "/productimages/pd3img (1).jpg",
      "/productimages/pd3img (2).jpg",
      "/productimages/pd3img (3).jpg",
      "/productimages/pd3img (4).jpg",
      "/productimages/pd3img (5).jpg",
      "/productimages/pd3img (6).jpg",
    ],
    [
      // Product 4
      "/productimages/pd4img (1).jpg",
      "/productimages/pd4img (2).jpg",
      "/productimages/pd4img (3).jpg",
      "/productimages/pd4img (4).jpg",
      "/productimages/pd4img (5).jpg",
      "/productimages/pd4img (7).jpg",
      "/productimages/pd4img (8).jpg",
      "/productimages/pd4img (9).jpg",
    ],
    [
      // Product 5
      "/productimages/pd5img (1).jpg",
      "/productimages/pd5img (2).jpg",
      "/productimages/pd5img (3).jpg",
      "/productimages/pd5img (4).jpg",
    ],
  ];

  const getBentoLayout = (total: number) => {
    if (total === 4) {
      return {
        container:
          "grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 sm:gap-4 w-full md:h-[600px] lg:h-[750px]",
        items: [
          "md:col-span-1 md:row-span-1",
          "md:col-span-1 md:row-span-1",
          "md:col-span-1 md:row-span-1",
          "md:col-span-1 md:row-span-1",
        ],
      };
    }
    if (total === 6) {
      return {
        container:
          "grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-3 sm:gap-4 w-full md:h-[600px] lg:h-[750px]",
        items: [
          "md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2",
          "md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1",
          "md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1",
          "md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1",
          "md:col-start-2 md:col-span-1 md:row-start-3 md:row-span-1",
          "md:col-start-3 md:col-span-1 md:row-start-3 md:row-span-1",
        ],
      };
    }
    if (total === 7) {
      return {
        container:
          "grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-3 sm:gap-4 w-full md:h-[600px] lg:h-[750px]",
        items: [
          "md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-3",
          "md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-2",
          "md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-2",
          "md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-3",
          "md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-3",
          "md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-4",
          "md:col-start-4 md:col-span-1 md:row-start-4 md:row-span-3",
        ],
      };
    }
    if (total === 8) {
      return {
        container:
          "grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-3 sm:gap-4 w-full md:h-[600px] lg:h-[750px]",
        items: [
          "md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2",
          "md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1",
          "md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-1",
          "md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1",
          "md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-1",
          "md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-2",
          "md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-2",
          "md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-2",
        ],
      };
    }

    // Fallback
    return {
      container:
        "grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-3 sm:gap-4 w-full",
      items: Array(total).fill("col-span-1 row-span-1"),
    };
  };

  const aplusScrollRef = useRef<HTMLDivElement>(null);
  const [aplusSlide, setAplusSlide] = useState(0);

  const handleAplusScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const slideWidth = container.clientWidth;
    const newSlide = Math.round(container.scrollLeft / slideWidth);
    if (newSlide !== aplusSlide) {
      setAplusSlide(newSlide);
    }
  };

  const scrollToAplusSlide = (index: number) => {
    if (aplusScrollRef.current) {
      const container = aplusScrollRef.current;
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "smooth",
      });
      setAplusSlide(index);
    }
  };

  const onCollectionTouchStart = (e: React.TouchEvent) => {
    setCollectionTouchEnd(null);
    setCollectionTouchStart(e.targetTouches[0].clientX);
  };

  const onCollectionTouchMove = (e: React.TouchEvent) => {
    setCollectionTouchEnd(e.targetTouches[0].clientX);
  };

  const onCollectionTouchEnd = () => {
    if (!collectionTouchStart || !collectionTouchEnd) return;
    const distance = collectionTouchStart - collectionTouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveCollectionIndex(
        (prev) => (prev + 1) % productCollections.length,
      );
    } else if (isRightSwipe) {
      setActiveCollectionIndex(
        (prev) =>
          (prev - 1 + productCollections.length) % productCollections.length,
      );
    }
  };

  return (
    <section className="w-full max-w-[100vw] bg-[#0a0f1a] min-h-screen overflow-hidden relative font-sans">
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

      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand/10 blur-[80px] sm:blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand/5 blur-[60px] sm:blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

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

              "/images/amazonstoreimag3.png",
            ].map((imgSrc, i) => {
              const total = 5;
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

        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 sm:gap-10">
          {/* Main Slide Area (Masonry Grid) */}
          <div
            className="w-full relative cursor-grab active:cursor-grabbing min-h-[500px]"
            onTouchStart={onCollectionTouchStart}
            onTouchMove={onCollectionTouchMove}
            onTouchEnd={onCollectionTouchEnd}
          >
            {productCollections.map((collection, index) => {
              const bento = getBentoLayout(collection.length);
              return (
                <div
                  key={index}
                  className={cn(
                    "w-full transition-all duration-700 ease-in-out absolute top-0 left-0",
                    activeCollectionIndex === index
                      ? "opacity-100 translate-x-0 relative z-10"
                      : "opacity-0 translate-x-10 pointer-events-none absolute z-0",
                  )}
                >
                  <div className={bento.container}>
                    {collection.map((src, imgIdx) => (
                      <div
                        key={imgIdx}
                        className={cn(
                          "relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group w-full min-h-[250px] md:min-h-0 bg-gradient-to-t from-black/70 to-transparent",
                          bento.items[imgIdx] || "md:col-span-1 md:row-span-1",
                        )}
                      >
                        {/* Main Image without cropping */}
                        <Image
                          src={src}
                          alt={`Product ${index + 1} Image ${imgIdx + 1}`}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-105 relative z-10"
                          priority={index === 0}
                        />
                        {/* Glass Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-20" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-8 z-20">
            <button
              onClick={() =>
                setActiveCollectionIndex(
                  (prev) =>
                    (prev - 1 + productCollections.length) %
                    productCollections.length,
                )
              }
              className="p-2 sm:p-3 rounded-full transition-all duration-300 border-2 border-white/20 text-white/50 hover:border-brand hover:text-brand hover:bg-brand/10 bg-black/40 backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10">
              {productCollections.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCollectionIndex(i)}
                  className={cn(
                    "transition-all duration-500 relative",
                    activeCollectionIndex === i
                      ? "w-8 sm:w-12 h-2 sm:h-2.5 bg-brand rounded-full shadow-[0_0_15px_rgba(0,103,79,0.8)]"
                      : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/30 rounded-full hover:bg-white/60",
                  )}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveCollectionIndex(
                  (prev) => (prev + 1) % productCollections.length,
                )
              }
              className="p-2 sm:p-3 rounded-full transition-all duration-300 border-2 border-white/20 text-white/50 hover:border-brand hover:text-brand hover:bg-brand/10 bg-black/40 backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
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

        <style>{`
          @keyframes scrollDown {
            0%, 5% { object-position: top; }
            95%, 100% { object-position: bottom; }
          }
          @keyframes scrollUp {
            0%, 5% { object-position: bottom; }
            95%, 100% { object-position: top; }
          }
          .animate-scroll-down {
            animation: scrollDown 20s ease-in-out infinite alternate;
          }
          .animate-scroll-up {
            animation: scrollUp 20s ease-in-out infinite alternate;
          }
          /* Custom Theme Scrollbar */
          .theme-scrollbar::-webkit-scrollbar {
            display: none; /* Hide scrollbar because we have dots */
          }
          .box-reflect {
            -webkit-box-reflect: below 2px linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.1) 100%);
          }
          @media (max-width: 640px) {
            .box-reflect {
              -webkit-box-reflect: below 0px linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.15) 100%);
            }
          }
        `}</style>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand/20 blur-[100px] sm:blur-[140px] rounded-full z-0 pointer-events-none"></div>

          {/* Slider Container */}
          <div
            ref={aplusScrollRef}
            onScroll={handleAplusScroll}
            className="w-full mx-auto min-h-[300px] sm:min-h-[500px] lg:min-h-[650px] flex items-center perspective-[3000px] overflow-x-auto overflow-y-hidden pt-8 sm:pt-10 pb-16 sm:pb-32 px-0 theme-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing relative z-10"
          >
            {[
              [
                "/images/aplusimg.jpg",
                "/images/aplusimg1.jpg",
                "/images/aplusimg2.jpg",
              ],
              [
                "/images/aplusimg3.jpg",
                "/images/aplusimg4.jpg",
                "/images/aplusimg5.jpg",
              ],
            ].map((slideGroup, slideIndex) => (
              <div
                key={slideIndex}
                className="flex items-center justify-center w-full shrink-0 snap-center gap-1 sm:gap-4 lg:gap-8 px-2 sm:px-6 md:px-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                {slideGroup.map((src, i) => {
                  return (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-[60px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-[130px] sm:h-[340px] md:h-[440px] lg:h-[520px] rounded-[0.4rem] sm:rounded-[1.5rem] lg:rounded-[2rem] bg-[#0F172A] border-[2px] sm:border-[4px] lg:border-[6px] border-black shadow-[10px_10px_15px_rgba(0,0,0,0.5)] sm:shadow-[20px_20px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 group/aplus box-reflect"
                      style={{
                        transform: `
                          rotateX(20deg) 
                          rotateY(-20deg) 
                          rotateZ(10deg)
                          translateX(${i * 8}px)
                          translateY(${i * 8}px)
                        `,
                        zIndex: 6 - i,
                      }}
                    >
                      <div className="w-full h-full bg-slate-900 relative overflow-hidden">
                        <Image
                          src={src}
                          alt={`A+ Content Showcase ${slideIndex * 3 + i + 1}`}
                          fill
                          className={cn(
                            "object-cover group-hover/aplus:[animation-play-state:paused]",
                            (slideIndex * 3 + i) % 2 === 0
                              ? "animate-scroll-down"
                              : "animate-scroll-up",
                          )}
                          sizes="(max-width: 640px) 60px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
                        />
                        <div className="absolute top-0 inset-x-0 h-[4px] sm:h-4 lg:h-6 flex justify-center z-10">
                          <div className="w-1/3 h-full bg-black rounded-b-[2px] sm:rounded-b-xl lg:rounded-b-2xl"></div>
                        </div>
                        {/* Glass Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover/aplus:opacity-40 transition-opacity" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
            <button
              onClick={() => scrollToAplusSlide(0)}
              className={cn(
                "p-2 rounded-full transition-all duration-300 border-2",
                aplusSlide === 0
                  ? "border-brand bg-brand/20 text-brand scale-110"
                  : "border-white/20 text-white/50 hover:border-white/50 hover:text-white",
              )}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="flex gap-3">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => scrollToAplusSlide(index)}
                  className={cn(
                    "w-2.5 sm:w-3 rounded-full transition-all duration-300",
                    aplusSlide === index
                      ? "h-2.5 sm:h-3 bg-brand shadow-[0_0_10px_rgba(0,103,79,0.8)] scale-125"
                      : "h-2.5 sm:h-3 bg-white/20 hover:bg-white/50",
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => scrollToAplusSlide(1)}
              className={cn(
                "p-2 rounded-full transition-all duration-300 border-2",
                aplusSlide === 1
                  ? "border-brand bg-brand/20 text-brand scale-110"
                  : "border-white/20 text-white/50 hover:border-white/50 hover:text-white",
              )}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Static Image Alternative */}
        {/* <div className="max-w-[1400px] mx-auto relative group">
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
      </div> */}
      </div>
    </section>
  );
}
