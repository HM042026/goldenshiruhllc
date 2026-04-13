import Link from "next/link";

const services = [
  "Amazon Account Management",
];

const companyLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Contact",   href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-32 bg-brand/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/6">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-x-2 text-lg sm:text-xl font-bold text-white">
              <div className="flex items-center -space-x-2">
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand" />
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/70" />
              </div>
              <span className="font-heading">
                Golden<span className="text-brand-light">shiruh</span>llc
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-gray-500">
              Goldenshiruhllc is a full-service Amazon agency helping brands dominate
              the marketplace with proven SEO, PPC, listing optimization, and
              fulfillment strategies.
            </p>
            {/* Social icons */}
            <div className="flex gap-x-3">
              {[
                { label: "in",  name: "LinkedIn" },
                { label: "𝕏",  name: "Twitter" },
                { label: "f",   name: "Facebook" },
              ].map((s) => (
                <Link
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-brand hover:text-brand-light hover:bg-brand/10 transition-all duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-sm text-gray-500 hover:text-brand-light transition-colors flex items-center gap-x-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand/40 group-hover:bg-brand-light transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-brand-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-500">
                <span className="text-white font-medium">Email:</span>{" "}
                <Link href="mailto:support@goldenshiruhllc.com" className="hover:text-brand-light transition-colors">
                  support@goldenshiruhllc.com
                </Link>
              </p>
              <p className="text-sm text-gray-500">
                <span className="text-white font-medium">Phone:</span>{" "}
                <Link href="tel:+12138162229" className="hover:text-brand-light transition-colors">
                  +1 213-816-2229
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Goldenshiruhllc. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link key={item} href="#" className="text-xs text-gray-600 hover:text-brand-light transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
