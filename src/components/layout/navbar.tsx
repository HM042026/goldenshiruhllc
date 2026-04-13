"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const servicesDropdown = [
  {
    label: "Amazon Account Management",
    href: "/services/amazon-account-management",
    description: "Full-spectrum account scaling — SEO, PPC, FBA & compliance.",
    icon: Settings,
    badge: "Flagship",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },

  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const close = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const Logo = () => (
    <Link href="/" className="flex items-center gap-x-2 group">
      <div className="flex items-center -space-x-2 transition-transform duration-500 group-hover:scale-110">
        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand" />
        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-800" />
      </div>
      <span className="text-lg sm:text-xl font-bold text-gray-900 font-heading">
        Golden<span className="text-brand">shiruh</span>llc
      </span>
    </Link>
  );

  return (
    <>
      {/* ── Sticky Header ── */}
      <header
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-4 inset-x-4 sm:inset-x-6 md:inset-x-8 lg:inset-x-12"
            : "top-0 inset-x-0"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ease-in-out ${
            isScrolled || isMobileMenuOpen
              ? "bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl max-w-[1200px]"
              : "bg-transparent max-w-[1400px]"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 px-5 sm:px-6 lg:px-8 ${
              isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
            }`}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {/* Regular Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-300 relative group"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-brand" : ""}`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-3 w-[340px]">
                    {/* Header */}
                    <div className="px-4 py-3 mb-1 border-b border-gray-50">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        Our Services
                      </p>
                    </div>
                    {/* Service Items */}
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gray-900 text-sm group-hover/item:text-brand transition-colors">
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-black uppercase tracking-widest text-white bg-brand px-2 py-0.5 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight
                          size={14}
                          className="text-gray-300 shrink-0 mt-1 group-hover/item:text-brand group-hover/item:translate-x-1 transition-all"
                        />
                      </Link>
                    ))}
                    {/* Footer CTA */}
                    <div className="mt-2 pt-2 border-t border-gray-50 px-4 pb-2">
                      <Link
                        href="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-brand transition-colors"
                      >
                        View All Solutions
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className={`font-medium text-gray-500 hover:text-brand transition-all duration-500 ${
                  isScrolled ? "text-xs" : "text-sm"
                }`}
              >
                Free Consultation
              </Link>
              <Link href="/contact">
                <Button
                  size="sm"
                  className={`bg-brand hover:bg-brand-hover text-white rounded-full transition-all duration-500 ${
                    isScrolled ? "px-4 h-8 text-xs" : "px-6"
                  }`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 transition-colors text-gray-800"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-7 pt-24 sm:pt-28 pb-8 overflow-y-auto">
          {/* Nav Links */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen((v) => !v)}
                className={`flex items-center justify-between w-full text-4xl sm:text-5xl font-heading font-bold text-gray-900 hover:text-brand transition-all duration-500 py-3 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "0ms" : "0ms" }}
              >
                Services
                <ChevronDown
                  className={`w-8 h-8 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-brand" : "text-gray-300"}`}
                />
              </button>
              {/* Mobile submenu */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isMobileServicesOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pt-2 pb-4 space-y-3 border-l-2 border-brand/20 ml-2">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={close}
                      className="flex items-center gap-3 group/msub"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover/msub:bg-brand group-hover/msub:text-white transition-all">
                        <item.icon size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-base text-gray-800 group-hover/msub:text-brand transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-400 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={close}
                    className="flex items-center gap-1 text-sm font-bold text-brand/60 hover:text-brand transition-colors mt-2"
                  >
                    All Solutions <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular nav links */}
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className={`text-4xl sm:text-5xl font-heading font-bold text-gray-900 hover:text-brand transition-all duration-500 py-2 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${(i + 1) * 70}ms`
                    : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA Buttons */}
          <div
            className={`flex flex-col gap-3 pt-8 border-t border-gray-100 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "350ms" : "0ms" }}
          >
            <Link
              href="/services/amazon-account-management"
              onClick={close}
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full rounded-full h-12 sm:h-13 text-sm sm:text-base border-gray-200 hover:bg-gray-50"
              >
                Free Consultation
              </Button>
            </Link>
            <Link href="/contact" className="w-full" onClick={close}>
              <Button className="w-full bg-brand text-white rounded-full h-12 sm:h-13 text-sm sm:text-base hover:bg-brand-hover">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
