interface Testimonial {
  quote: string;
  name: string;
  role: string;
  result: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Within 60 days our Sponsored Products ACoS dropped from 48% to 18% and monthly revenue doubled. Their PPC team genuinely understands the Amazon algorithm at a deep level.",
    name: "Daniel R.",
    role: "Home & Kitchen Brand Owner",
    result: "2× Revenue in 60 Days",
    initials: "DR",
  },
  {
    quote:
      "Our brand store redesign drove a 40% increase in storefront visits and a noticeable lift in brand followers and repeat purchases. The design quality matched Fortune 500 brands.",
    name: "Sarah K.",
    role: "Beauty & Personal Care Seller",
    result: "+40% Storefront Traffic",
    initials: "SK",
  },
  {
    quote:
      "We had suppressed listings and policy violations. Goldenshiruhllc cleaned everything up in two weeks and got us to page 1 for our main keywords within 45 days. Incredible.",
    name: "Ahmed M.",
    role: "Electronics & Accessories Seller",
    result: "Page 1 in 45 Days",
    initials: "AM",
  },
  {
    quote:
      "They handled our entire FBA setup from scratch — ASIN creation to shipment planning. Flawless execution. I now spend zero time on operations and focus on product development.",
    name: "Jessica L.",
    role: "Sports & Outdoors Brand",
    result: "100% Hands-Free Ops",
    initials: "JL",
  },
];

function TestimonialCard({ quote, name, role, result, initials }: Testimonial) {
  return (
    <div className="group relative flex flex-col rounded-[2.5rem] p-px overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:via-brand/20 hover:shadow-2xl transition-all duration-700">
      <div className="relative flex flex-col flex-1 rounded-[2.4rem] backdrop-blur-3xl bg-gray-900/50 p-8 sm:p-10 transition-all duration-500">
        {/* Stars */}
        <div className="flex gap-x-1 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-brand shadow-brand/20"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        <blockquote 
          className="text-white leading-[1.4] flex-1 font-medium italic"
          style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)" }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author row */}
        <div className="flex items-center gap-x-4 mt-10 pt-8 border-t border-white/5">
          <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-light text-base font-black flex-shrink-0 shadow-inner group-hover:bg-brand group-hover:text-white transition-all duration-500">
            {initials}
          </div>
          <div className="flex-grow">
            <p className="text-sm sm:text-base font-bold text-white tracking-tight">{name}</p>
            <p className="text-[10px] sm:text-xs text-white/30 font-medium uppercase tracking-widest">{role}</p>
          </div>
          <span className="hidden sm:block text-[9px] font-bold text-brand-light bg-brand/10 border border-brand/20 px-3 py-1 rounded-full uppercase tracking-widest">
            {result}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-[#0a0f1a] overflow-hidden">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white w-full"
            style={{ top: `${10 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white h-full"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,103,79,0.35),transparent)] opacity-70" />

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-6 sm:px-10 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-6">
          <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto">
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
            Client Success Stories
            <span className="w-8 sm:w-12 h-px bg-brand/30" />
          </div>
          <h2 
            className="text-white font-heading tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: 600 }}
          >
            Real Results From <span className="italic text-brand">Real Sellers</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Read what our clients say about partnering with Goldenshiruhllc to scale their Amazon presence to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
