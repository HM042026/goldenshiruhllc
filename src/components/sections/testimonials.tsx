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
    <div className="group relative flex flex-col rounded-2xl p-px overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-brand/30 hover:via-brand/10 hover:to-transparent transition-all duration-500">
      <div className="relative flex flex-col flex-1 rounded-[15px] backdrop-blur-md bg-white/5 p-7 transition-all duration-300">
        {/* Stars */}
        <div className="flex gap-x-0.5 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-amber-400"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        <blockquote className="text-sm md:text-base text-gray-300 leading-relaxed flex-1">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author row */}
        <div className="flex items-center gap-x-3 mt-6 pt-6 border-t border-white/8">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg shadow-brand/30">
            {initials}
          </div>
          <div>
            <p className="text-sm font-bold text-white">{name}</p>
            <p className="text-xs text-gray-400">{role}</p>
          </div>
          <span className="ml-auto text-xs font-bold text-brand-light bg-brand/15 border border-brand/25 px-3 py-1 rounded-full whitespace-nowrap">
            {result}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,103,79,0.10),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block backdrop-blur-sm bg-brand/10 border border-brand/25 text-brand-light text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
            Client Success Stories
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Real Results From Real Amazon Sellers
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Don&#39;t take our word for it. Read what our clients say about
            partnering with Goldenshiruhllc to grow their Amazon business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
