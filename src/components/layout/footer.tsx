"use client";
import Link from "next/link";
import { Mail, Phone, ArrowRight, ShieldCheck, Globe } from "lucide-react";

const services = [
  { label: "Account Management", href: "/services/amazon-account-management" },
  { label: "PPC Management", href: "/services/amazon-ppc-management" },
  { label: "Listing Optimization", href: "/services/listing-optimization" },
  { label: "A+ / EBC Content", href: "/services/a-plus-ebc-content" },
  { label: "Product Photography", href: "/services/product-photography" },
  { label: "Brand Store Design", href: "/services/brand-store-design" },
  { label: "New Product Launch", href: "/services/new-product-launch" },
  { label: "E-Commerce Store", href: "/services/e-commerce-store" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0f1a] pt-12 pb-8 overflow-hidden text-gray-400">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent opacity-50" />
      
      {/* Background Glows (Intense) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-64 bg-brand/20 blur-[130px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-6 sm:px-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* ── Brand Section ── */}
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="flex items-center gap-x-2 group">
                <div className="flex items-center -space-x-2 transition-transform duration-500 group-hover:scale-110">
                  <span className="w-5 h-5 rounded-full bg-brand" />
                  <span className="w-5 h-5 rounded-full bg-white/20" />
                </div>
                <span className="text-2xl font-bold text-white font-heading tracking-tight">
                  Golden<span className="text-brand">shiruh</span>llc
                </span>
              </Link>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
                Architecting Amazon dominance through data-driven strategy and
                elite marketplace operations. We turn listings into
                market-leading brands.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  Amazon Verified
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  <Globe className="w-3.5 h-3.5 text-brand" />
                  Global Ops
                </div>
              </div>
            </div>

            {/* ── Services Grid ── */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-white font-bold font-heading text-sm uppercase tracking-[0.2em]">
                  Our Solutions
                </h4>
                <ul className="space-y-4">
                  {services.slice(0, 4).map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-500 hover:text-brand transition-all flex items-center gap-x-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-white font-bold font-heading text-sm uppercase tracking-[0.2em] opacity-0 sm:opacity-100">
                  _
                </h4>
                <ul className="space-y-4">
                  {services.slice(4).map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-500 hover:text-brand transition-all flex items-center gap-x-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Company & Contact ── */}
            <div className="lg:col-span-3 space-y-10">
              <div className="space-y-6">
                <h4 className="text-white font-bold font-heading text-sm uppercase tracking-[0.2em]">
                  Company
                </h4>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-brand transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                <Link
                  href="mailto:support@goldenshiruhllc.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-white transition-colors">
                    support@goldenshiruhllc.com
                  </span>
                </Link>
                <Link
                  href="tel:+12138162229"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-white transition-colors">
                    +1 213-816-2229
                  </span>
                </Link>
              </div>
            </div>
          </div>

        {/* ── Footer Bottom ── */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Goldenshiruhllc. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            Developed By
            <Link
              href="https://bshsolutionss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-[#1A14A5] text-white border border-[#1A14A5] transition-all duration-300"
            >
              BSH SOLUTIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
