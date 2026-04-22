import Link from "next/link";
import { BarChart3, Camera, Layout, Megaphone, Search, Settings, Truck, ArrowRight } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  tag: string;
}

const services: Service[] = [
  {
    tag: "Core Service",
    icon: <Settings className="w-6 h-6" />,
    title: "Amazon Account Management",
    description: "End-to-end oversight of your Amazon business focused on performance, compliance, and growth.",
    href: "/services/amazon-account-management",
  },
  {
    tag: "High Value",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Amazon PPC Management",
    description: "Performance-driven advertising optimization to reduce ACOS and scale profitable products.",
    href: "/services/amazon-ppc-management",
  },
  {
    tag: "Conversion",
    icon: <Search className="w-6 h-6" />,
    title: "Listing Optimization",
    description: "Search-optimized and conversion-focused listing restructuring for higher organic rankings.",
    href: "/services/listing-optimization",
  },
  {
    tag: "Creative",
    icon: <Layout className="w-6 h-6" />,
    title: "A+ / EBC Content",
    description: "Visually engaging and conversion-driven A+ content and Brand Storytelling.",
    href: "/services/a-plus-ebc-content",
  },
  {
    tag: "Visuals",
    icon: <Camera className="w-6 h-6" />,
    title: "Product Photography",
    description: "Professional high-quality product imagery designed for marketplace impact.",
    href: "/services/product-photography",
  },
  {
    tag: "Branding",
    icon: <Layout className="w-6 h-6" />,
    title: "Brand Store Design",
    description: "Custom digital storefronts that reflect your brand identity and improve discovery.",
    href: "/services/brand-store-design",
  },
  {
    tag: "Launch",
    icon: <Megaphone className="w-6 h-6" />,
    title: "New Product Launch",
    description: "Strategic market entry plans focused on visibility, ranking velocity, and early sales.",
    href: "/services/new-product-launch",
  },
  {
    tag: "Expansion",
    icon: <Layout className="w-6 h-6" />,
    title: "E-Commerce Store",
    description: "Build and scale independent e-commerce stores to own your customer data and margins.",
    href: "/services/e-commerce-store",
  },
];

function ServiceCard({ icon, title, description, href, tag }: Service) {
  return (
    <div className="group relative p-6 sm:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand/20 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Decorative gradient corner */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors" />
      
      <div className="relative z-10 space-y-6 flex-grow">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-brand/60 bg-brand/5 px-2.5 py-1 rounded-full border border-brand/10">
            {tag}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading tracking-tight leading-tight">{title}</h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="relative z-10 pt-6 mt-6 border-t border-gray-50">
        <Link
          href={href}
          className="inline-flex items-center gap-x-2 text-xs sm:text-sm font-bold text-brand group/link"
        >
          Explore Solution Pillars
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-32 lg:py-40 bg-white overflow-hidden">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-brand h-full"
            style={{ left: `${10 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-6 sm:px-10 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 mb-12 sm:mb-20">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase">
              <span className="w-8 sm:w-12 h-px bg-brand/30" />
              Unified Growth Strategy
            </div>
            <h2 
              className="text-gray-900 font-heading tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
            >
              Our Full-Service <span className="italic">Scaling Ecosystem</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed border-l-2 border-brand/10 pl-6">
              From elite account management to performance-driven PPC and creative optimization, we provide a unified 360° flywheel to scale your Amazon brand.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 sm:mt-20 p-6 sm:p-10 rounded-[2.5rem] bg-[#0a0f1a] text-gray-400 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative border border-white/5 shadow-2xl">
          {/* Intense Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <h4 className="text-lg sm:text-2xl font-bold font-heading mb-2 text-white">Not sure where to start?</h4>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Get a localized competitive gap analysis for your category and identify immediate revenue opportunities.</p>
          </div>
          <Link 
            href="/contact" 
            className="relative z-10 h-11 sm:h-14 px-8 sm:px-10 rounded-full bg-brand hover:bg-brand-hover transition-all duration-300 flex items-center text-xs sm:text-sm font-semibold shadow-2xl shadow-brand/20 active:scale-95 whitespace-nowrap text-white"
          >
            Claim Free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
