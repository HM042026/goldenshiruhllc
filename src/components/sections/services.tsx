import Link from "next/link";
import { BarChart3, Layout, Megaphone, Search, Settings, Truck } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  tag: string;
}

const services: Service[] = [
  {
    tag: "Launch & Strategy",
    icon: <Layout className="w-6 h-6" />,
    title: "Marketplace Onboarding",
    description: "Full account setup, competitive gap analysis, and global marketplace strategy. We architect your initial footprint for long-term category dominance.",
    href: "/services",
  },
  {
    tag: "Growth Optimization",
    icon: <Search className="w-6 h-6" />,
    title: "Algorithm-First SEO",
    description: "Proprietary keyword indexing and A+ Content optimization. We ensure your listings are ranking where the high-intent shoppers are actually searching.",
    href: "/services",
  },
  {
    tag: "Performance Marketing",
    icon: <Megaphone className="w-6 h-6" />,
    title: "High-ROAS PPC Management",
    description: "Sophisticated Amazon Advertising management. We lower ACoS and drive aggressive revenue growth through data-backed bidding and placement strategy.",
    href: "/services",
  },
  {
    tag: "Operational Health",
    icon: <Settings className="w-6 h-6" />,
    title: "Full Account Management",
    description: "Daily FBA logistics, inventory forecasting, case management, and 100% TOS compliance monitoring to protect your brand's integrity.",
    href: "/services",
  },
];

function ServiceCard({ icon, title, description, href, tag }: Service) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand/20 transition-all duration-500 overflow-hidden">
      {/* Decorative gradient corner */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand/60 bg-brand/5 px-2.5 py-1 rounded-full border border-brand/10">
            {tag}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 font-heading">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-x-2 text-sm font-bold text-brand group/link"
        >
          Explore Solution Pillars
          <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-x-2 text-brand text-[10px] font-bold tracking-widest uppercase">
              <span className="w-6 h-px bg-brand" />
              Unified Growth Strategy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 font-heading leading-tight">
              One Comprehensive Solution: <span className="text-brand">Amazon Account Management</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed">
            Stop managing disjointed freelancers. We execute a 360° operational flywheel that scales your revenue while protecting your account health.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 p-8 rounded-3xl bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="text-xl font-bold font-heading">Not sure where to start?</h4>
            <p className="text-white/60 text-sm">Get a localized competitive gap analysis for your category.</p>
          </div>
          <Link 
            href="#contact" 
            className="relative z-10 h-12 px-8 rounded-full bg-brand hover:bg-brand-hover transition-colors flex items-center text-sm font-bold shadow-lg shadow-brand/20"
          >
            Claim Free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
